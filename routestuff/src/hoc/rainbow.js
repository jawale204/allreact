import React from "react"

const Rainbow =(WrappedComponent)=>{
    const colors=["red","pink","orange","blue","green","yellow"];
    const name=colors[Math.floor(Math.random()*5)];
    const colorsname=name+"-text";

    return (props)=>{
        return(
            <div className={colorsname}>
            <WrappedComponent {...props}/>
            </div>
        )
    }
}
export default Rainbow