import { ApplicationContext } from "@spt/context/ApplicationContext";
<<<<<<< HEAD
import { ProfileHelper } from "@spt/helpers/ProfileHelper";
import { IRegisterPlayerRequestData } from "@spt/models/eft/inRaid/IRegisterPlayerRequestData";
import { IScavSaveRequestData } from "@spt/models/eft/inRaid/IScavSaveRequestData";
import { IBotConfig } from "@spt/models/spt/config/IBotConfig";
import { IInRaidConfig } from "@spt/models/spt/config/IInRaidConfig";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { ConfigServer } from "@spt/servers/ConfigServer";
import { SaveServer } from "@spt/servers/SaveServer";
import { LocalisationService } from "@spt/services/LocalisationService";
=======
import { PlayerScavGenerator } from "@spt/generators/PlayerScavGenerator";
import { HealthHelper } from "@spt/helpers/HealthHelper";
import { InRaidHelper } from "@spt/helpers/InRaidHelper";
import { ItemHelper } from "@spt/helpers/ItemHelper";
import { ProfileHelper } from "@spt/helpers/ProfileHelper";
import { QuestHelper } from "@spt/helpers/QuestHelper";
import { TraderHelper } from "@spt/helpers/TraderHelper";
import { IPmcData } from "@spt/models/eft/common/IPmcData";
import { Item } from "@spt/models/eft/common/tables/IItem";
import { IRegisterPlayerRequestData } from "@spt/models/eft/inRaid/IRegisterPlayerRequestData";
import { ISaveProgressRequestData } from "@spt/models/eft/inRaid/ISaveProgressRequestData";
import { PlayerRaidEndState } from "@spt/models/enums/PlayerRaidEndState";
import { IAirdropConfig } from "@spt/models/spt/config/IAirdropConfig";
import { IBTRConfig } from "@spt/models/spt/config/IBTRConfig";
import { IBotConfig } from "@spt/models/spt/config/IBotConfig";
import { IHideoutConfig } from "@spt/models/spt/config/IHideoutConfig";
import { IInRaidConfig } from "@spt/models/spt/config/IInRaidConfig";
import { ILocationConfig } from "@spt/models/spt/config/ILocationConfig";
import { IRagfairConfig } from "@spt/models/spt/config/IRagfairConfig";
import { ITraderConfig } from "@spt/models/spt/config/ITraderConfig";
import { ITraderServiceModel } from "@spt/models/spt/services/ITraderServiceModel";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { ConfigServer } from "@spt/servers/ConfigServer";
import { SaveServer } from "@spt/servers/SaveServer";
import { DatabaseService } from "@spt/services/DatabaseService";
import { InsuranceService } from "@spt/services/InsuranceService";
import { LocalisationService } from "@spt/services/LocalisationService";
import { MailSendService } from "@spt/services/MailSendService";
import { MatchBotDetailsCacheService } from "@spt/services/MatchBotDetailsCacheService";
import { PmcChatResponseService } from "@spt/services/PmcChatResponseService";
import { TraderServicesService } from "@spt/services/TraderServicesService";
import { RandomUtil } from "@spt/utils/RandomUtil";
import { TimeUtil } from "@spt/utils/TimeUtil";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
/**
 * Logic for handling In Raid callbacks
 */
export declare class InraidController {
    protected logger: ILogger;
    protected saveServer: SaveServer;
<<<<<<< HEAD
    protected profileHelper: ProfileHelper;
    protected localisationService: LocalisationService;
=======
    protected timeUtil: TimeUtil;
    protected databaseService: DatabaseService;
    protected pmcChatResponseService: PmcChatResponseService;
    protected matchBotDetailsCacheService: MatchBotDetailsCacheService;
    protected questHelper: QuestHelper;
    protected itemHelper: ItemHelper;
    protected profileHelper: ProfileHelper;
    protected playerScavGenerator: PlayerScavGenerator;
    protected healthHelper: HealthHelper;
    protected traderHelper: TraderHelper;
    protected traderServicesService: TraderServicesService;
    protected localisationService: LocalisationService;
    protected insuranceService: InsuranceService;
    protected inRaidHelper: InRaidHelper;
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    protected applicationContext: ApplicationContext;
    protected configServer: ConfigServer;
    protected inRaidConfig: IInRaidConfig;
<<<<<<< HEAD
    protected botConfig: IBotConfig;
    constructor(logger: ILogger, saveServer: SaveServer, profileHelper: ProfileHelper, localisationService: LocalisationService, applicationContext: ApplicationContext, configServer: ConfigServer);
=======
    protected traderConfig: ITraderConfig;
    protected locationConfig: ILocationConfig;
    protected ragfairConfig: IRagfairConfig;
    protected hideoutConfig: IHideoutConfig;
    protected botConfig: IBotConfig;
    constructor(logger: ILogger, saveServer: SaveServer, timeUtil: TimeUtil, databaseService: DatabaseService, pmcChatResponseService: PmcChatResponseService, matchBotDetailsCacheService: MatchBotDetailsCacheService, questHelper: QuestHelper, itemHelper: ItemHelper, profileHelper: ProfileHelper, playerScavGenerator: PlayerScavGenerator, healthHelper: HealthHelper, traderHelper: TraderHelper, traderServicesService: TraderServicesService, localisationService: LocalisationService, insuranceService: InsuranceService, inRaidHelper: InRaidHelper, applicationContext: ApplicationContext, configServer: ConfigServer, mailSendService: MailSendService, randomUtil: RandomUtil);
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    /**
     * Save locationId to active profiles inraid object AND app context
     * @param sessionID Session id
     * @param info Register player request
     */
    addPlayer(sessionID: string, info: IRegisterPlayerRequestData): void;
    /**
     * Handle raid/profile/scavsave
     * Save profile state to disk
     * Handles pmc/pscav
     * @param offraidProfileData Post-raid scav profile data
     * @param sessionID Session id
     */
    savePostRaidProfileForScav(offraidProfileData: IScavSaveRequestData, sessionID: string): void;
    /**
     * Get the inraid config from configs/inraid.json
     * @returns InRaid Config
     */
    getInraidConfig(): IInRaidConfig;
    getTraitorScavHostileChance(url: string, sessionID: string): number;
<<<<<<< HEAD
=======
    getSandboxMaxPatrolValue(url: string, sessionID: string): number;
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    getBossConvertSettings(url: string, sessionId: string): string[];
}
