
const getItemFormLocal =()=>{
    const storedId = localStorage.getItem("item")
    if(storedId){
        const convertParse = JSON.parse(storedId)
        return convertParse
    }
    else{
        return []
    }
}
const addToDB = (id)=>{
    const getStoredId = getItemFormLocal()
    if(getStoredId.includes(id)){
        alert(" you already booked this lawyer")
    }
    else{
        getStoredId.push(id)
        const data = JSON.stringify(getStoredId)
        localStorage.setItem("item" , data)
        console.log(getStoredId)
        alert("appointment scheduled")
       
    }

}

const removeToDB = (id) => {
        console.log(id)
        const getStoredId =getItemFormLocal()
        
        const remainingData = getStoredId.filter(d => parseInt(d) !== id)
        const convertToSTR = JSON.stringify(remainingData)
        localStorage.setItem('item',convertToSTR)
       
       
    
    }

export {addToDB,getItemFormLocal,removeToDB}



