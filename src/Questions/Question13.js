import React from 'react'

function Question13() {
    let emp=[{name:"A",role:"Dev",rating:5},{name:"B",role:"Dev",rating:4},{name:"c",role:"Tester",rating:7}]
    const uniqObjectsA=emp.filter((item)=>item.role==="Dev");
    const uniqObjectsB=emp.find((item)=>item.role==="Dev");
    console.log("uniqObjectsAsAnArray",uniqObjectsA);
    console.log("uniqObjectsAsObject",uniqObjectsB);
    return (
        <div style={{ textAlign: "left" }}>
            <pre >
                {
                    `
                    let emp=[{name:"A",role:"Dev",rating:5},{name:"B",role:"Dev",rating:4},{name:"c",role:"Tester",rating:7}]
                    const uniqObjects=emp.filter((item)=>item.role==="Dev");
                    console.log("uniqObjects",uniqObjects)
                    //Chk in console
    
                    `
                }<br />

            </pre>
        </div>
    )
}

export default Question13;