import React from 'react'


export default class EachFunc extends React.Component {


    state ={
        isUpdating :true
    }
    todos = [
        {
            userId: "Amit",
            id: 1,

        },
        {
            userId: "David",
            id: 2,

        },
        {
            userId: "Shubham",
            id: 3,

        },
        {
            userId: "Sahil",
            id: 4,

        },
        {
            userId: "Desraj",
            id: 5,

        },
        {
            userId: "Ram",
            id: 6,

        },
        {
            userId: "Sham",
            id: 7,

        },
        {
            userId: "Sita",
            id: 8,

        },
        {
            userId: "Geeta",
            id: 9,

        },
        {
            userId: "Radha",
            id: 10,

        }
    ];
    updateValue(){
        this.state.isUpdating =true;
        this.setState(this.state)
    }
    returnValue(){
        this.state.isUpdating =false;
        this.setState(this.state)

    }
        getuserlist(){
            let newTodos2=[]
           this.todos.forEach(( singleTodo )=>{
            
             let newObj = {...singleTodo};
            newObj.userId ="unlimited";
            newTodos2.push(newObj);
             })
             let newTodos3 =newTodos2.map((values1)=>{
                 return <h1>{values1.userId}</h1>
             })
             return <div> {newTodos3}
             <button onClick={this.updateValue.bind(this)}>update</button>
             
             </div>
            }
       
        getuserlist3(){ 
            let newTodos = this.todos.map((values) =>{
           return <h1>{values.userId}</h1>
         })
           return <div>{newTodos}
            <button onClick={this.returnValue.bind(this)}>return</button>
           </div>
           
            } 
    render() {
                   let UserData =null;
          if(this.state.isUpdating==true){
                 UserData =this.getuserlist3()
          }
          else{
              UserData =this.getuserlist()          }
          

           

        
        return <div> 
            { UserData} 
            </div>
    }
}