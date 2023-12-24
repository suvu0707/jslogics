import React, { useState } from 'react'
import Question1 from './Questions/Question1';
import Question2 from './Questions/Question2';
import Question3 from './Questions/Question3';
import Question4 from './Questions/Question4';
import Question5 from './Questions/Question5';
import Question6 from './Questions/Question6';
import Question7 from './Questions/Question7';
import Question8 from './Questions/Question8';
import Question9 from './Questions/Question9';
import Question10 from './Questions/Question10';
import Question11 from './Questions/Question11';
import Question12 from './Questions/Question12';
import Question13 from './Questions/Question13';
import Question14 from './Questions/Question14';
import Question15 from './Questions/Question15';
import Question16 from './Questions/Question16';
import Question17 from './Questions/Question17';
import Question18 from './Questions/Question18';
import Question19 from './Questions/Question19';
import Question20 from './Questions/Question20';

function AllQuestions() {
    const [isRendered, setIsRendered] = useState(false);
    const [name, setName] = useState("");

  const handleButtonClick = (data) => {
    setIsRendered(!isRendered);
    setName(data)
  };
    return (
        <div>

            <div>
                <pre>
                    1: {`const numbers=[11,12,14,15]; `}
                    {` Find The missing Number from the Array....`}
                    <button onClick={()=>handleButtonClick("ques1")} >See Result</button>
                    {isRendered && name==="ques1" && <Question1/>}
                </pre>
            </div>
            <div>
                <pre>
                    2: {`const numbers = [23, 43, 2, 11, 12, 14, 15, 33]; `}
                    {` Find The Highest Number from the Array....`}
                    <button onClick={()=>handleButtonClick("ques2")} >See Result</button>
                    {isRendered && name==="ques2"  && <Question2/>}
                </pre>
            </div>
            <div>
                <pre>
                    3: {`const numbers = [23, 43, 2, 11, 12, 14, 15, 33]; `}
                    {` Find The Lowest Number from the Array....`}
                    <button onClick={()=>handleButtonClick("ques3")} >See Result</button>
                    {isRendered && name==="ques3"  && <Question3/>}
                </pre>
            </div>
            <div>
                <pre>
                    4: {`const numbers = [23,12, 43, 2, 11, 12, 14,43, 15, 33]; `}
                    {` Remove Duplicates from the Array....`}
                    <button onClick={()=>handleButtonClick("ques4")} >See Result</button>
                    {isRendered && name==="ques4"  && <Question4/>}
                </pre>
            </div>
            <div>
                <pre>
                    5: {`const numbers = [23,12, 43, 2, 11, 12, 14,43, 15, 33]; `}
                    {` Find the sum of the Array....`}
                    <button onClick={()=>handleButtonClick("ques5")} >See Result</button>
                    {isRendered && name==="ques5"  && <Question5/>}
                </pre>
            </div>
            <div>
                <pre>
                    6: {`const numbers = [23,12, 43, 2, 11, 14, 15, 33]; `}
                    {` Reverse an Array....`}
                    <button onClick={()=>handleButtonClick("ques6")} >See Result</button>
                    {isRendered && name==="ques6"  && <Question6/>}
                </pre>
            </div>
            <div>
                <pre>
                    7: {`const string="suvendu sahoo"; `}
                    {` Output should be "sahoo suvendu"...`}
                    <button onClick={()=>handleButtonClick("ques7")} >See Result</button>
                    {isRendered && name==="ques7"  && <Question7/>}
                </pre>
            </div>
            <div>
                <pre>
                    8: {`const text=[1,4,"s",6,"h"]; `}
                    {` Find only numbers/texts from an array...`}
                    <button onClick={()=>handleButtonClick("ques8")} >See Result</button>
                    {isRendered && name==="ques8"  && <Question8/>}
                </pre>
            </div>
            <div>
                <pre>
                    9: {`let array=[{name:"A",age:27},{name:"B",age:24},{name:"C",age:29}] `}
                    {` Find out oldest age...`}
                    <button onClick={()=>handleButtonClick("ques9")} >See Result</button>
                    {isRendered && name==="ques9"  && <Question9/>}
                </pre>
            </div>
            <div>
                <pre>
                    10: {`let emp=[{name:"A",role:"Dev",rating:5},{name:"B",role:"Dev",rating:4},{name:"c",role:"Tester",rating:7}] `}
                    {` Find out dev rating only...`}
                    <button onClick={()=>handleButtonClick("ques10")} >See Result</button>
                    {isRendered && name==="ques10"  && <Question10/>}
                </pre>
            </div>
            <div>
                <pre>
                    11: {`let data = [21,34,85,10]; `}
                    {` How to sort array using for loop...`}
                    <button onClick={()=>handleButtonClick("ques11")} >See Result</button>
                    {isRendered && name==="ques11"  && <Question11/>}
                </pre>
            </div>
            <div>
                <pre>
                    12: {`const sampleArray = ['a', 'a', 'b', 'c']; `}
                    {` How to get count of duplicate number in key value pair...`}
                    <button onClick={()=>handleButtonClick("ques12")} >See Result</button>
                    {isRendered && name==="ques12"  && <Question12/>}
                </pre>
            </div>
            <div>
                <pre>
                    13: {`let emp=[{name:"A",role:"Dev",rating:5},{name:"B",role:"Dev",rating:4},{name:"c",role:"Tester",rating:7}] ; `}
                    {` Find out thoes objects having same role 'Dev'...`}
                    <button onClick={()=>handleButtonClick("ques13")} >See Result</button>
                    {isRendered && name==="ques13"  && <Question13/>}
                </pre>
            </div>
            <div>
                <pre>
                    14: {`let emp=[{name:"A",role:"Dev"},{name:"B",role:"Dev"},{name:"c",role:"Tester"}] ; `}
                    {` Remove that object from Array having name property value "A"...`}
                    <button onClick={()=>handleButtonClick("ques14")} >See Result</button>
                    {isRendered && name==="ques14"  && <Question14/>}
                </pre>
            </div>
            <div>
                <pre>
                    15: {`let array=[{name:"A",age:27},{name:"B",age:24},{name:"C",age:29}]; `}
                    {` Check wheather all age value is grater than 25 in array objects...`}
                    <button onClick={()=>handleButtonClick("ques15")} >See Result</button>
                    {isRendered && name==="ques15"  && <Question15/>}
                </pre>
            </div>
            <div>
                <pre>
                    16: {`let array=[{name:"A",age:27},{name:"B",age:24},{name:"C",age:29}]; `}
                    {` Check wheather all object have age property in array objects...`}
                    <button onClick={()=>handleButtonClick("ques16")} >See Result</button>
                    {isRendered && name==="ques16"  && <Question16/>}
                </pre>
            </div>
            <div>
                <pre>
                    17: {`let person=[{name:"A",lanme:"sahoo"},{name:"",lanme:""},{name:"C",lanme:"das"}]; `}
                    {` Remove object  have all  property value "" in array objects...`}
                    <button onClick={()=>handleButtonClick("ques17")} >See Result</button>
                    {isRendered && name==="ques17"  && <Question17/>}
                </pre>
            </div>
            <div>
                <pre>
                    18: {`let person1=[{name:"A",lname:"sahoo"},{name:"B",lname:"swain"},{name:"C",lname:"das"}];`}<br/>    {`let person2=[{name:"A",lname:"sahoo"},{name:"N",lname:"ojha"},{name:"G",lname:"Behera"}];`}
                    {` Remove that objects from person1 having same property value in person2...`}
                    <button onClick={()=>handleButtonClick("ques18")} >See Result</button>
                    {isRendered && name==="ques18"  && <Question18/>}
                </pre>
            </div>
            <div>
                <pre>
                    19: {`let person=[{name:"A",lanme:"sahoo"},{name:"",lanme:""},{name:"C",lanme:"das"}]; `}
                    {` Add a new Property fullname based on another property name==="A" in array objects...`}
                    <button onClick={()=>handleButtonClick("ques19")} >See Result</button>
                    {isRendered && name==="ques19"  && <Question19/>}
                </pre>
            </div>
            <div>
                <pre>
                    20: {`let person=[{name:"A",lanme:"sahoo"},{name:"",lanme:""},{name:"C",lanme:"das"}]; `}
                    {` Wrap all the property values of each object inside individual Array...`}
                    <button onClick={()=>handleButtonClick("ques20")} >See Result</button>
                    {isRendered && name==="ques20"  && <Question20/>}
                </pre>
            </div>



        </div>
    )
}

export default AllQuestions