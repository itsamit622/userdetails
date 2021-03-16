import React from 'react'
console.log("hello")

export default class LazyComp extends React.Component{

    render(){
           
        

         console.log(this.props)
        return <div><h1 style={{color:"red"}}>{this.props.name} </h1>
            </div>
    }
}