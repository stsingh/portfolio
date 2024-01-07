import * as React from 'react';

type props = {
    staticImage: any,
    title: string,
    url: string,
    gturl: string,
    description: string,
    tools: string[]
}

const ProjectCard = ({staticImage, title, url, gturl, description, tools}: props) => {
    const toolsList:React.JSX.Element[] = []
    tools.forEach((tool, index) => {
        toolsList.push(<span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {tool}
        </span>);
    });

    return (
        <a href={url} target='_blank'>
            <div className="relative col-span-1 flex h-full flex-col bg-gray rounded border-2 p-2 text-black">
                {staticImage()}
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                </div>
                <div className="hidden md:block px-6 pt-4 pb-2">
                    {toolsList}
                </div>
                <form action={gturl} target='_blank' method='get' className='bottom-2 right-2 absolute'>
                    <button className="inline-block flex text-black fill-black hover:text-flame hover:fill-flame">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </button>
                </form>
            </div>
        </a>
    );
}

export default ProjectCard;