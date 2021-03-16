import React from 'react';
console.log("i am about")

 export default class About extends React.Component{

    render(){
        console.log(this.props)

        return <div>
            <img src="./images/about2.gif" alt="about" width="300"/>
            <h1 style={{color:"red" , backgroundColor: "aqua",
    borderRadius: "18px"}}>companydetails.in provide all information speedy decision making to grow your business. We also provide detailed information about the directors of indian companies. We provide detailed information about indian companies such as:Registration Date, Registered Address, Category,</h1>
        </div>
    }
}

