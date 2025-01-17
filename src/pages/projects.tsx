import * as React from 'react'
import Navbar from '../components/navbar'
import ProjectCard from '../components/projectCard';
import { StaticImage } from 'gatsby-plugin-image';
import Footer from '../components/footer';

const ProjectsPage = () => {
    return (
        <main className='flex flex-col justify-center justify-between min-h-screen'>
            <Navbar/>
            <div className='flex justify-center mb-10'>
                <div className="w-11/12 md:w-3/4 mt-20 rounded text-white bg-black overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-bold text-4xl mb-2 text-white">Projects</div>
                    </div>
                    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
                        <ProjectCard staticImage={() => <StaticImage
                                                                    width={500*20/9}
                                                                    height={500}
                                                                    src="../images/f1tenth.jpg"
                                                                    alt="f1tenth" 
                                                />}
                                    title='F1Tenth Autonomous Racecar' 
                                    url='https://roboracer.ai/'
                                    gturl='https://github.com/stsingh/f1tenthimpl'
                                    description='Developed autonomous line-following racecar using ROS and Computer Vision techniques.' 
                                    tools={['ROS', 'OpenCV', 'F1Tenth']}
                        />
                        <ProjectCard staticImage={() => <StaticImage
                                                                    width={500*20/9}
                                                                    height={500}
                                                                    src="../images/fpga.png"
                                                                    alt="FPGA" 
                                                />}
                                    title='Hardware-Accelerated Neural Network' 
                                    url='https://www.realdigital.org/hardware/urbana'
                                    gturl='https://github.com/stsingh/FPGANN'
                                    description='Developed FPGA neural network hardware.' 
                                    tools={['FPGA', 'SystemVerilog', 'Vivado']}
                        />
                        <ProjectCard staticImage={() => <StaticImage
                                                                    width={500*20/9}
                                                                    height={500}
                                                                    src="../images/cuda.png"
                                                                    alt="CUDA" 
                                                />}
                                    title='Parallelized CNN Model with CUDA' 
                                    url='https://www.sahejs.com/projects'
                                    gturl='https://www.sahejs.com/projects'
                                    description='Used NVIDIA’s CUDA framework with GPU cluster access to implement CNN model from scratch.' 
                                    tools={['CUDA', 'Git']}
                        />
                        <ProjectCard staticImage={() => <StaticImage
                                                                    width={500*20/9}
                                                                    height={500}
                                                                    src="../images/eyeoweyou.png"
                                                                    alt="Eye Owe You" 
                                                />}
                                    title='EyeOweYou' 
                                    url='https://www.eyeoweyou.me/'
                                    gturl='https://github.com/stsingh/eye-owe-you'
                                    description='MERN stack-based webapp designed to keep track of money user owes or has lent out.' 
                                    tools={['MongoDB', 'Express.js', 'React.js', 'Node.js']}
                        />
                        <ProjectCard staticImage={() => <StaticImage
                                                                    width={500*20/9}
                                                                    height={500}
                                                                    src="../images/toxishield.png"
                                                                    alt="ToxiShield" 
                                                />}
                                    title='ToxiShield'
                                    url='http://sahej3526.pythonanywhere.com/'
                                    gturl='https://github.com/stsingh/toxi-shield'
                                    description='Small Flask webapp that determines whether or not that chemical is safe to use as a pesticide.' 
                                    tools={['Flask', 'PubChemPy', 'RDKit', 'HyperOptSklearn']}
                        />
                        <ProjectCard staticImage={() => <StaticImage
                                                                    width={500*20/9}
                                                                    height={500}
                                                                    src="../images/homeward.png"
                                                                    alt="Homeward" 
                                                />}
                                    title='Homewards' 
                                    url='https://github.com/MAMS-OP5/shelter-app'
                                    gturl='https://github.com/MAMS-OP5/shelter-app'
                                    description='Object-oriented Android app developed to connect the unhoused with homeless shelters and their resources.' 
                                    tools={['Android SDK', 'Firebase']}
                        />
                        <ProjectCard staticImage={() => <StaticImage
                                                                    width={500*20/9}
                                                                    height={500}
                                                                    src="../images/readingeye.jpg"
                                                                    alt="ReadingEye" 
                                                />}
                                    title='ReadingEye' 
                                    url='https://github.com/stsingh/ReadingEye'
                                    gturl='https://github.com/stsingh/ReadingEye'
                                    description='Assistive technology that allows the visually impaired to hook device on to glasses and read back text at the push of a
                                    button.' 
                                    tools={['ESP32 SoC', 'Arduino IDE']}
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export const Head = () => <title>Projects</title>

export default ProjectsPage;