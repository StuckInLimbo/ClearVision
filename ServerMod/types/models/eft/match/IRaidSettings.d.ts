import { DateTime } from "@spt/models/enums/DateTime";
import { PlayersSpawnPlace } from "@spt/models/enums/PlayersSpawnPlace";
import { RaidMode } from "@spt/models/enums/RaidMode";
import { BotAmount } from "@spt/models/enums/RaidSettings/BotAmount";
import { BotDifficulty } from "@spt/models/enums/RaidSettings/BotDifficulty";
import { CloudinessType } from "@spt/models/enums/RaidSettings/TimeAndWeather/CloudinessType";
import { FogType } from "@spt/models/enums/RaidSettings/TimeAndWeather/FogType";
import { RainType } from "@spt/models/enums/RaidSettings/TimeAndWeather/RainType";
import { TimeFlowType } from "@spt/models/enums/RaidSettings/TimeAndWeather/TimeFlowType";
import { WindSpeed } from "@spt/models/enums/RaidSettings/TimeAndWeather/WindSpeed";
import { SideType } from "@spt/models/enums/SideType";
export interface IRaidSettings {
<<<<<<< HEAD
    keyId: string;
    location: string;
    isLocationTransition: boolean;
    timeVariant: DateTime;
    metabolismDisabled: boolean;
    timeAndWeatherSettings: ITimeAndWeatherSettings;
    botSettings: IBotSettings;
    wavesSettings: IWavesSettings;
    side: SideType;
    raidMode: RaidMode;
    playersSpawnPlace: PlayersSpawnPlace;
    CanShowGroupPreview: boolean;
}
export interface ITimeAndWeatherSettings {
=======
    location: string;
    timeVariant: DateTime;
    raidMode: RaidMode;
    metabolismDisabled: boolean;
    playersSpawnPlace: PlayersSpawnPlace;
    timeAndWeatherSettings: TimeAndWeatherSettings;
    botSettings: BotSettings;
    wavesSettings: WavesSettings;
    side: SideType;
}
export interface TimeAndWeatherSettings {
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    isRandomTime: boolean;
    isRandomWeather: boolean;
    cloudinessType: CloudinessType;
    rainType: RainType;
    fogType: FogType;
    windType: WindSpeed;
    timeFlowType: TimeFlowType;
    hourOfDay: number;
}
<<<<<<< HEAD
export interface IBotSettings {
    isScavWars: boolean;
    botAmount: BotAmount;
}
export interface IWavesSettings {
=======
export interface BotSettings {
    isScavWars: boolean;
    botAmount: BotAmount;
}
export interface WavesSettings {
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    botAmount: BotAmount;
    botDifficulty: BotDifficulty;
    isBosses: boolean;
    isTaggedAndCursed: boolean;
}
