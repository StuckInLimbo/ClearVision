<<<<<<< HEAD
import { IItem } from "@spt/models/eft/common/tables/IItem";
=======
import { Item } from "@spt/models/eft/common/tables/IItem";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
export interface IAddItemDirectRequest {
    /** Item and child mods to add to player inventory */
    itemWithModsToAdd: IItem[];
    foundInRaid: boolean;
    callback: (buyCount: number) => void;
    useSortingTable: boolean;
}
