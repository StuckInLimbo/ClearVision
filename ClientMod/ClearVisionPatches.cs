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
            // Get Camera
            GameObject maincam = GameObject.Find("FPS Camera");
            NightVision nv = maincam.GetComponent<NightVision>();
            bool isNVGOn = nv.On;
            if(isNVGOn) {
                nv.Mask = nv.AnvisMaskTexture;
                nv.Intensity = Plugin.GPIntensity.Value;
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
            //
         }
    }
}