import { createContext, useContext, useEffect, useMemo, useState, useReducer } from "react";
import { AppReducer, initialState } from './AppReducer';

const AppContext = createContext();

export function AppWrapper({children}) {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // uses memoization to remember what state your webapp was in, what is in basket etc
    const sharedState = useMemo(() => {
        return {state, dispatch}
    }, [state,dispatch])

    // useEffect to load items
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('mg-items'))) {
            dispatch({
                type: 'load_items',
                value: JSON.parse(localStorage.getItem('mg-items'))
            })
        }
    }, [])

    // state is maintained
    useEffect(() => {
        if (state !== initialState) {
            localStorage.setItem('mg-items', JSON.stringify(state))
        }
    }, [state])


    //always have access to shared state and dispatch
    return (
        <AppContext.Provider value={sharedState}>
            {children}
        </AppContext.Provider>
    )
}

// saves extra step per file
export function useAppContext() {
    return useContext(AppContext)
}