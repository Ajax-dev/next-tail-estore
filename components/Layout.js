import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout(props) {
    const {children} = props
    return(
        <div className='relative min-h-screen flex flex-col'>
            <Header/>

            <div className='flex flex-col flex-1'>
                <main className='flex-1 py-5 sm:max-w-2/3 mx-auto flex-wrap gap-20'>
                    {children}
                </main>
            </div>
            <Footer/>
        </div>
    )
}