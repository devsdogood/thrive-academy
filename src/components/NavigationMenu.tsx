import styles from "../styles/NavigationMenu/NavigationMenu.module.css";
import { INavigationItem } from "@src/types/generated/contentful";
import Link from "next/link";

const NavigationMenu: React.FC<{ menuItems: INavigationItem[] }> = ({
  menuItems,
}) => (
  <>
    <div className={styles.navigationMenu}>
      {menuItems.map((item) => (
        <Link
          key={item.sys.id}
          href={item.fields.page?.fields.slug || item.fields.externalUrl || "/"}
          passHref
        >
          <div key={item.sys.id} className={styles.navigationLink}>
            <span className="fw-bold p-3" style={{ color: "#333" }}>
              {item.fields.title}
            </span>
          </div>
        </Link>
      ))}
    </div>
  </>
);

export default NavigationMenu;
