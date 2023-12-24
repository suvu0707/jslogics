import React from 'react'

function Question19() {
    let person=[{name:"A",lanme:"sahoo"},{name:"",lanme:""},{name:"C",lanme:"das"}];
    const newArray=person.map((item)=>{
        item.fullname=item.name==="A" ? item.name+" "+item.lanme :""
        return item
    })
    console.log("newArray",newArray)
    return (
        <div style={{ textAlign: "left" }}>
            <pre >
                {
                    `
                    let person=[{name:"A",lanme:"sahoo"},{name:"",lanme:""},{name:"C",lanme:"das"}];
                    const newArray=person.map((item)=>{
                        item.fullname=item.name==="A" ? item.name+" "+item.lanme :""
                        return item
                    })
                    //Chk in console
    
                    `
                }<br />

            </pre>
        </div>
    )
}

export default Question19;