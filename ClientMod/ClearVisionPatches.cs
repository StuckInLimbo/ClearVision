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
                if(nv != null && (nv.On || nv.InProcessSwitching)) {
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
                // Get BaseOpticScope(Clone) obj, but need to check if it actually exists
                GameObject scope = GameObject.FindGameObjectWithTag("OpticCamera");
                ThermalVision thermal = scope.GetComponent<ThermalVision>();

                if(t7 != null && (t7.On || t7.InProcessSwitching)) {
                    t7.IsGlitch = Plugin.T7Glitch.Value;
                    t7.IsPixelated = Plugin.T7Pixel.Value;
                    t7.IsNoisy = Plugin.T7Glitch.Value;
                    t7.IsFpsStuck = Plugin.T7Glitch.Value;
                    if (Plugin.T7Fps.Value) {
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
                    
                    vintage.enabled = false;
                    // Far/near clip plane distance is done on the optic_camera for each "mode" acording to UABEA,
                    // just need to see where it is in the data structure
                    return;
                }
                else if (scope != null && thermal != null && (thermal.On || t7.InProcessSwitching)) {
                    //scope.
                    thermal.IsGlitch = Plugin.ThermalGlitch.Value;
                    thermal.IsPixelated = Plugin.ThermalPixel.Value;
                    thermal.IsNoisy = Plugin.ThermalGlitch.Value;
                    thermal.IsFpsStuck = Plugin.ThermalGlitch.Value;
                    if (Plugin.ThermalGlitch.Value) {
                        thermal.StuckFpsUtilities.MaxFramerate = Plugin.ThermalFpsMax.Value;
                        thermal.StuckFpsUtilities.MinFramerate = Plugin.ThermalFpsMax.Value;
                    }
                    vintage.enabled = false;
                    return;
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