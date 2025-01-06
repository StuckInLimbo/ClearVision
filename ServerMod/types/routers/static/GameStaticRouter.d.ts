import { GameCallbacks } from "@spt/callbacks/GameCallbacks";
import { StaticRouter } from "@spt/di/Router";
<<<<<<< HEAD
import { HttpResponseUtil } from "@spt/utils/HttpResponseUtil";
=======
>>>>>>> 8b338f9de36d43ac2ef5da215cdc74d78c8e8a39
export declare class GameStaticRouter extends StaticRouter {
    protected httpResponse: HttpResponseUtil;
    protected gameCallbacks: GameCallbacks;
    constructor(httpResponse: HttpResponseUtil, gameCallbacks: GameCallbacks);
}
