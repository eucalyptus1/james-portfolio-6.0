import React from "react";

function Nav() {
    return (
        <header>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#portfolio">
                            My Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#contact">
                            Contact me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#resume">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;