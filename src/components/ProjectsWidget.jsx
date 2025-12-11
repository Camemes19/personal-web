import {LuBeaker, LuGithub} from "react-icons/lu";

export function ProjectsWidget() {
    return (
        <div>
            <h3>
                <LuBeaker className={"heading-icon"}/>
                Projects
            </h3>
            <p>
                I guess this website doesn't count, does it? Time to integrate with <LuGithub/> to add the other ones.
            </p>
        </div>
    )
}

export default ProjectsWidget;