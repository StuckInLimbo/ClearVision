using Aki.Reflection.Patching;
using BepInEx;
using BepInEx.Configuration;
using System.Reflection;
using UnityEngine;
using EFT;
using System.Threading.Tasks;

namespace ClearVision {
    [BepInPlugin("com.LimboFPS.ClearVision", "ClearVision", "1.0.0")]
    public class Plugin : BaseUnityPlugin {
        public static ConfigEntry<bool> GlobalEnabled { get; set; }
        // GPNVG-18
        public static ConfigEntry<bool> GPEnabled { get; set; }
        public static ConfigEntry<float> GPIntensity { get; set; }
        public static ConfigEntry<float> GPNoiseIntensity { get; set; }
        public static ConfigEntry<float> GPNoiseScale { get; set; }
        public static ConfigEntry<float> GPDiffuseIntensity { get; set; }
        public static ConfigEntry<string> GPMask { get; set; }
        public static ConfigEntry<float> GPMaskSize { get; set; }
        public static ConfigEntry<Color> GPColor { get; set; }

        // PNV-10T
        public static ConfigEntry<bool> PNVEnabled { get; set; }
        public static ConfigEntry<float> PNVIntensity { get; set; }
        public static ConfigEntry<float> PNVNoiseIntensity { get; set; }
        public static ConfigEntry<float> PNVNoiseScale { get; set; }
        public static ConfigEntry<float> PNVDiffuseIntensity { get; set; }
        public static ConfigEntry<string> PNVMask { get; set; }
        public static ConfigEntry<float> PNVMaskSize { get; set; }
        public static ConfigEntry<Color> PNVColor { get; set; }

        // Armasight N-15
        public static ConfigEntry<bool> N15Enabled { get; set; }
        public static ConfigEntry<float> N15Intensity { get; set; }
        public static ConfigEntry<float> N15NoiseIntensity { get; set; }
        public static ConfigEntry<float> N15NoiseScale { get; set; }
        public static ConfigEntry<float> N15DiffuseIntensity { get; set; }
        public static ConfigEntry<string> N15Mask { get; set; }
        public static ConfigEntry<float> N15MaskSize { get; set; }
        public static ConfigEntry<Color> N15Color { get; set; }

        // PVS-14 Night Vision Monocular
        public static ConfigEntry<bool> PVSEnabled { get; set; }
        public static ConfigEntry<float> PVSIntensity { get; set; }
        public static ConfigEntry<float> PVSNoiseIntensity { get; set; }
        public static ConfigEntry<float> PVSNoiseScale { get; set; }
        public static ConfigEntry<float> PVSDiffuseIntensity { get; set; }
        public static ConfigEntry<string> PVSMask { get; set; }
        public static ConfigEntry<float> PVSMaskSize { get; set; }
        public static ConfigEntry<Color> PVSColor { get; set; }

        // T-7 Thermal Goggles
        public static ConfigEntry<bool> T7Enabled { get; set; }
        public static ConfigEntry<bool> T7Noise { get; set; }
        public static ConfigEntry<float> T7NoiseIntensity { get; set; }
        public static ConfigEntry<bool> T7MotionBlur { get; set; }
        public static ConfigEntry<string> T7Mask { get; set; }
        public static ConfigEntry<float> T7MaskSize { get; set; }
        public static ConfigEntry<string> T7RampPalette { get; set; }
        public static ConfigEntry<float> T7RampShift { get; set; }
        public static ConfigEntry<float> T7HeatMin { get; set; }
        public static ConfigEntry<float> T7ColdMax { get; set; }
        public static ConfigEntry<float> T7ColorCoef { get; set; }
        public static ConfigEntry<float> T7ClipPlane { get; set; }

        private void Start() {
            GlobalEnabled = Config.Bind("ClearVision", "GlobalEnabled", true, new ConfigDescription("Main Toggle", null));
            // Night Vision Goggles
            // GPNVG-18 Goggles
            GPEnabled = Config.Bind("GPNVG", "GPEnabled", true, new ConfigDescription("Enable GPNVG-18", null));
            GPIntensity = Config.Bind("GPNVG", "GPIntensity", 2.3f, new ConfigDescription("NVG Intensity", null));
            GPNoiseIntensity = Config.Bind("GPNVG", "GPNoiseIntensity", 0.0f, new ConfigDescription("NVG Noise Intensity", null));
            GPNoiseScale = Config.Bind("GPNVG", "GPNoiseScale", 0.0f, new ConfigDescription("NVG Noise Scale", null));
            GPDiffuseIntensity = Config.Bind("GPNVG", "GPDiffuseIntensity", 0.0f, new ConfigDescription("NVG Diffuse Intensity", null));
            GPMask = Config.Bind("GPNVG", "GPMask", "Anvis", new ConfigDescription("NVG Mask Overlay", null));
            GPMaskSize = Config.Bind("GPNVG", "GPMaskSize", 1.2f, new ConfigDescription("NVG Mask Overlay Size", null));
            GPColor = Config.Bind("GPNVG", "GPColor", new Color(0.00f, 0.78f, 0.78f, 0.99f), new ConfigDescription("NVG Color", null));
            // PNV-10T Goggles
            PNVEnabled = Config.Bind("ClearVision", "PNVEnabled", true, new ConfigDescription("Enable PNV-10", null));
            PNVIntensity = Config.Bind("ClearVision", "PNVIntensity", 2.3f, new ConfigDescription("NVG Intensity", new AcceptableValueRange<float>(0f, 5f)));
            PNVNoiseIntensity = Config.Bind("ClearVision", "PNVNoiseIntensity", 0.0f, new ConfigDescription("NVG Noise Intensity", new AcceptableValueRange<float>(0f, 5f)));
            PNVNoiseScale = Config.Bind("ClearVision", "PNVNoiseScale", 0.0f, new ConfigDescription("NVG Noise Scale", new AcceptableValueRange<float>(0f, 5f)));
            PNVDiffuseIntensity = Config.Bind("ClearVision", "PNVDiffuseIntensity", 0.0f, new ConfigDescription("NVG Diffuse Intensity", new AcceptableValueRange<float>(0f, 5f)));
            PNVMask = Config.Bind("ClearVision", "PNVMask", "Binocular", new ConfigDescription("NVG Mask Overlay", null));
            PNVMaskSize = Config.Bind("ClearVision", "PNVMaskSize", 1.2f, new ConfigDescription("NVG Mask Overlay Size", new AcceptableValueRange<float>(0f, 5f)));
            PNVColor = Config.Bind("ClearVision", "PNVColor", new Color(0.00f, 0.78f, 0.00f, 0.99f), new ConfigDescription("NVG Color", null));
            // N15 Goggles
            N15Enabled = Config.Bind("N15", "N15Enabled", true, new ConfigDescription("Enable N-15", null));
            N15Intensity = Config.Bind("N15", "N15Intensity", 2.3f, new ConfigDescription("NVG Intensity", new AcceptableValueRange<float>(0f, 5f)));
            N15NoiseIntensity = Config.Bind("N15", "N15NoiseIntensity", 0.0f, new ConfigDescription("NVG Noise Intensity", new AcceptableValueRange<float>(0f, 5f)));
            N15NoiseScale = Config.Bind("N15", "N15NoiseScale", 0.0f, new ConfigDescription("NVG Noise Scale", new AcceptableValueRange<float>(0f, 5f)));
            N15DiffuseIntensity = Config.Bind("N15", "N15DiffuseIntensity", 0.0f, new ConfigDescription("NVG Diffuse Intensity", new AcceptableValueRange<float>(0f, 5f)));
            N15Mask = Config.Bind("N15", "N15Mask", "Binocular", new ConfigDescription("NVG Mask Overlay", null));
            N15MaskSize = Config.Bind("N15", "N15MaskSize", 1.2f, new ConfigDescription("NVG Mask Overlay Size", new AcceptableValueRange<float>(0f, 5f)));
            N15Color = Config.Bind("N15", "N15Color", new Color(0.00f, 0.39f, 0.78f, 0.99f), new ConfigDescription("NVG Color", null));
            // PVS-14 Monocular
            PVSEnabled = Config.Bind("PVS14", "PVSEnabled", true, new ConfigDescription("Enable PVS-14", null));
            PVSIntensity = Config.Bind("PVS14", "PVSIntensity", 2.3f, new ConfigDescription("NVG Intensity", new AcceptableValueRange<float>(0f, 5f)));
            PVSNoiseIntensity = Config.Bind("PVS14", "PVSNoiseIntensity", 0.0f, new ConfigDescription("NVG Noise Intensity", new AcceptableValueRange<float>(0f, 5f)));
            PVSNoiseScale = Config.Bind("PVS14", "PVSNoiseScale", 0.0f, new ConfigDescription("NVG Noise Scale", new AcceptableValueRange<float>(0f, 5f)));
            PVSDiffuseIntensity = Config.Bind("PVS14", "PVSDiffuseIntensity", 0.0f, new ConfigDescription("NVG Diffuse Intensity", new AcceptableValueRange<float>(0f, 5f)));
            PVSMask = Config.Bind("PVS14", "PVSMask", "OldMonocular", new ConfigDescription("NVG Mask Overlay", null));
            PVSMaskSize = Config.Bind("PVS14", "PVSMaskSize", 1.2f, new ConfigDescription("NVG Mask Overlay Size", new AcceptableValueRange<float>(0f, 5f)));
            PVSColor = Config.Bind("PVS14", "PVSColor", new Color(0.78f, 0.39f, 0.39f, 0.99f), new ConfigDescription("NVG Color", null));
            // T-7
            T7Enabled = Config.Bind("T7", "T7Enabled", true, new ConfigDescription("Enable T-7", null));
            T7Noise = Config.Bind("T7", "T7Noise", false, new ConfigDescription("NVG Noise", null));
            T7NoiseIntensity = Config.Bind("T7", "T7NoiseIntensity", 0.0f, new ConfigDescription("NVG Noise Intensity", new AcceptableValueRange<float>(0f, 5f)));
            T7MotionBlur = Config.Bind("T7", "T7MotionBlur", false, new ConfigDescription("NVG Noise Scale", new AcceptableValueRange<float>(0f, 5f)));
            T7Mask = Config.Bind("T7", "T7Mask", "Thermal", new ConfigDescription("NVG Mask Overlay", null));
            T7MaskSize = Config.Bind("T7", "T7MaskSize", 1.2f, new ConfigDescription("NVG Mask Overlay Size", new AcceptableValueRange<float>(0f, 5f)));
            T7RampPalette = Config.Bind("T7", "T7RampPalette", "BlackHot", new ConfigDescription("NVG Mask Overlay", null));
            // Thermal Scopes
            // REAP-IR
        }

        private void Awake() {
            Debug.LogError("ClearVision Awake()");
            new GogglesPatches().Enable();
            new ScopePatches().Enable();
        }
    }
}