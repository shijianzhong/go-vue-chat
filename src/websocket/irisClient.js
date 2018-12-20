export default class IrisClient{
    constructor(receiveMsg){
        this.socket = new Ws(`ws://imeasy.cn:8088/my_endpoint`)
        this.socket.OnConnect(this.OnConnect);
        this.socket.OnDisconnect(this.OnDisconnect);
        this.socket.On("chat",receiveMsg);
    }
    OnConnect(){
        console.log("Status: Connected")
    }
    OnDisconnect(){
        console.log("Status: Disconnected")
    }
    Onchat(msg){
        console.log("Onchat")
        console.log(msg);
    }
    SendMsg(val){
        this.socket.Emit("chat", val);
    }
}
