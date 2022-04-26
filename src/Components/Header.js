import {NavLink} from "react-router-dom"
import "./Header.css"


const Header=()=>{
    return (
            <div>

           <h1>Our Menu</h1>
           <div className="underline">  </div>
           
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to="/all" className={(activeValue)=>activeValue.isActive ? activeValue:""}>All</NavLink>
                    </li>
                    <li>
                        <NavLink to="/breakfast" className={(activeValue)=>activeValue.isActive ? activeValue:""}>Breakfast</NavLink>
                    </li>
                    <li>
                        <NavLink to="/lunch" className={(activeValue)=>activeValue.isActive ? activeValue:""}>Lunch</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shakes" className={(activeValue)=>activeValue.isActive ? activeValue:""}>Shakes</NavLink>
                    </li>
                   
                
                </ul>
            </nav>
            
            </div>
        
    )
}
export default Header