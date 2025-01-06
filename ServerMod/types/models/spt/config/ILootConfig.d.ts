<<<<<<< HEAD
import { ISpawnpoint } from "@spt/models/eft/common/ILooseLoot";
=======
import { Spawnpoint } from "@spt/models/eft/common/ILooseLoot";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
import { IBaseConfig } from "@spt/models/spt/config/IBaseConfig";
export interface ILootConfig extends IBaseConfig {
    kind: "spt-loot";
    /** Spawn positions to add into a map, key=mapid */
    looseLoot: Record<string, ISpawnpoint[]>;
    /** Loose loot probability adjustments to apply on game start */
    looseLootSpawnPointAdjustments: Record<string, Record<string, number>>;
}
