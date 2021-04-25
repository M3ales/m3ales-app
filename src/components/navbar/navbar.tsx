import Link from "next/link";
import styles from "./navbar.module.css"
import { motion } from 'framer-motion'

export interface NavbarItem {
    name : string
    target : string
    onSamePage : boolean
}
function scrollOrNavigateToTarget(item : NavbarItem) : void {
    if(item.onSamePage)
    {
        const target = document.getElementById(item.target);
        if(target === null)
        {
            // Error state
            console.error("Unable to navigate to page element '" + target + "', as it was not found");
            return;
        }
        target.scrollIntoView({
            behavior: "smooth"
        });
        return;
    }
    console.error("Offpage navigation unsupported");
}

function NavItem ({ item } : { item : NavbarItem}) : JSX.Element {
    if(item.onSamePage){
        return (
            <motion.div
            initial={{ opacity: 0, y:0 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration: .4, delay: .2, ease: "linear" }}
            className={styles.item} 
            onClick={() => scrollOrNavigateToTarget(item)}>
                {item.name}
            </motion.div>
        );
    }
    return (
        <Link href={item.target}>
            <div className={styles.item}>
                {item.name}
            </div>
        </Link>
    );
}

function Navbar({ items } : { items: NavbarItem[] }) : JSX.Element {
    return (
        <div id="navbar" className={styles.bar}>
            {
                items.map((value, index) => {
                    return (
                        <NavItem key={index} item={value}/>
                    );
                })
            }
        </div>
    );
}

export default Navbar;