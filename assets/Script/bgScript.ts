import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('bgScript')
export class bgScript extends Component {
    start() {

    }

    update(deltaTime: number) {
        //每帧移动
        //遍历背景图
        
        for (let bgNode of this.node.children) {
            //移动
            bgNode.setPosition(
                bgNode.getPosition().x,
                bgNode.getPosition().y - 150 * deltaTime);
                if (bgNode.getPosition().y<= -800) {
                    bgNode.setPosition(
                        bgNode.getPosition().x,
                        bgNode.getPosition().y + 1700 );
                } 
            
        }
    }
	
	onDestroy(){
         
    }
}


