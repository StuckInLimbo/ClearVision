<<<<<<< HEAD
import { IExit, ILocationBase } from "@spt/models/eft/common/ILocationBase";
import { IGroupPostion, ILooseLoot } from "@spt/models/eft/common/ILooseLoot";
import { Ixyz } from "@spt/models/eft/common/Ixyz";
import { IItem } from "@spt/models/eft/common/tables/IItem";
=======
import { Exit, ILocationBase } from "@spt/models/eft/common/ILocationBase";
import { ILooseLoot } from "@spt/models/eft/common/ILooseLoot";
import { Ixyz } from "@spt/models/eft/common/Ixyz";
import { Item } from "@spt/models/eft/common/tables/IItem";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
export interface ILocation {
    /** Map meta-data */
    base: ILocationBase;
    /** Loose loot postions and item weights */
    looseLoot: ILooseLoot;
    /** Static loot item weights */
    staticLoot: Record<string, IStaticLootDetails>;
    /** Static container postions and item weights */
    staticContainers: IStaticContainerDetails;
    staticAmmo: Record<string, IStaticAmmoDetails[]>;
    /** All possible static containers on map + their assign groupings */
    statics: IStaticContainer;
    /** All possible map extracts */
<<<<<<< HEAD
    allExtracts: IExit[];
=======
    allExtracts: Exit[];
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
}
export interface IStaticContainer {
    containersGroups: Record<string, IContainerMinMax>;
    containers: Record<string, IContainerData>;
}
export interface IContainerMinMax {
    minContainers: number;
    maxContainers: number;
    current?: number;
    chosenCount?: number;
}
export interface IContainerData {
    groupId: string;
}
export interface IStaticLootDetails {
    itemcountDistribution: ItemCountDistribution[];
    itemDistribution: ItemDistribution[];
}
export interface ItemCountDistribution {
    count: number;
    relativeProbability: number;
}
export interface ItemDistribution {
    tpl: string;
    relativeProbability: number;
}
export interface IStaticPropsBase {
    Id: string;
    IsContainer: boolean;
    useGravity: boolean;
    randomRotation: boolean;
    Position: Ixyz;
    Rotation: Ixyz;
    IsGroupPosition: boolean;
    IsAlwaysSpawn: boolean;
<<<<<<< HEAD
    GroupPositions: IGroupPostion[];
    Root: string;
    Items: IItem[];
}
export interface IStaticWeaponProps extends IStaticPropsBase {
    Items: IItem[];
=======
    GroupPositions: any[];
    Root: string;
    Items: any[];
}
export interface IStaticWeaponProps extends IStaticPropsBase {
    Items: Item[];
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
}
export interface IStaticContainerDetails {
    staticWeapons: IStaticWeaponProps[];
    staticContainers: IStaticContainerData[];
    staticForced: IStaticForcedProps[];
}
export interface IStaticContainerData {
    probability: number;
    template: IStaticContainerProps;
}
export interface IStaticAmmoDetails {
    tpl: string;
    relativeProbability: number;
}
export interface IStaticForcedProps {
    containerId: string;
    itemTpl: string;
}
export interface IStaticContainerProps extends IStaticPropsBase {
<<<<<<< HEAD
    Items: IStaticItem[];
}
export interface IStaticItem {
=======
    Items: StaticItem[];
}
export interface StaticItem {
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    _id: string;
    _tpl: string;
}
