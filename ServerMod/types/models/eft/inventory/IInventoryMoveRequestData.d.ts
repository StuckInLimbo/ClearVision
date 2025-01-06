<<<<<<< HEAD
import { IInventoryBaseActionRequestData, ITo } from "@spt/models/eft/inventory/IInventoryBaseActionRequestData";
=======
import { IInventoryBaseActionRequestData, To } from "@spt/models/eft/inventory/IInventoryBaseActionRequestData";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
export interface IInventoryMoveRequestData extends IInventoryBaseActionRequestData {
    Action: "Move";
    item: string;
    to: ITo;
}
