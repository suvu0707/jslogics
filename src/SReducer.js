const SList=(state=[],action)=>{
    const oldStateArray=Object.assign([],state);
    if(action.type==="save"){
        oldStateArray.push(action.payload)
    }
    if(action.type==="delete"){
        oldStateArray.splice(action.payload.id,1)
    }
    // if(action.type==="update"){
    //     oldStateArray=oldStateArray.filter((item)=>item.id !==action.payload.id)
    //     oldStateArray.push(action.payload)
    // }
    return oldStateArray
}
export default SList;