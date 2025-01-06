import { ProfileHelper } from "@spt/helpers/ProfileHelper";
<<<<<<< HEAD
import { ITraderPurchaseData } from "@spt/models/eft/profile/ISptProfile";
=======
import { TraderPurchaseData } from "@spt/models/eft/profile/ISptProfile";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
import { ITraderConfig } from "@spt/models/spt/config/ITraderConfig";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { ConfigServer } from "@spt/servers/ConfigServer";
import { LocalisationService } from "@spt/services/LocalisationService";
import { RandomUtil } from "@spt/utils/RandomUtil";
import { TimeUtil } from "@spt/utils/TimeUtil";
/**
 * Help with storing limited item purchases from traders in profile to persist them over server restarts
 */
export declare class TraderPurchasePersisterService {
    protected logger: ILogger;
    protected timeUtil: TimeUtil;
    protected randomUtil: RandomUtil;
    protected profileHelper: ProfileHelper;
    protected localisationService: LocalisationService;
    protected configServer: ConfigServer;
    protected traderConfig: ITraderConfig;
    constructor(logger: ILogger, timeUtil: TimeUtil, randomUtil: RandomUtil, profileHelper: ProfileHelper, localisationService: LocalisationService, configServer: ConfigServer);
    /**
     * Get the purchases made from a trader for this profile before the last trader reset
     * @param sessionId Session id
     * @param traderId Trader to loop up purchases for
     * @returns Dict of assort id and count purchased
     */
<<<<<<< HEAD
    getProfileTraderPurchases(sessionId: string, traderId: string): Record<string, ITraderPurchaseData> | undefined;
=======
    getProfileTraderPurchases(sessionId: string, traderId: string): Record<string, TraderPurchaseData> | undefined;
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    /**
     * Get a purchase made from a trader for requested profile before the last trader reset
     * @param sessionId Session id
     * @param traderId Trader to loop up purchases for
     * @param assortId Id of assort to get data for
     * @returns TraderPurchaseData
     */
<<<<<<< HEAD
    getProfileTraderPurchase(sessionId: string, traderId: string, assortId: string): ITraderPurchaseData | undefined;
=======
    getProfileTraderPurchase(sessionId: string, traderId: string, assortId: string): TraderPurchaseData | undefined;
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    /**
     * Remove all trader purchase records from all profiles that exist
     * @param traderId Traders id
     */
    resetTraderPurchasesStoredInProfile(traderId: string): void;
    /**
     * Iterate over all server profiles and remove specific trader purchase data that has passed the trader refesh time
     * @param traderId Trader id
     */
    removeStalePurchasesFromProfiles(traderId: string): void;
}
