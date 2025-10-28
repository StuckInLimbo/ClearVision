using SPTarkov.Server.Core.Models.Spt.Mod;

namespace ClearVision;

/// <summary>
/// This is the replacement for the former package.json data. This is required for all mods.
///
/// This is where we define all the metadata associated with this mod.
/// You don't have to do anything with it, other than fill it out.
/// All properties must be overriden, properties you don't use may be left null.
/// It is read by the mod loader when this mod is loaded.
/// </summary>
public record ModMetadata : AbstractModMetadata
{
	/// <summary>
	/// Any string can be used for a modId, but it should ideally be unique and not easily duplicated
	/// a 'bad' ID would be: "mymod", "mod1", "questmod"
	/// It is recommended (but not mandatory) to use the reverse domain name notation,
	/// see: https://docs.oracle.com/javase/tutorial/java/package/namingpkgs.html
	/// </summary>
	public override string ModGuid { get; init; } = "net.limbofps.mods.clearvision";
	public override string Name { get; init; } = "ClearVision";
	public override string Author { get; init; } = "StuckInLimbo";
	public override List<string>? Contributors { get; init; }
	public override SemanticVersioning.Version Version { get; init; } = new("3.0.0");
	public override SemanticVersioning.Range SptVersion { get; init; } = new("~4.0.0");
	public override List<string>? Incompatibilities { get; init; }
	public override Dictionary<string, SemanticVersioning.Range>? ModDependencies { get; init; }
	public override string? Url { get; init; } = "https://github.com/StuckInLimbo/ClearVision";
	public override bool? IsBundleMod { get; init; } = true;
	public override string? License { get; init; } = "CC BY-NC-SA 4.0";
}