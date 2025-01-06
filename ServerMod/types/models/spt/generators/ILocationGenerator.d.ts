import { IStaticAmmoDetails, IStaticContainerProps, IStaticForcedProps, IStaticLootDetails } from "@spt/models/eft/common/ILocation";
<<<<<<< HEAD
import { ILooseLoot, ISpawnpointTemplate } from "@spt/models/eft/common/ILooseLoot";
=======
import { ILooseLoot, SpawnpointTemplate } from "@spt/models/eft/common/ILooseLoot";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
export interface ILocationGenerator {
    generateContainerLoot(containerIn: IStaticContainerProps, staticForced: IStaticForcedProps[], staticLootDist: Record<string, IStaticLootDetails>, staticAmmoDist: Record<string, IStaticAmmoDetails[]>, locationName: string): IStaticContainerProps;
    generateDynamicLoot(dynamicLootDist: ILooseLoot, staticAmmoDist: Record<string, IStaticAmmoDetails[]>, locationName: string): ISpawnpointTemplate[];
}
