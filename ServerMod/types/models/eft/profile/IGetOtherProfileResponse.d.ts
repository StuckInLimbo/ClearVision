<<<<<<< HEAD
import { IOverallCounters, ISkills } from "@spt/models/eft/common/tables/IBotBase";
import { IItem } from "@spt/models/eft/common/tables/IItem";
=======
import { OverallCounters, Skills } from "@spt/models/eft/common/tables/IBotBase";
import { Item } from "@spt/models/eft/common/tables/IItem";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
export interface IGetOtherProfileResponse {
    id: string;
    aid: number;
    info: IOtherProfileInfo;
    customization: IOtherProfileCustomization;
    skills: ISkills;
    equipment: IOtherProfileEquipment;
    achievements: Record<string, number>;
    favoriteItems: IItem[];
    pmcStats: IOtherProfileStats;
    scavStats: IOtherProfileStats;
}
export interface IOtherProfileInfo {
    nickname: string;
    side: string;
    experience: number;
    memberCategory: number;
    bannedState: boolean;
    bannedUntil: number;
    registrationDate: number;
}
export interface IOtherProfileCustomization {
    head: string;
    body: string;
    feet: string;
    hands: string;
}
export interface IOtherProfileEquipment {
    Id: string;
    Items: IItem[];
}
export interface IOtherProfileStats {
    eft: IOtherProfileSubStats;
}
export interface IOtherProfileSubStats {
    totalInGameTime: number;
    overAllCounters: IOverallCounters;
}
