import { ItemHelper } from "@spt/helpers/ItemHelper";
<<<<<<< HEAD
import { ProfileHelper } from "@spt/helpers/ProfileHelper";
import { IPmcData } from "@spt/models/eft/common/IPmcData";
import { IItem } from "@spt/models/eft/common/tables/IItem";
=======
import { IPmcData } from "@spt/models/eft/common/IPmcData";
import { Item } from "@spt/models/eft/common/tables/IItem";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
import { ITemplateItem } from "@spt/models/eft/common/tables/ITemplateItem";
import { IStorePlayerOfferTaxAmountRequestData } from "@spt/models/eft/ragfair/IStorePlayerOfferTaxAmountRequestData";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { DatabaseService } from "@spt/services/DatabaseService";
import { RagfairPriceService } from "@spt/services/RagfairPriceService";
<<<<<<< HEAD
import { ICloner } from "@spt/utils/cloners/ICloner";
=======
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
export declare class RagfairTaxService {
    protected logger: ILogger;
    protected databaseService: DatabaseService;
    protected ragfairPriceService: RagfairPriceService;
    protected itemHelper: ItemHelper;
    protected profileHelper: ProfileHelper;
    protected cloner: ICloner;
    protected playerOfferTaxCache: Record<string, IStorePlayerOfferTaxAmountRequestData>;
<<<<<<< HEAD
    constructor(logger: ILogger, databaseService: DatabaseService, ragfairPriceService: RagfairPriceService, itemHelper: ItemHelper, profileHelper: ProfileHelper, cloner: ICloner);
=======
    constructor(logger: ILogger, databaseService: DatabaseService, ragfairPriceService: RagfairPriceService, itemHelper: ItemHelper);
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    storeClientOfferTaxValue(sessionId: string, offer: IStorePlayerOfferTaxAmountRequestData): void;
    clearStoredOfferTaxById(offerIdToRemove: string): void;
    getStoredClientOfferTaxValueById(offerIdToGet: string): IStorePlayerOfferTaxAmountRequestData;
    /**
    // This method, along with calculateItemWorth, is trying to mirror the client-side code found in the method "CalculateTaxPrice".
    // It's structured to resemble the client-side code as closely as possible - avoid making any big structure changes if it's not necessary.
     * @param item Item being sold on flea
     * @param pmcData player profile
     * @param requirementsValue
     * @param offerItemCount Number of offers being created
     * @param sellInOnePiece
     * @returns Tax in roubles
     */
    calculateTax(item: IItem, pmcData: IPmcData, requirementsValue: number, offerItemCount: number, sellInOnePiece: boolean): number;
    protected calculateItemWorth(item: IItem, itemTemplate: ITemplateItem, itemCount: number, pmcData: IPmcData, isRootItem?: boolean): number;
}
