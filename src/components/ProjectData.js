
import swiftIcon from '../assets/icons/SVG/8666356_swift_icon.svg';
import nodeIcon from '../assets/icons/SVG/9035101_logo_nodejs_icon.svg';
import mongoIcon from '../assets/icons/SVG/4691284_mongodb_icon.svg';





export const Data = [
    {
        id: 'OnStageIOS',
        name: "OnStage",
        preview: "OnStage is a social media application for entrepreneurs, built using Swift and Node.js. It offers a platform for entrepreneurs to connect, collaborate, and share valuable resources and insights. Users can create customized profiles, send direct messages, join groups, and browse a personalized news feed.",
        type: "IOS Project",
        sections: [
            {
                name:"Project Overview",
                type:"normal" ,
                image:"/projects/os1.png",
                imageclass: "md:order-1",
                data_aos: "fade-right",
                textclassname: "md:pr-4 lg:pr-12 xl:pr-16",
                bulletPoints: [
                    {
                        bp:"OnStage is a social media application for entrepreneurs built using Swift and Node.js, with a backend using mongoDB.",
                    },
                    {
                        bp:"The platform allows entrepreneurs to connect, collaborate, and share resources and insights.",
                    },
                    {
                        bp:"OnStage is designed to meet the unique needs of entrepreneurs by providing a supportive community and access to valuable resources.",
                    },
                    {
                        bp:"Features include customized profiles, direct messaging, groups, and a personalized news feed.",
                    },
                    
                ],
            },
            {
                name:"Technical Details",
                type:"normal" ,
                image: "/projects/os2.png",
                imageclass: "rlt",
                data_aos: "fade-left",
                textclassname: "md:pl-4 lg:pl-12 xl:pl-16",
                bulletPoints: [
                    {
                        bp:"OnStage's frontend was built using Swift and UIKit, with the backend using Node.js and mongoDB for data storage.",
                    },
                    {
                        bp:"Integrations with third-party APIs were included for authentication and email notifications.",
                    },
                    {
                        bp:"Challenges included optimizing performance, maintaining data integrity, and designing a user-friendly interface.",
                    },
                    {
                        bp:"Solutions were achieved through careful design and implementation, and extensive testing.",
                    },
                    
                ],
            },
            {
                name:"Role and Contributions:",
                type:"normal" ,
                image: "/projects/os3.png",
                imageclass: "md:order-1",
                data_aos: "fade-right",
                textclassname: "md:pr-4 lg:pr-12 xl:pr-16",
                bulletPoints: [
                    {
                        bp:"As the full-stack developer on the OnStage project, I was responsible for both the frontend and backend development.",
                    },
                    {
                        bp:"Notable achievements include implementing a caching system for the news feed, designing a scalable architecture that allows for future growth, and contributing to the overall design and user experience of the application.",
                    },                   
                ],
            },
        ],
        technologies: [
            { name: 'Swift', iconPath: swiftIcon },
            { name: 'Node.js', iconPath: nodeIcon },
            { name: 'MongoDB', iconPath: mongoIcon},
            // Add other technologies as needed
        ],
    },
    {
        id: 'InterX',
        name: "InterX",
        preview: "OnStage is a social media application for entrepreneurs, built using Swift and Node.js. It offers a platform for entrepreneurs to connect, collaborate, and share valuable resources and insights. Users can create customized profiles, send direct messages, join groups, and browse a personalized news feed.",
        image1: "/projects/interXDevice.png",
        image2: "/projects/interxweb.png",
        image3: "/projects/interxmobile.png",
        type: "E-Health AI Project",
        sections: [
            {
                name:"Project Overview",
                type:"" ,
                content: "",
            },
            {
                type:"rtl",
                content: "Implemented a user-friendly interface with intuitive navigation and clear calls-to-action to facilitate engagement and interaction among members.",
            },
            {
                content: "Integrated various social features, such as user profiles, messaging, groups, and notifications, to enhance the user experience and encourage participation.",
            },
            {
                content: "Built the backend of OnStage using Node.js, providing a robust and scalable platform for users to engage with each other and access valuable resources.",
            }
        ],
        technologies:{

        } ,
    },

]