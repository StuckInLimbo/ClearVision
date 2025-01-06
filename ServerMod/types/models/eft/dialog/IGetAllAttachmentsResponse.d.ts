<<<<<<< HEAD
import { IMessage } from "@spt/models/eft/profile/ISptProfile";
=======
import { Message } from "@spt/models/eft/profile/ISptProfile";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
export interface IGetAllAttachmentsResponse {
    messages: IMessage[];
    profiles: any[];
    hasMessagesWithRewards: boolean;
}
