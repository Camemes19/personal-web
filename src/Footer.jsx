import { useState } from 'react';
import {LuGithub, LuLinkedin} from "react-icons/lu";

function Footer() {
    const [date] = useState(() => new Date());

    return (
        <footer>
            <p>
                © Cameron Jamieson {date.getFullYear()}
            </p>
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
        </footer>
    )
}

export default Footer