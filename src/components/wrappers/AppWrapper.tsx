import React from "react";
import { INavigationMenuFields } from "@src/types/generated/contentful";
import NavigationMenu from "@components/layout/NavigationMenu";
import menuData from '@utils/menu.preval';
import { Container, Col, Row } from "react-bootstrap";
import { FaEnvelope, FaFacebook } from 'react-icons/fa';
import Link from "next/link";
import Header from "@components/layout/Header";
import PageTitleSection from "@components/layout/PageTitleSection";
import Footer from "@components/layout/Footer";
import Script from "next/script";

const AppLayout: React.FC = ({ children }) => {
    const menu = menuData as INavigationMenuFields;
    const menuItems = menu.menuItems!;

    return (
        <>
            <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
            <Script src="/js/script.js" />
            <Header menuItems={menuItems} />
            {children}
            <Footer />
        </>
    );
};

export default AppLayout;
