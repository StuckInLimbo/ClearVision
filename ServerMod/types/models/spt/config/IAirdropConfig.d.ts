import { MinMax } from "@spt/models/common/MinMax";
<<<<<<< HEAD
import { AirdropTypeEnum, SptAirdropTypeEnum } from "@spt/models/enums/AirdropType";
import { IBaseConfig } from "@spt/models/spt/config/IBaseConfig";
export interface IAirdropConfig extends IBaseConfig {
    kind: "spt-airdrop";
    airdropTypeWeightings: Record<SptAirdropTypeEnum, number>;
=======
import { AirdropTypeEnum } from "@spt/models/enums/AirdropType";
import { IBaseConfig } from "@spt/models/spt/config/IBaseConfig";
export interface IAirdropConfig extends IBaseConfig {
    kind: "spt-airdrop";
    airdropChancePercent: AirdropChancePercent;
    airdropTypeWeightings: Record<AirdropTypeEnum, number>;
    /** Lowest point plane will fly at */
    planeMinFlyHeight: number;
    /** Highest point plane will fly at */
    planeMaxFlyHeight: number;
    /** Loudness of plane engine */
    planeVolume: number;
    /** Speed plane flies overhead */
    planeSpeed: number;
    /** Speed loot crate falls after being dropped */
    crateFallSpeed: number;
    /** Container tpls to use when spawning crate - affects container size, keyed by drop type e.g. mixed/weaponArmor/foodMedical/barter */
    containerIds: Record<string, string>;
    /** Earliest time aircraft will spawn in raid */
    airdropMinStartTimeSeconds: number;
    /** Latest time aircraft will spawn in raid */
    airdropMaxStartTimeSeconds: number;
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    /** What rewards will the loot crate contain, keyed by drop type e.g. mixed/weaponArmor/foodMedical/barter */
    loot: Record<string, IAirdropLoot>;
    customAirdropMapping: Record<string, SptAirdropTypeEnum>;
}
/** Chance map will have an airdrop occur out of 100 - locations not included count as 0% */
export interface IAirdropChancePercent {
    bigmap: number;
    woods: number;
    lighthouse: number;
    shoreline: number;
    interchange: number;
    reserve: number;
    tarkovStreets: number;
    sandbox: number;
}
/** Loot inside crate */
export interface IAirdropLoot {
    icon: AirdropTypeEnum;
    /** Min/max of weapons inside crate */
    weaponPresetCount?: MinMax;
    /** Min/max of armors (head/chest/rig) inside crate */
    armorPresetCount?: MinMax;
    /** Min/max of items inside crate */
    itemCount: MinMax;
    /** Min/max of sealed weapon boxes inside crate */
    weaponCrateCount: MinMax;
    /** Items to never allow - tpls */
    itemBlacklist: string[];
    /** Item type (parentId) to allow inside crate */
    itemTypeWhitelist: string[];
    /** Item type/ item tpls to limit count of inside crate - key: item base type: value: max count */
    itemLimits: Record<string, number>;
    /** Items to limit stack size of key: item tpl value: min/max stack size */
    itemStackLimits: Record<string, MinMax>;
    /** Armor levels to allow inside crate e.g. [4,5,6] */
    armorLevelWhitelist?: number[];
    /** Should boss items be added to airdrop crate */
    allowBossItems: boolean;
    useForcedLoot?: boolean;
    forcedLoot?: Record<string, MinMax>;
}
