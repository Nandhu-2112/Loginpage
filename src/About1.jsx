                //About page
import { useNavigate } from "react-router-dom";  
function About1(){
    const Navigate = useNavigate()
    const gotoHome= () =>{
        Navigate('/Home')
    }
    const gotoContact= () =>{
        Navigate('/Contact')
    }
    return(
        <>
        <button onClick={gotoHome}>Go to Home</button>
        <button onClick={gotoContact}>Go to Contact</button>

     </>
    )
}
export default About1              