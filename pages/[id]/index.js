import React from 'react'
import { useAppContext } from '../../context/CardContext'

export async function getServerSideProps(context) {
    const {params} = context

    return {
        props: { id: params.id}
    }
}

export default function Description(props){
    const { id: path } = props
    const { state: { prices } = [], dispatch} = useAppContext()
    const product = prices.filter(val => val.id === path.replace('/', ''))[0]
    console.log("IM HERE")
    console.log(props.product)
    console.log(prices)
    console.log(path)

    if (product === undefined) { return <div className='pt-40 select-none grid place-items-center'>LOADING...</div> }

    function addToBasket(prod) {
        // curried function
        return () => {
            dispatch({
                type: 'add_product',
                value: prod.id
            })
        }
    }

    return(
        <div className='mx-auto w-fit flex flex-wrap justify-center md:gap-6'>
            <img src={product.product.images[0]} alt={product.product.id} styles={{maxHeight:'600px'}}/>
            <button onClick={addToBasket(product)}>ADD TO BASKET</button>
        </div>
    )
}