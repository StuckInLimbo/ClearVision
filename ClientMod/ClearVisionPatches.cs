using UnityEngine;
using BSG.CameraEffects;
using Aki.Reflection.Patching;
using System.Reflection;
using Comfort.Common;
using EFT;

namespace ClearVision {
    public class GogglesPatches : ModulePatch {
        protected override MethodBase GetTargetMethod() {
            Logger.LogInfo("GogglesPatches GTM()");
            var result = typeof(NightVision).GetMethod("method_1", BindingFlags.Instance | BindingFlags.NonPublic);
            return result;
         }

          [PatchPostfix]
         static void Postfix() {
            if(Plugin.GlobalEnabled.Value && Singleton<GameWorld>.Instantiated) { // sanity check
                // Get Camera
                GameObject maincam = GameObject.Find("FPS Camera");
                NightVision nv = maincam.GetComponent<NightVision>();
                CC_Vintage vintage = maincam.GetComponent<CC_Vintage>();
                if(nv != null && nv.On) {
                    Logger.LogInfo("nv is not null and is enabled/being enabled");
                    nv.Intensity = Plugin.NVGIntensity.Value;
                    nv.NoiseIntensity = Plugin.NVGNoiseIntensity.Value;
                    nv.NoiseScale = Plugin.NVGNoiseScale.Value;
                    if (Plugin.NVGMaskEnabled.Value) {
                        nv.TextureMask.enabled = true;
                        nv.TextureMask.Size = Plugin.NVGMaskSize.Value;
                    }
                    else {
                        nv.TextureMask.enabled = false;
                    }
                    nv.Color = Plugin.NVGColor.Value;
                    
                    vintage.enabled = false;
                    nv.ApplySettings();
                    return;
                }
                else {
                    vintage.enabled = true;
                    nv.ApplySettings();
                    return;
                }
            }
         }
    }


    public class ScopePatches : ModulePatch {
        protected override MethodBase GetTargetMethod() {
            Logger.LogInfo("ScopePatches GTM()");
            var result = typeof(ThermalVision).GetMethod("method_1", BindingFlags.Instance | BindingFlags.NonPublic);
            return result;
         }

          [PatchPostfix]
         static void Postfix() {
            if(Plugin.GlobalEnabled.Value && Singleton<GameWorld>.Instantiated) { // sanity check
                GameObject maincam = GameObject.Find("FPS Camera");
                ThermalVision t7 = maincam.GetComponent<ThermalVision>();
                if(t7.On) {
                    t7.IsGlitch = Plugin.T7Glitch.Value;
                    t7.IsPixelated = Plugin.T7Pixel.Value;
                    t7.IsNoisy = Plugin.T7Noise.Value;
                    t7.IsMotionBlurred = Plugin.T7MotionBlur.Value;
                    t7.IsFpsStuck = Plugin.T7FpsLock.Value;
                    if (Plugin.T7FpsLock.Value) {
                        t7.StuckFpsUtilities.MaxFramerate = Plugin.T7FpsMax.Value;
                        t7.StuckFpsUtilities.MinFramerate = Plugin.T7FpsMax.Value;
                    }
                    if(Plugin.T7MaskEnabled.Value) {
                        t7.TextureMask.enabled = true;
                        t7.TextureMask.Size = Plugin.T7MaskSize.Value;
                    }
                    else{
                        t7.TextureMask.enabled = false;
                    }
                    // Far/near clip plane distance is done on the optic_camera for each "mode" acording to UABEA,
                    // just need to see where it is in the data structure
                    return;
                }
                else
                    return;
            }
         }
    }
}