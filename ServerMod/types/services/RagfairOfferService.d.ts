import { ItemHelper } from "@spt/helpers/ItemHelper";
import { ProfileHelper } from "@spt/helpers/ProfileHelper";
import { RagfairServerHelper } from "@spt/helpers/RagfairServerHelper";
<<<<<<< HEAD
import { IItem } from "@spt/models/eft/common/tables/IItem";
=======
import { Item } from "@spt/models/eft/common/tables/IItem";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
import { IRagfairOffer } from "@spt/models/eft/ragfair/IRagfairOffer";
import { IRagfairConfig } from "@spt/models/spt/config/IRagfairConfig";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { EventOutputHolder } from "@spt/routers/EventOutputHolder";
import { ConfigServer } from "@spt/servers/ConfigServer";
import { SaveServer } from "@spt/servers/SaveServer";
import { DatabaseService } from "@spt/services/DatabaseService";
import { LocalisationService } from "@spt/services/LocalisationService";
<<<<<<< HEAD
import { HashUtil } from "@spt/utils/HashUtil";
=======
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
import { HttpResponseUtil } from "@spt/utils/HttpResponseUtil";
import { RagfairOfferHolder } from "@spt/utils/RagfairOfferHolder";
import { TimeUtil } from "@spt/utils/TimeUtil";
import { ICloner } from "@spt/utils/cloners/ICloner";
export declare class RagfairOfferService {
    protected logger: ILogger;
    protected timeUtil: TimeUtil;
<<<<<<< HEAD
    protected hashUtil: HashUtil;
=======
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    protected databaseService: DatabaseService;
    protected saveServer: SaveServer;
    protected ragfairServerHelper: RagfairServerHelper;
    protected itemHelper: ItemHelper;
    protected profileHelper: ProfileHelper;
    protected eventOutputHolder: EventOutputHolder;
    protected httpResponse: HttpResponseUtil;
    protected localisationService: LocalisationService;
    protected configServer: ConfigServer;
    protected cloner: ICloner;
    protected playerOffersLoaded: boolean;
    /** Offer id + offer object */
    protected expiredOffers: Record<string, IRagfairOffer>;
    protected ragfairConfig: IRagfairConfig;
    protected ragfairOfferHandler: RagfairOfferHolder;
<<<<<<< HEAD
    constructor(logger: ILogger, timeUtil: TimeUtil, hashUtil: HashUtil, databaseService: DatabaseService, saveServer: SaveServer, ragfairServerHelper: RagfairServerHelper, itemHelper: ItemHelper, profileHelper: ProfileHelper, eventOutputHolder: EventOutputHolder, httpResponse: HttpResponseUtil, localisationService: LocalisationService, configServer: ConfigServer, cloner: ICloner);
=======
    constructor(logger: ILogger, timeUtil: TimeUtil, databaseService: DatabaseService, saveServer: SaveServer, ragfairServerHelper: RagfairServerHelper, itemHelper: ItemHelper, profileHelper: ProfileHelper, eventOutputHolder: EventOutputHolder, httpResponse: HttpResponseUtil, localisationService: LocalisationService, configServer: ConfigServer, cloner: ICloner);
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    /**
     * Get all offers
     * @returns IRagfairOffer array
     */
    getOffers(): IRagfairOffer[];
    getOfferByOfferId(offerId: string): IRagfairOffer | undefined;
    getOffersOfType(templateId: string): IRagfairOffer[] | undefined;
    addOffer(offer: IRagfairOffer): void;
    addOfferToExpired(staleOffer: IRagfairOffer): void;
    /**
     * Get total count of current expired offers
     * @returns Number of expired offers
     */
    getExpiredOfferCount(): number;
    /**
     * Get an array of arrays of expired offer items + children
     * @returns Expired offer assorts
     */
    getExpiredOfferAssorts(): IItem[][];
    /**
     * Clear out internal expiredOffers dictionary of all items
     */
    resetExpiredOffers(): void;
    /**
     * Does the offer exist on the ragfair
     * @param offerId offer id to check for
     * @returns offer exists - true
     */
    doesOfferExist(offerId: string): boolean;
    /**
     * Remove an offer from ragfair by offer id
     * @param offerId Offer id to remove
     */
    removeOfferById(offerId: string): void;
    /**
     * Reduce size of an offer stack by specified amount
     * @param offerId Offer to adjust stack size of
     * @param amount How much to deduct from offers stack size
     */
    removeOfferStack(offerId: string, amount: number): void;
    removeAllOffersByTrader(traderId: string): void;
    /**
     * Do the trader offers on flea need to be refreshed
     * @param traderID Trader to check
     * @returns true if they do
     */
    traderOffersNeedRefreshing(traderID: string): boolean;
    addPlayerOffers(): void;
    expireStaleOffers(): void;
    /**
     * Remove stale offer from flea
     * @param staleOffer Stale offer to process
     */
    protected processStaleOffer(staleOffer: IRagfairOffer): void;
    protected returnPlayerOffer(playerOffer: IRagfairOffer): void;
    /**
     * Flea offer items are stacked up often beyond the StackMaxSize limit
     * Un stack the items into an array of root items and their children
     * Will create new items equal to the
     * @param items Offer items to unstack
     * @returns Unstacked array of items
     */
<<<<<<< HEAD
    protected unstackOfferItems(items: IItem[]): IItem[];
=======
    protected unstackOfferItems(items: Item[]): Item[];
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
}
