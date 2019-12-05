import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ChatRoomModel} from '../../shared/model/chat-room.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ChatRoomService} from '../../shared/service/chat-room.service';
import {ToastrService} from 'ngx-toastr';
import {BaseMenuTypes} from '../../shared/base/base-menu';
import {WelcomingAvailableModel} from '../../shared/model/welcoming-available.model';
import {WelcomingModel} from '../../shared/model/welcoming.model';
import {PersonModel} from '../../shared/model/person.model';
import {ContactModel} from '../../shared/model/contact.model';
import {FileModel} from '../../shared/model/file.model';
import {MenuItem} from '../menu-item';
import {UserAnonymousModel} from '../../shared/model/user-anonymous.model';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.sass']
})
export class ChatRoomComponent extends MenuItem implements OnInit {
  /** **/
  formGroup: FormGroup;

  /** Aid Institution model object **/
  chatRoom: ChatRoomModel;

  /**
   * Default class constructor.
   * @param route:
   * @param router:
   * @param service:
   * @param formBuilder:
   * @param toastrService:
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ChatRoomService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {
    super(BaseMenuTypes.CHAT_ROOM);
    this.chatRoom = new ChatRoomModel();
    this.chatRoom.welcomingAvailable = new WelcomingAvailableModel();
    this.chatRoom.userAnonymous = new UserAnonymousModel();
    this.chatRoom.welcomingAvailable.welcoming = new WelcomingModel();
    this.chatRoom.welcomingAvailable.welcoming.person = new PersonModel();
    this.chatRoom.welcomingAvailable.welcoming.person.contact = new ContactModel();
    this.chatRoom.welcomingAvailable.welcoming.person.file = new FileModel();

    if (this.route.snapshot.params.id) {
      this.service.find(this.route.snapshot.params.id).subscribe(data => {
        this.chatRoom = data;
      });
    }

    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      userAnoName: ['', Validators.required],
      password: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.required],
      url: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  /**
   * Persist the model on the request.
   */
  save(): void {
    if (this.formGroup.valid) {
      this.persistModel();
    } else {
      this.checkFormControlError();
    }
  }

  /**
   * Try to persist the model on the db.
   */
  persistModel(): void {
    if (this.chatRoom.id) {
      this.service.update(this.chatRoom).subscribe(() => {
        this.router.navigate(['chats-rooms']).then(() => {
          this.toastrService.success('The Chat Room was updated!', 'Chat Room Updated');
        });
      });
    } else {
      this.service.create(this.chatRoom).subscribe(() => {
        this.router.navigate(['/chats-room']).then(() => {
          this.toastrService.success('A new Chat Room was added!', 'Chat Room Saved');
        });
      });
    }
  }

  /**
   * Check if the forms control has some errors and emit toastr error.
   */
  checkFormControlError(): void {
    const errors: Array<{name: string, error: object}> = new Array<{name: string, error: object}>();

    for (const key in this.formGroup.controls) {
      if (this.formGroup.controls[key].errors !== null && Object.keys(this.formGroup.controls[key].errors).length > 0) {
        errors.push({name: key, error: this.formGroup.controls[key].errors});
      }
    }
    if (errors.length > 0) {
      this.toastrService.error('The field ' + errors[0].name + ' is required.', 'Error On Save', {
        timeOut: 3000
      });
    }
  }
}
