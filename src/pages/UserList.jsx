import React, { lazy, Suspense } from 'react';
import axios from 'axios';
import { Link  } from 'react-router-dom';
const LazyComp =lazy(()=>import('./LazyComp'));

console.log("i am user list")



 export default class UserList extends React.Component{
    state={
        users :[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            this.state.users =res.data
            this.setState(this.state);
        })
    }
    
   
    render(){
        console.log(this.state.users);
        let linkTags = this.state.users.map((singleUser)=>{     
            return <li className ="user-list "><Link
                        key={singleUser.id} 
                        to={this.props.match.path + "/" + singleUser.id } > 
                          <img src={"/images/user" +singleUser.id +".jpg" }alt="hello"  width="40" height="40"/>
                         <span className="text"> {singleUser.name} </span>
                    </Link> 
                    </li>
        });
        console.log(linkTags);
        console.log(this.props);
        return <div>
            <Suspense fallback="isloading">
            <LazyComp name="User List"/>
            </Suspense>
            
            
            
<ul>
            {linkTags}


</ul>

                 
                 
            
             
            
            
             
           
           
        </div>
    
    

         
    }
}

