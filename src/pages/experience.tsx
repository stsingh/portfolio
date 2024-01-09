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
                                                                src="../images/auvsl.jpg"
                                                                alt="Portblair"
                                                />}
                            company='AUVSL'
                            jobTitle='Research Intern'
                            companyUrl='https://auvsl.ise.illinois.edu/'
                            description={['Used Robotic Operating System (ROS), Gazebo, and RVIZ along with Python to develop an obstacle avoidance system for the Jackal UGV series of robots using PointCloud computer vision data from an Intel Realsense Depth Camera' , 
                                          'Developed a CANBus hardware to ROS2 Embedded Systems Topic node that allows developers to subscribe for vehicle robotics data',
                                          'Worked closely with graduate students to test, validate, and process thousands of frames of real-world vehicle navigation into a JSON file using Python for use in the training of autonomous navigation of automobiles']}
                            dateRange='May 2023 - Present'
                    />
                    <JobCard staticImage={() => <StaticImage
                                                                width={500*20/9}
                                                                height={500}
                                                                src="../images/quant.jpg"
                                                                alt="Portblair" 
                                                />}
                            company='Quant Illinois'
                            jobTitle='Trading Analyst'
                            companyUrl='https://www.quantillinois.com/'
                            description={['Developed robust and extensible backtesting framework for organizational use',
                                          'Optimized and developed engine, order, and trade classes']}
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
                        <a href='https://ece.illinois.edu/academics/courses/ece385' target='_blank' className='hover:text-flame'>Digital Systems Laboratory</a>
                    </p>
                </div>
            </div>
            <div className="w-11/12 md:w-3/4 mt-10 mb-10 rounded p-3 md:p-6 mx-auto text-white bg-black overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-bold text-3xl md:text-4xl mb-2 text-white">Resume</div>
                    <iframe className='w-full aspect-[4/3]' loading="lazy" src='https://sahejs.com/Sahej_Singh_resume.pdf'/>
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export const Head = () => <title>Experience</title>

export default ExperiencePage;