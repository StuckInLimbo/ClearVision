namespace ClearVision;

internal class Config
{
	public GPNVGConfig GPNVG { get; set; }
	public N15Config N15 { get; set; }
	public PVS14Config PVS14 { get; set; }
	public PNV10TConfig PNV10T { get; set; }
	public T7Config T7 { get; set; }

	public Config()
	{
		GPNVG = new GPNVGConfig();
		N15 = new N15Config();
		PVS14 = new PVS14Config();
		PNV10T = new PNV10TConfig();
		T7 = new T7Config();
	}
}

internal class GPNVGConfig
{
	public bool Enabled { get; set; }
	public double Intensity { get; set; }
	public double NoiseIntensity { get; set; }
	public double NoiseScale { get; set; }
	public double DiffuseIntensity { get; set; }
	public string? Mask { get; set; }
	public double MaskSize { get; set; }
	public double Red { get; set; }
	public double Green { get; set; }
	public double Blue { get; set; }
	public double Alpha { get; set; }
}

internal class N15Config : GPNVGConfig { }

internal class PVS14Config : GPNVGConfig { }

internal class PNV10TConfig : GPNVGConfig { }

internal class T7Config
{
	public bool Enabled { get; set; }
	public bool Noise { get; set; }
	public double NoiseIntensity { get; set; }
	public bool MotionBlur { get; set; }
	public string? Mask { get; set; }
	public string? RampPalette { get; set; }
	public double RampShift { get; set; }
	public double MaskSize { get; set; }
	public double HeatMin { get; set; }
	public double ColdMax { get; set; }
	public double MainTexColorCoef { get; set; }
	public double SpecularCoef { get; set; }
	public double ClipPlane { get; set; }
}