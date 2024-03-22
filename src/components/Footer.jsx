import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div>
                Made with ❤️ in India by <a href="https://pranavarya.in" target='_blank' rel='noopener noreferrer'>Pranav Arya</a>

                <a href="https://github.com/PranavArya37/My-Name-In-Space" target="_blank" style={{ cursor: 'pointer', color: 'white', marginLeft: "10px", marginRight: "10px" }} rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://twitter.com/PranavArya37" target="_blank" style={{ cursor: 'pointer', color: 'white', marginRight: "10px" }} rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://www.linkedin.com/in/pranavarya37/" target="_blank" style={{ cursor: 'pointer', color: 'white' }} rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </div>
        </>
    )
}

export default Footer