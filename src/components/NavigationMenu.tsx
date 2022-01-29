import styles from "../styles/NavigationMenu/NavigationMenu.module.css";
import { INavigationItem } from "@src/types/generated/contentful";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logoForHeader.jpg";

const NavigationMenu: React.FC<{ menuItems: INavigationItem[] }> = ({
  menuItems,
}) => (
  <>
    <div className={styles.headerWrapper}>
      <div className={styles.headerContent}>
        <div className={styles.imageWrapper}>
          <Image src={logo}></Image>
        </div>
        <div className={styles.rightHeader}>
          {menuItems.map((item) => (
            <Link
              key={item.sys.id}
              href={
                item.fields.page?.fields.slug || item.fields.externalUrl || "/"
              }
              passHref
            >
              <div key={item.sys.id} className={styles.navbars}>
                <span className="fw-bold p-3">{item.fields.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default NavigationMenu;
