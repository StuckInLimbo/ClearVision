using BepInEx;
using BepInEx.Configuration;
using UnityEngine;

namespace ClearVision {
    [BepInPlugin("com.LimboFPS.ClearVision", "LimboFPS-ClearVision", "1.0.0")]
    public class Plugin : BaseUnityPlugin {
        public static ConfigEntry<bool> GlobalEnabled { get; set; }
        
        // NVG Sights
        public static ConfigEntry<bool> NVGEnabled { get; set; }
        public static ConfigEntry<float> NVGIntensity { get; set; }
        public static ConfigEntry<float> NVGNoiseIntensity { get; set; }
        public static ConfigEntry<float> NVGNoiseScale { get; set; }
        public static ConfigEntry<float> NVGDiffuseIntensity { get; set; }
        public static ConfigEntry<bool> NVGMaskEnabled { get; set; }
        public static ConfigEntry<float> NVGMaskSize { get; set; }
        public static ConfigEntry<Color> NVGColor { get; set; }

        // T-7 Thermal Goggles
        public static ConfigEntry<bool> T7Enabled { get; set; }
        public static ConfigEntry<bool> T7Glitch { get; set; }
        public static ConfigEntry<bool> T7Noise { get; set; }
        public static ConfigEntry<bool> T7Pixel { get; set; }
        public static ConfigEntry<bool> T7Fps { get; set; }
        public static ConfigEntry<int> T7FpsMax { get; set; }
        public static ConfigEntry<bool> T7MotionBlur { get; set; }
        public static ConfigEntry<bool> T7MaskEnabled { get; set; }
        public static ConfigEntry<float> T7MaskSize { get; set; }
        
        // All Thermal Sights
        public static ConfigEntry<bool> ThermalEnabled { get; set; }
        public static ConfigEntry<bool> ThermalGlitch { get; set; }
        public static ConfigEntry<bool> ThermalNosie { get; set; }
        public static ConfigEntry<bool> ThermalPixel { get; set; }
        public static ConfigEntry<bool> ThermalFpsLock { get; set; }
        public static ConfigEntry<int> ThermalFpsMax { get; set; }
        public static ConfigEntry<bool> ThermalMotionBlur { get; set; }

        private void Start() {
            Debug.LogError("ClearVision Start()");
            GlobalEnabled = Config.Bind("ClearVision", "GlobalEnabled", true, new ConfigDescription("Main Toggle", null));
            // NVG Goggles
            NVGEnabled = Config.Bind("NVG", "GPEnabled", true, new ConfigDescription("Enable GPNVG-18", null));
            NVGIntensity = Config.Bind("NVG", "GPIntensity", 2.3f, new ConfigDescription("NVG Intensity", null));
            NVGNoiseIntensity = Config.Bind("NVG", "GPNoiseIntensity", 0.0f, new ConfigDescription("NVG Noise Intensity", null));
            NVGNoiseScale = Config.Bind("NVG", "GPNoiseScale", 0.0f, new ConfigDescription("NVG Noise Scale", null));
            NVGDiffuseIntensity = Config.Bind("NVG", "GPDiffuseIntensity", 0.0f, new ConfigDescription("NVG Diffuse Intensity", null));
            NVGMaskEnabled = Config.Bind("NVG", "GPMaskEnabled", true, new ConfigDescription("NVG Mask Overlay", null));
            NVGMaskSize = Config.Bind("NVG", "GPMaskSize", 1.2f, new ConfigDescription("NVG Mask Overlay Size", null));
            NVGColor = Config.Bind("NVG", "GPColor", new Color(0.00f, 0.78f, 0.78f, 0.99f), new ConfigDescription("NVG Color", null));
            // T-7 60Hz?
            T7Enabled = Config.Bind("T7", "T7Enabled", true, new ConfigDescription("Enable T-7", null));
            T7Noise = Config.Bind("T7", "T7Noise", false, new ConfigDescription("T-7 Thermal Noise", null));
            T7Glitch = Config.Bind("T7", "T7Glitch", false, new ConfigDescription("T-7 Thermal Glitchiness", null));
            T7Pixel = Config.Bind("T7", "T7Pixel", false, new ConfigDescription("T-7 Thermal Pixelation", null));
            T7MotionBlur = Config.Bind("T7", "T7MotionBlur", false, new ConfigDescription("T-7 Thermal Motion Blur", null));
            T7Fps = Config.Bind("T7", "T7Fps", false, new ConfigDescription("T-7 FPS Lock Enabled", null));
            T7FpsMax = Config.Bind("T7", "T7FpsMax", 60, new ConfigDescription("T-7 FPS Max FPS", new AcceptableValueRange<int>(15, 60)));
            T7MaskEnabled = Config.Bind("T7", "T7MaskEnabled", true, new ConfigDescription("T-7 Mask Overlay On/Off", null));
            T7MaskSize = Config.Bind("T7", "T7MaskSize", 1.5f, new ConfigDescription("T-7 Mask Overlay Size", new AcceptableValueRange<float>(0f, 5f)));
            // Thermal 60Hz
            ThermalEnabled = Config.Bind("Scopes", "ThermalEnabled", true, new ConfigDescription("Enable Thermal Sights", null));
            ThermalNosie = Config.Bind("Scopes", "ThermalNosie", false, new ConfigDescription("Thermal Noise", null));
            ThermalGlitch = Config.Bind("Scopes", "ThermalGlitch", false, new ConfigDescription("Thermal Glitchiness", null));
            ThermalPixel = Config.Bind("Scopes", "ThermalPixel", false, new ConfigDescription("Thermal Pixelation", null));
            ThermalMotionBlur = Config.Bind("Scopes", "ThermalMotionBlur", false, new ConfigDescription("Thermal Motion Blur", null));
            ThermalFpsLock = Config.Bind("Scopes", "ThermalFpsLock", true, new ConfigDescription("Thermal FPS Lock Enabled", null));
            ThermalFpsMax = Config.Bind("Scopes", "ThermalFpsMax", 60, new ConfigDescription("Thermal FPS Max FPS", new AcceptableValueRange<int>(15, 60)));
        }

        private void Awake() {
            Debug.LogError("ClearVision Awake()");
            new GogglesPatches().Enable();
            new ScopePatches().Enable();
        }
    }
}