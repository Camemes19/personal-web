import {LuUser} from "react-icons/lu";

export function About() {


    return (
        <div>
            <h2>
                <LuUser className={"heading-icon"}/>
                Profile
            </h2>
            <img className={"profile-photo"} src={"images/quattro.webp"} alt={"Image of Quattro Bajeena from Mobile Suit Zeta" +
                " Gundam"}/>
            <p className={"profile"}>
                Hey, I'm Cameron Jamieson, a junior software developer with over 2.5 years of experience based out of
                Seattle, Washington. I've been specializing in full-stack development with back-ends built
                on <b>AWS</b> using <b>Java</b> and front-ends powered by <b>NodeJS</b> and <b>React</b>.
            </p>
            <p className={"profile"}>
                As part of this, I have extensive experience in Java and JavaScript testing frameworks
                like <b>JUnit</b>, <b>Jest</b>, and <b>Cypress</b> for front-end test automation. I'm passionate about
                optimizing the everyday operations of projects I work on, making sure users have high-quality, reliable
                experiences and developers have robust, low-maintenance services to avoid the ever-present enemy of
                developer evenings: a late-night page.
            </p>
            <p className={"profile"}>
                When I'm not working on projects, I love building Gunpla, playing card games, organizing esports
                tournaments for my local fighting game scene, and relaxing at home with my cat, Emmy.
            </p>
        </div>
    )
    /** TODO Add sections for:
     *  - Work Experience/Education
     *  - CONTACT INFO
     *  - Achievements/Skills/Certifications
     *  - Projects?? Maybe a separate page
     *  - Something fun/interactive
     */
}

export default About