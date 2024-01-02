import * as React from 'react'
import Navbar from '../components/navbar'
import ProjectCard from '../components/projectCard';
import { StaticImage } from 'gatsby-plugin-image';

const ProjectsPage = () => {
    return (
        <main className='flex justify-center'>
            <Navbar/>
            <div className="w-11/12 md:w-3/4 mt-20 rounded text-white bg-black overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-bold text-4xl mb-2 text-white">Projects</div>
                </div>
                <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
                    <ProjectCard staticImage={() => <StaticImage
                                                                src="../images/eyeoweyou.png"
                                                                alt="Portblair" 
                                            />}
                                title='EyeOweYou' 
                                url='https://www.eyeoweyou.me/'
                                gturl='https://github.com/stsingh/eye-owe-you'
                                description='MERN stack-based webapp designed to keep track of money user owes or has lent out.' 
                                tools={['MongoDB', 'Express.js', 'React.js', 'Node.js']}
                    />
                    <ProjectCard staticImage={() => <StaticImage
                                                                src="../images/toxishield.png"
                                                                alt="Portblair" 
                                            />}
                                title='ToxiShield'
                                url='http://sahej3526.pythonanywhere.com/'
                                gturl='https://github.com/stsingh/toxi-shield'
                                description='Small Flask webapp that determines whether or not that chemical is safe to use as a pesticide.' 
                                tools={['Flask', 'PubChemPy', 'RDKit', 'HyperOptSklearn']}
                    />
                    <ProjectCard staticImage={() => <StaticImage
                                                                src="../images/homeward.png"
                                                                alt="Portblair" 
                                            />}
                                title='Homewards' 
                                url='https://github.com/MAMS-OP5/shelter-app'
                                gturl='https://github.com/MAMS-OP5/shelter-app'
                                description='Object-oriented Android app developed to connect the unhoused with homeless shelters and their resources.' 
                                tools={['Android SDK', 'Firebase']}
                    />
                    <ProjectCard staticImage={() => <StaticImage
                                                                src="../images/readingeye.jpg"
                                                                alt="Portblair" 
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
        </main>
    );
}

export const Head = () => <title>Projects</title>

export default ProjectsPage;