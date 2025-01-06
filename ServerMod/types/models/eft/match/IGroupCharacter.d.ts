<<<<<<< HEAD
import { IItem } from "@spt/models/eft/common/tables/IItem";
=======
import { Item } from "@spt/models/eft/common/tables/IItem";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
import { MemberCategory } from "@spt/models/enums/MemberCategory";
export interface IGroupCharacter {
    _id: string;
    aid: number;
    Info: {
        Nickname: string;
        Side: string;
        Level: number;
        MemberCategory: MemberCategory;
        GameVersion?: string;
        SavageLockTime?: number;
        SavageNickname?: string;
        hasCoopExtension?: boolean;
    };
    PlayerVisualRepresentation?: {
        Info: {
            Side: string;
            Level: number;
            Nickname: string;
            MemberCategory: MemberCategory;
            GameVersion: string;
        };
        Customization: {
            Head: string;
            Body: string;
            Feet: string;
            Hands: string;
        };
        Equipment: {
            Id: string;
<<<<<<< HEAD
            Items: IItem[];
=======
            Items: Item[];
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
        };
    };
    isLeader: boolean;
    isReady?: boolean;
    region?: string;
    lookingGroup?: boolean;
}
