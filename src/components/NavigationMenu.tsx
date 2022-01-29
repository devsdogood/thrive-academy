import { INavigationItem } from "@src/types/generated/contentful";
import Link from "next/link";

const NavigationMenu: React.FC<{menuItems: INavigationItem[]}> = ({ menuItems }) => (
    <>
        {menuItems.map((item) => (
            <Link key={item.sys.id} href={ item.fields.page?.fields.slug || item.fields.externalUrl || "/" } passHref>
                <div key={item.sys.id}>
                    <span className="fw-bold p-3" style={{color: '#333' }}>
                        {item.fields.title}
                    </span>
                </div>
            </Link>
         ))}
        <br />
    </>
);

export default NavigationMenu;
