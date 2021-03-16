import React from 'react';
console.log("i am contact")




export default class Contact  extends React.Component{

    render(){
        console.log(this.props)
            return <div>
                <img src="./images/contact1.gif" alt="hello" width="800"/>
                <h1 style={{color:"red" ,backgroundColor:"aqua",width:"800px"}}>
                    Contact : 9888650349
                </h1>
                <h1 style ={{backgroundColor:"aqua",width:"800px"}}>
                    Email: homeis@gmail.com 
                </h1>
                
            </div>

    }
}