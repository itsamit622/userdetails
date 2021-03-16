import axios from 'axios'
import React ,{ lazy, Suspense  } from 'react'

const LazyComp =lazy(()=>import('./LazyComp'));


console.log("i am user details")



export default class UserDetails extends React.Component{
    state ={
        isloading:false,
        users:{
         address:{}
        },
        tempuser:{}
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.id).then(res=>{
         this.state.users = res.data;
            this.setState(this.state);
        })
    }
  updateName(event){
      console.log(event)
      console.log(event.target.value)
       this.state.tempuser.name=event.target.value
      this.setState(this.state)
  }
  updateuserName(event){
      this.state.tempuser.username=event.target.value
      this.setState(this.state);
      
  }
  updateContent(){
      this.state.isloading=false
      this.state.users.name=this.state.tempuser.name
      this.state.users.username=this.state.tempuser.username
      this.setState(this.state)
  }

    cancelContetnt(){
        this.state.isloading=false;
        this.setState(this.state)
    }
    
    UserLinks(){
    return<div>
               {this.state.tempuser.name}
               <h1 > Name:  <input type="text" value={this.state.tempuser.name} onChange={this.updateName.bind(this)}/> </h1>
               <h1 > Username: <input type="text" value={this.state.tempuser.username} onChange={this.updateuserName.bind(this)}/> </h1>
                <button style={{backgroundColor: "red" }} onClick={this.updateContent.bind(this)} >update</button>
                <button style={{backgroundColor: "green" }} onClick={this.cancelContetnt.bind(this)} >cancel</button>
                 </div>
    }
    UserInfo(){
             
             return <div>
                
                <h1> Name: {this.state.users.name} </h1>
                <h1> Username: {this.state.users.username} </h1>
                <button onClick={this.editbtn.bind(this)}>Edit</button>
           </div>
    }

    editbtn(){
         this.state.tempuser.name =this.state.users.name
         this.state.tempuser.username=this.state.users.username
         this.state.isloading =true;
         this.setState(this.state)
    }
    
        
    
    render(){
        let UserData =null;
        let headerTag =null;
        if(this.state.isloading){
            UserData=this.UserLinks();
            headerTag="User Details" 
        }
        else{
            UserData=this.UserInfo();
            headerTag="User update"
        }


        
        console.log(this.props)
       
      
        
    
        return <div>
            <Suspense fallback="isloading" >
               
            <LazyComp name={headerTag}  />
            
            </Suspense>
            <img src={"/images/user"+ this.props.match.params.id+ ".jpg"} width="200"/>
             {UserData}
             
           
        </div>
    }
}