import React, { useState } from "react";

function Nav() {
    return (
        <header>
            <nav>
                <ul className="flex-row">
                    <li>
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio">
                            My Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contact me
                        </a>
                    </li>
                    <li>
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