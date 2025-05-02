               //Contact page
import { useNavigate } from "react-router-dom";  
 function Contact(){
     const Navigate = useNavigate()
     const gotoHome= () =>{
         Navigate('/Home')
     }
     const gotoAbout1= () =>{
         Navigate('/About')
     }
     return(
         <>
         <button onClick={gotoHome}>Go to Home</button>
         <button onClick={gotoAbout1}>Go to About</button>
 
      </>
     )
 }
 export default  Contact