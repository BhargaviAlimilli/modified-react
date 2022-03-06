const seedData = [
    {
        food: "TV dinners",
        quantity: 10
    },
    {
        food: "Frozen Veggies",
        quantity: 21
    },
    {
        food: "Frozen Pizzas",
        quantity: 25
    }
]

function frozenReducer(state=seedData,action){

    console.log("running frozen reducer")
    console.log(action)
    if(action.type==='updateFrozen'){
        console.log('I care about this action')
        let newState= [...state]
        if(action.payload.operation=== '+'){
            newState[action.payload.index].quantity++
            return newState
        }

        else if( action.payload.operation==='-'){
            newState[action.payload.index].quantity--
        return newState
        }
    }
    else if(action.type ==='clear Inventory'){
        let newState = [...state];
        newState.forEach((item,i)=>{
            item.quantity = 0;
        })
        return newState;
    }
    return state
}

export default frozenReducer