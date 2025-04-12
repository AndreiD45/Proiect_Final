import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Nav.module.css"

export default function BrandNavLink({className, ...props}) {
    return(
        <NavLink
            className={({isActive}) => clsx(className, {[styles.active]: isActive})}
            {...props}
    />
    );
};