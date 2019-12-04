/**
 * Base class to hold menu reference across the application (static).
 */
export class BaseMenu {
  static MENU_ITEMS: Array<{title: string, description: string, icon: string,
    items: Array<{name: string, description: string, link: string}>}>;
}

/**
 * Enum for getting the base menu items easily.
 */
export enum BaseMenuTypes {
  FILE,
  USER_ANONYMOUS,
  AID_INSTITUTION,
  PERSON,
  WELCOMING,
  WELCOMING_AVAILABLE,
  CHAT_ROOM,
  CHAT_HISTORY,
  CHAT_HISTORY_MEDIA,
  CONTACT
}
