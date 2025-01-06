import { ISpt } from "../profile/ISptProfile";
export interface IMiniProfile {
    username: string;
    nickname: string;
    side: string;
    currlvl: number;
    currexp: number;
    prevexp: number;
    nextlvl: number;
    maxlvl: number;
<<<<<<< HEAD
    edition: string;
    profileId: string;
    sptData: ISpt;
=======
    sptData: SPTData;
}
export interface SPTData {
    version: string;
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
}
