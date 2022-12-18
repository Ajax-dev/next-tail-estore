export const initialState = {
    prices: [],
    products: {} //product key {[id]: value}
}

export const AppReducer = (state = initialState, action ) => {
    switch(action.type) {
        case "add_product" : { //[id] 
            return {
                ...state,
                products: {
                    ...state.products,
                    [action.value] : 1
                }
            }
            
        }

        // creates whole new object with everything except something
        case "remove_product" : { //receives [[id], [size], [newCount]]
            return {
                ...state,
                products: Object.keys(state.products).reduce((acc, curr) => {
                    if (curr !== action.value) {
                        return { ...acc, [curr]: state.products[curr]}
                    }
                    return acc
                }, {})
            }
        }

        case "vary_count" : { // [id , newCount]
            return {
                ...state,
                products: {
                    ...state.products,
                    [action.value[0]]: action.value[1],
                    
                }
            }
        }

        case "load_items" : {
            return {
                ...state,
                prices: action.value.prices,
                products: action.value.products
            }
        }

        case "set_prices" : {
            return {
                ...state,
                prices: action.value
            }
        }

        default:
            return state
    }
}

