import React, { Component } from 'react'
import './user_information.css'
class UserInformation extends Component {
    constructor(props) {
        super()
        this.state = {
            message: ""
            
            
        }

        this.updateMessage = this.updateMessage.bind(this);
    }

  updateMessage(e) {
      this.setState({
            message : (this.props.heroName).toLowerCase() +" thanks for this Like"
      })
      
      e.target.style.backgroundColor = "gray"
      
      console.log("Disabled clicked")

    }

    render() {
      
        return (

            <div className="jumbo">

       
                <div className="imageSection">
                <img className="image" src={this.props.image} alt={this.props.alt} />
                </div>
                
                <div className="restSection">
                <h2 className="heading">{this.props.heroName}</h2>

                    <p id="description">{this.props.description}</p>
               
                <p >{this.state.message} </p>
                <button className="like"  onClick={this.updateMessage}>Like</button>
                </div>
                

            </div>

        )
    }


}

export default UserInformation;