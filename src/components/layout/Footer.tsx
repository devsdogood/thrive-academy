import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaEnvelope, FaFacebook } from "react-icons/fa";

type Props = {
};

const Footer: React.FC<Props> = ({ children }) => {
    return (
        <footer>
            <div
                className="footer bg-footer section border-bottom"
                style={{ "paddingTop": "90px" }}
            >
                <Container>
                    <Row>
                        <Col lg={4} sm={8} className="mb-5 mb-lg-0">
                            <Link href="/">
                                <a className="logo-footer">
                                    <img
                                        width={175}
                                        height={101}
                                        className="img-fluid mb-4"
                                        src="/thriveLogoFooter.png"
                                        alt="Thrive Academy"
                                    />
                                </a>
                            </Link>
                            <ul className="list-unstyled">
                                <li className="mb-2">West Des Moines, IA</li>
                                <li className="mb-2">
                                    <Link href="https://www.facebook.com/groups/1138474949915990/">
                                        <a>
                                            <FaFacebook /> Thrive on Facebook
                                        </a>
                                    </Link>

                                </li>
                                <li className="mb-2">
                                    <Link href="mailto:thriveacademyia@gmail.com">
                                        <a>
                                            <FaEnvelope /> thriveacademyia@gmail.com
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={2} md={3} sm={4} className="mb-5 mb-md-0">
                            <h4 className="text-white mb-5">Header</h4>
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <Link href="#">
                                        <a>Item</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#">
                                        <a>Item</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#">
                                        <a>Item</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#">
                                        <a>Item</a>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={2} md={3} sm={4} className="mb-5 mb-md-0">
                            <h4 className="text-white mb-5">Header</h4>
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <Link href="#">
                                        <a>Item</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#">
                                        <a>Item</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#">
                                        <a>Item</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#">
                                        <a>Item</a>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={2} md={3} sm={4} className="mb-5 mb-md-0">
                            <h4 className="text-white mb-5">Header</h4>
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <Link href="#">
                                        <a>Item</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#">
                                        <a>Item</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#">
                                        <a>Item</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#">
                                        <a>Item</a>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={2} md={3} sm={4} className="mb-5 mb-md-0">
                            <h4 className="text-white mb-5">Header</h4>
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <Link href="#">
                                        <a>Item</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#">
                                        <a>Item</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#">
                                        <a>Item</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#">
                                        <a>Item</a>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="copyright py-4 bg-footer">
                <Container>
                    <Row>
                        <Col sm={7} className="text-sm-left text-center">
                            Copyright ©2022, theme based on <a href="https://themefisher.com/" className="text-muted">Themefisher</a>
                        </Col>
                        <Col sm={5} className="text-sm-right text-center">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <Link href="https://www.facebook.com/groups/1138474949915990/">
                                        <a className="d-inline-block p-2">
                                            <FaFacebook />
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
