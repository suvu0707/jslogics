import React from 'react'

function Question3() {
    const numbers = [23, 43, 2, 11, 12, 14, 15, 33];

    let lowestNumber = numbers[0];;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]< lowestNumber){
            lowestNumber=numbers[i];
        }
    }

    return (
        <div style={{ textAlign: "left" }}>
            <pre >
                {
                    `
                    const numbers = [23, 43, 2, 11, 12, 14, 15, 33];

                    const lowestNumber = numbers[0];
                        
                    for(let i=0;i<numbers.length;i++){
                        if(numbers[i]< lowestNumber){
                             lowestNumber=numbers[i];
                        }
                    }
                    `
                }<br />

            </pre>
            <pre style={{ paddingLeft: "138px" }}><b>Result :</b>`lowestNumber`= {lowestNumber}</pre>
        </div>
    )
}

export default Question3