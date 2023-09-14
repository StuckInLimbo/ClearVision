import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import modConfig from "cfg/config.json";

class Mod implements IPostDBLoadMod
{
    // Code added here will be run AFTER the server has started
    public postDBLoad(container: DependencyContainer): void 
    {
        // get the logger from the server container
        const logger = container.resolve<ILogger>("WinstonLogger");
        try 
        {
            const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
            const items = databaseServer.getTables().templates.items;

            const pvs14 = items["57235b6f24597759bf5a30f1"];
            const n15 = items["5c066e3a0db834001b7353f0"];
            const gpnvg = items["5c0558060db834001b735271"];
            const pnv10 = items["5c0696830db834001d23f5da"];
            const t7 = items["5c110624d174af029e69734c"];

            if (modConfig.ClearVision.Enabled) 
            {
                //AN/PVS-14 Night Vision Monocular
                if (modConfig.PVS14.Enabled) 
                {
                    pvs14._props.Intensity = modConfig.PVS14.Intensity;
                    pvs14._props.Mask = modConfig.PVS14.Mask;
                    pvs14._props.MaskSize = modConfig.PVS14.MaskSize;
                    pvs14._props.NoiseIntensity = modConfig.PVS14.NoiseIntensity;
                    pvs14._props.NoiseScale = modConfig.PVS14.NoiseScale;
                    pvs14._props.DiffuseIntensity = modConfig.PVS14.DiffuseIntensity;
                    pvs14._props.Color.r = modConfig.PVS14.Red;
                    pvs14._props.Color.g = modConfig.PVS14.Green;
                    pvs14._props.Color.b = modConfig.PVS14.Blue;
                    pvs14._props.Color.a = modConfig.PVS14.Alpha;
                    logger.info("CV: AN/PVS14 Monocular tuned!");
                }

                //Armasight N-15
                if (modConfig.N15.Enabled) 
                {
                    n15._props.Intensity = modConfig.N15.Intensity;
                    n15._props.Mask = modConfig.N15.Mask;
                    n15._props.MaskSize = modConfig.N15.MaskSize;
                    n15._props.NoiseIntensity = modConfig.N15.NoiseIntensity;
                    n15._props.NoiseScale = modConfig.N15.NoiseScale;
                    n15._props.DiffuseIntensity = modConfig.N15.DiffuseIntensity;
                    n15._props.Color.r = modConfig.N15.Red;
                    n15._props.Color.g = modConfig.N15.Green;
                    n15._props.Color.b = modConfig.N15.Blue;
                    n15._props.Color.a = modConfig.N15.Alpha;
                    logger.info("CV: Armasight N-15 tuned!");
                }
                //GPNVG-18
                if (modConfig.GPNVG.Enabled) 
                {
                    gpnvg._props.Intensity = modConfig.GPNVG.Intensity;
                    gpnvg._props.Mask = modConfig.GPNVG.Mask;
                    gpnvg._props.MaskSize = modConfig.GPNVG.MaskSize;
                    gpnvg._props.NoiseIntensity = modConfig.GPNVG.NoiseIntensity;
                    gpnvg._props.NoiseScale = modConfig.GPNVG.NoiseScale;
                    gpnvg._props.DiffuseIntensity = modConfig.GPNVG.DiffuseIntensity;
                    gpnvg._props.Color.r = modConfig.GPNVG.Red;
                    gpnvg._props.Color.g = modConfig.GPNVG.Green;
                    gpnvg._props.Color.b = modConfig.GPNVG.Blue;
                    gpnvg._props.Color.a = modConfig.GPNVG.Alpha;
                    logger.info("CV: GPNVG-18 tuned!");
                }
                //PNV-10T
                if (modConfig.PNV10T.Enabled) 
                {
                    pnv10._props.Intensity = modConfig.PNV10T.Intensity;
                    pnv10._props.Mask = modConfig.PNV10T.Mask;
                    pnv10._props.MaskSize = modConfig.PNV10T.MaskSize;
                    pnv10._props.NoiseIntensity = modConfig.PNV10T.NoiseIntensity;
                    pnv10._props.NoiseScale = modConfig.PNV10T.NoiseScale;
                    pnv10._props.DiffuseIntensity = modConfig.PNV10T.DiffuseIntensity;
                    pnv10._props.Color.r = modConfig.PNV10T.Red;
                    pnv10._props.Color.g = modConfig.PNV10T.Green;
                    pnv10._props.Color.b = modConfig.PNV10T.Blue;
                    pnv10._props.Color.a = modConfig.PNV10T.Alpha;
                    logger.info("CV: PNV-10T tuned!");
                }
                //T-7 Thermal Goggles
                if (modConfig.T7.Enabled) 
                {
                    t7._props.IsNoisy = modConfig.T7.Noise;
                    t7._props.NoiseIntensity = modConfig.T7.NoiseIntensity;
                    t7._props.IsMotionBlurred = modConfig.T7.MotionBlur;
                    t7._props.Mask = modConfig.T7.Mask;
                    t7._props.MaskSize = modConfig.T7.MaskSize;
                    t7._props.HeatMin = modConfig.T7.HeatMin;
                    t7._props.ColdMax = modConfig.T7.ColdMax;
                    logger.info("CV: T-7 Thermal Goggles tuned!");
                }
            }
            else
                logger.warning("CV: No db changes made!")
        }
        catch (e) 
        {
            logger.error("CV: Error loading mod");
            logger.error((e as Error).message);
            return;
        }
    }
}

module.exports = { mod: new Mod() }