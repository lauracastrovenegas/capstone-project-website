import fmsystem from "./assets/fmsystem.png"
import hearingloop from "./assets/hearingloop.png"
import infraredsystem from "./assets/infraredsystem.jpeg"
import personalamp from "./assets/personalamp.jpg"

import commbinder from "./assets/commbinder.png"
import electablet from "./assets/electablet.png"
import pecs from "./assets/pecs.jpeg"
import recordedspeech from "./assets/recordedspeech.png"
import speechgen from "./assets/speechgen.png"

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
            imgLink: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/VTUZB27OH5HXJP64JHWC7QGHLA.jpg",
            imgAlt: "",
            text: "Hearing loop (or induction loop) systems",
            videoLink: "",
        },
        {
            imgLink: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/VTUZB27OH5HXJP64JHWC7QGHLA.jpg",
            imgAlt: "",
            text: "FM Systems",
            videoLink: "",
        },
        {
            imgLink: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/VTUZB27OH5HXJP64JHWC7QGHLA.jpg",
            imgAlt: "",
            text: "Infrared Systems",
            videoLink: "",
        },
        {
            imgLink: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/VTUZB27OH5HXJP64JHWC7QGHLA.jpg",
            imgAlt: "",
            text: "Personal amplifiers",
            videoLink: "",
        }
    ]
]

const ADSectionData = [
    {
        imgLink: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/VTUZB27OH5HXJP64JHWC7QGHLA.jpg",
        imgAlt: "",
        title: "Hearing loop (or induction loop) systems",
        videoLink: "",
    },
    {
        imgLink: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/VTUZB27OH5HXJP64JHWC7QGHLA.jpg",
        imgAlt: "",
        title: "FM Systems",
        videoLink: "",
    },
    {
        imgLink: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/VTUZB27OH5HXJP64JHWC7QGHLA.jpg",
        imgAlt: "",
        title: "Infrared Systems",
        videoLink: "",
    },
    {
        imgLink: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/VTUZB27OH5HXJP64JHWC7QGHLA.jpg",
        imgAlt: "",
        title: "Personal amplifiers",
        videoLink: "",
    },
    {
        imgLink: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/VTUZB27OH5HXJP64JHWC7QGHLA.jpg",
        imgAlt: "",
        title: "Personal amplifiers",
        videoLink: "",
    }
]

export { ALDsSectionData };
export { AACSectionData };
export { ADSectionData };
export { AssistiveTechData };