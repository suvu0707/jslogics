import React from 'react'

function Question12() {
    const counts = {};
  const sampleArray = ['a', 'a', 'b', 'c'];
  sampleArray.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  // Convert the 'counts' object into a formatted string
  const countsString = JSON.stringify(counts, null, 2);
//   console.log(typeof typeof 3)
    return (
        <div style={{ textAlign: "left" }}>
            <pre >
                {
                    `
                    const counts = {};
                    const sampleArray = ['a', 'a', 'b', 'c'];
                    sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    
                    `
                }<br />

            </pre>
            <pre style={{ paddingLeft: "138px" }}><b>Result :</b>`Counts`= {countsString}  </pre>
        </div>
    )
}

export default Question12;