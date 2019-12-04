import {BaseMenu, BaseMenuTypes} from '../shared/base/base-menu';

/**
 * Abstract class for menu items.
 */
export abstract class MenuItem {

  /** Reference for the menu item for this component **/
  protected menuItem: {title: string, description: string, icon: string, items: Array<{name: string, description: string, link: string}>};

  /**
   * Class default constructor.
   * @param menuItemType:
   */
  constructor(
    protected menuItemType: BaseMenuTypes
  ) {
    this.menuItem = BaseMenu.MENU_ITEMS[menuItemType];
  }

  /**
   * Persist the model on the request.
   */
  abstract save(): void;
}

