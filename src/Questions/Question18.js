import React from 'react'

function Question18() {
    let person1=[{name:"A",lname:"sahoo"},{name:"B",lname:"swain"},{name:"C",lname:"das"}];
    let person2=[{name:"A",lname:"sahoo"},{name:"N",lname:"ojha"},{name:"G",lname:"Behera"}];
    const newArray=person1.filter((p1value)=>{
        return !person2.some((p2value)=>p2value.name===p1value.name && p2value.lname===p1value.lname  )
    })
    console.log("newArray",newArray)
    return (
        <div style={{ textAlign: "left" }}>
            <pre >
                {
                    `
                    let person1=[{name:"A",lname:"sahoo"},{name:"B",lname:"swain"},{name:"C",lname:"das"}];
                    let person2=[{name:"A",lname:"sahoo"},{name:"N",lname:"ojha"},{name:"G",lname:"Behera"}];
                    const newArray=person1.filter((p1value)=>{
                        return !person2.some((p2value)=>p2value.name===p1value.name && p2value.lname===p1value.lname  )
                    })
                    //Chk in console
    
                    `
                }<br />

            </pre>
        </div>
    )
}

export default Question18;