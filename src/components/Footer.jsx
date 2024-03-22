import React from 'react'

const Footer = () => {
    const heartStyle = {
        // color: props.mode === 'dark' ? '#ff8c00' : 'red',
        color: 'red',
    };
    return (
        <>
            <div>
                Made with ❤️ in India by <a href="https://pranavarya.in" target='_blank' rel='noopener noreferrer'>Pranav Arya</a>
                {/* Made with <span style={heartStyle} role="img" aria-label="Heart">❤️</span> in India by Pranav Arya */}
            </div>
        </>
    )
}

export default Footer