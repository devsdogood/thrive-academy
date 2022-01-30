import { INavigationItem } from "@src/types/generated/contentful";
import Link from "next/link";
import Image from "next/image";
import logo from "public/logoForHeader.jpg";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import navStyle from "../styles/NavigationMenu/NavigationMenu.module.css";

const NavigationMenu: React.FC<{ menuItems: INavigationItem[] }> = ({
  menuItems,
}) => (
  <>
    <Navbar expand="lg" bg="white">
      <Container>
        <Navbar.Brand>
          <Link href={"/"}>
            <a>
              <Image
                src={logo}
                alt="Thrive Academy"
                objectFit="contain"
                width="110"
                height="110"
                className={navStyle.logo}
              />
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {menuItems.map((item) => (
              <Link
                key={item.sys.id}
                href={
                  item.fields.page?.fields.slug ||
                  item.fields.externalUrl ||
                  "/"
                }
                passHref
              >
                <Nav.Link key={item.sys.id}>
                  <span className={navStyle.navMenu}>{item.fields.title}</span>
                </Nav.Link>
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
);

export default NavigationMenu;
