import React from "react";
import siteData from '@utils/siteData.preval';
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import Script from "next/script";

const AppLayout: React.FC = ({ children }) => {
    const data = siteData;
    const menuItems = siteData.menuItems!;

    return (
        <>
            <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
            <Script src="/js/script.js" />
            <Header menuItems={menuItems} />
            {children}
            <Footer settings={data.settings} />
        </>
    );
};

export default AppLayout;
