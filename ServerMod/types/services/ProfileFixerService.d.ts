import { HideoutHelper } from "@spt/helpers/HideoutHelper";
import { InventoryHelper } from "@spt/helpers/InventoryHelper";
import { ItemHelper } from "@spt/helpers/ItemHelper";
import { ProfileHelper } from "@spt/helpers/ProfileHelper";
<<<<<<< HEAD
import { QuestHelper } from "@spt/helpers/QuestHelper";
import { TraderHelper } from "@spt/helpers/TraderHelper";
import { IPmcData } from "@spt/models/eft/common/IPmcData";
import { IBonus, IHideoutSlot } from "@spt/models/eft/common/tables/IBotBase";
import { IQuest, IQuestReward } from "@spt/models/eft/common/tables/IQuest";
import { IPmcDataRepeatableQuest, IRepeatableQuest } from "@spt/models/eft/common/tables/IRepeatableQuests";
import { ITemplateItem } from "@spt/models/eft/common/tables/ITemplateItem";
import { IStageBonus } from "@spt/models/eft/hideout/IHideoutArea";
=======
import { TraderHelper } from "@spt/helpers/TraderHelper";
import { IPmcData } from "@spt/models/eft/common/IPmcData";
import { Bonus, HideoutSlot } from "@spt/models/eft/common/tables/IBotBase";
import { IPmcDataRepeatableQuest, IRepeatableQuest } from "@spt/models/eft/common/tables/IRepeatableQuests";
import { ITemplateItem } from "@spt/models/eft/common/tables/ITemplateItem";
import { StageBonus } from "@spt/models/eft/hideout/IHideoutArea";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
import { IEquipmentBuild, IMagazineBuild, ISptProfile, IWeaponBuild } from "@spt/models/eft/profile/ISptProfile";
import { HideoutAreas } from "@spt/models/enums/HideoutAreas";
import { ICoreConfig } from "@spt/models/spt/config/ICoreConfig";
import { IRagfairConfig } from "@spt/models/spt/config/IRagfairConfig";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { ConfigServer } from "@spt/servers/ConfigServer";
import { DatabaseService } from "@spt/services/DatabaseService";
import { LocalisationService } from "@spt/services/LocalisationService";
import { HashUtil } from "@spt/utils/HashUtil";
import { JsonUtil } from "@spt/utils/JsonUtil";
import { TimeUtil } from "@spt/utils/TimeUtil";
import { Watermark } from "@spt/utils/Watermark";
import { ICloner } from "@spt/utils/cloners/ICloner";
export declare class ProfileFixerService {
    protected logger: ILogger;
    protected watermark: Watermark;
    protected databaseService: DatabaseService;
    protected hideoutHelper: HideoutHelper;
    protected inventoryHelper: InventoryHelper;
    protected traderHelper: TraderHelper;
    protected profileHelper: ProfileHelper;
    protected itemHelper: ItemHelper;
    protected localisationService: LocalisationService;
    protected timeUtil: TimeUtil;
    protected jsonUtil: JsonUtil;
    protected hashUtil: HashUtil;
    protected configServer: ConfigServer;
    protected cloner: ICloner;
<<<<<<< HEAD
    protected questHelper: QuestHelper;
    protected coreConfig: ICoreConfig;
    protected ragfairConfig: IRagfairConfig;
    constructor(logger: ILogger, watermark: Watermark, databaseService: DatabaseService, hideoutHelper: HideoutHelper, inventoryHelper: InventoryHelper, traderHelper: TraderHelper, profileHelper: ProfileHelper, itemHelper: ItemHelper, localisationService: LocalisationService, timeUtil: TimeUtil, jsonUtil: JsonUtil, hashUtil: HashUtil, configServer: ConfigServer, cloner: ICloner, questHelper: QuestHelper);
=======
    protected coreConfig: ICoreConfig;
    protected ragfairConfig: IRagfairConfig;
    constructor(logger: ILogger, watermark: Watermark, databaseService: DatabaseService, hideoutHelper: HideoutHelper, inventoryHelper: InventoryHelper, traderHelper: TraderHelper, profileHelper: ProfileHelper, itemHelper: ItemHelper, localisationService: LocalisationService, timeUtil: TimeUtil, jsonUtil: JsonUtil, hashUtil: HashUtil, configServer: ConfigServer, cloner: ICloner);
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    /**
     * Find issues in the pmc profile data that may cause issues and fix them
     * @param pmcProfile profile to check and fix
     */
    checkForAndFixPmcProfileIssues(pmcProfile: IPmcData): void;
    /**
     * Resolve any dialogue attachments that were accidentally created using the player's equipment ID as
     * the stash root object ID
     * @param fullProfile
     */
    checkForAndFixDialogueAttachments(fullProfile: ISptProfile): void;
    /**
     * Find issues in the scav profile data that may cause issues
     * @param scavProfile profile to check and fix
     */
    checkForAndFixScavProfileIssues(scavProfile: IPmcData): void;
    /**
     * Attempt to fix common item issues that corrupt profiles
     * @param pmcProfile Profile to check items of
     */
<<<<<<< HEAD
    fixProfileBreakingInventoryItemIssues(pmcProfile: IPmcData): void;
=======
    addMissingSptVersionTagToProfile(fullProfile: ISptProfile): void;
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    /**
     * TODO - make this non-public - currently used by RepeatableQuestController
     * Remove unused condition counters
     * @param pmcProfile profile to remove old counters from
     */
    removeDanglingConditionCounters(pmcProfile: IPmcData): void;
    /**
     * Repeatable quests leave behind TaskConditionCounter objects that make the profile bloat with time, remove them
     * @param pmcProfile Player profile to check
     */
    protected removeDanglingTaskConditionCounters(pmcProfile: IPmcData): void;
    protected getActiveRepeatableQuests(repeatableQuests: IPmcDataRepeatableQuest[]): IRepeatableQuest[];
<<<<<<< HEAD
=======
    protected fixNullRagfairRatings(pmcProfile: IPmcData): void;
    protected fixNullTraderSalesSums(pmcProfile: IPmcData): void;
    protected addMissingBonusesProperty(pmcProfile: IPmcData): void;
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    /**
     * After removing mods that add quests, the quest panel will break without removing these
     * @param pmcProfile Profile to remove dead quests from
     */
    protected removeOrphanedQuests(pmcProfile: IPmcData): void;
    /**
     * Verify that all quest production unlocks have been applied to the PMC Profile
     * @param pmcProfile The profile to validate quest productions for
     */
    protected verifyQuestProductionUnlocks(pmcProfile: IPmcData): void;
    /**
     * Validate that the given profile has the given quest reward production scheme unlocked, and add it if not
     * @param pmcProfile Profile to check
     * @param productionUnlockReward The quest reward to validate
     * @param questDetails The quest the reward belongs to
     * @returns
     */
    protected verifyQuestProductionUnlock(pmcProfile: IPmcData, productionUnlockReward: IQuestReward, questDetails: IQuest): void;
    /**
     * Initial release of SPT 3.10 used an incorrect favorites structure, reformat
     * the structure to the correct MongoID array structure
     * @param pmcProfile
     */
    protected fixFavorites(pmcProfile: IPmcData): void;
    /**
     * If the profile has elite Hideout Managment skill, add the additional slots from globals
     * NOTE: This seems redundant, but we will leave it here just incase.
     * @param pmcProfile profile to add slots to
     */
    protected addHideoutEliteSlots(pmcProfile: IPmcData): void;
    /**
     * add in objects equal to the number of slots
     * @param areaType area to check
     * @param pmcProfile profile to update
     */
    protected addEmptyObjectsToHideoutAreaSlots(areaType: HideoutAreas, emptyItemCount: number, pmcProfile: IPmcData): void;
    protected addObjectsToArray(count: number, slots: IHideoutSlot[]): IHideoutSlot[];
    /**
     * Check for and cap profile skills at 5100.
     * @param pmcProfile profile to check and fix
     */
<<<<<<< HEAD
    protected checkForSkillsOverMaxLevel(pmcProfile: IPmcData): void;
=======
    addMissingHideoutBonusesToProfile(pmcProfile: IPmcData): void;
    /**
     * @param profileBonuses bonuses from profile
     * @param bonus bonus to find
     * @returns matching bonus
     */
    protected getBonusFromProfile(profileBonuses: Bonus[], bonus: StageBonus): Bonus | undefined;
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    /**
     * Checks profile inventiory for items that do not exist inside the items db
     * @param sessionId Session id
     * @param pmcProfile Profile to check inventory of
     */
    checkForOrphanedModdedItems(sessionId: string, fullProfile: ISptProfile): void;
    /**
     * @param buildType The type of build, used for logging only
     * @param build The build to check for invalid items
     * @param itemsDb The items database to use for item lookup
     * @returns True if the build should be removed from the build list, false otherwise
     */
    protected shouldRemoveWeaponEquipmentBuild(buildType: string, build: IWeaponBuild | IEquipmentBuild, itemsDb: Record<string, ITemplateItem>): boolean;
    /**
     * @param magazineBuild The magazine build to check for validity
     * @param itemsDb The items database to use for item lookup
     * @returns True if the build should be removed from the build list, false otherwise
     */
    protected shouldRemoveMagazineBuild(magazineBuild: IMagazineBuild, itemsDb: Record<string, ITemplateItem>): boolean;
    /**
<<<<<<< HEAD
     * REQUIRED for dev profiles
     * Iterate over players hideout areas and find what's build, look for missing bonuses those areas give and add them if missing
=======
     * Attempt to fix common item issues that corrupt profiles
     * @param pmcProfile Profile to check items of
     */
    fixProfileBreakingInventoryItemIssues(pmcProfile: IPmcData): void;
    /**
     * Add `Improvements` object to hideout if missing - added in eft 13.0.21469
     * @param pmcProfile profile to update
     */
    addMissingUpgradesPropertyToHideout(pmcProfile: IPmcData): void;
    /**
     * Iterate over associated profile template and check all hideout areas exist, add if not
     * @param fullProfile Profile to update
     */
    addMissingHideoutAreasToProfile(fullProfile: ISptProfile): void;
    /**
     * These used to be used for storing scav case rewards, rewards are now generated on pickup
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
     * @param pmcProfile Profile to update
     */
    addMissingHideoutBonusesToProfile(pmcProfile: IPmcData): void;
    /**
     * @param profileBonuses bonuses from profile
     * @param bonus bonus to find
     * @returns matching bonus
     */
<<<<<<< HEAD
    protected getBonusFromProfile(profileBonuses: IBonus[], bonus: IStageBonus): IBonus | undefined;
    checkForAndRemoveInvalidTraders(fullProfile: ISptProfile): void;
=======
    fixIncorrectAidValue(fullProfile: ISptProfile): void;
    /**
     * Bsg nested `stats` into a sub object called 'eft'
     * @param fullProfile Profile to check for and migrate stats data
     */
    migrateStatsToNewStructure(fullProfile: ISptProfile): void;
    /**
     * 26126 (7th August) requires bonuses to have an ID, these were not included in the default profile presets
     * @param pmcProfile Profile to add missing IDs to
     */
    addMissingIdsToBonuses(pmcProfile: IPmcData): void;
    /**
     * 3.8.0 utilized the wrong ProductionTime for bitcoin, fix it if it's found
     */
    fixBitcoinProductionTime(pmcProfile: IPmcData): void;
    /**
     * At some point the property name was changed,migrate data across to new name
     * @param pmcProfile Profile to migrate improvements in
     */
    protected migrateImprovements(pmcProfile: IPmcData): void;
    /**
     * After removing mods that add quests, the quest panel will break without removing these
     * @param pmcProfile Profile to remove dead quests from
     */
    protected removeOrphanedQuests(pmcProfile: IPmcData): void;
    /**
     * If someone has run a mod from pre-3.8.0, it results in an invalid `nextResupply` value
     * Resolve this by setting the nextResupply to 0 if it's undefined
     */
    protected fixNullTraderNextResupply(pmcProfile: IPmcData): void;
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
}
