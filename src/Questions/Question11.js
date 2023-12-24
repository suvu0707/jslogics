import React from 'react'

function Question11() {
    let data = [21,34,85,10]

    const n = data.length;

    for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (data[j] > data[j + 1]) {
                    // Swap data[j] and data[j + 1]
                    let temp = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = temp;
                }
            }
    }

    let sortedArray=data.sort(function(a,b){return a-b}).map((item)=>item+",")
    


    return (
        <div style={{ textAlign: "left" }}>
            <pre >
                {
                    `
                    let data = [21,34,85,10]

                    for (let i = 0; i < n - 1; i++) {
                        for (let j = 0; j < n - i - 1; j++) {
                            if (data[j] > data[j + 1]) {
                                // Swap data[j] and data[j + 1]
                                let temp = data[j];
                                data[j] = data[j + 1];
                                data[j + 1] = temp;
                            }
                        }
                    }
    
                    `
                }<br />

            </pre>
            <pre style={{ paddingLeft: "138px" }}><b>Result :</b>`sortedArray`= {sortedArray}  </pre>
        </div>
    )
}

export default Question11;