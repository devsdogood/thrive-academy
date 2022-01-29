import React from "react";
import { INavigationMenuFields } from "@src/types/generated/contentful";
import NavigationMenu from "@components/NavigationMenu";
import menuData from '@utils/menu.preval';
import { Container, Col, Row } from "react-bootstrap";

const AppLayout: React.FC = ({ children }) => {
    const menu = menuData as INavigationMenuFields;
    const menuItems = menu.menuItems!;

    return (
        <Container>
            <Col className="justify-content-md-center">
                <Row>
                    <NavigationMenu menuItems={menuItems} />
                </Row>
                <Row className="content">
                    {children}
                </Row>
            </Col>
        </Container>
    );
};

export default AppLayout;
