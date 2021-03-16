import React from 'react';
console.log("i am home")


 export default class Home extends React.Component{

    render(){
       console.log(this.props);
        return <div>
            <img src="./images/tenor.gif" alt="hello" width="400"/>
            <h1 style={{color:"red" ,backgroundColor:"aqua" ,width:"400px"}}>-Welcome to our site-</h1>

        
        </div>
    }
}