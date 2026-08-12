import ExperienceWidget from "./components/ExperienceWidget.jsx";
import EducationWidget from "./components/EducationWidget.jsx";

export function About() {


    return (
        <div>
            <div className={"mx-auto max-w-[80%]"}>
                    <h3 className={"grid h-1/10 p-0.5 auto-cols-max w-fit items-end border-b border-b-blue-700"}>
                        <b className={"text-5xl col-start-1 me-1"}>0-01</b>
                        <div className={"me-1.5 text-2xl col-start-1"}>
                            <b className={"font-black text-blue-700"}>///</b> Profile
                        </div>
                        <div className={"text-[0.4rem] font-light col-start-2 row-start-1 row-span-2"}>
                            <p className={"my-1"}>Entity_Initialization</p>
                            <p className={"my-1"}>Display of the known data</p>
                            <p className={"my-1"}>A window to the [digital] soul</p>
                        </div>
                    </h3>
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
            <ExperienceWidget />
            <EducationWidget />
        </div>
    )
    /** TODO Add sections for:
     *  - Work Experience/Education
     *  - Achievements/Skills/Certifications
     *  - Projects?? Maybe a separate page
     *  - Something fun/interactive
     */
}

export default About