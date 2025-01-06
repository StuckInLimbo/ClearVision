import { IBaseInteractionRequestData } from "@spt/models/eft/common/request/IBaseInteractionRequestData";
<<<<<<< HEAD
import { IItemLocation } from "@spt/models/eft/common/tables/IItem";
=======
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
export interface IInventoryBaseActionRequestData extends IBaseInteractionRequestData {
}
export interface ITo {
    id: string;
    container: string;
    location?: IItemLocation | number;
    isSearched?: boolean;
}
export interface IContainer {
    id: string;
    container: string;
    location?: ILocation | number;
}
export interface ILocation {
    x: number;
    y: number;
    r: string;
    rotation?: string;
    isSearched: boolean;
}
