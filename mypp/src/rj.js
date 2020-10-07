import React from "react";

const Rj =({rj,deleteRj})=>{
    const rjlist=rj.map(rjek=>{
    return  rjek.age>20 ? (
            <div className="rj" key={rjek.id}>
                <p>{rjek.name} of age {rjek.age} {rjek.king} {rjek.id}</p>
                <button onClick={()=>{deleteRj(rjek.id)}}>Delete</button>
            </div>
          ): null;
    })
    return (
      <div className="rj-List">
         {rjlist}
      </div>
      
    )
}

export default Rj 