<<<<<<< HEAD
=======
/// <reference types="node" />
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
import { TimeUtil } from "@spt/utils/TimeUtil";
export declare class ObjectId {
    protected timeUtil: TimeUtil;
    constructor(timeUtil: TimeUtil);
    protected randomBytes: Buffer;
    protected constglobalCounter: number;
    protected consttime: number;
    protected globalCounter: number;
    protected time: number;
    incGlobalCounter(): number;
    toHexString(byteArray: string | any[] | Buffer): string;
    generate(): string;
}
