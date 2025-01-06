<<<<<<< HEAD
import { ISkills } from "@spt/models/eft/common/tables/IBotBase";
=======
import { Skills } from "@spt/models/eft/common/tables/IBotBase";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
export interface IPlayerIncrementSkillLevelRequestData {
    _id: string;
    experience: number;
    quests: any[];
    ragFairOffers: any[];
    builds: any[];
    items: Items;
    production: Production;
    skills: ISkills;
    traderRelations: TraderRelations;
}
export interface Items {
    new: any[];
    change: any[];
    del: any[];
}
export type Production = {};
export type TraderRelations = {};
