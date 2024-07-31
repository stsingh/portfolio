import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import Navbar from '../components/navbar'
import Footer from '../components/footer';
import JobCard from '../components/jobCard';

const ExperiencePage = () => {
    return (
        <main className='flex flex-col justify-center justify-between min-h-screen'>
            <Navbar/>
            <div className="w-11/12 md:w-3/4 mt-20 rounded p-3 md:p-6 mx-auto text-white bg-black overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-bold text-3xl md:text-4xl mb-2 text-white">Work Experience</div>   
                </div>
                <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
                    <JobCard staticImage={() => <StaticImage
                                                                width={500*20/9}
                                                                height={500}
                                                                src="../images/haylon.png"
                                                                alt="Haylon Technologies"
                                                />}
                            company='Haylon Technologies'
                            jobTitle='Machine Learning and IoT Intern'
                            companyUrl='https://auvsl.ise.illinois.edu/'
                            description={['Developed embedded Machine Learning models using SKLearn and TensorFlow with online training for use on hardware. Allow for prediction of future current spikes with 90% accuracy.' , 
                                          'Implementing Machine Learning algorithms on microcontroller hardware using C.',
                                          'Working on development of AWS Sagemaker simulation software for clients.']}
                            dateRange='Jun 2024 - Present'
                    />
                    <JobCard staticImage={() => <StaticImage
                                                                width={500*20/9}
                                                                height={500}
                                                                src="../images/auvsl.jpg"
                                                                alt="AUVSL"
                                                />}
                            company='AUVSL'
                            jobTitle='Research Intern'
                            companyUrl='https://auvsl.ise.illinois.edu/'
                            description={['Used Robotic Operating System (ROS) with Python on Ubuntu Linux to develop an obstacle avoidance system for a Jackal UGV robot using PointCloud computer vision data from a depth camera.' , 
                                          'Developed a CANBus hardware to ROS2 Embedded Systems Topic node that allows researchers to subscribe for vehicle robotics data. Used by all researchers on test vehicle.',
                                          'Developed team Github Actions workflow for automatic documentation publication to Github Pages. Used on 100% of all repositories in organization.',
                                          'Working on development of adaptive control systems architecture using Lipschitz Neural Networks with ROS.']}
                            dateRange='May 2023 - Present'
                    />
                    <JobCard staticImage={() => <StaticImage
                                                                width={500*20/9}
                                                                height={500}
                                                                src="../images/quant.jpg"
                                                                alt="Quant Illinois" 
                                                />}
                            company='Quant Illinois'
                            jobTitle='Trading Analyst'
                            companyUrl='https://www.quantillinois.com/'
                            description={['Developed robust and extensible backtesting framework for organizational use. Used by all researchers in organization.',
                                          'Optimized and developed engine, order, and trade classes. ',
                                          'Planned and directed EV and arbitrage sports betting project.']}
                            dateRange='Sept 2023 - Present'
                    />
                </div>
            </div>
            <div className="w-11/12 md:w-3/4 mt-10 rounded p-3 md:p-6 mx-auto text-white bg-black overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-bold text-3xl md:text-4xl mb-2 text-white">Courses</div>
                    <p className='text-gray font-semibold text-xl md:w-3/4 uppercase'>
                        <a href='https://netmath.illinois.edu/college/math-241' target='_blank' className='hover:text-flame'>Calculus I, II, & III</a> |&nbsp;
                        <a href='https://www.wpi.edu/academics/calendar-courses/course-descriptions/3801/mathematical-sciences#MA-2251:~:text=MA%202251.%20VECTOR%20AND%20TENSOR%20CALCULUS' target='_blank' className='hover:text-flame'>Vector and Tensor Calculus</a> |&nbsp;
                        <a href='https://cs.illinois.edu/academics/courses/math285-120171' target='_blank' className='hover:text-flame'>Differential Equations</a> |&nbsp;
                        <a href='https://courses.physics.illinois.edu/phys211/sp2024/' target='_blank' className='hover:text-flame'>Physics: Mechanics</a> |&nbsp;
                        <a href='https://courses.physics.illinois.edu/phys212/sp2024/' target='_blank' className='hover:text-flame'>Physics: Electricity and Magnetism</a> |&nbsp;
                        <a href='https://ece.illinois.edu/academics/courses/stat400' target='_blank' className='hover:text-flame'>Statistics and Probability</a> |&nbsp;
                        <a href='https://netmath.illinois.edu/college/math-257' target='_blank' className='hover:text-flame'>Linear Algebra with Computational Applications</a> |&nbsp;
                        <a href='https://cs.illinois.edu/academics/courses/cs173' target='_blank' className='hover:text-flame'>Discrete Structures</a> |&nbsp;
                        <a href='https://ece.illinois.edu/academics/courses/ece220' target='_blank' className='hover:text-flame'>Computer Systems & Programming</a> |&nbsp;
                        <a href='https://cs.illinois.edu/academics/courses/cs225' target='_blank' className='hover:text-flame'>Data Structures</a> |&nbsp;
                        <a href='https://ecealgo.com/' target='_blank' className='hover:text-flame'>Algorithms and Models of Computation</a> |&nbsp;
                        <a href='https://ece.illinois.edu/academics/courses/ece408' target='_blank' className='hover:text-flame'>Applied Parallel Programming</a> |&nbsp;
                        <a href='https://ece.illinois.edu/academics/courses/ece385' target='_blank' className='hover:text-flame'>Digital Systems Laboratory</a> |&nbsp;
                        <a href='https://ece.illinois.edu/academics/courses/ece391' target='_blank' className='hover:text-flame'>Computer Systems Engineering</a> |&nbsp;
                        <a href='https://ece.illinois.edu/academics/courses/ece448' target='_blank' className='hover:text-flame'>Artificial Intelligence</a> |&nbsp;
                        <a href='https://publish.illinois.edu/safe-autonomy/' target='_blank' className='hover:text-flame'>Principles of Safe Autonomy</a> 
                    </p>
                </div>
            </div>
            <div className="w-11/12 md:w-3/4 mt-10 mb-10 rounded p-3 md:p-6 mx-auto text-white bg-black overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <a href='/Sahej_Singh_resume.pdf' target='_blank' className="font-bold text-3xl md:text-4xl mb-2 text-white hover:text-flame hover:underline">Resume</a>
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export const Head = () => <title>Experience</title>

export default ExperiencePage;