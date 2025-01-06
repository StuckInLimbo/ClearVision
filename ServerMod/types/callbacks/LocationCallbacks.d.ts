import { LocationController } from "@spt/controllers/LocationController";
import { IEmptyRequestData } from "@spt/models/eft/common/IEmptyRequestData";
<<<<<<< HEAD
import { ILocationsGenerateAllResponse } from "@spt/models/eft/common/ILocationsSourceDestinationBase";
import { IGetBodyResponseData } from "@spt/models/eft/httpResponse/IGetBodyResponseData";
import { IGetAirdropLootRequest } from "@spt/models/eft/location/IGetAirdropLootRequest";
import { IGetAirdropLootResponse } from "@spt/models/eft/location/IGetAirdropLootResponse";
=======
import { ILocationBase } from "@spt/models/eft/common/ILocationBase";
import { ILocationsGenerateAllResponse } from "@spt/models/eft/common/ILocationsSourceDestinationBase";
import { IGetBodyResponseData } from "@spt/models/eft/httpResponse/IGetBodyResponseData";
import { IGetLocationRequestData } from "@spt/models/eft/location/IGetLocationRequestData";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
import { HttpResponseUtil } from "@spt/utils/HttpResponseUtil";
export declare class LocationCallbacks {
    protected httpResponse: HttpResponseUtil;
    protected locationController: LocationController;
    constructor(httpResponse: HttpResponseUtil, locationController: LocationController);
    /** Handle client/locations */
    getLocationData(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ILocationsGenerateAllResponse>;
    /** Handle client/airdrop/loot */
    getAirdropLoot(url: string, info: IGetAirdropLootRequest, sessionID: string): IGetBodyResponseData<IGetAirdropLootResponse>;
}
