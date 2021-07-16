import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import {
    AConfigTemplate,
    AutoStateChangeNotification,
    SpeedStateChangeNotification,
    UserTotalBetChangeNotification,
    StopNowStateNotification,
    UserMoneyChangeNotification
} from "./dist/tcc/fcc-template";
import MainProcess from "./process/MainProcess";
import {WinLineNotification} from "./Event/Notification/WinLineNotification";


/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2021-07-12 下午 02:05
 * @Version 1.0
 */
@ccclass
export default class GameCenter extends AConfigTemplate{

    protected onCreate(): void {

    }

    protected audioSetting(): void {


    }

    protected configSetting(): void {

        fcc.configMgr
            .setAutoCont(10)
            .build();

        fcc.notificationMgr()
            .setNotification(new AutoStateChangeNotification())
            .setNotification(new SpeedStateChangeNotification())
            .setNotification(new UserTotalBetChangeNotification())
            .setNotification(new StopNowStateNotification())
            .setNotification(new UserMoneyChangeNotification())
            .setNotification(new StopNowStateNotification())
            .setNotification(new WinLineNotification());


    }

    protected processSetting(): void {
        let norContainer = new MainProcess();
        let normalProcess = new fcc.SlotGameProcess(norContainer);

        normalProcess
            .onCustomizeStart()
            .onSineInGrid()
            .onRunning()
            .onShowAnswer()
            .onCustomizeEnd()
            .onChangeStatus();

        fcc.processMgr.setProcess(fcc.type.ProcessType.NORMAL,normalProcess);
        fcc.processMgr.setDefaultProcess(fcc.type.ProcessType.NORMAL);
        fcc.processMgr.initProcess(fcc.type.ProcessType.NORMAL)
    }

    protected responseDataModelSetting(): void {
    }
}