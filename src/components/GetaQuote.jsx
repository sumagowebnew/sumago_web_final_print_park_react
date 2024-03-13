import React from 'react';
import '../assets/css/GetaQuote.css';
import { Col, Row } from 'react-bootstrap';

const GetaQuote = () => {
    return (
        <>
            <div className='getaquote-section container-fluid'>
                <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-1fdab63 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="1fdab63" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default d-flex align-content-center ">
                        <Row className='container-fluid'>
                            <Col lg={4} md={6} sm={12} className='column-1'>
                                <div className="elementor-column elementor-top-column elementor-element elementor-element-fec6395  "
                                    data-id="fec6395" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated d-flex  align-content-center">
                                        <div className="elementor-element elementor-element-91f6e29 elementor-widget elementor-widget-printpark_icon_box"
                                            data-id="91f6e29" data-element_type="widget"
                                            data-widget_type="printpark_icon_box.default">
                                            <div className="elementor-widget-container">
                                                <section className="info-section centred p-0 m-0">
                                                    <div className="info-column">
                                                        <div className="info-block-one">
                                                            <div className="inner-box te-icon-box">
                                                                <div className="icon-box te-icon">
                                                                    <i className="flaticon-incoming-call"></i>
                                                                </div>
                                                                <p className="te-text">If you need help, don't look far,
                                                                    <br />
                                                                    call us today!
                                                                </p>
                                                                <h4 className="te-subtitle"><a
                                                                    href="tel:+91 8530388815">+91 8530388815</a></h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12} className='column-2'>
                                <div className="elementor-column elementor-top-column elementor-element elementor-element-a4fd0a5  "
                                    data-id="a4fd0a5" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated d-flex  align-content-center">
                                        <div className="elementor-element elementor-element-ca701f4 elementor-widget elementor-widget-printpark_icon_box"
                                            data-id="ca701f4" data-element_type="widget"
                                            data-widget_type="printpark_icon_box.default">
                                            <div className="elementor-widget-container">
                                                <section className="info-section centred p-0 m-0">
                                                    <div className="info-column">
                                                        <div className="info-block-one">
                                                            <div className="inner-box te-icon-box">
                                                                <div className="icon-box te-icon">
                                                                    <i className="flaticon-map"></i>
                                                                </div>
                                                                <h6 className="te-subtitle">Cost-effective & long-term Custom Software solutions by committed professionals.</h6>
                                                                <br />
                                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                                                                    <p>
                                                                        <button type="button" className="theme-btn btn-two" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                            GET A QUOTE
                                                                        </button>
                                                                        {/* Modal */}
                                                                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                            <div className="modal-dialog">
                                                                                <div className="modal-content">
                                                                                    <div className="modal-header">
                                                                                        <h4 className="modal-title">GET A QUOTE</h4>
                                                                                        <button type="button" className="close" data-bs-dismiss="modal">X</button>
                                                                                    </div>
                                                                                    <div className="modal-body">
                                                                                        <form method="post" name="myForm">
                                                                                            <div style={{ textAlign: "left" }} className="form-group">
                                                                                                <label>Name :</label>
                                                                                                <input className="form-control" type="text" name="fname" onInput={(e) => e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '').replace(/(\..*)\./g, '$1')} placeholder="Name" required="" />
                                                                                            </div>
                                                                                            <div style={{ textAlign: "left" }} className="form-group">
                                                                                                <label>Contact :</label>
                                                                                                <input className="form-control" type="tel" name="contact" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1')} maxLength="10" minLength="10" pattern="[7-9]{1}[0-9]{9}" placeholder="Mobile no" required="" />
                                                                                            </div>
                                                                                            <div style={{ textAlign: "left" }} className="form-group">
                                                                                                <label>Email :</label>
                                                                                                <input className="form-control" type="email" name="email" pattern="^(([-\w\d]+)(\.[-\w\d]+)@([-\w\d]+)(\.[-\w\d]+)(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2})$" placeholder="Email" required="" />
                                                                                            </div>
                                                                                            <div style={{ textAlign: "left" }} className="form-group">
                                                                                                <label>Type of Services :</label>
                                                                                                <select name="service" className="form-control" required="">
                                                                                                    <option value="">Select Service</option>
                                                                                                    <option value="Website Development">Website Development</option>
                                                                                                    <option value="App Development">App Development</option>
                                                                                                    <option value="Software Development">Software Development</option>
                                                                                                    <option value="Digital Marketing">Digital Marketing</option>
                                                                                                    <option value="Social Media">Social Media</option>
                                                                                                    <option value="SEO">SEO</option>
                                                                                                    <option value="Training/Internship">Training/Internship</option>
                                                                                                    <option value="Start up Consultancy">Start up Consultancy</option>
                                                                                                    <option value="#">Web Hosting</option>
                                                                                                </select>
                                                                                            </div>
                                                                                            <div style={{ textAlign: "left" }} className="form-group">
                                                                                                <label>Other :</label>
                                                                                                <input className="form-control" type="text" name="other" onInput={(e) => e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '').replace(/(\..*)\./g, '$1')} placeholder="Other Service" />
                                                                                            </div>
                                                                                            <div style={{ textAlign: "left" }} className="form-group">
                                                                                                <label>Address / City :</label>
                                                                                                <textarea className="form-control" rows="4" cols="10" name="address" placeholder="Address / City"></textarea>
                                                                                            </div>
                                                                                            <div style={{ textAlign: "left" }} className="form-group">
                                                                                                <label>Any Comment :</label>
                                                                                                <textarea className="form-control" rows="4" cols="10" name="comment" placeholder="Comment"></textarea>
                                                                                            </div>
                                                                                            <div style={{ textAlign: "left" }} className="form-group mt-4">
                                                                                                <center>
                                                                                                    <input className="btn btn-success btn-lg" type="submit" id="quoteReq" name="submit" value="Submit" />
                                                                                                    <input className="btn btn-danger btn-lg" type="reset" name="btn_reset" value="Clear" />
                                                                                                </center>
                                                                                            </div>
                                                                                        </form>
                                                                                    </div>
                                                                                    <div className="modal-footer">
                                                                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12} className='column-3'>
                                <div className="elementor-column elementor-top-column elementor-element elementor-element-c350336 "
                                    data-id="c350336" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated  d-flex  align-content-center">
                                        <div className="elementor-element elementor-element-e2b4564 elementor-widget elementor-widget-printpark_icon_box"
                                            data-id="e2b4564" data-element_type="widget"
                                            data-widget_type="printpark_icon_box.default">
                                            <div className="elementor-widget-container">
                                                <section className="info-section centred p-0 m-0">
                                                    <div className="info-column">
                                                        <div className="info-block-one">
                                                            <div className="inner-box te-icon-box">
                                                                <div className="icon-box te-icon">
                                                                    <i className="flaticon-message"></i>
                                                                </div>
                                                                <p className="te-text">Do you have a project to work? <br />Send your details.</p>
                                                                <h4 className="te-subtitle"><a
                                                                    href="mailto:info@sumagoinfotech.com">info@sumagoinfotech.com</a></h4>
                                                                {/* <h4 className="te-subtitle"><a
                                                            href="mailto:info@example.com">+91 7263084881</a></h4> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>


                    </div>

                </section>
            </div>
        </>
    )
}

export default GetaQuote;
