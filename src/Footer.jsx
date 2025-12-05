import { useState } from 'react';
import { LuGithub, LuLinkedin} from "react-icons/lu";

function Footer() {
    const [date] = useState(() => new Date());

    return (
        <footer>
            <div className={"copyright"}>
                © Cameron Jamieson {date.getFullYear()}
            </div>
            <div className={"socials"}>
                <a
                    href={"https://github.com/Camemes19"}
                    target={"_blank"}
                    aria-label={"GitHub Repo"}
                    rel={"noopener noreferrer"}
                >
                    <LuGithub />
                </a>
                <a
                    href={"https://www.linkedin.com/in/cameronjamieson19"}
                    target={"_blank"}
                    aria-label={"Linkedin Profile"}
                    rel={"noopener noreferrer"}
                >
                    <LuLinkedin />
                </a>
            </div>
        </footer>
    )
}

export default Footer