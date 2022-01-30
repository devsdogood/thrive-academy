import React from "react";
import { INavigationMenuFields } from "@src/types/generated/contentful";
import NavigationMenu from "@components/NavigationMenu";
import menuData from '@utils/menu.preval';
import { Container, Col, Row } from "react-bootstrap";
import { FaEnvelope, FaFacebook } from 'react-icons/fa';
import Link from "next/link";
const AppLayout: React.FC = ({ children }) => {
    const menu = menuData as INavigationMenuFields;
    const menuItems = menu.menuItems!;

    return (
        <Container>
            <Col className="justify-content-md-center">
                <Row>
                    <Col>
                        <NavigationMenu menuItems={menuItems} />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        {children}
                    </Col>
                </Row>
                <Row className="footer">
                    <Link href="https://www.facebook.com/groups/1138474949915990/">
                        <a>
                            <FaFacebook /> Join our group on Facebook!
                        </a>
                    </Link>
                </Row>
                <Row className="footer">
                    <Link href="mailto:thriveacademyia@gmail.com">
                        <a>
                            <FaEnvelope /> Email us at thriveacademyia@gmail.com
                        </a>
                    </Link>

                </Row>
            </Col>
        </Container >
    );
};

export default AppLayout;
