import MainModel from "../model/MainModel";
import WinLine from "../view/WinLine";

/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2021-07-12 下午 04:14
 * @Version 1.0
 */
export default class MainProcess implements fcc.IF.ISlotProcedureExecutionContainer {


    private mainModel: MainModel;
    private winLineController: WinLine;
    private jsonTest: Array<Array<number>>;

    onCreate(): any {
        console.log("初始化MainProcess");
        this.mainModel = MainModel.instance;
        this.winLineController = WinLine.instance;
    }

    onCustomizeStart(): Promise<void> {
        return new Promise(resolve => {
            fcc.processMgr.gameState = fcc.type.GameStateType.PLAYING;
            WinLine.instance.clear();
            setTimeout(() => {
                cc.log("我開始執行")
                resolve();
            }, 1000)
        });
    }


    onSineInGrid(): Promise<void> {
        return Promise.resolve(undefined);
    }

    onRunGrid(): Promise<void> {
        return Promise.resolve(undefined);
    }

    onShowAnswer(): Promise<void> {
        return new Promise(async (resolve,reject) => {
            this.jsonTest = WinLine.instance.test(10);    //測試用,隨機數據
            WinLine.instance.copyWinLinToContainer(10);           //新增該局所需線條
            // await this.playAll(jsonTest, this.testAllLineRun, this);
            // await this.playAll(jsonTest, this.testAllLineRun, this);
            await WinLine.instance.playAll(this.jsonTest);
            cc.log("我已經結束了")
            resolve();
        });
    }

    onSineOutGrid(): Promise<void> {
        return Promise.resolve(undefined);
    }

    onCustomizeEnd(): Promise<void> {
        return new Promise(resolve => {
            setTimeout(() => {
                WinLine.instance.play(this.jsonTest).then();
                resolve();
            }, 500)
        });
    }

    onChangeStatus(): void {

        fcc.processMgr.gameState = fcc.type.GameStateType.STANDBY;
        cc.log(this.mainModel.afterAutoType)
        if (
            this.mainModel.isAutoState &&
            this.mainModel.nowAutoCount >= 0 &&
            this.mainModel.afterAutoType > 0) {
            this.mainModel.updateAutoCount();
        }

        if (this.mainModel.isAutoState &&
            this.mainModel.nowAutoCount < 0 &&
            this.mainModel.afterAutoType > 0) {
            this.mainModel.updateAuto();
        }

        cc.log("當前執行次數:", this.mainModel.nowAutoCount, this.mainModel.speedUp);
        cc.log("////////////////////////////////////////////////")
    }

}