import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import {AGenericTemplate} from "../dist/tcc/fcc-template";
import {WinLineNotification} from "../Event/Notification/WinLineNotification";


const LINE_CONTAINER = 'LINE_CONTAINER';

/**
 * @Author 蕭立品
 * @Description 顯示 winLine
 * ```
 *  注意:
 *      必填參數:
 *      vector (向量): 值為當前該Line物件移動方向
 *          例如1:初始將該 LineNode :
 *          LineNode{
 *              Anchor 調整為(1,0),
 *              Rotation:-90,
 *          };
 *          需求為線條由左往右移動,此時向量應為 cc.v2(0,1);
 *          總之就是因為調整方向角Rotation = -90,實際上往上方向的向量會因此往右移動
 *
 *          例如2:初始將該 LineNode :
 *          LineNode{
 *              Anchor 調整為(0,1),
 *              Rotation:0,
 *          };
 *          需求為線條由左往右移動,此時向量應為 cc.v2(1,0);
 *          此時向量只需給予正常模式
 *
 *          向量知識:
 *              cc.v2(1,0) = 往右
 *              cc.v2(0,1) = 往上
 *              cc.v2(-1,0) = 往左
 *              cc.v2(0,-1) = 往下
 *
 * ```
 * @Date 2021-07-13 下午 01:37
 * @Version 1.0
 */
@ccclass
export default class WinLine extends AGenericTemplate {

    @property(cc.Node)
    protected grid: cc.Node = null;
    @property(cc.Sprite)
    private lineSprite: cc.Sprite = null;
    @property(cc.Node)
    private gridRow: cc.Node[] = [];

    /**
     * 存放所有贏線的容器
     * @type {cc.Node}
     * @private
     */
    private _container: cc.Node;

    /**
     * 存放所有贏線會經過的點(老虎機所有格子的中心點)
     * @type {Array<Map<number, number>>}
     * @private
     */
    private winLinAllPosition: Array<Map<number, number>>;

    /**
     * 存放該局所有會使用到的線
     * ```
     *   Array[第幾條線]<Map<線段編號(0~slot長度+1),線段 node>>
     * ```
     * @type {Array<Map<number, cc.Node>>}
     * @private
     */
    private allWinLine: Array<Map<number, cc.Node>>;

    /**
     * 每列格子數量
     * @type {number}
     * @private
     */
    private gridCont: number;

    /**
     * 每個格子高度
     * @type {number}
     * @private
     */
    private gridHeight: number;

    /**
     * 向量 : 當前線條執行方向
     * @type {cc.Vec2}
     * @private
     */
    private vector: cc.Vec2;

    /**
     * 初始角度
     * @type {number}
     * @private
     */
    private angle: number;

    /**
     * 執行線條動畫時間(單位為S)
     * 建議 : 0.5 以下
     */
    private runLineSpeed: number;

    /**
     * 容器層級位置,因容器位置會改變線條層級顯示
     * 注意:需要再最上層參數可以是 -1
     * @type {number}
     * @private
     */
    private containerIndex: number;

    /**
     * 判斷是否持續執行單線播放
     * @type {boolean}
     * @private
     */
    private isStop: boolean;

    public static instance: WinLine;

    protected async onCreate(): Promise<void> {
        WinLine.instance = this;
        this.lineSprite.node.active = false                                                 //初始線條隱藏
        this.gridCont = 3;                                                                  //該slot格子數量
        this.gridHeight = 170;                                                              //該slot格子高度
        this.lineSprite.node.width = 7;                                                     //該線條寬度
        this.angle = -90;                                                                   //每條線初始角度
        this.vector = cc.Vec2.UP;                                                           //當前方向向量
        this.containerIndex = 0;                                                           //線條層級
        this.runLineSpeed = 0.2;                                                            //執行線條動畫時間
        this.isStop = false;                                                                //初始判斷是否持續執行單線播放
        this.buildWinLineContainer();                                                       //建構該局贏線的Node容器
        this._container = this.lineSprite.node.parent.getChildByName(LINE_CONTAINER);  //拿取容器組件
        this.winLinAllPosition = this.initWinLinPosition();                                 //初始所有line會經過的點
        this.allWinLine = new Array<Map<number, cc.Node>>();                                //初始空陣列,保存該局所有要使用的贏線

        //-------------------------------測試-------------------------------------------------------
        // let jsonTest = this.test(10);    //測試用,隨機數據
        // this.copyWinLinToContainer(10);           //新增該局所需線條
        // // await this.playAll(jsonTest, this.testAllLineRun, this);
        // // await this.playAll(jsonTest, this.testAllLineRun, this);
        // this.play(jsonTest, this.testLineRun, this).then();
        // setTimeout(async ()=>{
        //     this.clear();
        //     let jsonTest = this.test(7);    //測試用,隨機數據
        //     this.copyWinLinToContainer(7);           //新增該局所需線條
        //     await this.playAll(jsonTest, this.testAllLineRun, this);
        //     await this.play(jsonTest, this.testLineRun, this);
        // },4500)
    }

    testLineRun(nowLine: number): Promise<void> {
        return new Promise(resolve => {
            cc.tween(this._container)
                .to(2, {opacity: 0}, {easing: "bounceIn"})
                .call(() => {
                    cc.log(nowLine)
                    this.restoreLines(nowLine);
                    this._container.opacity = 255;
                    resolve();
                })
                .start();
        })
    }

    testAllLineRun(): Promise<void> {
        return new Promise(resolve => {
            cc.tween(this._container)
                .to(2, {opacity: 0}, {easing: "bounceIn"})
                .call(() => {
                    this.restoreLines();
                    this._container.opacity = 255;
                    resolve();
                })
                .start();
        })
    }

    /**
     * 還原使用過的贏線為初始狀態
     * @param {number} lineNumber - 有傳參會對該線條內的線段初始,無傳參會對所有線段初始
     */
    public restoreLines(lineNumber?: number) {
        if (lineNumber) {
            for (let line of this.allWinLine[lineNumber].values()) {
                line.active = false;
                line.height = 0;
            }
        } else {
            for (let line of this._container.children) {
                line.active = false;
                line.height = 0;
            }
        }
    }

    /**
     * 建構該局贏線的Node容器
     */
    protected buildWinLineContainer() {
        let parent = this.lineSprite.node.parent;
        const node = new cc.Node();
        node.name = LINE_CONTAINER;
        parent.addChild(node, this.containerIndex, LINE_CONTAINER);
    }

    /**
     * 執行單條贏線依序播放
     * @param {Array<Array<number>>} answers
     * @param {() => void} callback
     * @param self
     */
    public async play(answers: Array<Array<number>>): Promise<void> {
        await this.showLine(answers);
    }

    /**
     * 顯示所有線
     * @private
     */
    private async showLine(answers: Array<Array<number>>): Promise<void> {
        let lineLength = answers.length;
        let lineNumber: number = 0;
        do {
            //重新回歸第一條線
            if (lineNumber == lineLength) {
                lineNumber = 0;
            }
            let answer: Array<number> = answers[lineNumber];
            for (let j = 0; j < answer.length + 1; j++) {
                let a = answer[j - 1] ?? answer[0];
                this.initLinePosition(lineNumber, j, a);
            }
            await this.runLineToAsync(lineNumber, answer);
            await fcc.notificationMgr<WinLineNotification>()
                .getNotification("WIN_LINE_RESTORE")
                .notify();
            lineNumber++;
        } while (!this.isStop)
    }

    /**
     * 執行全贏線動畫
     * @param {Array<Array<number>>} answer
     * @param {() => void} callback
     * @param self
     */
    public async playAll(answer: Array<Array<number>>): Promise<void> {
        await this.showAllLine(answer);
    }


    /**
     * 顯示所有線
     * @private
     */
    private async showAllLine(answer: Array<Array<number>>): Promise<void> {
        for (let i = 0; i < answer.length; i++) {
            let onlyWInLine = answer[i];
            for (let j = 0; j < onlyWInLine.length + 1; j++) {
                let a = onlyWInLine[j - 1] ?? onlyWInLine[0];
                this.initLinePosition(i, j, a);
            }
            this.runLineToAsync(i, onlyWInLine).then();
        }
        await fcc.notificationMgr<WinLineNotification>()
            .getNotification("WIN_LINE_RESTORE")
            .notify();
    }

    /**
     * 初始各線段初始位置
     * @param {number} lineNumber
     * @param {number} lineChildNumber
     * @param {number} answer
     * @private
     */
    private initLinePosition(lineNumber: number, lineChildNumber: number, answer: number) {

        let x: number;

        if (lineChildNumber == 0) {
            //該線段為最初線段,到達第一個答案前的位置
            x = this.gridRow[0].x - this.gridRow[0].width / 2;
        } else {
            x = this.winLinAllPosition[answer].keys().next().value
        }

        let y: number = this.winLinAllPosition[answer].values().next().value;

        this.allWinLine[lineNumber].get(lineChildNumber).x = x;
        this.allWinLine[lineNumber].get(lineChildNumber).y = y;

    }

    /**
     * 拿取座標位置
     * @param {number} lineNumber - 哪一條線
     * @param {number} lineChildNumber - 第幾線段:(整條線段拆分成 該Slot列數+1)
     * @param {number} answer - 答案 (第幾個grid)
     * @return {cc.Vec2} - 座標
     * @private
     */
    private getPosition(lineNumber: number, lineChildNumber: number, answer: number): cc.Vec2 {

        let p: cc.Vec2;
        let y: number = this.winLinAllPosition[answer].values().next().value;

        if (lineChildNumber == 0) {
            //該線段為最初線段,到達第一個答案前的位置
            const startingPoint = this.gridRow[0].x - this.gridRow[0].width / 2;
            p = cc.v2(startingPoint, y);
        } else if (lineChildNumber == this.gridRow.length + 1) {
            //該線段為最終線段,到達老虎機右側終點位置
            const endPoint = this.gridRow[this.gridRow.length - 1].x + this.gridRow[this.gridRow.length - 1].width / 2;
            p = cc.v2(endPoint, y);
        } else {
            //該線段為中間線段
            p = cc.v2(this.winLinAllPosition[answer].keys().next().value, y);
        }
        return p;
    }

    /**
     * 執行遞迴播放跑線動畫
     * @param {number} lineNumber - 哪一條線
     * @param {Array<number>} answer - 該線條會經過的所有答案
     * @return {Promise<void>}
     * @private
     */
    private async runLineToAsync(lineNumber: number, answer: Array<number>): Promise<void> {
        return new Promise<void>(resolve => {
            this.lineAnimationLoop(lineNumber, answer, resolve)
        })
    }

    /**
     * 依序執行該線條遞迴播放跑線動畫
     * @NODE 對應A點 > B點 > C 點方式,依序使用遞迴方式將線條連線
     * @param {number} lineNumber - 哪一條線
     * @param {Array<number>} answer - 該線條會經過的所有答案
     * @param {(value: (void | PromiseLike<void>)) => void} resolve - 釋放異步
     * @param {number} lineChildNumber - 由遞迴增加,每遞迴一次更新下個線段
     */
    private lineAnimationLoop(lineNumber: number, answer: Array<number>, resolve: (value: (void | PromiseLike<void>)) => void, lineChildNumber: number = 0): void {
        let p1: cc.Vec2;
        let p2: cc.Vec2;
        //初始線段為Slot最旁邊到達第一個答案前的點,只需平移線條,所以只需給予y軸答案,x軸另外計算
        let beforeAnswer: number = answer[lineChildNumber - 1] ?? answer[0];
        //最終線段為最後一個答案到達Slot的最旁邊,只需平移線條,所以只需給予y軸答案,x軸另外計算
        let afterAnswer: number = answer[lineChildNumber] ?? answer[answer.length - 1];
        p1 = this.getPosition(lineNumber, lineChildNumber, beforeAnswer)
        p2 = this.getPosition(lineNumber, lineChildNumber + 1, afterAnswer);

        //計算當前線條到達b點時需旋轉的角度
        this.allWinLine[lineNumber].get(lineChildNumber).angle
            = this.getAngleBetweenTwoPoints(p1, p2);
        //計算當前到達b點所需的距離
        const distance = this.getDistanceBetweenTwoPoints(p1, p2);
        //將該線段打開
        this.allWinLine[lineNumber].get(lineChildNumber).active = true;
        //由於初始長度 = 0,此時交由 cc.tween增加長度的方式顯示該線段動畫
        cc.tween(this.allWinLine[lineNumber].get(lineChildNumber))
            .to(0.1, {height: distance})
            .call(() => {
                if (this.isStop) {
                    cc.log("強制結束")
                    resolve();
                    return;
                }
                if (lineChildNumber == this.gridRow.length) {
                    cc.log("該線條執行結束")
                    resolve();
                } else {
                    lineChildNumber++;
                    this.lineAnimationLoop(lineNumber, answer, resolve, lineChildNumber);
                }
            })
            .start();
    }

    /**
     * 複製贏線
     * @param {number} quantity - 贏幾條線
     * @return {this}
     * @protected
     */
    public copyWinLinToContainer(quantity: number): this {
        const lineName = "LINE";
        cc.log(this.lineSprite)
        for (let i = 0; i < quantity; i++) {
            let line: Map<number, cc.Node> = new Map<number, cc.Node>();
            //終點還會多一段,所以默認老虎機的列要+1
            for (let j = 0; j < this.gridRow.length + 1; j++) {
                let lineNode = cc.instantiate(this.lineSprite.node);
                lineNode.active = false;
                this._container.addChild(lineNode, i, `${lineName}${i}_${j}`);
                line.set(j, lineNode);
            }
            this.allWinLine.push(line);
        }
        return this;
    }

    /**
     * 初始所有line會經過的點
     * ```
     *      注意:如果點位不正常,請自行override實現
     * ```
     */
    protected initWinLinPosition() {
        let gridPositions: Array<Map<number, number>> = new Array<Map<number, number>>();
        for (let node of this.gridRow) {
            let nodeX = node.x;
            let nodeY = node.y + this.gridHeight;
            for (let i = 0; i < this.gridCont; i++) {
                let position: Map<number, number> = new Map<number, number>();
                position.set(nodeX, nodeY);
                gridPositions.push(position)
                nodeY = nodeY - this.gridHeight;
            }
        }
        return gridPositions;
    }

    /**
     * 計算平均速度
     * @protected
     */
    protected calculationAverageSpeed() {

    }

    /**
     * 獲取兩點間距離
     * ```
     *      兩點間距離公式 :
     *          d = √(p2.x - p1.x)^2 + (p2.y- p1.y)^2
     * ```
     * @param {cc.Vec2} p1 - 起點
     * @param {cc.Vec2} p2 - 要到達的點
     * @return {number} - 兩點間距離
     * @private
     */
    private getDistanceBetweenTwoPoints(p1: cc.Vec2, p2: cc.Vec2): number {
        let dx = Math.pow((p2.x - p1.x), 2);
        let dy = Math.pow((p2.y - p1.y), 2);
        return Math.sqrt(dx + dy)
    }

    /**
     * 獲取兩點間角度
     * ```
     *      1.獲取P1到P2的向量方向
     *          公式:X:(P2.x -P1.x),Y:(P2.y - P1-y)
     *
     *      2.弧度轉換角度公式:
     *         angle = radians * (180 / Math.PI)
     * ```
     * @param {cc.Vec2} p1 - 起始點
     * @param {cc.Vec2} p2 - 終點
     * @return {number} - 兩點間角度
     */
    private getAngleBetweenTwoPoints(p1: cc.Vec2, p2: cc.Vec2): number {
        let dx = p2.x - p1.x;
        let dy = p2.y - p1.y;
        const dir = cc.v2(dx, dy);
        const radian = dir.signAngle(this.vector);        //拿取帶方向的夾角的弧度。
        return (radian * (180 / Math.PI)) * -1;
    }


    /**
     * 清除所有該局使用完的贏線
     */
    public clear() {
        cc.Tween.stopAllByTarget(this._container);
        this.allWinLine.length = 0;
        let lineContainer = this.lineSprite.node.parent.getChildByName(LINE_CONTAINER);
        lineContainer.destroyAllChildren();
    }

    /**
     * 數據測試,待刪除
     * @param {number} quantity
     * @return {Array<Array<number>>}
     * @protected
     */
    test(quantity: number): Array<Array<number>> {
        let json: Array<Array<number>> = new Array<Array<number>>();
        for (let i = 0; i < quantity; i++) {
            let array: Array<number> = [];
            for (let j = 0; j < this.gridRow.length; j++) {
                let random = Math.floor(Math.random() * (this.gridCont) + j * this.gridCont);
                array.push(random);
            }
            json.push(array);
        }
        return json;
    }

    get container(): cc.Node {
        return this._container;
    }
}