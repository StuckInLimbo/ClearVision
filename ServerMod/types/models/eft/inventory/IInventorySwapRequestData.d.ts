import { OwnerInfo } from "@spt/models/eft/common/request/IBaseInteractionRequestData";
<<<<<<< HEAD
import { IInventoryBaseActionRequestData, ITo } from "@spt/models/eft/inventory/IInventoryBaseActionRequestData";
=======
import { IInventoryBaseActionRequestData, To } from "@spt/models/eft/inventory/IInventoryBaseActionRequestData";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
export interface IInventorySwapRequestData extends IInventoryBaseActionRequestData {
    Action: "Swap";
    item: string;
    to: ITo;
    item2: string;
    to2: ITo;
    fromOwner2: OwnerInfo;
    toOwner2: OwnerInfo;
}
