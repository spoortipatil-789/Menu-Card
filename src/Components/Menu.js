import React from 'react'
import "./Menu.css"
const Menu = (props) => {
  return (
    <div className='menu'>
    {props.menu.map((item)=>{
        const {id,title,price,desc,img}=item;
        return(
            <div className='menuitem' key={id}>
            <div className='img'>
            <img src={img} alt={title}></img>
            </div>
            <div className='header'>
            <div className='title'>
            <h3>{title}</h3>
            <h4 className='price'>{price}</h4>
            </div>
            
                <div className='para'> <p>{desc}</p>
                </div>
            </div>
            </div>
        )
    })}

    </div>
  )
}

export default Menu