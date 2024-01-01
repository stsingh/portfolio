import * as React from 'react';
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image"

type props = {
    staticImage: any,
    title: string,
    url: string,
    description: string,
    tools: string[]
}

const ProjectCard = ({staticImage, title, url, description, tools}: props) => {
    const toolsList:React.JSX.Element[] = []
    tools.forEach((tool, index) => {
        toolsList.push(<span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tool}</span>);
    });

    return (
        <a href={url} target='_blank'>
            <div className="col-span-1 flex h-full flex-col bg-gray rounded border-2 p-2">
                {staticImage()}
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {toolsList}
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;