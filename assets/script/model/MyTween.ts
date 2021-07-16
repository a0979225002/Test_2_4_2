import AnimationManager from "./AnimationManager";

/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2021-07-15 下午 03:50
 * @Version 1.0
 */
export default class MyTween extends cc.Tween {

    private readonly node: cc.Node;
    private animationManager: AnimationManager;

    constructor(animationManager:AnimationManager, target?: any) {
        super(target);
        this.node = target;
        animationManager.setTag(target);
        this.animationManager = animationManager;
    }

    start(): cc.Tween<any> {
        this.call(() => {
            this.animationManager.removeTag(this.node)
        });
        return super.start();
    }
}