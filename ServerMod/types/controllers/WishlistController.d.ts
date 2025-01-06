import { IPmcData } from "@spt/models/eft/common/IPmcData";
import { IItemEventRouterResponse } from "@spt/models/eft/itemEvent/IItemEventRouterResponse";
<<<<<<< HEAD
import { IAddToWishlistRequest } from "@spt/models/eft/wishlist/IAddToWishlistRequest";
import { IChangeWishlistItemCategoryRequest } from "@spt/models/eft/wishlist/IChangeWishlistItemCategoryRequest";
import { IRemoveFromWishlistRequest } from "@spt/models/eft/wishlist/IRemoveFromWishlistRequest";
=======
import { IWishlistActionData } from "@spt/models/eft/wishlist/IWishlistActionData";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
import { EventOutputHolder } from "@spt/routers/EventOutputHolder";
export declare class WishlistController {
    protected eventOutputHolder: EventOutputHolder;
    constructor(eventOutputHolder: EventOutputHolder);
    /** Handle AddToWishList */
    addToWishList(pmcData: IPmcData, request: IAddToWishlistRequest, sessionID: string): IItemEventRouterResponse;
    /** Handle RemoveFromWishList event */
    removeFromWishList(pmcData: IPmcData, request: IRemoveFromWishlistRequest, sessionID: string): IItemEventRouterResponse;
    /** Handle changeWishlistItemCategory event */
    changeWishlistItemCategory(pmcData: IPmcData, request: IChangeWishlistItemCategoryRequest, sessionID: string): IItemEventRouterResponse;
}
