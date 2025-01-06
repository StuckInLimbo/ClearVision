<<<<<<< HEAD
import { IItem } from "@spt/models/eft/common/tables/IItem";
=======
import { Item } from "@spt/models/eft/common/tables/IItem";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
export interface IPresetBuildActionRequestData {
    Action: string;
    Id: string;
    /** name of preset given by player */
    Name: string;
    Root: string;
    Items: IItem[];
}
