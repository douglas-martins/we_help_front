import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {BaseMenuTypes} from '../../shared/base/base-menu';
import {WelcomingModel} from '../../shared/model/welcoming.model';
import {PersonModel} from '../../shared/model/person.model';
import {ContactModel} from '../../shared/model/contact.model';
import {FileModel} from '../../shared/model/file.model';
import {MenuItem} from '../menu-item';
import {ChatHistoryMediaModel} from '../../shared/model/chat-history-media.model';
import {ChatHistoryMediaService} from '../../shared/service/chat-history-media.service';
import {ChatHistoryModel} from '../../shared/model/chat-history.model';
import {UserAnonymousModel} from '../../shared/model/user-anonymous.model';

@Component({
  selector: 'app-chat-history-media',
  templateUrl: './chat-history-media.component.html',
  styleUrls: ['./chat-history-media.component.sass']
})
export class ChatHistoryMediaComponent extends MenuItem implements OnInit {
  /** **/
  formGroup: FormGroup;

  /** Aid Institution model object **/
  chatHistoryMedia: ChatHistoryMediaModel;

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
    private service: ChatHistoryMediaService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {
    super(BaseMenuTypes.CHAT_HISTORY_MEDIA);
    this.chatHistoryMedia = new ChatHistoryMediaModel();
    this.chatHistoryMedia.file = new FileModel();
    this.chatHistoryMedia.chatHistory = new ChatHistoryModel();
    this.chatHistoryMedia.chatHistory.welcoming = new WelcomingModel();
    this.chatHistoryMedia.chatHistory.welcoming.person = new PersonModel();
    this.chatHistoryMedia.chatHistory.welcoming.person.contact = new ContactModel();
    this.chatHistoryMedia.chatHistory.welcoming.person.file = new FileModel();
    this.chatHistoryMedia.chatHistory.userAnonymous = new UserAnonymousModel();


    if (this.route.snapshot.params.id) {
      this.service.find(this.route.snapshot.params.id).subscribe(data => {
        this.chatHistoryMedia = data;
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
    if (this.chatHistoryMedia.id) {
      this.service.update(this.chatHistoryMedia).subscribe(() => {
        this.router.navigate(['chats-history-medias']).then(() => {
          this.toastrService.success('The Chat History Media was updated!', 'Chat History media Updated');
        });
      });
    } else {
      this.service.create(this.chatHistoryMedia).subscribe(() => {
        this.router.navigate(['/chats-history-media']).then(() => {
          this.toastrService.success('A new Chat History Media was added!', 'Chat History Media Saved');
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
