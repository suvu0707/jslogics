import React from 'react'

function Question4() {
    const numbers = [23,12, 43, 2, 11, 12, 14,43, 15, 33];

    let updatedArray=numbers.filter((item,index)=>numbers.indexOf(item)===index).map((name)=>{return(name +",") })
    

    return (
        <div style={{ textAlign: "left" }}>
            <pre >
                {
                    `
                    const numbers = [23,12, 43, 2, 11, 12, 14,43, 15, 33];

                    let updatedArray=numbers.filter((item,index)=>numbers.indexOf(item)===index);
                    // Array.from(new Set(num))
                    `
                }<br />

            </pre>
            <pre style={{ paddingLeft: "138px" }}><b>Result :</b>`updatedArray`= {`[${updatedArray}]`}</pre>
        </div>
    )
}

export default Question4;