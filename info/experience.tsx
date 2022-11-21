type Experience = {
    name: string
    type: string
    date: string
    desc: Array<string> | string | React.ReactNode
}

const experiences: Array<Experience> = [
    {
        name: 'Engineering Design and Development',
        type: 'Class Project',
        date: 'Sept. 2022 & Ongoing',
        desc: [
            'Designing a system to address the vaping issue in schools',
            [
                'Uses networked edge devices',
                'Aggregates data from a sensor network',
                'Will likely perform automatic analysis on data'
            ]
        ]
    },

    {
        name: 'MI Technical Solutions',
        type: 'Internship',
        date: 'Jul. 2022 to Aug. 2022',
        desc: [
            'Introduced us to CAD, Cybersec, and Server administration',
            [
                'Created prototypes in Fusion 360',
                'Set up & hardened a LAMP Stack',
                'Learned/performed dictionary attacks against WPA2'
            ]
        ]
    },

    {
        name: 'Dimension Cubed',
        type: 'Startup Contract',
        date: 'May 2022 to Sept. 2022',
        desc: [
            <>
                Built a web-based storefront at{' '}
                <a href="https://dimensioncubed.xyz/store">dimensioncubed.xyz</a>
            </>,
            [
                'Accepts online payments in a scalable manner',
                'Built for Docker and scalability',
                'UI and site were designed personally',
                'Implemented Cloudflare for speed & security'
            ]
        ]
    },
    {
        name: 'The Hull Group LLC.',
        type: 'Startup Contract',
        date: 'Sept. 2021 to Sept. 2022',
        desc: [
            'Built and integrated a resume management system',
            [
                'Uses a user-facing micro-frontend with a seperate admin panel',
                'Scrapes resumes for structured information with regex',
                'Searches for skills using a Word2Vec model trained on scraped data',
                'Required lots of research and consideration for end users'
            ]
        ]
    }
]

export default experiences
