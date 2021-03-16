import React from 'react'
import axios from 'axios'


export default class SpliceFunc extends React.Component {

    state = {
        newUser:[],
        users: [],
        users2:[]
        
    }
    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
            this.state.users = [...res.data];
            this.state.users2 = [...res.data];
            this.setState(this.state);
        })
    }

    deletebtn(i) {
        this.state.newUser.push(this.state.users[i])
        this.state.users.splice(i, 1)
        console.log(i)
        this.setState(this.state)
        console.log(this.state)

    }
    undobtn(){
        let users=this.state.newUser.pop()
        if(users!=undefined){
        this.state.users.push(users)
        this.setState(this.state)
        console.log(users)
        }
        
    }
    revertbtn(){
        this.state.newUser.forEach((values)=>{
            this.state.users.push(values)
        })
        this.state.newUser=[];
        this.setState(this.state)
    }
   
 /*       this.state.users=[];
        console.log(this.state.users2)
         this.state.users2.forEach((values)=>{
             this.state.users.push(values)
             
             console.log(this.state)
            
             
         }
         )
         this.setState(this.state)
    } */
    callme() {
       let tags =  this.state.users.map((singleUser, i) => {
            return <div key={singleUser.name} style={{color:"white"}}> {singleUser.name}
                <br /> <button style={{color:"red", backgroundColor: "aqua" ,borderRadius:"5px"}} onClick={() =>
                    this.deletebtn(i)
                }>delete</button></div>
             
        }
        
        )
        return tags;
        
    }

    render() {

        

        return <div>
            <h1 style={{color:"red" ,backgroundColor:"aliceblue" ,textAlign:"center" ,borderRadius: "10px"}}>USERS</h1>
            {this.callme()}
            <button style={{color:"white",backgroundColor:"red" ,margin:"10px"}} onClick={this.revertbtn.bind(this)}>revert</button>
            <button onClick={this.undobtn.bind(this)}>undo</button>
        </div>
    }
}