// All reducers have 2 params:
// 1. Current State, usually provide a default state
// 2. Info that came from any action

const seedData = [
    {
        food: "chicken breast",
        quantity: 14
    },
    {
        food: "bacon",
        quantity: 11
    },
    {
        food: "mahi mahi",
        quantity: 35
    },
    {
        food: "salmon",
        quantity: 135        
    }
]

export default (state = seedData, action)=>{
   console.log(action)

    if(action.type==='meatUpdate'){
        console.log('i care')
        let newState= [...state]

        if(action.payload.operation==='+'){
            newState[action.payload.index].quantity ++
            return newState
        }

        else if(action.payload.operation==='-'){
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
