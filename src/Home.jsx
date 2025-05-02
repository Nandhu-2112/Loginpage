                //Homepage...
import{useNavigate} from 'react-router-dom'
 function Home(){
    const Navigate = useNavigate();
    const gotoAbout1 =() => {
        Navigate('/About')
    }
    const gotoContact=() => {
        Navigate('/Contact')
    }
    return(
        <>
        <button onClick={gotoAbout1}>Go to About</button>
        <button onClick={gotoContact}>Go to Contact</button>

        </>
    )
 }
 export default Home