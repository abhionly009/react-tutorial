import React, { Component } from 'react'
import  './navbar.css'
class NavBarComponent extends Component{

    render() {
        return (
            
            <nav>
                <a href="#" class="active">Home</a>
                <a href="#">Services</a>
                <a href="#">About Us</a>
                <a href="#">Career</a>
                <a href="#">Contact Us</a>
            </nav>


        )

    }

}
export default NavBarComponent;