import React, { Component } from 'react'
class NetworkStatus extends Component{

    constructor(props) {
        super(props)
        this.state={
        internetStatus:"you are online now"
        }
    }

    onWindowChange(e) {
        if (window.navigator.onLine) {
            this.setState(
                {
                    internetStatus :"you are online now"
                }
            )
            
        } else {
            this.setState({
                internetStatus :"you are offline now"
            })
            
        }
    }

    render() {
        window.addEventListener('online', () => console.log('came online'));
        window.addEventListener('offline', () => console.log('came offline'));

        return (
            <div className="networkStatus">
                <h3 className="networkMessage"> { this.state.internetStatus}</h3>
            </div>
        )

    }

}

export default NetworkStatus;