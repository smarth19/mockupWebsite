class AppActions{
    constructor(dispatch){
        this.dispatch = dispatch
    }
    openModal(payLoad){
        this.dispatch({
            type: 'openModal',
            payLoad
        })
        return this
    }
    loggedIn(payLoad){
        this.dispatch({
            type: 'loggedIn',
            payLoad
        })
        return this
    }
}


export default AppActions