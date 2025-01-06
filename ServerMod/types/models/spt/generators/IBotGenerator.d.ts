<<<<<<< HEAD
import { IInventory as PmcInventory } from "@spt/models/eft/common/tables/IBotBase";
import { IChances, IGeneration, IInventory } from "@spt/models/eft/common/tables/IBotType";
=======
import { Inventory as PmcInventory } from "@spt/models/eft/common/tables/IBotBase";
import { Chances, Generation, Inventory } from "@spt/models/eft/common/tables/IBotType";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
export interface IBotGenerator {
    generateInventory(templateInventory: IInventory, equipmentChances: IChances, generation: IGeneration, botRole: string, isPmc: boolean): PmcInventory;
}
