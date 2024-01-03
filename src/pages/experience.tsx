import * as React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer';

const ExperiencePage = () => {
    return (
        <main className='flex flex-col justify-center justify-between min-h-screen'>
            <Navbar/>
            <div>
                
            </div>
            <Footer/>
        </main>
    );
}

export const Head = () => <title>Experience</title>

export default ExperiencePage;