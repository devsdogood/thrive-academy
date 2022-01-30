import { INavigationItem } from "@src/types/generated/contentful";
import Link from "next/link";
import Image from "next/image";
import logo from "public/logoForHeader.jpg";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import navStyle from "../styles/NavigationMenu/NavigationMenu.module.css";
import { useRouter } from "next/router";

const NavigationMenu: React.FC<{ menuItems: INavigationItem[] }> = ({
  menuItems,
}) => {
  useRouter().asPath
  return (
    <>
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand style={{ textAlign: "center" }}>
            <Link href={"/"}>
              <a>
                THRIVE ACADEMY
              </a>
            </Link>{` `}
            <div className="motto" >
              &#9733;LIVING &#9733;LEARNING &#9733;WORKING
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav variant="pills">
              {menuItems.map((item) => (
                <Nav.Item>
                  <Link
                    key={item.sys.id}
                    href={
                      item.fields.page?.fields.slug ||
                      item.fields.externalUrl ||
                      "/"
                    }
                    passHref
                  >
                    <Nav.Link key={item.sys.id} target={item.fields.externalUrl !== undefined ? '_blank' : ''} className={
                      useRouter().asPath.split('/').slice(1, 2)[0] == item.fields.page?.fields.slug.split('/').slice(1, 2)[0] ? 'active' : ''}>
                      {item.fields.title}
                    </Nav.Link>
                  </Link>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationMenu;
