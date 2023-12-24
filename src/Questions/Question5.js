import React from 'react'

function Question5() {
    const numbers = [23,12, 43, 2, 11, 12, 14,43, 15, 33];

    let sum=0;

    for(let i=0;i<numbers.length;i++){
        sum=sum+numbers[i]
    }
    
    const arr = [23, 12, 43, 2, 11, 12, 14, 43, 15, 33];
    const sum1 = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return (
        <div style={{ textAlign: "left" }}>
            <pre >
                {
                    `
                    const numbers = [23,12, 43, 2, 11, 12, 14,43, 15, 33];
                    let sum=0;

                    for(let i=0;i<numbers.length;i++){
                        sum=sum+numbers[i]
                    }
    
                    const arr = [23, 12, 43, 2, 11, 12, 14, 43, 15, 33];
                    const sum1 = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

                    `
                }<br />

            </pre>
            <pre style={{ paddingLeft: "138px" }}><b>Result :</b>`Sum`= {sum} && {sum1} </pre>
        </div>
    )
}

export default Question5;