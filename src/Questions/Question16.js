import React from 'react'

function Question16() {
    let person=[{name:"A",age:27},{name:"B",age:24},{name:"C",age:29}]
    const isAgeAvailable=person.every((info,index,array)=>
        // return info["age"]>25;
         info.age
    )
    console.log("isAgeAvailable",isAgeAvailable)
    return (
        <div style={{ textAlign: "left" }}>
            <pre >
                {
                    `
                    let person=[{name:"A",age:27},{name:"B",age:24},{name:"C",age:29}]
                    const isAgeGraterThan25=person.every((info,index,array)=>{
                            return info["age"]>25;
                            // return info.age>25;
                    })
                    //Chk in console
    
                    `
                }<br />

            </pre>
        </div>
    )
}

export default Question16;