import React from 'react'

function Question9() {
    let array=[{name:"A",age:27},{name:"B",age:24},{name:"C",age:29}]

    let oldestAge = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i].age > oldestAge) {
        oldestAge = array[i].age;
        }
    }
    
    //const oldestAge = array.reduce((maxAge, person) => Math.max(maxAge, person.age), 0);


    return (
        <div style={{ textAlign: "left" }}>
            <pre >
                {
                    `
                    let array=[{name:"A",age:27},{name:"B",age:24},{name:"C",age:29}]

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
            <pre style={{ paddingLeft: "138px" }}><b>Result :</b>`OldestAge`= {oldestAge}  </pre>
        </div>
    )
}

export default Question9;