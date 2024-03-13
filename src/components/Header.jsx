import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Header.css'
import '../assets/images/wp-content/plugins/elementor/assets/css/frontend-lite.min.css'
import '../assets/images/wp-content/themes/printpark/assets/css/style.css'
import '../assets/images/wp-content/themes/printpark/assets/css/bootstrap.css'
import '../assets/images/wp-content/themes/printpark/assets/css/flaticon.css'
import '../assets/images/wp-content/themes/printpark/assets/css/animate.css'
import '../assets/images/wp-content/themes/printpark/assets/css/color.css'
import '../assets/images/wp-content/themes/printpark/assets/css/custom.css'
import '../assets/images/wp-content/themes/printpark/assets/css/font-awesome-all.css'
import '../assets/images/wp-content/themes/printpark/assets/css/gutenberg.css'
import '../assets/images/wp-content/themes/printpark/assets/css/jquery.fancybox.min.css'
import '../assets/images/wp-content/themes/printpark/assets/css/nice-select.css'
import '../assets/images/wp-content/themes/printpark/assets/css/responsive.css'
import '../assets/images/wp-content/themes/printpark/assets/css/tut.css'
import '../assets/images/wp-content/plugins/woocommerce/assets/css/woocommerce-layout.css?ver=8.3.1'
import '../assets/images/wp-content/plugins/printpark-plugin/redux-framework/redux-core/assets/css/extendify-utilities.css'
import '../assets/images/wp-content/plugins/woocommerce/assets/css/woocommerce.css'
import shape2 from '../assets/images/wp-content/themes/printpark/assets/images/shape/shape-2.png'
import sumago from '../assets/images/wp-content/uploads/2023/08/sumago.png'
import email from '../assets/images/wp-content/themes/printpark/assets/images/shape/email.png'
import sumagologo from '../assets/images/wp-content/uploads/2023/08/SUMAGO Logo.png'
import logo13 from '../assets/images/wp-content/uploads/2023/08/Logo1 3.png'
import sumagowhite from '../assets/images/wp-content/uploads/2023/08/SUMAGO White.png'
import { Col, Row } from 'react-bootstrap'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuVisible(!mobileMenuVisible);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <header className={`d-none d-lg-block main-header header-style-one ${scrolled ? 'scrolled' : ''}`}>

                <div class="xs-sidebar-group info-group info-sidebar">
                    <div class="xs-overlay xs-bg-black"></div>
                    <div class="xs-overlay xs-overlay-2 xs-bg-black"></div>
                    <div class="xs-overlay xs-overlay-3 xs-bg-black"></div>
                    <div class="xs-overlay xs-overlay-4 xs-bg-black"></div>
                    <div class="xs-overlay xs-overlay-5 xs-bg-black"></div>
                    <div class="xs-sidebar-widget">
                        <div class="sidebar-widget-container">
                            <div class="widget-heading">
                                <Link to={"/"} class="close-side-widget"><i class="fa fa-times"></i></Link>
                            </div>
                            <div class="sidebar-textwidget">
                                <div class="sidebar-info-contents">
                                    <div class="content-inner">
                                        <div class="logo1">
                                            <Link to="/" title="WordPress Printing"><img
                                                src={sumagologo} alt="logo" /></Link>
                                        </div>
                                        <div class="content-box">
                                            <h4>About Us</h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                                veritatis et quasi</p>
                                            <p>Research oriented solutions for Data Science and Machine Learning business needs.
                                            </p> <a href="https://wp1.themevibrant.com/newwp/printpark/about-us-01/"
                                                class="theme-btn btn-one">About Us</a>
                                        </div>
                                        <div class="contact-info">
                                            <h4>Contact Info</h4>
                                            <ul>
                                                <li>Chicago 12, Melborne City, USA</li>
                                                <li><a href="tel:+91 7263084881">+91 7263084881</a></li>
                                                <li><a href="mailto:info@sumagoinfotech.com">info@example.cominfo@sumagoinfotech.com</a></li>
                                            </ul>
                                        </div>
                                        <ul class="social-box clearfix">

                                            <li>
                                                <a href="https://www.facebook.com/sumagoinfotech/"><i class="fab  fa-facebook"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://in.linkedin.com/company/sumago-infotech-pvt-ltd"><i class="fab  fa-linkedin"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/sumago_infotech"><i class="fab  fa-instagram"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com/channel/UCoUCNHO1wXI92HnEmNtIkEg?view_as=subscriber"><i class="fab  fa-youtube"></i></a>
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <header class="main-header header-style-one">
                    <div className="header-top">
                        <div className="outer-container d-sm-grid d-lg-flex d-md-flex">
                            <div className="text text-center col-sm-12 col-md-4 col-lg-3">
                                <div className='mt-1'>
                                    <i className="flaticon-incoming-call"></i> &nbsp;
                                    <span> Call Us</span> <strong>Now:</strong>
                                </div>
                                <Row style={{ paddingLeft: '10px', paddingRight: '10px', paddingBottom: '5px' }}>
                                    <Col lg={6} md={6} sm={6}>
                                        <a href="tel:+91 902 828 8668"><strong>+91 902 828 8668,</strong></a>
                                    </Col>
                                    <Col lg={6} md={6} sm={6}>
                                        <a href="tel:+91 840 808 4888"><strong>+91 840 808 4888</strong></a>
                                    </Col>
                                </Row>
                            </div>
                            <div className="col-sm-12 col-md-5 col-lg-5 d-grid justify-content-center ">
                                <figure className="logo" ><Link to="/" title="WordPress Printing"><img id="sumalogo" src={sumagologo} alt="logo" /></Link></figure>
                            </div>
                            <div className="text2 col-sm-12 col-md-3 col-lg-3">
                                <div className='right-box'>
                                    <Row style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: '5px' }}>
                                        <Col lg={2} md={2} sm={2}>
                                            <img src={email} width="20px" height="20px" alt='' />
                                        </Col>
                                        <Col lg={10} md={10} sm={10}>
                                            <a href="mailto:info@sumagoinfotech.com" style={{ color: 'black' }}>info@sumagoinfotech.com</a>
                                        </Col>
                                    </Row>
                                    <Row style={{ paddingLeft: '40px', paddingRight: '40px', paddingBottom: '5px' }}>
                                        <Col lg={2} md={2} sm={2}>
                                            <i className="flaticon-incoming-call" style={{ color: "black" }}></i>
                                        </Col>
                                        <Col lg={10} md={10} sm={10}>
                                            <a href="tel:+91 726 308 4881"><strong>+91 726 308 4881</strong></a>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-lower">
                        <div className="outer-container">
                            <div className="outer-box outer-box1">
                                <div className="left-column">
                                    <div className="logo-box">
                                        <div className="shape"
                                            style={{ backgroundImage: `url(${shape2})` }}>
                                        </div>
                                        <figure className="logo">
                                            <Link to="/" title="WordPress Printing">
                                                <img id="shapeimg" src={logo13} alt="" /></Link>
                                        </figure>

                                    </div>

                                    <div className="menu-area clearfix" style={{ marginLeft: "0px" }}>
                                        <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                                            <i className="icon-bar"></i>
                                            <i className="icon-bar"></i>
                                            <i className="icon-bar"></i>
                                        </div>
                                        <nav className="main-menu navbar-expand-md navbar-light">
                                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                                <ul className="navigation clearfix navbar-nav1">
                                                    <li id="menu-item-54"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-54  menu-item <?php echo ($currentPage == 'index.php') ? 'active' : ''; ?>">
                                                        <Link title="Home" to="/"
                                                            data-toggle="dropdown1" className="hvr-underline-from-left1"
                                                            aria-expanded="false" data-scroll
                                                            data-options="easing: easeOutQuart" style={{ textDecoration: 'none' }} onclick={scrollToTop}>Home</Link>

                                                    </li>
                                                    <li id="menu-item-54"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-54">
                                                        <Link title="Our Solutions" to={`/solutions/${encodeURIComponent("Web Development")}`}
                                                            data-toggle="dropdown1" className="hvr-underline-from-left1"
                                                            aria-expanded="false" data-scroll
                                                            data-options="easing: easeOutQuart" style={{ textDecoration: 'none' }} onclick={scrollToTop}>Our Solutions</Link>

                                                    </li>



                                                    <li id="menu-item-82"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-82">
                                                        <Link title="Career" to="/career" data-toggle="dropdown1"
                                                            className="hvr-underline-from-left1" aria-expanded="false" data-scroll
                                                            data-options="easing: easeOutQuart" style={{ textDecoration: 'none' }} onclick={scrollToTop}>Career</Link>

                                                    </li>
                                                    <li id="menu-item-81"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-81">
                                                        <Link title="About" to="/about" data-toggle="dropdown1"
                                                            className="hvr-underline-from-left1" aria-expanded="false" data-scroll
                                                            data-options="easing: easeOutQuart" style={{ textDecoration: 'none' }} onclick={scrollToTop}>About us</Link>

                                                    </li>

                                                    <li id="menu-item-60"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-60">
                                                        <Link title="Contact" to="/contact"
                                                            className="hvr-underline-from-left1" data-scroll
                                                            data-options="easing: easeOutQuart" style={{ textDecoration: 'none' }} onclick={scrollToTop}>Contact us</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                                <div className="menu-right-content">
                                    <div className="btn-box">
                                        <Link to={"/contact"}
                                            className="theme-btn btn-one" style={{ textDecoration: 'none' }}>Get a Quote</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="sticky-header">
                        <div class="outer-container">
                            <div class="outer-box">
                                <div class="left-column">
                                    <div class="logo-box">
                                        <figure class="logo"><Link to="/" title="WordPress Printing">
                                            <img style={{ height: "40px", width: "300px" }} src={sumago} alt="logo" /></Link></figure>
                                    </div>
                                    <div class="menu-area clearfix">
                                        <nav class="main-menu clearfix">
                                            {/*Keep This Empty / Menu will come through Javascript*/}
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div class="mobile-menu">
                    <div class="menu-backdrop"></div>
                    <div class="close-btn"><i class="fas fa-times"></i></div>

                    <nav class="menu-box">
                        <div class="nav-logo">
                            <Link to="/" title="WordPress Printing"><img src={sumagowhite}
                                alt="logo"/></Link>
                        </div>
                        <div class="menu-outer">{/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                        </div>
                        {/* <div class="contact-info">
                            <h4>Contact Info</h4>
                            <ul>
                                <li>Third Floor, Gajra Chambers, Mumbai - Agra National Hwy, Kamod Nagar, Nashik, Maharashtra 422009</li>
                                <li><a href="tel:+91 8530388815">+91 8530388815</a></li>
                                <li><a href="mailto:info@sumagoinfotech.com">info@sumagoinfotech.com</a></li>
                            </ul>
                        </div> */}
                        {/* <div class="social-links">
                            <ul class="clearfix">

                                <li>
                                    <a target="_blank" href="https://www.facebook.com/sumagoinfotech/"><i class="fab  fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://in.linkedin.com/company/sumago-infotech-pvt-ltd"><i class="fab  fa-linkedin"></i></a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.instagram.com/sumago_infotech"><i class="fab  fa-instagram"></i></a>
                                </li>

                                <li>
                                    <a target="_blank" href="https://www.youtube.com/channel/UCoUCNHO1wXI92HnEmNtIkEg?view_as=subscriber"><i class="fab  fa-youtube"></i></a>
                                </li>


                            </ul>
                        </div> */}
                    </nav>
                </div>
            </header>
            {scrolled && (
                <header className={`header-style-two ${scrolled ? 'sticky' : ''}`}>
                    <div className="header-lower">
                        <div className="outer-container2">
                            <div className="outer-box outer-box1 d-flex justify-content-evenly ">

                                <Link to="/" title="WordPress Printing">
                                    <img id="shapeimg" src={sumagologo} alt="" /></Link>

                                <div className="left-column">


                                    <div className="menu-area clearfix text-dark" style={{ marginLeft: "0px" }}>

                                        <nav className="main-menu navbar-expand-md navbar-light">
                                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                                <ul className="navigation clearfix navbar-nav1">
                                                    <li id="menu-item-54"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-54  menu-item <?php echo ($currentPage == 'index.php') ? 'active' : ''; ?>">
                                                        <Link title="Home" to="/"
                                                            data-toggle="dropdown1" className="hvr-underline-from-left1"
                                                            aria-expanded="false" data-scroll
                                                            data-options="easing: easeOutQuart" style={{ textDecoration: 'none', color: "black" }} onClick={scrollToTop}>Home</Link>

                                                    </li>
                                                    <li id="menu-item-54"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-54">
                                                        <Link title="Our Solutions" to={`/solutions/${encodeURIComponent("Web Development")}`}
                                                            data-toggle="dropdown1" className="hvr-underline-from-left1"
                                                            aria-expanded="false" data-scroll
                                                            data-options="easing: easeOutQuart" style={{ textDecoration: 'none', color: "black" }} onClick={scrollToTop}>Our Solutions</Link>

                                                    </li>



                                                    <li id="menu-item-82"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-82">
                                                        <Link title="Career" to="/career" data-toggle="dropdown1"
                                                            className="hvr-underline-from-left1" aria-expanded="false" data-scroll
                                                            data-options="easing: easeOutQuart" style={{ textDecoration: 'none', color: "black" }} onClick={scrollToTop}>Career</Link>

                                                    </li>
                                                    <li id="menu-item-81"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-81">
                                                        <Link title="About" to="/about" data-toggle="dropdown1"
                                                            className="hvr-underline-from-left1" aria-expanded="false" data-scroll
                                                            data-options="easing: easeOutQuart" style={{ textDecoration: 'none', color: "black" }} onClick={scrollToTop}>About us</Link>

                                                    </li>

                                                    <li id="menu-item-60"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-60">
                                                        <Link title="Contact" to="/contact"
                                                            className="hvr-underline-from-left1" data-scroll
                                                            data-options="easing: easeOutQuart" style={{ textDecoration: 'none', color: "black" }} onClick={scrollToTop}>Contact us</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>
            )}
        </>
    )
}

export default Header