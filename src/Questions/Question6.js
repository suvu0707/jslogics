import React from 'react'

function Question6() {
    const numbers = [23,12, 43, 2, 11, 14, 15, 33];

    let reversedArray=numbers.reverse()
    
    

    return (
        <div style={{ textAlign: "left" }}>
            <pre >
                {
                    `
                    const numbers = [23,12, 43, 2, 11, 14, 15, 33];

                    let reversedArray=numbers.reverse()
    
                    `
                }<br />

            </pre>
            <pre style={{ paddingLeft: "138px" }}><b>Result :</b>`reversedArray`= {`[${reversedArray.map((name)=>{return(name +",")})}]`}  </pre>
        </div>
    )
}

export default Question6;