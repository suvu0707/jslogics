import React from 'react'

function Question17() {
    let person=[{name:"A",lanme:"sahoo"},{name:"",lanme:""},{name:"C",lanme:"das"}];
    const newArray=person.filter((info)=>{
        // return info.name!=="" && info.lanme!==""
        return Object.values(info).some((value)=>value !=="");
    })
    console.log("newArray",newArray)
    return (
        <div style={{ textAlign: "left" }}>
            <pre >
                {
                    `
                    let person=[{name:"A",lanme:"sahoo"},{name:"",lanme:""},{name:"C",lanme:"das"}]
                    const newArray=person.filter((info)=>{
                        //return info.name!=="" && info.lanme!==""
                        return Object.values(info).some((value)=>value !=="");
                    })
                    //Chk in console
    
                    `
                }<br />

            </pre>
        </div>
    )
}

export default Question17;