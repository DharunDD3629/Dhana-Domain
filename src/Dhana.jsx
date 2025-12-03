
import './index.css'

function Dhana({img,name="Null",role="Developer",rate="5"}){
    return(
        <>
            <div className='card'>
                <img src= {img} />
                <h3> {name} </h3>
                <p>I am a {role}</p>
                <span>Rating : {rate}</span>
            </div> 
        </>
    );
}
    

export default Dhana;