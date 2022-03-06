// All reducers have 2 params:
// 1. Current State, usually provide a default state
// 2. Info that came from any action

const seedData = [
    {
        food: "lettuce",
        quantity: 14
    },
    {
        food: "turnips",
        quantity: 11
    },
    {
        food: "apples",
        quantity: 35
    },
    {
        food: "cilantro",
        quantity: 135        
    }
]

export default (state = seedData, action)=>{
    if(action.type==='produceUpdate'){
        console.log('i care')
        let newState=[...state]
        if(action.payload.operator==='+'){
            newState[action.payload.index].quantity ++
            return newState
        }
        else if(action.payload.operator==='-'){
            newState[action.payload.index].quantity --
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
    return state;
}
    


