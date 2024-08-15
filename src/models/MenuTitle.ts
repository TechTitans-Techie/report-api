import { MenuTitle } from '../interfaces/MenuTitle';
class MenuTitleModel {
    private data: Record<string, any>;
    private template: string;
    constructor(menuTitle: MenuTitle) {
        this.data = menuTitle.data || {};
        this.template = menuTitle.template || '';
    }
    validate(): boolean {
    // Add validation logic here
    return true;
    }
    getDisplay(): string {
        let title = "&nbsp;";
        try {
        // Implement template parsing logic here
        title = this.template;
        } catch (e) {
        // handle errors
        }
        return title;
    }
}
export default MenuTitleModel;