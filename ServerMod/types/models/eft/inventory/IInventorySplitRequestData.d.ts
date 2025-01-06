<<<<<<< HEAD
import { IContainer, IInventoryBaseActionRequestData } from "@spt/models/eft/inventory/IInventoryBaseActionRequestData";
=======
import { Container, IInventoryBaseActionRequestData } from "@spt/models/eft/inventory/IInventoryBaseActionRequestData";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
export interface IInventorySplitRequestData extends IInventoryBaseActionRequestData {
    Action: "Split";
    /** Id of item to split */
    splitItem: string;
    /** Id of new item stack */
    newItem: string;
    /** Destination new item will be placed in */
    container: IContainer;
    count: number;
}
