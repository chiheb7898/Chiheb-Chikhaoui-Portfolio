import { Data } from '../ProjectData'
import { useParams } from 'react-router-dom'
import "./ProjectDetails.css"
const ProjectDetails = () => {
    const { id } = useParams();
    const project = Data.find((project) => project.id === id);
    return (
        <section className='projectDetails'>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 projectDetails">
                <div className="py-12 md:py-20 border-t border-gray-800">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">{project.type}</div>
                        <h1 className="h2 mb-4">{project.name}</h1>
                        <p className="text-xl text-gray-400">{project.preview}</p>
                    </div>

                    {/* Items */}
                    <div className="grid gap-20">

                        {project.sections.map((item, index) => (
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                {/* Image */}
                                <div className={"max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 " + item.imageclass} data-aos="fade-up">
                                    <img className="max-w-full mx-auto md:max-w-none h-auto" src={item.image} width="540" height="405" alt="Features 01" />
                                </div>
                                {/* Content */}
                                <div className={"max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 "} data-aos={item.data_aos}>
                                    <div className={item.textclassname}>
                                        <div className="font-architects-daughter text-xl text-purple-600 mb-2">{item.name}</div>
                                        <h3 className="h3 mb-3">{item.name}</h3>
                                        <ul className="text-lg text-gray-400 -mb-2">
                                            {item.bulletPoints.map((bulletpoint, indexbp) => (
                                                <li className="flex items-center mb-2">
                                                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                    </svg>
                                                    <span>{bulletpoint.bp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="tech-icons-container">
                            <ul className="flex justify-center mt-5 space-x-8">
                                {project.technologies.map((tech, index) => (
                                    <li key={index}>
                                            <img src={tech.iconPath} alt={tech.name} className="w-18 h-16" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

}
export default ProjectDetails;
