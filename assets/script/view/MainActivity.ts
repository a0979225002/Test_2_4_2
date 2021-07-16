import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import {
    AMainGameOnlyButtonTemplate,
    IBaseTableInfoModel,
    NoLineTableInfo,
    SpeedStateChangeNotification,
    SpeedStateChangeObserver
} from "../dist/tcc/fcc-template";
import MainViewModel from "../viewModel/MainViewModel";
import AnimationManager from "../model/AnimationManager";
import {WinLineNotification} from "../Event/Notification/WinLineNotification";
import WinLineObserver from "../Event/Observer/WinLineObserver";
import WinLine from "./WinLine";


interface IUserBetPoint {
    LineBet: number;
}

/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2021-07-09 下午 05:35
 * @Version 1.0
 */
@ccclass
export default class Main extends AMainGameOnlyButtonTemplate {

    @property(cc.Button)
    protected autoButton: cc.Button = null;
    @property(cc.Button)
    protected betSelectionButton: cc.Button = null;
    @property(cc.Button)
    protected menuButton: cc.Button = null;
    @property(cc.Button)
    protected speedUpButton: cc.Button = null;
    @property(cc.Button)
    protected startButton: cc.Button = null;
    @property(cc.Label)
    protected nowStateViewLabel: cc.Label = null;
    @property(cc.Label)
    protected nowStateTitleText: cc.Label = null;

    protected tableInfo: IBaseTableInfoModel;
    protected userBetPoint: IUserBetPoint;

    private mainViewModel: MainViewModel;
    private winLineController: WinLine;

    protected onCreate(): void {
        this.tableInfo = new NoLineTableInfo();
        this.userBetPoint = {
            LineBet: 0
        }

        this.nowStateTitleText.string = "";
        this.nowStateViewLabel.string = "";

        this.mainViewModel = new MainViewModel();
        this.startButtonOnEnable();
        this.speedNotification();
        this.winLineNotification();
        this.winLineController = new WinLine();

        const instance = cc.director.getPhysicsManager()
        instance.enabled = true
// instance.debugDrawFlags = 4
        instance.gravity = cc.v2(0, -100);
        const collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true

    }

    protected async autoButtonEventListener(): Promise<void> {
        this.mainViewModel.checkAutoUp();
    }

    protected autoEvent(isAutomaticState: boolean, autoType: fcc.type.AutoType): void {
        this.updateTitleLabel( "自動 : ",isAutomaticState);
    }


    protected updateTitleLabel(titleText:string,type:boolean):void{
        this.nowStateTitleText.string = titleText;
        this.nowStateViewLabel.string = String(type);
        if (type) {
            cc.tween(this.nowStateViewLabel.node)
                .to(0.5, {color: cc.color().fromHEX("#d81111")})
                .to(0.5, {color: cc.color().fromHEX("#ffffff")})
                .start();
        } else {
            cc.tween(this.nowStateViewLabel.node)
                .to(0.5, {color: cc.color().fromHEX("#43d811")})
                .to(0.5, {color: cc.color().fromHEX("#ffffff")})
                .start();
        }
    }

    protected speedNotification() {
        fcc.notificationMgr<SpeedStateChangeNotification>()
            .getNotification(fcc.type.NotificationType.SPEED_CHANGE)
            .subscribe(new SpeedStateChangeObserver((isSpeedUp) => {
                this.updateTitleLabel( "速度 : ",isSpeedUp);
            }, this), true)
    }

    protected winLineNotification(){
        fcc.notificationMgr<WinLineNotification>()
            .getNotification("WIN_LINE_RESTORE")
            .subscribe(new WinLineObserver((winLineNumber):Promise<void>=>{
                return new Promise(resolve => {
                    cc.tween(WinLine.instance.container)
                        .to(1.5, {opacity: 0}, {easing: "bounceIn"})
                        .call(() => {
                            cc.log("動畫清除")
                            WinLine.instance.restoreLines(winLineNumber);
                            WinLine.instance.container.opacity = 255;
                            resolve();
                        })
                        .start();
                })
            },this),true);
    }

    protected endEvent(): void {
    }

    protected makeTotalBetButtonToListener(): void {

    }

    protected menuEvent(): void {

    }

    protected speedUpButtonEventListener() {
        this.mainViewModel.checkSpeedUp();
    }

    //@TODO
    protected speedUpEvent(isSpeedUp: boolean): void {

    }

    protected startEvent(): void {
        cc.log("startEvent")
    }

    protected totalBetFrameTouchEvent(isShowTotalBetFrame: boolean): void {
        cc.log(isShowTotalBetFrame)
    }

    protected warningEvent(): void {
    }
}