/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2021-07-16 下午 04:28
 * @Version 1.0
 */
import WinLineObserver from "../Observer/WinLineObserver";

export class WinLineNotification extends fcc.ABS.ABaseNotification{

    readonly TAG_NAME: string;


    constructor() {
        super();
        this.TAG_NAME = "WIN_LINE_RESTORE";
    }


    /**
     * 訂閱該事件
     * @param {AutoStateChangeObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
    subscribe(observer:WinLineObserver, isPermanent:boolean) {
        super.subscribe(observer, isPermanent);
    }

    async notify(winLineNumber?:number): Promise<void> {
        if (this.observer.size > 0) {
            for (let observer of this.observer) {
                await observer.pushNotification(winLineNumber);
                if (!observer.isPermanent) {
                    this.unsubscribe(observer);
                }
            }
        }
    }
}