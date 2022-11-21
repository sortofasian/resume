import {
    faCloudflare,
    faCss3Alt,
    faDocker,
    faGitAlt,
    faHtml5,
    faJs,
    faLinux,
    faNodeJs,
    faPython,
    faReact,
    faStripeS,
    IconDefinition
} from '@fortawesome/free-brands-svg-icons'
import {
    faArrowsLeftRightToLine,
    faBrain,
    faLeaf,
    faMicrochip
} from '@fortawesome/free-solid-svg-icons'

type Skill = { name: string; icon: IconDefinition; color?: string; styleOverride?: any }

const skills: Array<Skill> = [
    {
        name: 'Javascript',
        icon: faJs,
        color: 'rgb(240, 220, 78)',
        styleOverride: { backgroundColor: 'rgb(50, 50, 50)' }
    },
    {
        name: 'Python',
        icon: faPython,
        color: 'rgb(60, 123, 172)'
    },
    {
        name: 'HTML',
        icon: faHtml5,
        color: 'rgb(243, 101, 40)'
    },
    {
        name: 'CSS',
        icon: faCss3Alt,
        color: 'rgb(37, 100, 176)'
    },
    {
        name: 'React',
        icon: faReact,
        color: 'rgb(96, 218, 250)'
    },
    {
        name: 'Stripe',
        icon: faStripeS,
        color: 'rgb(106, 112, 228)'
    },
    {
        name: 'Cloudflare',
        icon: faCloudflare,
        color: 'rgb(239, 127, 44)'
    },
    {
        name: 'Node.js',
        icon: faNodeJs,
        color: 'rgb(110, 165, 97)'
    },
    {
        name: 'MongoDB',
        icon: faLeaf,
        color: 'rgb(105, 159, 78)'
    },
    {
        name: 'Docker',
        icon: faDocker,
        color: 'rgb(15, 160, 220)'
    },
    {
        name: 'Linux',
        icon: faLinux
    },
    {
        name: 'Git',
        icon: faGitAlt,
        color: 'rgb(241, 81, 52)'
    },
    {
        name: 'ML',
        icon: faBrain
    },
    {
        name: 'MCUs',
        icon: faMicrochip
    },
    {
        name: 'APIs',
        icon: faArrowsLeftRightToLine
    }
]

export default skills
