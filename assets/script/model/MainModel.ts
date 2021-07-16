/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2021-07-13 上午 11:18
 * @Version 1.0
 */
import {SpeedStateChangeNotification, AutoStateChangeNotification} from "../dist/tcc/fcc-template";

export default class MainModel {

    private _speedUp: boolean;
    private _isAutoState: boolean;
    private _beforeAutoType: fcc.type.AutoType;
    private _afterAutoType: fcc.type.AutoType;
    private _nowAutoCount;
    private static _instance: MainModel;

    constructor() {
        this._speedUp = fcc.configMgr.isSpeedUp;
        this._isAutoState = fcc.configMgr.isAuto;
        this._afterAutoType = fcc.configMgr.autoCount;
        this._beforeAutoType = fcc.configMgr.autoCount;
        this._nowAutoCount = fcc.configMgr.autoCount;
    }


    public static get instance(): MainModel {
        if (!this._instance) {
            this._instance = new MainModel();
        }

        return this._instance;
    }

    updateSpeed() {
        this._speedUp = !this._speedUp;
        fcc.notificationMgr<SpeedStateChangeNotification>()
            .getNotification(fcc.type.NotificationType.SPEED_CHANGE)
            .notify(this._speedUp);
    }

    updateAuto(autoType?:fcc.type.AutoType) {
        this._isAutoState = !this._isAutoState;
        if(autoType){
            this._afterAutoType = autoType;
        }
        if(this._isAutoState){
            this._nowAutoCount = this.afterAutoType;
        }
        fcc.notificationMgr<AutoStateChangeNotification>()
            .getNotification(fcc.type.NotificationType.AUTO_CHANGE)
            .notify(
                this._isAutoState,
                this._beforeAutoType,
                this._afterAutoType
            );
    }

    public updateAutoCount(type?: fcc.type.AutoType): number {
        if (type) {
            this._nowAutoCount = type;
        }
        this._nowAutoCount--;

        return this._nowAutoCount;
    }

    get speedUp(): boolean {
        return this._speedUp;
    }

    get isAutoState(): boolean {
        return this._isAutoState;
    }

    get beforeAutoType(): fcc.type.AutoType {
        return this._beforeAutoType;
    }

    get afterAutoType(): fcc.type.AutoType {
        return this._afterAutoType;
    }


    get nowAutoCount() {
        return this._nowAutoCount;
    }
}