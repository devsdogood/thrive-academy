import styles from "../styles/NavigationMenu/NavigationMenu.module.css";
import { INavigationItem } from "@src/types/generated/contentful";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logoForHeader.jpg";
import { useState, useEffect } from "react";

const NavigationMenu: React.FC<{ menuItems: INavigationItem[] }> = ({
  menuItems,
}) => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.headerContent}>
          <div className={styles.imageWrapper}>
            <Link href="/">
              <Image src={logo} className={styles.logoImage}></Image>
            </Link>
          </div>
          <div className={styles.rightHeader}>
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
};

export default NavigationMenu;
