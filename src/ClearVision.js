//By Limbo#1337

"use strict";

class Mod {
	constructor() {
		this.mod = "ClearVision";

		Logger.info(`Loading: ${this.mod}`);
		ModLoader.onLoad[this.mod] = this.load.bind(this);
	}

	load() {
		const config = require("../cfg/config.json");
		const items = DatabaseServer.tables.templates.items;
		const pvs14 = items["57235b6f24597759bf5a30f1"];
		const n15 = items["5c066e3a0db834001b7353f0"];
		const gpnvg = items["5c0558060db834001b735271"];
		const pnv10 = items["5c0696830db834001d23f5da"];
		const t7 = items["5c110624d174af029e69734c"];
		if(config.ClearVision.Enabled) {
			Logger.info("CV: Applying tune ups!");
			//AN/PVS-14 Monocular
			if(config.PVS14.Enabled) {
				pvs14._props.Intensity = config.PVS14.Intensity;
				pvs14._props.Mask = config.PVS14.Mask;
				pvs14._props.MaskSize = config.PVS14.MaskSize;
				pvs14._props.NoiseIntensity = config.PVS14.NoiseIntensity;
				pvs14._props.NoiseScale = config.PVS14.NoiseScale;
				pvs14._props.DiffuseIntensity = config.PVS14.DiffuseIntensity;
				pvs14._props.Color[0] = config.PVS14.Red;
				pvs14._props.Color[1] = config.PVS14.Green;
				pvs14._props.Color[2] = config.PVS14.Blue;
				pvs14._props.Color[3] = config.PVS14.Alpha;
				Logger.info("CV: AN/PVS14 Monocular tuned!");
			}
			//Armasight N-15
			if(config.N15.Enabled) {
				n15._props.Intensity = config.N15.Intensity;
				n15._props.Mask = config.N15.Mask;
				n15._props.MaskSize = config.N15.MaskSize;
				n15._props.NoiseIntensity = config.N15.NoiseIntensity;
				n15._props.NoiseScale = config.N15.NoiseScale;
				n15._props.DiffuseIntensity = config.N15.DiffuseIntensity;
				n15._props.Color[0] = config.N15.Red;
				n15._props.Color[1] = config.N15.Green;
				n15._props.Color[2] = config.N15.Blue;
				n15._props.Color[3] = config.N15.Alpha;
				Logger.info("CV: Armasight N-15 tuned!");
			}
			//GPNVG-18
			if(config.GPNVG.Enabled) {
				gpnvg._props.Intensity = config.GPNVG.Intensity;
				gpnvg._props.Mask = config.GPNVG.Mask;
				gpnvg._props.MaskSize = config.GPNVG.MaskSize;
				gpnvg._props.NoiseIntensity = config.GPNVG.NoiseIntensity;
				gpnvg._props.NoiseScale = config.GPNVG.NoiseScale;
				gpnvg._props.DiffuseIntensity = config.GPNVG.DiffuseIntensity;
				gpnvg._props.Color[0] = config.GPNVG.Red;
				gpnvg._props.Color[1] = config.GPNVG.Green;
				gpnvg._props.Color[2] = config.GPNVG.Blue;
				gpnvg._props.Color[3] = config.GPNVG.Alpha;
				Logger.info("CV: GPNVG-18 tuned!");
			}
			//PNV-10T
			if(config.PNV10T.Enabled) {
				pnv10._props.Intensity = config.PNV10T.Intensity;
				pnv10._props.Mask = config.PNV10T.Mask;
				pnv10._props.MaskSize = config.PNV10T.MaskSize;
				pnv10._props.NoiseIntensity = config.PNV10T.NoiseIntensity;
				pnv10._props.NoiseScale = config.PNV10T.NoiseScale;
				pnv10._props.DiffuseIntensity = config.PNV10T.DiffuseIntensity;
				pnv10._props.Color[0] = config.PNV10T.Red;
				pnv10._props.Color[1] = config.PNV10T.Green;
				pnv10._props.Color[2] = config.PNV10T.Blue;
				pnv10._props.Color[3] = config.PNV10T.Alpha;
				Logger.info("CV: PNV-10T tuned!");
			}
			//T-7 Thermal Goggles
			if(config.T7.Enabled) {
				t7._props.IsNoisy = config.T7.Noise;
				t7._props.NoiseIntensity = config.T7.NoiseIntensity;
				t7._props.IsMotionBlurred = config.T7.MotionBlur;
				t7._props.Mask = config.T7.Mask;
				t7._props.MaskSize = config.T7.MaskSize;
				t7._props.HeatMin = config.T7.HeatMin;
				t7._props.ColdMax = config.T7.ColdMax;
				Logger.info("CV: T-7 Thermal Goggles tuned!");
			}
		}
		Logger.info("CV: Thermal sights tuned to 60Hz and glitch free!");
	}
}

module.exports.Mod = Mod;
