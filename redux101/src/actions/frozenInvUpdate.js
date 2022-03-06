export default (operation, index)=>{
    console.log('actions  running ')
    return {
        type: 'updateFrozen',
        payload: {
            operation,
            index
        }
    }
}