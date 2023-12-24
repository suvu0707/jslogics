import React from 'react'

function Question20() {
    let person=[{name:"A",lanme:"sahoo"},{name:"",lanme:""},{name:"C",lanme:"das"}];
    const valueArray=person.filter((item)=>{
        return Object.values(item)
    })
    console.log("valueArray",valueArray)
    return (
        <div style={{ textAlign: "left" }}>
            <pre >
                {
                    `
                    let person=[{name:"A",lanme:"sahoo"},{name:"",lanme:""},{name:"C",lanme:"das"}];
                    const valueArray=person.filter((item)=>{
                        return Object.values(item)
                    })
                    //Chk in console
    
                    `
                }<br />

            </pre>
        </div>
    )
}

export default Question20;