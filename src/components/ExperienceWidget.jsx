import {HiOutlineOfficeBuilding} from "react-icons/hi";

export function ExperienceWidget() {
    return (
        <div className={"experience"}>
            <h3>
                <HiOutlineOfficeBuilding className={"heading-icon"}/>
                Industry Experience
            </h3>
            <ExperienceItem />
        </div>
    )
}

function ExperienceItem() {
    return (
        <div>
            <h4>Amazon - Software Development Engineer I</h4>
            <h5>June 2023 - Present</h5>
            <p>Built and maintained financial data management solutions in AWS as part of Amazon's FinTech division. Built an extensive set of testing infrastructure as part of this to maintain exceptional service quality.</p>

            <br/>

            <h4>Amazon - Software Development Engineer Intern</h4>
            <h5>May 2022 - August 2022</h5>
            <p>Mentored by experienced developers in Amazon's FinTech division and developed key features for an internal requirements gathering tool focused on providing a high quality user experience.</p>
        </div>
    )
}

export default ExperienceWidget