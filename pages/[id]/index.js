import React from 'react'

export async function getServerSideProps(context) {
    const {params} = context

    return {
        props: { id: params.id}
    }
}

export default function Description(props){
    return(
        <div>
            hello
        </div>
    )
}