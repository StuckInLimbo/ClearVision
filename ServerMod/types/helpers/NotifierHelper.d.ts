import { HttpServerHelper } from "@spt/helpers/HttpServerHelper";
<<<<<<< HEAD
import { IMessage, IMessageContentRagfair } from "@spt/models/eft/profile/ISptProfile";
=======
import { Message, MessageContentRagfair } from "@spt/models/eft/profile/ISptProfile";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
import { IWsChatMessageReceived } from "@spt/models/eft/ws/IWsChatMessageReceived";
import { IWsNotificationEvent } from "@spt/models/eft/ws/IWsNotificationEvent";
import { IWsRagfairOfferSold } from "@spt/models/eft/ws/IWsRagfairOfferSold";
export declare class NotifierHelper {
    protected httpServerHelper: HttpServerHelper;
    /**
     * The default notification sent when waiting times out.
     */
    protected defaultNotification: IWsNotificationEvent;
    constructor(httpServerHelper: HttpServerHelper);
    getDefaultNotification(): IWsNotificationEvent;
    /**
     * Create a new notification that displays the "Your offer was sold!" prompt and removes sold offer from "My Offers" on clientside
     * @param dialogueMessage Message from dialog that was sent
     * @param ragfairData Ragfair data to attach to notification
     * @returns
     */
<<<<<<< HEAD
    createRagfairOfferSoldNotification(dialogueMessage: IMessage, ragfairData: IMessageContentRagfair): IWsRagfairOfferSold;
=======
    createRagfairOfferSoldNotification(dialogueMessage: Message, ragfairData: MessageContentRagfair): IWsRagfairOfferSold;
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    /**
     * Create a new notification with the specified dialogueMessage object
     * @param dialogueMessage
     * @returns
     */
<<<<<<< HEAD
    createNewMessageNotification(dialogueMessage: IMessage): IWsChatMessageReceived;
=======
    createNewMessageNotification(dialogueMessage: Message): IWsChatMessageReceived;
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    getWebSocketServer(sessionID: string): string;
}
