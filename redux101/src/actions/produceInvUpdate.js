export default (operator, index)=>{
    console.log(operator,index)
    return{
        type: 'produceUpdate',
        payload:{
            operator,
            index
        }
    }
}