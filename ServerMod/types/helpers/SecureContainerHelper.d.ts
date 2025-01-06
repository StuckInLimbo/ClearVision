import { ItemHelper } from "@spt/helpers/ItemHelper";
<<<<<<< HEAD
import { IItem } from "@spt/models/eft/common/tables/IItem";
export interface IOwnerInventoryItems {
    from: IItem[];
    to: IItem[];
=======
import { Item } from "@spt/models/eft/common/tables/IItem";
export interface OwnerInventoryItems {
    from: Item[];
    to: Item[];
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    sameInventory: boolean;
    isMail: boolean;
}
export declare class SecureContainerHelper {
    protected itemHelper: ItemHelper;
    constructor(itemHelper: ItemHelper);
    /**
     * Get an array of the item IDs (NOT tpls) inside a secure container
     * @param items Inventory items to look for secure container in
     * @returns Array of ids
     */
    getSecureContainerItems(items: IItem[]): string[];
}
