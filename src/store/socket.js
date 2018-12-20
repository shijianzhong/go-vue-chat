// initial state
const state = {
    _socketClient:null,
    _receiveMsg:"",
    _latelyMsgs:[]
}
// getters
const getters = {
    socketClient:state=>state._socketClient,
    receiveMsg:state=>state._receiveMsg,
    latelyMsgs:state=>state._latelyMsgs
}
// actions
const actions = {
    setSocketClientAction({commit},data){
        commit('setSocketClientMutation',data)
    },
    setReceiveMsgAction({commit},data){
        commit('setReceiveMsgMutation',data)
    },
    setLatelyMsgsAction({commit},data){
        commit('setLatelyMsgsMutaiton',data)
    }
}
// mutations
const mutations = {
    setSocketClientMutation(state,data){
        state._socketClient = data;
    },
    setReceiveMsgMutation(state,data){
        state._receiveMsg=data;
    },
    setLatelyMsgsMutaiton(state,data){
        state._latelyMsgs.push(data)
    }  
}
export default {
    state,
    getters,
    actions,
    mutations
}