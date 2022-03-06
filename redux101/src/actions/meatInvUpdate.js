export default (operation,index)=>{
   return {
        type: "meatUpdate",
        payload:{
            operation,
            index
        }
    }
}

