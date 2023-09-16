using UnityEngine;
using BSG.CameraEffects;
using Aki.Reflection.Patching;
using System.Reflection;

namespace ClearVision {
    public class GogglesPatches : ModulePatch {
        protected override MethodBase GetTargetMethod() {
            var result = typeof(NightVision).GetMethod("method_1", BindingFlags.Instance | BindingFlags.NonPublic);
            return result;
         }

          [PatchPostfix]
         static void Postfix() {
            if(Plugin.GlobalEnabled.Value) { // sanity check
                // Get Camera
                GameObject maincam = GameObject.Find("FPS Camera");
                NightVision nv = maincam.GetComponent<NightVision>();
                CC_Vintage vintage = maincam.GetComponent<CC_Vintage>();
                if(nv.On || nv.InProcessSwitching) {
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
                    return;
                }
                else {
                    vintage.enabled = true;
                    return;
                }
            }
         }
    }


    public class ScopePatches : ModulePatch {
        protected override MethodBase GetTargetMethod() {
            Debug.LogError("ScopePatches GTM()");
            var result = typeof(ThermalVision).GetMethod("method_1", BindingFlags.Instance | BindingFlags.NonPublic);
            return result;
         }

          [PatchPostfix]
         static void Postfix() {
            Debug.LogError("ScopePatches Postfix()");
            if(Plugin.GlobalEnabled.Value) { // sanity check
                // Get Camera
                GameObject maincam = GameObject.Find("FPS Camera");
                ThermalVision t7 = maincam.GetComponent<ThermalVision>();
                CC_Vintage vintage = maincam.GetComponent<CC_Vintage>();
                // Get BaseOpticScope(Clone) obj
                GameObject scope = GameObject.FindGameObjectWithTag("OpticCamera");
                ThermalVision thermal = scope.GetComponent<ThermalVision>();

                if(t7.On) {
                    t7.IsGlitch = Plugin.T7Glitch.Value;
                    t7.IsPixelated = Plugin.T7Pixel.Value;
                    t7.IsNoisy = Plugin.T7Glitch.Value;
                    t7.IsFpsStuck = Plugin.T7Glitch.Value;
                    if (Plugin.T7Glitch.Value) {
                        t7.StuckFpsUtilities.MaxFramerate = Plugin.T7FpsMax.Value;
                        t7.StuckFpsUtilities.MinFramerate = Plugin.T7FpsMax.Value;
                    }
                    t7.TextureMask.Size = Plugin.T7MaskSize.Value;
                    vintage.enabled = false;
                    // no idea how to change the clip plane distance, YET.
                }
                if (thermal.On && !t7.On) { // Make sure the thermal headgear isn't on, no need to do worthless changes.
                    thermal.IsGlitch = Plugin.ThermalGlitch.Value;
                    thermal.IsPixelated = Plugin.ThermalPixel.Value;
                    thermal.IsNoisy = Plugin.ThermalGlitch.Value;
                    thermal.IsFpsStuck = Plugin.ThermalGlitch.Value;
                    if (Plugin.ThermalGlitch.Value) {
                        thermal.StuckFpsUtilities.MaxFramerate = Plugin.ThermalFpsMax.Value;
                        thermal.StuckFpsUtilities.MinFramerate = Plugin.ThermalFpsMax.Value;
                    }
                    vintage.enabled = false;
                }
                else {
                    vintage.enabled = true;
                    return;
                }
            }
            else 
                return;
         }
    }
}