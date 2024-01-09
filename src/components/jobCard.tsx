import * as React from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

type props = {
    staticImage: any,
    company: string,
    jobTitle: string,
    companyUrl: string,
    description: string[],
    dateRange: string
}

function Icon({ id, open }: {id: number, open: any}) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
}

const JobCard = ({staticImage, company, jobTitle, companyUrl, description, dateRange}: props) => {
    const [open, setOpen] = React.useState(0);
    const handleOpen = (value: any) => setOpen(open === value ? 0 : value);
    
    const descList:React.JSX.Element[] = []
    description.forEach((description, index) => {
        descList.push(<li key={index} className="list-disc">
            {description}
        </li>);
    });

    return (
        <div className="relative col-span-1 flex h-full flex-col bg-gray rounded border-2 p-2 text-black">
            <a href={companyUrl} target='_blank'>
                {staticImage()}
            </a>
            <div className="px-6 py-4">
                <div className="font-bold text-xl">{company}</div>
                    <div className='flex justify-between'>
                        <Accordion open={open === 1} placeholder={undefined} icon={<Icon id={1} open={open}/>}>
                            <div className='w-11/12 '>
                                <AccordionHeader onClick={() => handleOpen(1)} placeholder={undefined}>
                                    <div className='text-lg '>{jobTitle}</div>
                                </AccordionHeader>
                                <AccordionBody>
                                    <ul className='ps-5 list-disc'>
                                        {descList}
                                    </ul>
                                </AccordionBody>
                            </div>
                        </Accordion>
                        <span className='font-bold '>{dateRange}</span>
                    </div>
            </div>
        </div>
    );
}

export const Head = () => <title>Experience</title>

export default JobCard;