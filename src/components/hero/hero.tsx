import styles from './hero.module.css'
import { motion } from 'framer-motion'

export function Hero({
    text,
    message,
    next,
}: {
    text: string
    message: string
    next: string
}): JSX.Element {
    const variants = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
    }
    return (
        <div id="top" className={styles.hero}>
            <motion.div
                initial="hidden"
                animate="visible"
                transition={{ ease: 'easeOut', duration: 2, delay: 1 }}
                variants={variants}
                className={styles.centre}
            >
                <div className={styles.title}>{text}</div>
                <div className={styles.subtitle}>{message}</div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeOut', duration: 2, delay: 3 }}
                className={styles.continue}
            >
                <span
                    onClick={() =>
                        document
                            .getElementById(next)
                            .scrollIntoView({ behavior: 'smooth' })
                    }
                ></span>
            </motion.div>
        </div>
    )
}
