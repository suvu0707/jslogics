import React from 'react'

function Question7() {
    const string="suvendu sahoo";

    let reversedString1=string.split(" ").reverse().join(" ");
    let reversedString2=string.split(" ").reverse().join("");
    let reversedString3=string.split("").reverse().join(" ");
    let reversedString4=string.split("").reverse().join("");
    
    

    return (
        <div style={{ textAlign: "left" }}>
            <pre >
                {
                    `
                    const string="suvendu sahoo"

                    let reversedString1=string.split(" ").reverse().join(" ");
                    let reversedString2=string.split(" ").reverse().join("");
                    let reversedString3=string.split("").reverse().join(" ");
                    let reversedString4=string.split("").reverse().join("");
    
                    `
                }<br />

            </pre>
            <pre style={{ paddingLeft: "138px" }}><b>Result1 :</b>`reversedString1`= {reversedString1}  </pre>
            <pre style={{ paddingLeft: "138px" }}><b>Result2 :</b>`reversedString2`= {reversedString2}  </pre>
            <pre style={{ paddingLeft: "138px" }}><b>Result3 :</b>`reversedString3`= {reversedString3}  </pre>
            <pre style={{ paddingLeft: "138px" }}><b>Result4 :</b>`reversedString4`= {reversedString4}  </pre>
        </div>
    )
}

export default Question7;