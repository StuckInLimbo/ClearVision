import { WishlistCallbacks } from "@spt/callbacks/WishlistCallbacks";
import { HandledRoute, ItemEventRouterDefinition } from "@spt/di/Router";
import { IPmcData } from "@spt/models/eft/common/IPmcData";
import { IItemEventRouterResponse } from "@spt/models/eft/itemEvent/IItemEventRouterResponse";
export declare class WishlistItemEventRouter extends ItemEventRouterDefinition {
    protected wishlistCallbacks: WishlistCallbacks;
    constructor(wishlistCallbacks: WishlistCallbacks);
    getHandledRoutes(): HandledRoute[];
<<<<<<< HEAD
    handleItemEvent(url: string, pmcData: IPmcData, request: any, sessionID: string): Promise<IItemEventRouterResponse>;
=======
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): Promise<IItemEventRouterResponse>;
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
}
