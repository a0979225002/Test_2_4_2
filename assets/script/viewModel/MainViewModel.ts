import MainModel from "../model/MainModel";

/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2021-07-13 上午 11:33
 * @Version 1.0
 */
export default class MainViewModel {

    private model: MainModel

    constructor() {
        this.model = MainModel.instance;
    }


    public checkSpeedUp() {
        if (fcc.processMgr.gameState != fcc.type.GameStateType.FREEING) {
            this.model.updateSpeed();
        } else {
            console.log("當前遊戲加速無法改變");
        }
    }

    public checkAutoUp() {
        if (fcc.processMgr.gameState == fcc.type.GameStateType.FREEING) {
            console.log("當前為免費模式自動狀態無法更換")
            return;
        }
        this.model.updateAuto();
    }
}