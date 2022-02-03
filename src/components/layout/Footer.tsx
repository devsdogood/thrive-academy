import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaEnvelope, FaFacebook } from "react-icons/fa";
import { ISettingsFields } from "@src/types/generated/contentful";

type Props = {
    settings: ISettingsFields
};

const Footer: React.FC<Props> = ({ settings, children }) => {
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
                                    <Image
                                        layout="fixed"
                                        width={175}
                                        height={101}
                                        src={`https:${settings.logo.fields.file.url}`}
                                        alt="Thrive Academy"
                                    />
                                </a>
                            </Link>
                            <ul className="list-unstyled">
                                <li className="mb-2">West Des Moines, IA</li>
                                {settings.facebook !== undefined && settings.facebook.length > 0 &&
                                    <li className="mb-2">
                                        <Link href={`${settings.facebook}`}>
                                            <a>
                                                <FaFacebook /> Thrive on Facebook
                                            </a>
                                        </Link>
                                    </li>
                                }
                                {settings.email !== undefined && settings.email.length > 0 &&
                                    <li className="mb-2">
                                        <Link href={`mailto:${settings.email}`}>
                                            <a>
                                                <FaEnvelope /> {settings.email}
                                            </a>
                                        </Link>
                                    </li>
                                }
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
                                {settings.facebook !== undefined && settings.facebook.length > 0 &&
                                    <li className="list-inline-item">
                                        <Link href={`${settings.facebook}`}>
                                            <a className="d-inline-block p-2" title="Join us on Facebook">
                                                <FaFacebook />
                                            </a>
                                        </Link>
                                    </li>
                                }
                                {settings.email !== undefined && settings.email.length > 0 &&
                                    <li className="list-inline-item">
                                        <Link href={`mailto:${settings.email}`}>
                                            <a className="d-inline-block p-2" title={`Email us at ${settings.email}`}>
                                                <FaEnvelope />
                                            </a>
                                        </Link>
                                    </li>
                                }
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
