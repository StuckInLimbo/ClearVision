import { IPmcData } from "@spt/models/eft/common/IPmcData";
<<<<<<< HEAD
import { IItem } from "@spt/models/eft/common/tables/IItem";
=======
import { Item } from "@spt/models/eft/common/tables/IItem";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
import { EquipmentBuildType } from "@spt/models/enums/EquipmentBuildType";
import { MemberCategory } from "@spt/models/enums/MemberCategory";
import { MessageType } from "@spt/models/enums/MessageType";
import { IProfileChangeEvent } from "@spt/models/spt/dialog/ISendMessageDetails";
export interface ISptProfile {
    info: Info;
<<<<<<< HEAD
    characters: ICharacters;
    /** Clothing purchases */
    suits: string[];
    userbuilds: IUserBuilds;
    dialogues: Record<string, IDialogue>;
    spt: ISpt;
    vitality: IVitality;
    inraid: IInraid;
    insurance: IInsurance[];
    /** Assort purchases made by player since last trader refresh */
    traderPurchases?: Record<string, Record<string, ITraderPurchaseData>>;
    /** Achievements earned by player */
    achievements: Record<string, number>;
    /** List of friend profile IDs */
    friends: string[];
}
export declare class ITraderPurchaseData {
=======
    characters: Characters;
    /** Clothing purchases */
    suits: string[];
    userbuilds: IUserBuilds;
    dialogues: Record<string, Dialogue>;
    spt: Spt;
    vitality: Vitality;
    inraid: Inraid;
    insurance: Insurance[];
    /** Assort purchases made by player since last trader refresh */
    traderPurchases?: Record<string, Record<string, TraderPurchaseData>>;
    /** Achievements earned by player */
    achievements: Record<string, number>;
}
export declare class TraderPurchaseData {
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    count: number;
    purchaseTimestamp: number;
}
export interface Info {
    /** main profile id */
    id: string;
    scavId: string;
    aid: number;
    username: string;
    password: string;
    wipe: boolean;
    edition: string;
}
<<<<<<< HEAD
export interface ICharacters {
=======
export interface Characters {
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    pmc: IPmcData;
    scav: IPmcData;
}
/** used by profile.userbuilds */
export interface IUserBuilds {
    weaponBuilds: IWeaponBuild[];
    equipmentBuilds: IEquipmentBuild[];
    magazineBuilds: IMagazineBuild[];
}
export interface IUserBuild {
    Id: string;
    Name: string;
}
export interface IWeaponBuild extends IUserBuild {
    Root: string;
<<<<<<< HEAD
    Items: IItem[];
}
export interface IEquipmentBuild extends IUserBuild {
    Root: string;
    Items: IItem[];
=======
    Items: Item[];
}
export interface IEquipmentBuild extends IUserBuild {
    Root: string;
    Items: Item[];
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    BuildType: EquipmentBuildType;
}
export interface IMagazineBuild extends IUserBuild {
    Caliber: string;
    TopCount: number;
    BottomCount: number;
    Items: IMagazineTemplateAmmoItem[];
}
export interface IMagazineTemplateAmmoItem {
    TemplateId: string;
    Count: number;
}
/** Used by defaultEquipmentPresets.json */
export interface IDefaultEquipmentPreset extends IUserBuild {
<<<<<<< HEAD
    Items: IItem[];
=======
    Items: Item[];
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    Root: string;
    BuildType: EquipmentBuildType;
    type: string;
}
<<<<<<< HEAD
export interface IDialogue {
=======
export interface Dialogue {
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    attachmentsNew: number;
    new: number;
    type: MessageType;
    Users?: IUserDialogInfo[];
    pinned: boolean;
<<<<<<< HEAD
    messages: IMessage[];
=======
    messages: Message[];
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    _id: string;
}
export interface IUserDialogInfo {
    _id: string;
    aid: number;
    Info?: IUserDialogDetails;
}
export interface IUserDialogDetails {
    Nickname: string;
    Side: string;
    Level: number;
    MemberCategory: MemberCategory;
    SelectedMemberCategory: MemberCategory;
}
<<<<<<< HEAD
export interface IDialogueInfo {
=======
export interface DialogueInfo {
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    attachmentsNew: number;
    new: number;
    _id: string;
    type: MessageType;
    pinned: boolean;
    Users?: IUserDialogInfo[];
<<<<<<< HEAD
    message: IMessagePreview;
}
export interface IMessage {
=======
    message: MessagePreview;
}
export interface Message {
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    _id: string;
    uid: string;
    type: MessageType;
    dt: number;
    UtcDateTime?: number;
    Member?: IUpdatableChatMember;
    templateId?: string;
    text?: string;
    replyTo?: IReplyTo;
    hasRewards?: boolean;
    rewardCollected: boolean;
<<<<<<< HEAD
    items?: IMessageItems;
=======
    items?: MessageItems;
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    maxStorageTime?: number;
    systemData?: ISystemData;
    profileChangeEvents?: IProfileChangeEvent[];
}
export interface IReplyTo {
    _id: string;
    uid: string;
    type: MessageType;
    dt: number;
    text?: string;
}
<<<<<<< HEAD
export interface IMessagePreview {
=======
export interface MessagePreview {
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    uid: string;
    type: MessageType;
    dt: number;
    templateId: string;
    text?: string;
    systemData?: ISystemData;
}
<<<<<<< HEAD
export interface IMessageItems {
    stash?: string;
    data?: IItem[];
=======
export interface MessageItems {
    stash?: string;
    data?: Item[];
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
}
export interface ISystemData {
    date?: string;
    time?: string;
    location?: string;
    buyerNickname?: string;
    soldItem?: string;
    itemCount?: number;
}
export interface IUpdatableChatMember {
    Nickname: string;
    Side: string;
    Level: number;
    MemberCategory: MemberCategory;
    Ignored: boolean;
    Banned: boolean;
}
<<<<<<< HEAD
export interface ISpt {
    /** What version of SPT was this profile made with */
    version: string;
    /** What mods has this profile loaded at any point in time */
    mods?: IModDetails[];
    /** What gifts has this profile received and how many */
    receivedGifts?: IReceivedGift[];
    /** item TPLs blacklisted from being sold on flea for this profile */
    blacklistedItemTpls?: string[];
    /** key: daily type */
    freeRepeatableRefreshUsedCount?: Record<string, number>;
    /** When was a profile migrated, value is timestamp */
    migrations?: Record<string, number>;
    /** Cultist circle rewards received that are one time use, key (md5) is a combination of sacrificed + reward items */
    cultistRewards?: Map<string, IAcceptedCultistReward>;
}
export interface IAcceptedCultistReward {
    timestamp: number;
    sacrificeItems: string[];
    rewardItems: string[];
}
export interface IModDetails {
=======
export interface DateTime {
    date: string;
    time: string;
}
export interface Spt {
    /** What version of SPT was this profile made with */
    version: string;
    /** What mods has this profile loaded at any point in time */
    mods?: ModDetails[];
    /** What gifts has this profile received and how many */
    receivedGifts: ReceivedGift[];
    /** item TPLs blacklisted from being sold on flea for this profile */
    blacklistedItemTpls?: string[];
    /** key: daily type */
    freeRepeatableRefreshUsedCount: Record<string, number>;
}
export interface ModDetails {
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    name: string;
    version: string;
    author: string;
    dateAdded: number;
    url: string;
}
<<<<<<< HEAD
export interface IReceivedGift {
=======
export interface ReceivedGift {
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    giftId: string;
    timestampLastAccepted: number;
    current: number;
}
<<<<<<< HEAD
export interface IVitality {
    health: IHealth;
    effects: IEffects;
}
export interface IHealth {
=======
export interface Vitality {
    health: Health;
    effects: Effects;
}
export interface Health {
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    Hydration: number;
    Energy: number;
    Temperature: number;
    Head: number;
    Chest: number;
    Stomach: number;
    LeftArm: number;
    RightArm: number;
    LeftLeg: number;
    RightLeg: number;
}
<<<<<<< HEAD
export interface IEffects {
    Head: IHead;
    Chest: IChest;
    Stomach: IStomach;
    LeftArm: ILeftArm;
    RightArm: IRightArm;
    LeftLeg: ILeftLeg;
    RightLeg: IRightLeg;
}
export type IHead = {};
export type IChest = {};
export type IStomach = {};
export interface ILeftArm {
    Fracture?: number;
}
export interface IRightArm {
    Fracture?: number;
}
export interface ILeftLeg {
    Fracture?: number;
}
export interface IRightLeg {
    Fracture?: number;
}
export interface IInraid {
    location: string;
    character: string;
}
export interface IInsurance {
=======
export interface Effects {
    Head: Head;
    Chest: Chest;
    Stomach: Stomach;
    LeftArm: LeftArm;
    RightArm: RightArm;
    LeftLeg: LeftLeg;
    RightLeg: RightLeg;
}
export type Head = {};
export type Chest = {};
export type Stomach = {};
export interface LeftArm {
    Fracture?: number;
}
export interface RightArm {
    Fracture?: number;
}
export interface LeftLeg {
    Fracture?: number;
}
export interface RightLeg {
    Fracture?: number;
}
export interface Inraid {
    location: string;
    character: string;
}
export interface Insurance {
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    scheduledTime: number;
    traderId: string;
    maxStorageTime: number;
    systemData: ISystemData;
    messageType: MessageType;
    messageTemplateId: string;
<<<<<<< HEAD
    items: IItem[];
}
export interface IMessageContentRagfair {
=======
    items: Item[];
}
export interface MessageContentRagfair {
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    offerId: string;
    count: number;
    handbookId: string;
}
