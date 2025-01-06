<<<<<<< HEAD
import { IInventory as PmcInventory } from "@spt/models/eft/common/tables/IBotBase";
import { IChances, IMods } from "@spt/models/eft/common/tables/IBotType";
import { EquipmentFilters, IRandomisationDetails } from "@spt/models/spt/config/IBotConfig";
import { IBotData } from "./IGenerateWeaponRequest";
=======
import { Inventory as PmcInventory } from "@spt/models/eft/common/tables/IBotBase";
import { Chances, Mods } from "@spt/models/eft/common/tables/IBotType";
import { EquipmentFilters, RandomisationDetails } from "@spt/models/spt/config/IBotConfig";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
export interface IGenerateEquipmentProperties {
    /** Root Slot being generated */
    rootEquipmentSlot: string;
    /** Equipment pool for root slot being generated */
    rootEquipmentPool: Record<string, number>;
<<<<<<< HEAD
    modPool: IMods;
    /** Dictionary of mod items and their chance to spawn for this bot type */
    spawnChances: IChances;
    /** Bot-specific properties */
    botData: IBotData;
    inventory: PmcInventory;
    botEquipmentConfig: EquipmentFilters;
    /** Settings from bot.json to adjust how item is generated */
    randomisationDetails: IRandomisationDetails;
    /** OPTIONAL - Do not generate mods for tpls in this array */
    generateModsBlacklist?: string[];
    generatingPlayerLevel: number;
=======
    modPool: Mods;
    /** Dictionary of mod items and their chance to spawn for this bot type */
    spawnChances: Chances;
    /** Role being generated for */
    botRole: string;
    /** Level of bot being generated */
    botLevel: number;
    inventory: PmcInventory;
    botEquipmentConfig: EquipmentFilters;
    /** Settings from bot.json to adjust how item is generated */
    randomisationDetails: RandomisationDetails;
    /** OPTIONAL - Do not generate mods for tpls in this array */
    generateModsBlacklist?: string[];
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
}
