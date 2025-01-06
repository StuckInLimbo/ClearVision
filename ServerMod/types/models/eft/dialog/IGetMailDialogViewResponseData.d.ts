<<<<<<< HEAD
import { IMessage, IUserDialogInfo } from "@spt/models/eft/profile/ISptProfile";
=======
import { IUserDialogInfo, Message } from "@spt/models/eft/profile/ISptProfile";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
export interface IGetMailDialogViewResponseData {
    messages: IMessage[];
    profiles: IUserDialogInfo[];
    hasMessagesWithRewards: boolean;
}
