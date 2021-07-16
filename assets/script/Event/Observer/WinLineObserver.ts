/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2021-07-16 下午 04:32
 * @Version 1.0
 */
export default class WinLineObserver extends fcc.ABS.ABaseObserver{

    constructor(callFun: (winLineNumber?:number) => Promise<void>, self) {
        super(callFun, self);
    }

    /**
     * 發送自動狀態通知
     * @param {number} winLineNumber
     */
    public async pushNotification(winLineNumber?:number):Promise<void> {
        await this._callFun.call(this._self,winLineNumber);
    }
}