import Menu from "./Menu";
import Data from "./Data";
 
import { useState,useEffect } from "react";

const Breakfast = ()=>{
    const [menu, setMenu]=useState(Data);
   
    const breakfastItem=()=>{
        const data1=Data.filter((item)=>
            item.category==="breakfast");
            setMenu(data1)
    }
   

    useEffect(()=>{
      breakfastItem();
    },[])
    return(
        <div>
        <Menu menu={menu}/>
        </div>
    )
}
export default Breakfast;




































 // useEffect(() => {
    //     setTimeout(() => {
    //       setMenu(breakfastItem);
    //     }, 1000);
    //   });