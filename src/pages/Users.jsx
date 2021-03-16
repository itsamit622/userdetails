
import React from 'react';
import { Route ,withRouter} from 'react-router-dom';
import UserList from './UserList'
import UserDetails from './UserDetails'






class Users extends React.Component{

   
    
   
    render(){
        console.log(this.props);
        return <div>
                        
                   <Route path={this.props.match.path  } exact component={UserList} />
                   <Route path={this.props.match.path + "/:id" }  component={UserDetails} />
                
           
        </div>
    
    

         
    }
}

export default withRouter(Users);