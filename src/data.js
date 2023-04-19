import fmsystem from "./assets/fmsystem.png"
import hearingloop from "./assets/hearingloop.png"
import infraredsystem from "./assets/infraredsystem.jpeg"
import personalamp from "./assets/personalamp.jpg"

import commbinder from "./assets/commbinder.png"
import electablet from "./assets/electablet.png"
import pecs from "./assets/pecs.jpeg"
import recordedspeech from "./assets/recordedspeech.png"
import speechgen from "./assets/speechgen.png"

import asltotext from "./assets/asltotext.jpeg"
import captionedtel from "./assets/captionedtel.jpeg"
import textmessage from "./assets/textmessage.png"
import ttymachine from "./assets/ttymachine.jpg"

import weather from './assets/weather.jpeg'
import wakeupalarm from './assets/wakeupalarm.jpeg'
import phonesignaler from './assets/phonesignaler.jpeg'
import doorbell from './assets/doorbell.jpeg'
import carbonmonox from './assets/carbonmonox.jpeg'
import babycrying from './assets/babycrying.jpeg'

const AssistiveTechData = [
    {
        title: "Assistive listening devices (ALDs)",
        text: "Assistive listening devices (ALDs) help amplify the sounds you want to hear, especially where there’s a lot of background noise. ALDs can be used with a hearing aid or cochlear implant to help a wearer hear certain sounds better.",
    },
    {
        title: "Augmentative and alternative communication (AAC) devices",
        text: "Augmentative and alternative communication (AAC) devices help people with communication disorders to express themselves. These devices can range from a simple picture board to a computer program that synthesizes speech from text.",
    },
    {
        title: "Alerting devices",
        text: "Alerting devices connect to a doorbell, telephone, or alarm that emits a loud sound or blinking light to let someone with hearing loss know that an event is taking place.",
    },
]

const ALDsSectionData = [
    {
        imgLink: hearingloop,
        imgAlt: "",
        title: "Hearing loop systems",
        videoLink: "https://www.youtube.com/embed/ifBKOomw8SY?start=43",
    },
    {
        imgLink: fmsystem,
        imgAlt: "",
        title: "FM Systems",
        videoLink: "https://www.youtube.com/embed/JNzxOJKCUug",
    },
    {
        imgLink: infraredsystem,
        imgAlt: "",
        title: "Infrared Systems",
        videoLink: "https://www.youtube.com/embed/LM03-EC73To?start=389",
    },
    {
        imgLink: personalamp,
        imgAlt: "",
        title: "Personal amplifiers",
        videoLink: "https://www.youtube.com/embed/ifBKOomw8SY?start=43",
    }
]

const AACSectionData = [
    [
        {
            imgLink: pecs,
            imgAlt: "",
            title: "Picture Exchange Communication Systems",
            videoLink: "",
        },
        {
            imgLink: commbinder,
            imgAlt: "",
            title: "Homemade binders of picture symbols",
            videoLink: "",
        },
        {
            imgLink: recordedspeech,
            imgAlt: "",
            title: "Recorded Speech Devices",
            videoLink: "",
        },
        {
            imgLink: electablet,
            imgAlt: "",
            title: "Electronic Tablet Speech Apps",
            videoLink: "",
        },
        {
            imgLink: speechgen,
            imgAlt: "",
            title: "Speech Generating Devices",
            videoLink: "",
        }
    ],
    [
        {
            imgLink: ttymachine,
            imgAlt: "",
            title: "TTY or TDD Machines",
            videoLink: "",
        },
        {
            imgLink: textmessage,
            imgAlt: "",
            title: "Text Messaging",
            videoLink: "",
        },
        {
            imgLink: asltotext,
            imgAlt: "",
            title: "Translation from ASL to Text, and viceversa",
            videoLink: "",
        },
        {
            imgLink: captionedtel,
            imgAlt: "",
            title: "Captioned Telephones",
            videoLink: "",
        }
    ]
]

const ADSectionData = [
    {
        imgLink: babycrying,
        imgAlt: "",
        title: "Baby Cry Signaler",
        videoLink: "https://storage.googleapis.com/diglo-videos/diglo-mastheads-amber-and-baby.mp4",
    },
    {
        imgLink: carbonmonox,
        imgAlt: "",
        title: "Carbon monoxide detector",
        videoLink: "https://storage.googleapis.com/diglo-videos/diglo-mastheads-hellings.mp4",
    },
    {
        imgLink: doorbell,
        imgAlt: "",
        title: "Doorbell signaler",
        videoLink: "https://www.youtube.com/embed/nVFfYmkGURc",
    },
    {
        imgLink: phonesignaler,
        imgAlt: "",
        title: "Telephone signaler",
        videoLink: "https://www.youtube.com/embed/dwmKZb1k0uo",
    },
    {
        imgLink: wakeupalarm,
        imgAlt: "",
        title: "Wake-up alarm signaler",
        videoLink: "https://www.youtube.com/embed/ijUwGqxJggw",
    },
    {
        imgLink: weather,
        imgAlt: "",
        title: "Weather alert",
        videoLink: "https://www.youtube.com/embed/HG41J6Na4E",
    }
]

const ASLVideos = [
    {
        title: "Hello",
        videoLink:"https://www.youtube.com/embed/0FcwzMq4iWg?start=79&end=85"
    },
    {
        title: "Yes",
        videoLink:"https://www.youtube.com/embed/0FcwzMq4iWg?start=123&end=131"
    },
    {
        title: "No",
        videoLink:"https://www.youtube.com/embed/0FcwzMq4iWg?start=131&end=140"
    },
    {
        title: "Help",
        videoLink:"https://www.youtube.com/embed/0FcwzMq4iWg?start=140&end=154"
    },
    {
        title: "Please",
        videoLink:"https://www.youtube.com/embed/0FcwzMq4iWg?start=154&end=162"
    },
    {
        title: "Thank You",
        videoLink:"https://www.youtube.com/embed/0FcwzMq4iWg?start=162&end=169"
    },
    {
        title: "Hello! My name is...",
        videoLink:"https://www.youtube.com/embed/0FcwzMq4iWg?start=305&end=335"
    },
    {
        title: "How are you?",
        videoLink:"https://www.youtube.com/embed/0FcwzMq4iWg?start=345&end=355"
    },
    {
        title: "Nice to meet you.",
        videoLink:"https://www.youtube.com/embed/0FcwzMq4iWg?start=355&end=366"
    },
    {
        title: "I'm fine.",
        videoLink:"https://www.youtube.com/embed/0FcwzMq4iWg?start=335&end=345"
    }
    
]

const ASLYoutubers = [
    {
        imgLink:"https://yt3.googleusercontent.com/ytc/AGIKgqMiiCQFyxgWk1yPzrYPry3S5lX7I0269kPg1dvR1g=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.youtube.com/user/billvicars",
        name:"Bill Vicars"
    },
    {
        imgLink:"https://yt3.googleusercontent.com/ytc/AGIKgqMQxUOg9iEHMZCAV-PNu6Gim0vDnQ8r88s15WKw5A=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.youtube.com/@LearnHowtoSign",
        name:"Learn How to Sign"
    },
    {
        imgLink:"https://yt3.googleusercontent.com/Nk_di1OqYgg3QrsW6M-pm6adcNwiYqxfnm2PBg98GJbdO7it6LD1R5L0bEopQJDnG3ioCLoh=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.youtube.com/@ChrisGorges",
        name:"Chris Gorges"
    },
    {
        imgLink:"https://yt3.googleusercontent.com/ytc/AGIKgqOm7YXSb0BNgfnJJENIMaI9sCk6MhTv0_Rk_d8e=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.youtube.com/@TakeLessons",
        name:"Take Lessons"
    }
]

const ASLResources = [
    {
        title: "15 tips for learning ASL",
        link: "https://www.lingvano.com/asl/blog/15-tips-for-learning-american-sign-language/"
    },
    {
        title: "Basic Conversational Sign Language (for Beginners)",
        link: "https://unmudl.com/blog/sign-language"
    },
    {
        title: "A Beginner's Guide",
        link: "https://www.startasl.com/a-beginners-guide-to-learning-american-sign-language/"
    },
    {
        title: "6 Free Ways to Practice ASL",
        link: "https://www.wired.com/story/how-to-learn-sign-language-free/"
    },
]

export { ALDsSectionData };
export { AACSectionData };
export { ADSectionData };
export { AssistiveTechData };
export { ASLVideos };
export { ASLYoutubers };
export { ASLResources };