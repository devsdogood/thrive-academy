import React from "react";
import { INavigationItem } from "@src/types/generated/contentful";
import NavigationMenu from "./NavigationMenu";

type HeaderProps = {
    menuItems: INavigationItem[];
};

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
    return (
        <header className="fixed-top header">
            <NavigationMenu menuItems={menuItems} />
        </header>
    );
};

export default Header;



