import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  menuItems: Array<{title: string, icon: string, items: Array<{name: string, description: string, link: string}>}>;
  title: string;

  constructor() {
    this.menuItems = new Array<{title: string, icon: string, items: Array<{name: string, description: string, link: string}>}>(
      this.setFileMenuItem(),
      this.setContactMenuItem(),
      this.setUserAnonymousMenuItem(),
      this.setAidInstitutionMenuItem(),
      this.setPersonMenuItem(),
      this.setWelcomingMenuItem(),
      this.setWelcomingAvailableMenuItem(),
      this.setChatRoomMenuItem(),
      this.setChatHistoryMenuItem(),
      this.setChatHistoryMediaMenuItem()
    );
  }

  ngOnInit(): void {
  }

  /**
   * Set file menu item object.
   */
  private setFileMenuItem(): {title: string, icon: string, items: Array<{name: string, description: string, link: string}>} {
    return {
      title: 'File',
      icon: 'far fa-file',
      items: [
        {
          name: 'Add File',
          description: 'Show form to add a file on the system.',
          link: 'file'
        },
        {
          name: 'List Files',
          description: 'Show list of files on the system.',
          link: 'files'
        }
      ]
    };
  }

   /**
    * Set contact menu item object.
    */
  private setContactMenuItem(): {title: string, icon: string, items: Array<{name: string, description: string, link: string}>} {
    return {
      title: 'Contact',
      icon: 'far fa-address-book',
      items: [
        {
          name: 'Add Contact',
          description: 'Show form to add a contact on the system.',
          link: 'contact'
        },
        {
          name: 'List Contacts',
          description: 'Show list of contacts on the system.',
          link: 'contacts'
        }
      ]
    };
  }

  /**
   * Set user anonymous menu item object.
   */
  private setUserAnonymousMenuItem(): {title: string, icon: string, items: Array<{name: string, description: string, link: string}>} {
    return       {
      title: 'User Anonymous',
      icon: 'far fa-user',
      items: [
        {
          name: 'Add User Anonymous',
          description: 'Show form to add a user anonymous on the system.',
          link: 'user-anonymous'
        },
        {
          name: 'List Users Anonymous',
          description: 'Show list of users anonymous on the system.',
          link: 'users-anonymous'
        }
      ]
    };
  }

  /**
   * Set aid institution menu item object.
   */
  private setAidInstitutionMenuItem(): {title: string, icon: string, items: Array<{name: string, description: string, link: string}>} {
    return {
      title: 'Aid Institution',
      icon: 'fas fa-star-of-life',
      items: [
        {
          name: 'Add Aid Institutions',
          description: 'Show form to add a aid institution on the system.',
          link: 'aid-institution'
        },
        {
          name: 'List Aid Institutions',
          description: 'Show list of aid institutions on the system.',
          link: 'aid-institutions'
        }
      ]
    };
  }

  /**
   * Set person menu item object.
   */
  private setPersonMenuItem(): {title: string, icon: string, items: Array<{name: string, description: string, link: string}>} {
    return {
      title: 'Person',
      icon: 'fas fa-users',
      items: [
        {
          name: 'Add Person',
          description: 'Show form to add a person on the system.',
          link: 'person'
        },
        {
          name: 'List Persons',
          description: 'Show list of persons on the system.',
          link: 'persons'
        }
      ]
    };
  }

  /**
   * Set welcoming menu item object.
   */
  private setWelcomingMenuItem(): {title: string, icon: string, items: Array<{name: string, description: string, link: string}>} {
    return {
      title: 'Welcoming',
      icon: 'fas fa-hands-helping',
      items: [
        {
          name: 'Add Welcoming',
          description: 'Show form to add a welcoming on the system.',
          link: 'welcoming'
        },
        {
          name: 'List Welcoming',
          description: 'Show list of welcomings on the system.',
          link: 'welcomings'
        }
      ]
    };
  }

  /**
   * Set welcoming available menu item object.
   */
  private setWelcomingAvailableMenuItem(): {title: string, icon: string, items: Array<{name: string, description: string, link: string}>} {
    return {
      title: 'Welcoming Available',
      icon: 'fas fa-globe-americas',
      items: [
        {
          name: 'Add Welcoming Available',
          description: 'Show form to add a welcoming available on the system.',
          link: 'welcoming-available'
        },
        {
          name: 'List Welcoming',
          description: 'Show list of welcomings availables on the system.',
          link: 'welcomings-availables'
        }
      ]
    };
  }

  /**
   * Set chat room menu item object.
   */
  private setChatRoomMenuItem(): {title: string, icon: string, items: Array<{name: string, description: string, link: string}>} {
    return {
      title: 'Chat Room',
      icon: 'fas fa-comments',
      items: [
        {
          name: 'Add Chat Room',
          description: 'Show form to add a chat room on the system.',
          link: 'chat-room'
        },
        {
          name: 'List Chat Rooms',
          description: 'Show list of chat rooms on the system.',
          link: 'chat-rooms'
        }
      ]
    };
  }

  /**
   * Set chat history menu item object.
   */
  private setChatHistoryMenuItem(): {title: string, icon: string, items: Array<{name: string, description: string, link: string}>} {
    return {
      title: 'Chat History',
      icon: 'fas fa-history',
      items: [
        {
          name: 'Add Chat History',
          description: 'Show form to add a chat history on the system.',
          link: 'chat-history'
        },
        {
          name: 'List Chat Histories',
          description: 'Show list of chat histories on the system.',
          link: 'chat-histories'
        }
      ]
    };
  }

  /**
   * Set chat history media menu item object.
   */
  private setChatHistoryMediaMenuItem(): {title: string, icon: string, items: Array<{name: string, description: string, link: string}>} {
    return {
      title: 'Chat History Media',
      icon: 'fas fa-file-image',
      items: [
        {
          name: 'Add Chat History Media',
          description: 'Show form to add a chat history media on the system.',
          link: 'chat-history-media'
        },
        {
          name: 'List Chat Histories Medias',
          description: 'Show list of chat histories medias on the system.',
          link: 'chat-histories-medias'
        }
      ]
    };
  }
}
