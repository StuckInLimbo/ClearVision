import { IHideoutArea } from "@spt/models/eft/hideout/IHideoutArea";
<<<<<<< HEAD
import { IHideoutProductionData } from "@spt/models/eft/hideout/IHideoutProduction";
=======
import { IHideoutProduction } from "@spt/models/eft/hideout/IHideoutProduction";
import { IHideoutScavCase } from "@spt/models/eft/hideout/IHideoutScavCase";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
import { IHideoutSettingsBase } from "@spt/models/eft/hideout/IHideoutSettingsBase";
import { IQteData } from "@spt/models/eft/hideout/IQteData";
export interface IHideout {
    areas: IHideoutArea[];
<<<<<<< HEAD
    production: IHideoutProductionData;
=======
    production: IHideoutProduction[];
    scavcase: IHideoutScavCase[];
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    settings: IHideoutSettingsBase;
    qte: IQteData[];
}
