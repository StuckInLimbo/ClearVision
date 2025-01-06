<<<<<<< HEAD
import { ILocationsGenerateAllResponse } from "@spt/models/eft/common/ILocationsSourceDestinationBase";
import { IGetAirdropLootRequest } from "@spt/models/eft/location/IGetAirdropLootRequest";
import { IGetAirdropLootResponse } from "@spt/models/eft/location/IGetAirdropLootResponse";
import { ILocationConfig } from "@spt/models/spt/config/ILocationConfig";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { ConfigServer } from "@spt/servers/ConfigServer";
import { AirdropService } from "@spt/services/AirdropService";
import { DatabaseService } from "@spt/services/DatabaseService";
import { ICloner } from "@spt/utils/cloners/ICloner";
export declare class LocationController {
    protected logger: ILogger;
    protected databaseService: DatabaseService;
    protected airdropService: AirdropService;
    protected configServer: ConfigServer;
    protected cloner: ICloner;
    protected locationConfig: ILocationConfig;
    constructor(logger: ILogger, databaseService: DatabaseService, airdropService: AirdropService, configServer: ConfigServer, cloner: ICloner);
=======
import { ApplicationContext } from "@spt/context/ApplicationContext";
import { LocationGenerator } from "@spt/generators/LocationGenerator";
import { LootGenerator } from "@spt/generators/LootGenerator";
import { WeightedRandomHelper } from "@spt/helpers/WeightedRandomHelper";
import { ILocationBase } from "@spt/models/eft/common/ILocationBase";
import { ILocationsGenerateAllResponse } from "@spt/models/eft/common/ILocationsSourceDestinationBase";
import { IAirdropLootResult } from "@spt/models/eft/location/IAirdropLootResult";
import { IGetLocationRequestData } from "@spt/models/eft/location/IGetLocationRequestData";
import { AirdropTypeEnum } from "@spt/models/enums/AirdropType";
import { IAirdropConfig } from "@spt/models/spt/config/IAirdropConfig";
import { ILocationConfig } from "@spt/models/spt/config/ILocationConfig";
import { LootRequest } from "@spt/models/spt/services/LootRequest";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { ConfigServer } from "@spt/servers/ConfigServer";
import { DatabaseService } from "@spt/services/DatabaseService";
import { ItemFilterService } from "@spt/services/ItemFilterService";
import { LocalisationService } from "@spt/services/LocalisationService";
import { RaidTimeAdjustmentService } from "@spt/services/RaidTimeAdjustmentService";
import { HashUtil } from "@spt/utils/HashUtil";
import { RandomUtil } from "@spt/utils/RandomUtil";
import { TimeUtil } from "@spt/utils/TimeUtil";
import { ICloner } from "@spt/utils/cloners/ICloner";
export declare class LocationController {
    protected hashUtil: HashUtil;
    protected randomUtil: RandomUtil;
    protected weightedRandomHelper: WeightedRandomHelper;
    protected logger: ILogger;
    protected locationGenerator: LocationGenerator;
    protected localisationService: LocalisationService;
    protected raidTimeAdjustmentService: RaidTimeAdjustmentService;
    protected itemFilterService: ItemFilterService;
    protected lootGenerator: LootGenerator;
    protected databaseService: DatabaseService;
    protected timeUtil: TimeUtil;
    protected configServer: ConfigServer;
    protected applicationContext: ApplicationContext;
    protected cloner: ICloner;
    protected airdropConfig: IAirdropConfig;
    protected locationConfig: ILocationConfig;
    constructor(hashUtil: HashUtil, randomUtil: RandomUtil, weightedRandomHelper: WeightedRandomHelper, logger: ILogger, locationGenerator: LocationGenerator, localisationService: LocalisationService, raidTimeAdjustmentService: RaidTimeAdjustmentService, itemFilterService: ItemFilterService, lootGenerator: LootGenerator, databaseService: DatabaseService, timeUtil: TimeUtil, configServer: ConfigServer, applicationContext: ApplicationContext, cloner: ICloner);
    /**
     * Handle client/location/getLocalloot
     * Get a location (map) with generated loot data
     * @param sessionId Player id
     * @param request Map request to generate
     * @returns ILocationBase
     */
    get(sessionId: string, request: IGetLocationRequestData): ILocationBase;
    /**
     * Generate a maps base location and loot
     * @param name Map name
     * @returns ILocationBase
     */
    protected generate(name: string): ILocationBase;
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    /**
     * Handle client/locations
     * Get all maps base location properties without loot data
     * @param sessionId Players Id
     * @returns ILocationsGenerateAllResponse
     */
    generateAll(sessionId: string): ILocationsGenerateAllResponse;
    /** Handle client/airdrop/loot */
    getAirdropLoot(request: IGetAirdropLootRequest): IGetAirdropLootResponse;
}
