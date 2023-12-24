import React from 'react'

function Question14() {
    let emp=[{name:"A",role:"Dev"},{name:"B",role:"Dev"},{name:"c",role:"Tester"}]
    const filteredArray=emp.filter((info)=>info.name !== "A");
    console.log("filteredArray",filteredArray)
    return (
        <div style={{ textAlign: "left" }}>
            <pre >
                {
                    `
                    let emp=[{name:"A",role:"Dev"},{name:"B",role:"Dev"},{name:"c",role:"Tester"}]
                    const filteredArray=emp.filter((info)=>info.name !== "A")
                    //Chk in console
    
                    `
                }<br />

            </pre>
        </div>
    )
}

export default Question14;