import React,{Component} from "react";
class Person extends Component{ 
    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}
Person.defaultProps={
    name:"Guest"
}
export default Person

// destructing.......
// import React,{Component} from "react";
// class Person extends Component{ 
//     render(){
//         return(
//             <div>
//                 <h2>{this.name}</h2>
//             </div>
//         )
//     }
// }
// Person.defaultProps={
//     name:"Guest"
// }
// export default Person

//function default
// import React from "react";
// function Person (Props){ 
//     return(
//             <div>
//                 <h2>Name:{Props.name}</h2>
                
//             </div>
            
//         )
//     }

// Person.defaultProps={
//     name:"Guest"
// }
// export default Person
