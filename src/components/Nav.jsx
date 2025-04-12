import styles from "./Nav.module.css"
import BrandNavLink from "./NavLink"

function Nav(){
    return( 
        <>
    <div className={styles.container}>
        <div className={styles.item}><BrandNavLink to="/">Home</BrandNavLink></div>
        <div className={styles.item}><BrandNavLink to="games">Games</BrandNavLink></div>
        <div className={styles.item}><BrandNavLink to="hardware">Hardware</BrandNavLink></div>
        <div className={styles.item}><BrandNavLink to="contact">Contact</BrandNavLink></div>
        <div className={styles.lgItem}>
            <BrandNavLink to="login">Login</BrandNavLink>
            <BrandNavLink to="register">Register</BrandNavLink>
        </div>
    </div>
        </>
    )
}

export default Nav