import MyTween from "./MyTween";

export default class AnimationManager {

    private readonly setTweenTag: Array<cc.Node>;
    private static _init: AnimationManager;

    constructor() {
        this.setTweenTag = new Array<cc.Node>();
    }

    /**
     * 懶漢加載
     * @return {AnimationManager}
     */
    static get init(): AnimationManager {
        if (!this._init) {
            this._init = new AnimationManager();
        }
        return this._init;
    }

    setTag(tag: cc.Node) {
        this.setTweenTag.push(tag);
    }

    removeTag(tag: cc.Node) {
        let index = this.setTweenTag.indexOf(tag);
        this.setTweenTag.splice(index, 1);
    }

    getInExecution(): Array<cc.Node> {
        return this.setTweenTag;
    }

    tween(target?: any): cc.Tween {
        return new MyTween(this, target);
    }
}