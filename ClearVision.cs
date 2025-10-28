using SPTarkov.DI.Annotations;
using SPTarkov.Server.Core.DI;
using SPTarkov.Server.Core.Helpers;
using SPTarkov.Server.Core.Models.Common;
using SPTarkov.Server.Core.Models.Utils;
using SPTarkov.Server.Core.Services;
using System.Reflection;

namespace ClearVision;

[Injectable(TypePriority = OnLoadOrder.PostSptModLoader)]
public class ClearVision(ISptLogger<ClearVision> logger, DatabaseService databaseService, ModHelper modHelper) : IOnLoad
{
	private Config NVGConfig = new Config();

	public Task OnLoad()
	{
		// Load our config file
		try
		{
			var pathToMod = modHelper.GetAbsolutePathToModFolder(Assembly.GetExecutingAssembly());
			NVGConfig = modHelper.GetJsonDataFromFile<Config>(pathToMod, "config.json");
		}
		catch (Exception ex)
		{
			logger.Error($"ClearVision failed to load config file: {ex}");
			return Task.CompletedTask;
		}

		ModifiyNVG();

		logger.Success("ClearVision loaded!");
		return Task.CompletedTask;
	}

	private void ModifiyNVG()
	{
		var items = databaseService.GetItems();

		// Map item IDs to their corresponding configurations
		var nvgMappings = new Dictionary<MongoId, GPNVGConfig>
		{
			{ ItemTpl.NIGHTVISION_L3HARRIS_GPNVG18_NIGHT_VISION_GOGGLES, NVGConfig.GPNVG },
			{ ItemTpl.NIGHTVISION_ARMASIGHT_N15_NIGHT_VISION_GOGGLES, NVGConfig.N15 },
			{ ItemTpl.NIGHTVISION_L3HARRIS_ANPVS14_NIGHT_VISION_MONOCULAR, NVGConfig.PVS14 },
			{ ItemTpl.NIGHTVISION_PNV10T_NIGHT_VISION_GOGGLES, NVGConfig.PNV10T }
		};

		// Iterate over the mappings and apply the configurations
		foreach (var (itemId, config) in nvgMappings)
		{
			if (items.TryGetValue(itemId, out var nvg))
			{
				if (config.Enabled)
				{
					try
					{
						nvg.Properties.Intensity = config.Intensity;
						nvg.Properties.NoiseIntensity = config.NoiseIntensity;
						nvg.Properties.NoiseScale = config.NoiseScale;
						nvg.Properties.DiffuseIntensity = config.DiffuseIntensity;
						nvg.Properties.Mask = config.Mask;
						nvg.Properties.MaskSize = config.MaskSize;
						nvg.Properties.Color.R = config.Red;
						nvg.Properties.Color.G = config.Green;
						nvg.Properties.Color.B = config.Blue;
						nvg.Properties.Color.A = config.Alpha;
					}
					catch (Exception ex)
					{
						logger.Error($"Error modifying NVG item {itemId}: {ex}");
					}
				}
			}
		}

		// Handle T7 separately
		if (items.TryGetValue(ItemTpl.THERMALVISION_T7_THERMAL_GOGGLES_WITH_A_NIGHT_VISION_MOUNT, out var t7))
		{
			if (NVGConfig.T7.Enabled)
			{
				try
				{
					t7.Properties.IsNoisy = NVGConfig.T7.Noise;
					t7.Properties.NoiseIntensity = NVGConfig.T7.NoiseIntensity;
					t7.Properties.IsMotionBlurred = NVGConfig.T7.MotionBlur;
					t7.Properties.Mask = NVGConfig.T7.Mask;
					t7.Properties.RampPalette = NVGConfig.T7.RampPalette;
					t7.Properties.RampShift = NVGConfig.T7.RampShift;
					t7.Properties.MaskSize = NVGConfig.T7.MaskSize;
					t7.Properties.HeatMin = NVGConfig.T7.HeatMin;
					t7.Properties.ColdMax = NVGConfig.T7.ColdMax;
					t7.Properties.MainTexColorCoef = NVGConfig.T7.MainTexColorCoef;
					t7.Properties.SpecularCoef = NVGConfig.T7.SpecularCoef;
					//t7Item.Properties.ClipPlane = NVGConfig.T7.ClipPlane; // Doesn't exist anymore?
				}
				catch (Exception ex)
				{
					logger.Error($"Error modifying T-7: {ex}");
				}
			}
		}
	}
}