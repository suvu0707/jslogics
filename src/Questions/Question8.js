import React from 'react'

function Question8() {
    const text=[1,4,"s",6,"h"];

    let onlyNumbers=text.filter((info)=>typeof info==="number").map((name)=>{return(name +",")});
    let onlyString=text.filter((info)=>typeof info==="string").map((name)=>{return(name +",")});
    
    

    return (
        <div style={{ textAlign: "left" }}>
            <pre >
                {
                    `
                    const text=[1,4,"s",6,"h"];

                    let onlyNumbers=text.filter((info)=>typeof info==="number").map((name)=>{return(name +",")});
                    let onlyString=text.filter((info)=>typeof info==="string").map((name)=>{return(name +",")});
    
                    `
                }<br />

            </pre>
            <pre style={{ paddingLeft: "138px" }}><b>Result1 :</b>`onlyNumbers`= {onlyNumbers}  </pre>
            <pre style={{ paddingLeft: "138px" }}><b>Result2 :</b>`onlyString`= {onlyString}  </pre>
        </div>
    )
}

export default Question8;