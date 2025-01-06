import { IPmcData } from "@spt/models/eft/common/IPmcData";
<<<<<<< HEAD
import { IItem } from "@spt/models/eft/common/tables/IItem";
=======
import { Item } from "@spt/models/eft/common/tables/IItem";
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
import { IInventoryCreateMarkerRequestData } from "@spt/models/eft/inventory/IInventoryCreateMarkerRequestData";
import { IInventoryDeleteMarkerRequestData } from "@spt/models/eft/inventory/IInventoryDeleteMarkerRequestData";
import { IInventoryEditMarkerRequestData } from "@spt/models/eft/inventory/IInventoryEditMarkerRequestData";
import { ILogger } from "@spt/models/spt/utils/ILogger";
export declare class MapMarkerService {
    protected logger: ILogger;
    constructor(logger: ILogger);
    /**
     * Add note to a map item in player inventory
     * @param pmcData Player profile
     * @param request Add marker request
     * @returns Item
     */
<<<<<<< HEAD
    createMarkerOnMap(pmcData: IPmcData, request: IInventoryCreateMarkerRequestData): IItem;
=======
    createMarkerOnMap(pmcData: IPmcData, request: IInventoryCreateMarkerRequestData): Item;
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    /**
     * Delete a map marker
     * @param pmcData Player profile
     * @param request Delete marker request
     * @returns Item
     */
<<<<<<< HEAD
    deleteMarkerFromMap(pmcData: IPmcData, request: IInventoryDeleteMarkerRequestData): IItem;
=======
    deleteMarkerFromMap(pmcData: IPmcData, request: IInventoryDeleteMarkerRequestData): Item;
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    /**
     * Edit an existing map marker
     * @param pmcData Player profile
     * @param request Edit marker request
     * @returns Item
     */
<<<<<<< HEAD
    editMarkerOnMap(pmcData: IPmcData, request: IInventoryEditMarkerRequestData): IItem;
=======
    editMarkerOnMap(pmcData: IPmcData, request: IInventoryEditMarkerRequestData): Item;
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
    /**
     * Strip out characters from note string that are not: letter/numbers/unicode/spaces
     * @param mapNoteText Marker text to sanitise
     * @returns Sanitised map marker text
     */
    protected sanitiseMapMarkerText(mapNoteText: string): string;
}
