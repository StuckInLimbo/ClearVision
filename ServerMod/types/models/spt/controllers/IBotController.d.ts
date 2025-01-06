import { IGenerateBotsRequestData } from "@spt/models/eft/bot/IGenerateBotsRequestData";
import { IBotBase } from "@spt/models/eft/common/tables/IBotBase";
import { IBotCore } from "@spt/models/eft/common/tables/IBotCore";
<<<<<<< HEAD
import { IDifficultyCategories } from "@spt/models/eft/common/tables/IBotType";
=======
import { Difficulty } from "@spt/models/eft/common/tables/IBotType";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
export interface IBotController {
    getBotLimit(type: string): number;
    getBotDifficulty(type: string, difficulty: string): IBotCore | IDifficultyCategories;
    isBotPmc(botRole: string): boolean;
    isBotBoss(botRole: string): boolean;
    isBotFollower(botRole: string): boolean;
    generate(info: IGenerateBotsRequestData, playerScav: boolean): IBotBase[];
    getBotCap(): number;
}
