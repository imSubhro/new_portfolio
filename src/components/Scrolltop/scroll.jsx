import React from 'react'

const ScrollTop = () => {
    const scrollToTop = () => {
        document.documentElement.classList.add('scroll-to-top');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
            document.documentElement.classList.remove('scroll-to-top');
        }, 500);
    };

    return (
        <div
            onClick={scrollToTop}
            className='fixed bottom-5 right-5 cursor-pointer transition z-50 drop-shadow-xl hover:opacity-90 hover:scale-110 '
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 143 143">
                <g id="Group_17" data-name="Group 17" transform="translate(-98 -690)">
                    <g id="Component_10_1" data-name="Component 10 – 1" transform="translate(98 690)">
                        <g id="Component_9_1" data-name="Component 9 – 1">
                            <g id="Ellipse_5" data-name="Ellipse 5" fill="none" stroke="#707070" strokeLinecap="round" strokeWidth="4">
                                <circle cx="71.5" cy="71.5" r="71.5" stroke="none" />
                                <circle cx="71.5" cy="71.5" r="70.5" fill="none" />
                            </g>
                            <path id="Path_28" data-name="Path 28" d="M157.959,4494.728" transform="translate(-98 -4458)" fill="none" stroke="#E2711E" strokeLinecap="round" strokeWidth="5" />
                        </g>
                    </g>
                    <g id="Component_11" data-name="Component 11" transform="translate(148.754 723.71)">
                        <path id="Path_29" data-name="Path 29" d="M189.746,4495.1A27.645,27.645,0,0,1,169.5,4474.85a27.673,27.673,0,0,1-20.246,20.246" transform="translate(-149.254 -4474.85)" fill="none" stroke="#E2711E" strokeLinecap="round" strokeWidth="3" />
                        <path id="Path_30" data-name="Path 30" d="M231.5,4391.641v64.788" transform="translate(-211.254 -4387.85)" fill="none" stroke="#E2711E" strokeLinecap="round" strokeWidth="5" />
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default ScrollTop