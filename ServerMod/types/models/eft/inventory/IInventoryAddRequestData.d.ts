<<<<<<< HEAD
import { IContainer, IInventoryBaseActionRequestData } from "@spt/models/eft/inventory/IInventoryBaseActionRequestData";
=======
import { Container, IInventoryBaseActionRequestData } from "@spt/models/eft/inventory/IInventoryBaseActionRequestData";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
export interface IInventoryAddRequestData extends IInventoryBaseActionRequestData {
    Action: "Add";
    item: string;
    container: IContainer;
}
