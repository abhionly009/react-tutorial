import React, { Component } from 'react';

import './App.css';
import NavBarComponent from './navbar';
import UserInformation from './UserInformation';


class App extends Component{

    render() {

 
        return (
            
          <div className="container">

            <div className="navbarSection">
              <NavBarComponent></NavBarComponent>
            </div>

            <div className="sidebarSection">
              <p>This is SideBar Section</p>
              </div>

            <div className="mainareaSection">
             <UserInformation heroName="Iron Man" description ="He is most powerful human being" image="ironman.jpg"/>
              </div>
           
              <div className="footerSection"></div>
        </div>  
        )
}

}




// function App() {
//     return ( 
//         <div class="container">
//        <Table/>

//         </div>
//         );
//         }

export default App;