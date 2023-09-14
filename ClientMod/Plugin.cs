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
        public static ConfigEntry<bool> GPMaskEnabled { get; set; }
        public static ConfigEntry<float> GPMaskSize { get; set; }
        public static ConfigEntry<Color> GPColor { get; set; }

        // PNV-10T
        public static ConfigEntry<bool> PNVEnabled { get; set; }
        public static ConfigEntry<float> PNVIntensity { get; set; }
        public static ConfigEntry<float> PNVNoiseIntensity { get; set; }
        public static ConfigEntry<float> PNVNoiseScale { get; set; }
        public static ConfigEntry<float> PNVDiffuseIntensity { get; set; }
        public static ConfigEntry<bool> PNVMaskEnabled { get; set; }
        public static ConfigEntry<float> PNVMaskSize { get; set; }
        public static ConfigEntry<Color> PNVColor { get; set; }

        // Armasight N-15
        public static ConfigEntry<bool> N15Enabled { get; set; }
        public static ConfigEntry<float> N15Intensity { get; set; }
        public static ConfigEntry<float> N15NoiseIntensity { get; set; }
        public static ConfigEntry<float> N15NoiseScale { get; set; }
        public static ConfigEntry<float> N15DiffuseIntensity { get; set; }
        public static ConfigEntry<bool> N15MaskEnabled { get; set; }
        public static ConfigEntry<float> N15MaskSize { get; set; }
        public static ConfigEntry<Color> N15Color { get; set; }

        // PVS-14 Night Vision Monocular
        public static ConfigEntry<bool> PVSEnabled { get; set; }
        public static ConfigEntry<float> PVSIntensity { get; set; }
        public static ConfigEntry<float> PVSNoiseIntensity { get; set; }
        public static ConfigEntry<float> PVSNoiseScale { get; set; }
        public static ConfigEntry<float> PVSDiffuseIntensity { get; set; }
        public static ConfigEntry<bool> PVSMaskEnabled { get; set; }
        public static ConfigEntry<float> PVSMaskSize { get; set; }
        public static ConfigEntry<Color> PVSColor { get; set; }

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
        
        // REAP-IR WhiteHot/BlackHot Thermal
        public static ConfigEntry<bool> IREnabled { get; set; }
        public static ConfigEntry<bool> IRGlitch { get; set; }
        public static ConfigEntry<bool> IRNoise { get; set; }
        public static ConfigEntry<bool> IRPixel { get; set; }
        public static ConfigEntry<bool> IRFps { get; set; }
        public static ConfigEntry<int> IRFpsMax { get; set; }
        public static ConfigEntry<bool> IRMotionBlur { get; set; }
        
        // FLIR RS-32 Thermal
        public static ConfigEntry<bool> RS32Enabled { get; set; }
        public static ConfigEntry<bool> RS32Glitch { get; set; }
        public static ConfigEntry<bool> RS32Noise { get; set; }
        public static ConfigEntry<bool> RS32Pixel { get; set; }
        public static ConfigEntry<bool> RS32Fps { get; set; }
        public static ConfigEntry<int> RS32FpsMax { get; set; }
        public static ConfigEntry<bool> RS32MotionBlur { get; set; }

        // Torrey Pines Logic T12 30Hz
        public static ConfigEntry<bool> T12Enabled { get; set; }
        public static ConfigEntry<bool> T12Glitch { get; set; }
        public static ConfigEntry<bool> T12Noise { get; set; }
        public static ConfigEntry<bool> T12Pixel { get; set; }
        public static ConfigEntry<bool> T12Fps { get; set; }
        public static ConfigEntry<int> T12FpsMax { get; set; }
        public static ConfigEntry<bool> T12MotionBlur { get; set; }

        // MP-155 Ultima Camera
        public static ConfigEntry<bool> UltimaEnabled { get; set; }
        public static ConfigEntry<bool> UltimaGlitch { get; set; }
        public static ConfigEntry<bool> UltimaNoise { get; set; }
        public static ConfigEntry<bool> UltimaPixel { get; set; }
        public static ConfigEntry<bool> UltimaFps { get; set; }
        public static ConfigEntry<int> UltimaFpsMax { get; set; }
        public static ConfigEntry<bool> UltimaMotionBlur { get; set; }

        private void Start() {
            Debug.LogError("ClearVision Start()");
            GlobalEnabled = Config.Bind("ClearVision", "GlobalEnabled", true, new ConfigDescription("Main Toggle", null));
            // Night Vision Goggles
            // GPNVG-18 Goggles
            GPEnabled = Config.Bind("GPNVG", "GPEnabled", true, new ConfigDescription("Enable GPNVG-18", null));
            GPIntensity = Config.Bind("GPNVG", "GPIntensity", 2.3f, new ConfigDescription("NVG Intensity", null));
            GPNoiseIntensity = Config.Bind("GPNVG", "GPNoiseIntensity", 0.0f, new ConfigDescription("NVG Noise Intensity", null));
            GPNoiseScale = Config.Bind("GPNVG", "GPNoiseScale", 0.0f, new ConfigDescription("NVG Noise Scale", null));
            GPDiffuseIntensity = Config.Bind("GPNVG", "GPDiffuseIntensity", 0.0f, new ConfigDescription("NVG Diffuse Intensity", null));
            GPMaskEnabled = Config.Bind("GPNVG", "GPMaskEnabled", true, new ConfigDescription("NVG Mask Overlay", null));
            GPMaskSize = Config.Bind("GPNVG", "GPMaskSize", 1.2f, new ConfigDescription("NVG Mask Overlay Size", null));
            GPColor = Config.Bind("GPNVG", "GPColor", new Color(0.00f, 0.78f, 0.78f, 0.99f), new ConfigDescription("NVG Color", null));
            // PNV-10T Goggles
            PNVEnabled = Config.Bind("PNV", "PNVEnabled", true, new ConfigDescription("Enable PNV-10", null));
            PNVIntensity = Config.Bind("PNV", "PNVIntensity", 2.3f, new ConfigDescription("NVG Intensity", new AcceptableValueRange<float>(0f, 5f)));
            PNVNoiseIntensity = Config.Bind("PNV", "PNVNoiseIntensity", 0.0f, new ConfigDescription("NVG Noise Intensity", new AcceptableValueRange<float>(0f, 5f)));
            PNVNoiseScale = Config.Bind("PNV", "PNVNoiseScale", 0.0f, new ConfigDescription("NVG Noise Scale", new AcceptableValueRange<float>(0f, 5f)));
            PNVDiffuseIntensity = Config.Bind("PNV", "PNVDiffuseIntensity", 0.0f, new ConfigDescription("NVG Diffuse Intensity", new AcceptableValueRange<float>(0f, 5f)));
            PNVMaskEnabled = Config.Bind("PNV", "PNVMaskEnabled", true, new ConfigDescription("NVG Mask Overlay", null));
            PNVMaskSize = Config.Bind("PNV", "PNVMaskSize", 1.2f, new ConfigDescription("NVG Mask Overlay Size", new AcceptableValueRange<float>(0f, 5f)));
            PNVColor = Config.Bind("PNV", "PNVColor", new Color(0.00f, 0.78f, 0.00f, 0.99f), new ConfigDescription("NVG Color", null));
            // N15 Goggles
            N15Enabled = Config.Bind("N15", "N15Enabled", true, new ConfigDescription("Enable N-15", null));
            N15Intensity = Config.Bind("N15", "N15Intensity", 2.3f, new ConfigDescription("NVG Intensity", new AcceptableValueRange<float>(0f, 5f)));
            N15NoiseIntensity = Config.Bind("N15", "N15NoiseIntensity", 0.0f, new ConfigDescription("NVG Noise Intensity", new AcceptableValueRange<float>(0f, 5f)));
            N15NoiseScale = Config.Bind("N15", "N15NoiseScale", 0.0f, new ConfigDescription("NVG Noise Scale", new AcceptableValueRange<float>(0f, 5f)));
            N15DiffuseIntensity = Config.Bind("N15", "N15DiffuseIntensity", 0.0f, new ConfigDescription("NVG Diffuse Intensity", new AcceptableValueRange<float>(0f, 5f)));
            N15MaskEnabled = Config.Bind("N15", "N15MaskEnabled", true, new ConfigDescription("NVG Mask Overlay", null));
            N15MaskSize = Config.Bind("N15", "N15MaskSize", 1.2f, new ConfigDescription("NVG Mask Overlay Size", new AcceptableValueRange<float>(0f, 5f)));
            N15Color = Config.Bind("N15", "N15Color", new Color(0.00f, 0.39f, 0.78f, 0.99f), new ConfigDescription("NVG Color", null));
            // PVS-14 Monocular
            PVSEnabled = Config.Bind("PVS14", "PVSEnabled", true, new ConfigDescription("Enable PVS-14", null));
            PVSIntensity = Config.Bind("PVS14", "PVSIntensity", 2.3f, new ConfigDescription("NVG Intensity", new AcceptableValueRange<float>(0f, 5f)));
            PVSNoiseIntensity = Config.Bind("PVS14", "PVSNoiseIntensity", 0.0f, new ConfigDescription("NVG Noise Intensity", new AcceptableValueRange<float>(0f, 5f)));
            PVSNoiseScale = Config.Bind("PVS14", "PVSNoiseScale", 0.0f, new ConfigDescription("NVG Noise Scale", new AcceptableValueRange<float>(0f, 5f)));
            PVSDiffuseIntensity = Config.Bind("PVS14", "PVSDiffuseIntensity", 0.0f, new ConfigDescription("NVG Diffuse Intensity", new AcceptableValueRange<float>(0f, 5f)));
            PVSMaskEnabled = Config.Bind("PVS14", "PVSMaskEnabled", true, new ConfigDescription("NVG Mask Overlay", null));
            PVSMaskSize = Config.Bind("PVS14", "PVSMaskSize", 1.2f, new ConfigDescription("NVG Mask Overlay Size", new AcceptableValueRange<float>(0f, 5f)));
            PVSColor = Config.Bind("PVS14", "PVSColor", new Color(0.78f, 0.39f, 0.39f, 0.99f), new ConfigDescription("NVG Color", null));
            // Thermal Goggles/Scopes
            // T-7 60Hz?
            T7Enabled = Config.Bind("T7", "T7Enabled", true, new ConfigDescription("Enable T-7", null));
            T7Noise = Config.Bind("T7", "T7Noise", false, new ConfigDescription("Thermal Noise", null));
            T7Glitch = Config.Bind("T7", "T7Glitch", false, new ConfigDescription("Thermal Glitchiness", null));
            T7Pixel = Config.Bind("T7", "T7Pixel", false, new ConfigDescription("Thermal Pixelation", null));
            T7MotionBlur = Config.Bind("T7", "T7MotionBlur", false, new ConfigDescription("Thermal Motion Blur", null));
            T7Fps = Config.Bind("T7", "T7Fps", false, new ConfigDescription("Thermal FPS Lock Enabled", null));
            T7FpsMax = Config.Bind("T7", "T7FpsMax", 60, new ConfigDescription("Thermal FPS Max FPS", new AcceptableValueRange<int>(15, 60)));
            T7MaskEnabled = Config.Bind("T7", "T7MaskEnabled", true, new ConfigDescription("Thermal Mask Overlay", null));
            T7MaskSize = Config.Bind("T7", "T7MaskSize", 1.5f, new ConfigDescription("Thermal Mask Overlay Size", new AcceptableValueRange<float>(0f, 5f)));
            // REAP-IR 60Hz
            IREnabled = Config.Bind("REAP-IR", "IREnabled", true, new ConfigDescription("Enable REAP-IR", null));
            IRNoise = Config.Bind("REAP-IR", "IRNoise", false, new ConfigDescription("Thermal Noise", null));
            IRGlitch = Config.Bind("REAP-IR", "IRGlitch", false, new ConfigDescription("Thermal Glitchiness", null));
            IRPixel = Config.Bind("REAP-IR", "IRPixel", false, new ConfigDescription("Thermal Pixelation", null));
            IRMotionBlur = Config.Bind("REAP-IR", "IRMotionBlur", false, new ConfigDescription("Thermal Motion Blur", null));
            IRFps = Config.Bind("REAP-IR", "IRFps", true, new ConfigDescription("Thermal FPS Lock Enabled", null));
            IRFpsMax = Config.Bind("REAP-IR", "IRFpsMax", 60, new ConfigDescription("Thermal FPS Max FPS", new AcceptableValueRange<int>(15, 60)));
            // FLIR RS-32 60Hz
            RS32Enabled = Config.Bind("RS32", "RS32Enabled", true, new ConfigDescription("Enable REAP-RS32", null));
            RS32Noise = Config.Bind("RS32", "RS32Noise", false, new ConfigDescription("Thermal Noise", null));
            RS32Glitch = Config.Bind("RS32", "RS32Glitch", false, new ConfigDescription("Thermal Glitchiness", null));
            RS32Pixel = Config.Bind("RS32", "RS32Pixel", false, new ConfigDescription("Thermal Pixelation", null));
            RS32MotionBlur = Config.Bind("RS32", "RS32MotionBlur", false, new ConfigDescription("Thermal Motion Blur", null));
            RS32Fps = Config.Bind("RS32", "RS32Fps", true, new ConfigDescription("Thermal FPS Lock Enabled", null));
            RS32FpsMax = Config.Bind("RS32", "RS32FpsMax", 60, new ConfigDescription("Thermal FPS Max FPS", new AcceptableValueRange<int>(15, 60)));
            // Torrey Pines Logic T12 30Hz
            T12Enabled = Config.Bind("T12", "T12Enabled", true, new ConfigDescription("Enable REAP-T12", null));
            T12Noise = Config.Bind("T12", "T12Noise", false, new ConfigDescription("Thermal Noise", null));
            T12Glitch = Config.Bind("T12", "T12Glitch", false, new ConfigDescription("Thermal Glitchiness", null));
            T12Pixel = Config.Bind("T12", "T12Pixel", false, new ConfigDescription("Thermal Pixelation", null));
            T12MotionBlur = Config.Bind("T12", "T12MotionBlur", false, new ConfigDescription("Thermal Motion Blur", null));
            T12Fps = Config.Bind("T12", "T12Fps", true, new ConfigDescription("Thermal FPS Lock Enabled", null));
            T12FpsMax = Config.Bind("T12", "T12FpsMax", 30, new ConfigDescription("Thermal FPS Max FPS", new AcceptableValueRange<int>(15, 60)));
            // MP-155 Ultima Camera
            UltimaEnabled = Config.Bind("Ultima", "UltimaEnabled", true, new ConfigDescription("Enable REAP-Ultima", null));
            UltimaNoise = Config.Bind("Ultima", "UltimaNoise", false, new ConfigDescription("Thermal Noise", null));
            UltimaGlitch = Config.Bind("Ultima", "UltimaGlitch", false, new ConfigDescription("Thermal Glitchiness", null));
            UltimaPixel = Config.Bind("Ultima", "UltimaPixel", false, new ConfigDescription("Thermal Pixelation", null));
            UltimaMotionBlur = Config.Bind("Ultima", "UltimaMotionBlur", false, new ConfigDescription("Thermal Motion Blur", null));
            UltimaFps = Config.Bind("Ultima", "UltimaFps", true, new ConfigDescription("Thermal FPS Lock Enabled", null));
            UltimaFpsMax = Config.Bind("Ultima", "UltimaFpsMax", 60, new ConfigDescription("Thermal FPS Max FPS", new AcceptableValueRange<int>(15, 60)));
        }

        private void Awake() {
            Debug.LogError("ClearVision Awake()");
            new GogglesPatches().Enable();
            new ScopePatches().Enable();
        }
    }
}