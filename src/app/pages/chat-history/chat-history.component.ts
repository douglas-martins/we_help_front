import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {BaseMenuTypes} from '../../shared/base/base-menu';
import {ContactModel} from '../../shared/model/contact.model';
import {FileModel} from '../../shared/model/file.model';
import {MenuItem} from '../menu-item';
import {ChatHistoryModel} from '../../shared/model/chat-history.model';
import {ChatHistoryService} from '../../shared/service/chat-history.service';
import {WelcomingModel} from '../../shared/model/welcoming.model';
import {PersonModel} from '../../shared/model/person.model';
import {UserAnonymousModel} from '../../shared/model/user-anonymous.model';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.sass']
})
export class ChatHistoryComponent extends MenuItem implements OnInit {
  /** **/
  formGroup: FormGroup;

  /** Aid Institution model object **/
  chatHistory: ChatHistoryModel;

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
    private service: ChatHistoryService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {
    super(BaseMenuTypes.CHAT_HISTORY);
    this.chatHistory = new ChatHistoryModel();
    this.chatHistory.welcoming = new WelcomingModel();
    this.chatHistory.userAnonymous = new UserAnonymousModel();
    this.chatHistory.welcoming.person = new PersonModel();
    this.chatHistory.welcoming.person.contact = new ContactModel();
    this.chatHistory.welcoming.person.file = new FileModel();

    if (this.route.snapshot.params.id) {
      this.service.find(this.route.snapshot.params.id).subscribe(data => {
        this.chatHistory = data;
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
    if (this.chatHistory.id) {
      this.service.update(this.chatHistory).subscribe(() => {
        this.router.navigate(['chats-history']).then(() => {
          this.toastrService.success('The Chat History was updated!', 'Chat History Updated');
        });
      });
    } else {
      this.service.create(this.chatHistory).subscribe(() => {
        this.router.navigate(['/chats-history']).then(() => {
          this.toastrService.success('A new Chat History was added!', 'Chat History Saved');
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
