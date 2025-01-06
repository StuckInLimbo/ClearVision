<<<<<<< HEAD
import { IItem, IItemLocation } from "@spt/models/eft/common/tables/IItem";
=======
import { Item, Location } from "@spt/models/eft/common/tables/IItem";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
export interface IAddItemTempObject {
    itemRef: IItem;
    count: number;
    isPreset: boolean;
    location?: IItemLocation;
    containerId?: string;
}
