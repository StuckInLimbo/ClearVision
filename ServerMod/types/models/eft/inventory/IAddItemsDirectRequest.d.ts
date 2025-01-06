<<<<<<< HEAD
import { IItem } from "@spt/models/eft/common/tables/IItem";
=======
import { Item } from "@spt/models/eft/common/tables/IItem";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
export interface IAddItemsDirectRequest {
    /** Item and child mods to add to player inventory */
    itemsWithModsToAdd: IItem[][];
    foundInRaid: boolean;
    /** Runs after EACH item with children is added */
    callback?: (buyCount: number) => void;
    /** Should sorting table be used when no space found in stash */
    useSortingTable: boolean;
}
