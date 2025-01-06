import { IRaidSettings } from "@spt/models/eft/match/IRaidSettings";
export interface IGetRaidConfigurationRequestData extends IRaidSettings {
    keyId: string;
<<<<<<< HEAD
=======
    CanShowGroupPreview: boolean;
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    MaxGroupCount: number;
}
