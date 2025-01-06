import { IBaseConfig } from "@spt/models/spt/config/IBaseConfig";
export interface IHealthConfig extends IBaseConfig {
    kind: "spt-health";
<<<<<<< HEAD
    healthMultipliers: IHealthMultipliers;
    save: ISave;
=======
    healthMultipliers: HealthMultipliers;
    save: Save;
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
}
export interface IHealthMultipliers {
    death: number;
    blacked: number;
}
export interface ISave {
    health: boolean;
    effects: boolean;
}
