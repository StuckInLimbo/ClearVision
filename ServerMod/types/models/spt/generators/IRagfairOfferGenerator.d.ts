<<<<<<< HEAD
import { IItem } from "@spt/models/eft/common/tables/IItem";
=======
import { Item } from "@spt/models/eft/common/tables/IItem";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
import { IBarterScheme } from "@spt/models/eft/common/tables/ITrader";
import { IRagfairOffer } from "@spt/models/eft/ragfair/IRagfairOffer";
export interface IRagfairOfferGenerator {
    createOffer(userID: string, time: number, items: IItem[], barterScheme: IBarterScheme[], loyalLevel: number, price: number, sellInOnePiece: boolean): IRagfairOffer;
}
