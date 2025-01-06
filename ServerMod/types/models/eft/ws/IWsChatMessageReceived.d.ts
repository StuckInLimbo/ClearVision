import { IGroupCharacter } from "@spt/models/eft/match/IGroupCharacter";
<<<<<<< HEAD
import { IMessage } from "@spt/models/eft/profile/ISptProfile";
import { IWsNotificationEvent } from "@spt/models/eft/ws/IWsNotificationEvent";
export interface IWsChatMessageReceived extends IWsNotificationEvent {
    dialogId: string;
    message: IMessage;
=======
import { Message } from "@spt/models/eft/profile/ISptProfile";
import { IWsNotificationEvent } from "@spt/models/eft/ws/IWsNotificationEvent";
export interface IWsChatMessageReceived extends IWsNotificationEvent {
    dialogId: string;
    message: Message;
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    profiles?: IGroupCharacter[];
}
