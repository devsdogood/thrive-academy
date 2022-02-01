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
  const path = useRouter().asPath;
  return (
    <div className="navigation w-100">
      <div className="container">
        <Navbar expand="lg" variant="dark" className="p-0">
          <Navbar.Brand style={{ textAlign: "center" }}>
            <Link href={"/"}>
              <a>
                THRIVE ACADEMY
              </a>
            </Link>{` `}
            <div className="motto d-none d-lg-block" >
              &#9733;LIVING &#9733;LEARNING &#9733;WORKING
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto text-center">
              {menuItems.map((item) => (
                <Nav.Item
                  key={item.sys.id}
                  className={
                    path.split('/').slice(1, 2)[0] == item.fields.page?.fields.slug.split('/').slice(1, 2)[0] ? 'active' : ''}
                >
                  <Link
                    href={
                      item.fields.page?.fields.slug ||
                      item.fields.externalUrl ||
                      "/"
                    }
                    passHref
                  >
                    <Nav.Link
                      key={item.sys.id}
                      target={item.fields.externalUrl !== undefined ? '_blank' : ''}
                    >
                      {item.fields.title}
                    </Nav.Link>
                  </Link>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavigationMenu;
