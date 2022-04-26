import Menu from "./Menu";
import Data from "./Data";
 
import { useState ,useEffect} from "react";

const Mainfile = ()=>{
  
    const [menu, setMenu]=useState(Data);
     
    
     const allItems=()=>{
     const data1=Data;
            setMenu(data1);   
     }
    useEffect(()=>{
      allItems();
    },[])
    return(
        <div>
        {/* <Menu menu={menu}/> */}
        <Menu menu={menu}/>
          
        </div>
    )
}
export default Mainfile;




























// useEffect(() => {
//   setTimeout(() => {
//     setMenu(allItems);
//   }, 1000);
// });