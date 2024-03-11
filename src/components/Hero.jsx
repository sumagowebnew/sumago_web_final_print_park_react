import React from 'react'
import '../assets/css/Hero.css'
import { Carousel } from 'react-bootstrap'
import img1 from '../assets/images/wp-content/uploads/2023/08/new/1.png'
import img2 from '../assets/images/wp-content/uploads/2023/08/new/2.png'
import img3 from '../assets/images/wp-content/uploads/2023/08/new/3.png'
import img4 from '../assets/images/wp-content/uploads/2023/08/new/4.png'
import img5 from '../assets/images/wp-content/uploads/2023/08/new/5.png'
import awc from '../assets/images/wp-content/uploads/2023/08/newbg.png'
import awardbanner from '../assets/images/wp-content/uploads/2023/08/AWARD BANNER.png'

const Hero = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    // Add an event listener to update the state when the screen size changes
    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        // Initial check on component mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='carousel-slide'>
            <Carousel pause={false} data-bs-theme="dark">
                <Carousel.Item interval={5000}>
                    <div className="carousel-text">
                        <h1>Embrace</h1>
                        <p>innovation and adapt to market trends with updated solutions</p>
                    </div>
                    <img src={img1} alt='' className='carousel-image' />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div className="carousel-text">
                        <h1>Enhance</h1>
                        <p>customer experience and drive sales with data-driven insights</p>
                    </div>
                    <img src={img2} alt='' className='carousel-image' />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div className="carousel-text">
                        <h1>Protect</h1>
                        <p>data assets and mitigate and cybersecurity threats through secure websites</p>
                    </div>
                    <img src={img3} alt='' className='carousel-image' />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div className="carousel-text">
                        <h1>Streamline</h1>
                        <p>operations and boost productivity with IT automation</p>
                    </div>
                    <img src={img4} alt='' className='carousel-image' />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div className="carousel-text">
                        <h1>Increase</h1>
                        <p>the reach of your business through optimized Digital Marketing</p>
                    </div>
                    <img src={img5} alt='' className='carousel-image' />
                </Carousel.Item>

            </Carousel>
            <div>
                {isMobile ? (
                    // Render mobile version
                    <img src={awardbanner} alt="Award Winning Company" style={{ width: '100%' }} className='mt-3 mb-3' />
                ) : (
                    // Render desktop version
                    <img src={awc} alt="Award Winning Company" className='mt-3 mb-3' />
                )}
            </div>
        </div>
    )
}

export default Hero