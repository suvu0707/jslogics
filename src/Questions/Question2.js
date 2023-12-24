import React from 'react'

function Question2() {
    const numbers = [23, 43, 2, 11, 12, 14, 15, 33];

    let highestNumber = 0;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>highestNumber){
            highestNumber=numbers[i];
        }
    }

    return (
        <div style={{ textAlign: "left" }}>
            <pre >
                {
                    `
                    const numbers = [23, 43, 2, 11, 12, 14, 15, 33];

                    const highestNumber = 0;
                        
                    for(let i=0;i<numbers.length;i++){
                        if(numbers[i]>highestNumber){
                             highestNumber=numbers[i];
                        }
                    }
                    `
                }<br />

            </pre>
            <pre style={{ paddingLeft: "138px" }}><b>Result :</b>`HighestNumber`= {highestNumber}</pre>
        </div>
    )
}

export default Question2