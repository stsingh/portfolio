import * as React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer';

const ExperiencePage = () => {
    return (
        <main className='flex flex-col justify-center justify-between min-h-screen'>
            <Navbar/>
            <div className="w-11/12 md:w-3/4 mt-20 rounded p-3 md:p-6 mx-auto text-white bg-black overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-bold text-3xl md:text-4xl mb-2 text-white">Work Experience</div>
                    
                </div>
            </div>
            <div className="w-11/12 md:w-3/4 mt-10 rounded p-3 md:p-6 mx-auto text-white bg-black overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-bold text-3xl md:text-4xl mb-2 text-white">Courses</div>
                    <p className='text-gray md:w-3/4 uppercase'>
                        
                    </p>
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export const Head = () => <title>Experience</title>

export default ExperiencePage;