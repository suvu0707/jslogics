import React from 'react'

function Question10() {
    let emp=[{name:"A",role:"Dev",rating:5},{name:"B",role:"Dev",rating:4},{name:"c",role:"Tester",rating:7}]

    let devrating=emp.filter((info)=>info.role==="Dev").map((item)=>item.rating+",")
    


    return (
        <div style={{ textAlign: "left" }}>
            <pre >
                {
                    `
                    let emp=[{name:"A",role:"Dev",rating:5},{name:"B",role:"Dev",rating:4},{name:"c",role:"Tester",rating:7}]

                    let oldestAge = 0;

                    for (let i = 0; i < array.length; i++) {
                        if (array[i].age > oldestAge) {
                        oldestAge = array[i].age;
                        }
                    }
    
                    //const oldestAge = array.reduce((maxAge, person) => Math.max(maxAge, person.age), 0);
    
                    `
                }<br />

            </pre>
            <pre style={{ paddingLeft: "138px" }}><b>Result :</b>`Devrating`= {devrating}  </pre>
        </div>
    )
}

export default Question10;