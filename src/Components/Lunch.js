import Menu from "./Menu";
import Data from "./Data";
 
import { useState , useEffect} from "react";

const Lunch = ()=>{
    const [menu, setMenu]=useState(Data);
    const lunchItem=()=>{
        const data1=menu.filter((item)=>
            item.category==="lunch",
            // console.log(item.category)
           
            )
            setMenu(data1)
    }
    useEffect(() => {
      console.log("useeffect");
       lunchItem();
      },[]);
    return(
        <div>
        {/* <Menu menu={menu}/> */}
        <Menu menu={menu}/>
       
        </div>
    )
}
export default Lunch;


