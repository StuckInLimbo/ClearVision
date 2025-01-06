import { HideoutController } from "@spt/controllers/HideoutController";
<<<<<<< HEAD
import { TraderController } from "@spt/controllers/TraderController";
=======
import { RagfairController } from "@spt/controllers/RagfairController";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
import { TraderHelper } from "@spt/helpers/TraderHelper";
import { IEmptyRequestData } from "@spt/models/eft/common/IEmptyRequestData";
import { IGlobals } from "@spt/models/eft/common/IGlobals";
import { ICustomizationItem } from "@spt/models/eft/common/tables/ICustomizationItem";
import { IHandbookBase } from "@spt/models/eft/common/tables/IHandbookBase";
import { IGetItemPricesResponse } from "@spt/models/eft/game/IGetItemPricesResponse";
import { IHideoutArea } from "@spt/models/eft/hideout/IHideoutArea";
<<<<<<< HEAD
import { IHideoutProductionData } from "@spt/models/eft/hideout/IHideoutProduction";
=======
import { IHideoutProduction } from "@spt/models/eft/hideout/IHideoutProduction";
import { IHideoutScavCase } from "@spt/models/eft/hideout/IHideoutScavCase";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
import { IHideoutSettingsBase } from "@spt/models/eft/hideout/IHideoutSettingsBase";
import { IGetBodyResponseData } from "@spt/models/eft/httpResponse/IGetBodyResponseData";
import { ISettingsBase } from "@spt/models/spt/server/ISettingsBase";
import { DatabaseService } from "@spt/services/DatabaseService";
import { HttpResponseUtil } from "@spt/utils/HttpResponseUtil";
import { TimeUtil } from "@spt/utils/TimeUtil";
/**
 * Handle client requests
 */
export declare class DataCallbacks {
    protected httpResponse: HttpResponseUtil;
    protected timeUtil: TimeUtil;
    protected traderHelper: TraderHelper;
    protected databaseService: DatabaseService;
<<<<<<< HEAD
    protected traderController: TraderController;
    protected hideoutController: HideoutController;
    constructor(httpResponse: HttpResponseUtil, timeUtil: TimeUtil, traderHelper: TraderHelper, databaseService: DatabaseService, traderController: TraderController, hideoutController: HideoutController);
=======
    protected ragfairController: RagfairController;
    protected hideoutController: HideoutController;
    constructor(httpResponse: HttpResponseUtil, timeUtil: TimeUtil, traderHelper: TraderHelper, databaseService: DatabaseService, ragfairController: RagfairController, hideoutController: HideoutController);
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    /**
     * Handle client/settings
     * @returns ISettingsBase
     */
    getSettings(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ISettingsBase>;
    /**
     * Handle client/globals
     * @returns IGlobals
     */
    getGlobals(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IGlobals>;
    /**
     * Handle client/items
     * @returns string
     */
    getTemplateItems(url: string, info: IEmptyRequestData, sessionID: string): string;
    /**
     * Handle client/handbook/templates
     * @returns IHandbookBase
     */
    getTemplateHandbook(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IHandbookBase>;
    /**
     * Handle client/customization
     * @returns Record<string, ICustomizationItem
     */
    getTemplateSuits(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<Record<string, ICustomizationItem>>;
    /**
     * Handle client/account/customization
     * @returns string[]
     */
    getTemplateCharacter(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<string[]>;
    /**
     * Handle client/hideout/settings
     * @returns IHideoutSettingsBase
     */
    getHideoutSettings(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IHideoutSettingsBase>;
    getHideoutAreas(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IHideoutArea[]>;
    getHideoutProduction(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IHideoutProductionData>;
    /**
     * Handle client/languages
     */
    getLocalesLanguages(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<Record<string, string>>;
    /**
     * Handle client/menu/locale
     */
    getLocalesMenu(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<string>;
    /**
     * Handle client/locale
     */
    getLocalesGlobal(url: string, info: IEmptyRequestData, sessionID: string): string;
    /**
     * Handle client/hideout/qte/list
     */
    getQteList(url: string, info: IEmptyRequestData, sessionID: string): string;
    /**
     * Handle client/items/prices/
     * Called when viewing a traders assorts
     */
    getItemPrices(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IGetItemPricesResponse>;
}
