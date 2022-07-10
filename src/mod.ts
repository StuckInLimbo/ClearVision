import { DependencyContainer } from "tsyringe";
import { IMod } from "@spt-aki/models/external/mod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";

class Mod implements IMod
{
    private modConfig = require("../cfg/config.json");

    // Code added here will load BEFORE the server has started loading
    public load(container: DependencyContainer): void 
    {
        const logger = container.resolve<ILogger>("WinstonLogger");
        logger.info("Loading: ClearVision");
    }

    // Code added here will be run AFTER the server has started
    public delayedLoad(container: DependencyContainer): void 
    {
        // get the logger from the server container
        const logger = container.resolve<ILogger>("WinstonLogger");
        try 
        {
            logger.info("CV: Applying tune ups!");

            const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
            const items = databaseServer.getTables().templates.items;

            const pvs14 = items["57235b6f24597759bf5a30f1"];
            const n15 = items["5c066e3a0db834001b7353f0"];
            const gpnvg = items["5c0558060db834001b735271"];
            const pnv10 = items["5c0696830db834001d23f5da"];
            const t7 = items["5c110624d174af029e69734c"];

            if (this.modConfig.ClearVision.Enabled) 
            {
                if (this.modConfig.PVS14.Enabled) 
                {
                    pvs14._props.Intensity = this.modConfig.PVS14.Intensity;
                    pvs14._props.Mask = this.modConfig.PVS14.Mask;
                    pvs14._props.MaskSize = this.modConfig.PVS14.MaskSize;
                    pvs14._props.NoiseIntensity = this.modConfig.PVS14.NoiseIntensity;
                    pvs14._props.NoiseScale = this.modConfig.PVS14.NoiseScale;
                    pvs14._props.DiffuseIntensity = this.modConfig.PVS14.DiffuseIntensity;
                    pvs14._props.Color[0] = this.modConfig.PVS14.Red;
                    pvs14._props.Color[1] = this.modConfig.PVS14.Green;
                    pvs14._props.Color[2] = this.modConfig.PVS14.Blue;
                    pvs14._props.Color[3] = this.modConfig.PVS14.Alpha;
                    logger.info("CV: AN/PVS14 Monocular tuned!");
                }

                //Armasight N-15
                if (this.modConfig.N15.Enabled) 
                {
                    n15._props.Intensity = this.modConfig.N15.Intensity;
                    n15._props.Mask = this.modConfig.N15.Mask;
                    n15._props.MaskSize = this.modConfig.N15.MaskSize;
                    n15._props.NoiseIntensity = this.modConfig.N15.NoiseIntensity;
                    n15._props.NoiseScale = this.modConfig.N15.NoiseScale;
                    n15._props.DiffuseIntensity = this.modConfig.N15.DiffuseIntensity;
                    n15._props.Color[0] = this.modConfig.N15.Red;
                    n15._props.Color[1] = this.modConfig.N15.Green;
                    n15._props.Color[2] = this.modConfig.N15.Blue;
                    n15._props.Color[3] = this.modConfig.N15.Alpha;
                    logger.info("CV: Armasight N-15 tuned!");
                }
                //GPNVG-18
                if (this.modConfig.GPNVG.Enabled) 
                {
                    gpnvg._props.Intensity = this.modConfig.GPNVG.Intensity;
                    gpnvg._props.Mask = this.modConfig.GPNVG.Mask;
                    gpnvg._props.MaskSize = this.modConfig.GPNVG.MaskSize;
                    gpnvg._props.NoiseIntensity = this.modConfig.GPNVG.NoiseIntensity;
                    gpnvg._props.NoiseScale = this.modConfig.GPNVG.NoiseScale;
                    gpnvg._props.DiffuseIntensity = this.modConfig.GPNVG.DiffuseIntensity;
                    gpnvg._props.Color[0] = this.modConfig.GPNVG.Red;
                    gpnvg._props.Color[1] = this.modConfig.GPNVG.Green;
                    gpnvg._props.Color[2] = this.modConfig.GPNVG.Blue;
                    gpnvg._props.Color[3] = this.modConfig.GPNVG.Alpha;
                    logger.info("CV: GPNVG-18 tuned!");
                }
                //PNV-10T
                if (this.modConfig.PNV10T.Enabled) 
                {
                    pnv10._props.Intensity = this.modConfig.PNV10T.Intensity;
                    pnv10._props.Mask = this.modConfig.PNV10T.Mask;
                    pnv10._props.MaskSize = this.modConfig.PNV10T.MaskSize;
                    pnv10._props.NoiseIntensity = this.modConfig.PNV10T.NoiseIntensity;
                    pnv10._props.NoiseScale = this.modConfig.PNV10T.NoiseScale;
                    pnv10._props.DiffuseIntensity = this.modConfig.PNV10T.DiffuseIntensity;
                    pnv10._props.Color[0] = this.modConfig.PNV10T.Red;
                    pnv10._props.Color[1] = this.modConfig.PNV10T.Green;
                    pnv10._props.Color[2] = this.modConfig.PNV10T.Blue;
                    pnv10._props.Color[3] = this.modConfig.PNV10T.Alpha;
                    logger.info("CV: PNV-10T tuned!");
                }
                //T-7 Thermal Goggles
                if (this.modConfig.T7.Enabled) 
                {
                    t7._props.IsNoisy = this.modConfig.T7.Noise;
                    t7._props.NoiseIntensity = this.modConfig.T7.NoiseIntensity;
                    t7._props.IsMotionBlurred = this.modConfig.T7.MotionBlur;
                    t7._props.Mask = this.modConfig.T7.Mask;
                    t7._props.MaskSize = this.modConfig.T7.MaskSize;
                    t7._props.HeatMin = this.modConfig.T7.HeatMin;
                    t7._props.ColdMax = this.modConfig.T7.ColdMax;
                    logger.info("CV: T-7 Thermal Goggles tuned!");
                }
            }
            logger.info("CV: Thermal sights tuned to 60Hz and glitch free!");
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