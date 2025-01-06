<<<<<<< HEAD
import { IItem } from "@spt/models/eft/common/tables/IItem";
export interface IOwnerInventoryItems {
    /** Inventory items from source */
    from: IItem[];
    /** Inventory items at destination */
    to: IItem[];
=======
import { Item } from "@spt/models/eft/common/tables/IItem";
export interface IOwnerInventoryItems {
    /** Inventory items from source */
    from: Item[];
    /** Inventory items at destination */
    to: Item[];
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    sameInventory: boolean;
    isMail: boolean;
}
