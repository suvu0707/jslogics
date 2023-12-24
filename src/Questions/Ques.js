import React from 'react'

function Ques() {
    const numbers=[11,12,14,15];
    const findMissingNumbers=(numbers)=>{
        numbers.sort((a,b)=>a-b)         //sort the array in ascending order
        const missingNumbers=[];
        for(let num=numbers[0];num<=numbers[numbers.length-1];num++){
            if(!numbers.includes(num)){
                missingNumbers.push(num);
            }
        }
        return missingNumbers
    }
  return (
    <div style={{textAlign:"left"}}>
        <pre >
            {
                 `
                 const numbers = [11, 12, 14, 15];

                 const findMissingNumbers = (numbers) => {

                     numbers.sort((a, b) => a - b); // sort the array in ascending order
                     const missingNumbers = [];

                     for (let num = numbers[0]; num <= numbers[numbers.length - 1]; num++) {
                         if (!numbers.includes(num)) {
                             missingNumbers.push(num);
                         }
                     }
                     return missingNumbers;
                 };
               `
            }<br/>
        
        </pre>
        <pre style={{paddingLeft:"120px"}}><b>Result :</b>`findMissingNumbers(numbers)`= {findMissingNumbers(numbers)}</pre>
    </div>
  )
}

export default Ques;