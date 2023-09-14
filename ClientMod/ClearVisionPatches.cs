using UnityEngine;
using BSG.CameraEffects;
using Aki.Reflection.Patching;
using System.Reflection;

namespace ClearVision {
    public class GogglesPatches : ModulePatch {
        protected override MethodBase GetTargetMethod() {
            Debug.LogError("GogglesPatches GTM()");
            var result = typeof(NightVision).GetMethod("method_1", BindingFlags.Instance | BindingFlags.NonPublic);
            return result;
         }

          [PatchPostfix]
         static void Postfix() {
            Debug.LogError("GogglesPatches Postfix()");
            if(Plugin.GlobalEnabled.Value) { // sanity check
                // Get Camera
                GameObject maincam = GameObject.Find("FPS Camera");
                NightVision nv = maincam.GetComponent<NightVision>();
                CC_Vintage vintage = maincam.GetComponent<CC_Vintage>();
                if(nv.On || nv.InProcessSwitching) {
                    // Apply each individual setting depending on original texmask, hence why we cannot change it, but rather disable it.
                    if(nv.TextureMask.Mask == nv.AnvisMaskTexture) {
                        nv.Intensity = Plugin.GPIntensity.Value;
                        nv.NoiseIntensity = Plugin.GPNoiseIntensity.Value;
                        nv.NoiseScale = Plugin.GPNoiseScale.Value;
                        if (Plugin.GPMaskEnabled.Value) {
                            nv.TextureMask.enabled = true;
                            nv.TextureMask.Size = Plugin.GPMaskSize.Value;
                        }
                        else {
                            nv.TextureMask.enabled = false;
                        }
                        nv.Color = Plugin.GPColor.Value;
                    } 
                    else if (nv.TextureMask.Mask == nv.BinocularMaskTexture) {
                        nv.Intensity = Plugin.GPIntensity.Value;
                        nv.NoiseIntensity = Plugin.GPNoiseIntensity.Value;
                        nv.NoiseScale = Plugin.GPNoiseScale.Value;
                        if (Plugin.GPMaskEnabled.Value) {
                            nv.TextureMask.enabled = true;
                            nv.TextureMask.Size = Plugin.GPMaskSize.Value;
                        }
                        else {
                            nv.TextureMask.enabled = false;
                        }
                        nv.Color = Plugin.GPColor.Value;
                    } 
                    else if (nv.TextureMask.Mask == nv.OldMonocularMaskTexture) {
                        nv.Intensity = Plugin.GPIntensity.Value;
                        nv.NoiseIntensity = Plugin.GPNoiseIntensity.Value;
                        nv.NoiseScale = Plugin.GPNoiseScale.Value;
                        if (Plugin.GPMaskEnabled.Value) {
                            nv.TextureMask.enabled = true;
                            nv.TextureMask.Size = Plugin.GPMaskSize.Value;
                        }
                        else {
                            nv.TextureMask.enabled = false;
                        }
                        nv.Color = Plugin.GPColor.Value;
                    } 
                    else { // makes any other exception to the above be noiseless, but still otherwise vanilla.
                        nv.Intensity = 2.3f;
                        nv.NoiseIntensity = 0.0f;
                        nv.NoiseScale = 0.0f;
                        nv.TextureMask.enabled = true;
                        nv.TextureMask.Size = 1.2f;
                        // color left default
                    }
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
                else if (thermal.On && !t7.On) { // Make sure the thermal headgear isn't on, no need to do worthless changes.
                    //how do I determine which scope is which FUCK
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