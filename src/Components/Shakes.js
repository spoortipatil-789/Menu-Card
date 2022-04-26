import Menu from "./Menu";
import Data from "./Data";
 
import { useState , useEffect} from "react";
const Shakes = ()=>{
    const [menu, setMenu]=useState(Data);
    
    const shakesItem=()=>{

        const data1=Data.filter((item)=>
            item.category==="shakes",
             )
            setMenu(data1);  
    }
    
    useEffect(() => {
       shakesItem();
      },[]);
    return(
        <div>
        <Menu menu={menu}/>
        </div>
    )
}
export default Shakes;


