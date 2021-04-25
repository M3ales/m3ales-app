import styles from './section.module.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function Section({ title }: { title: string }): JSX.Element {
    const [ref, inView] = useInView({
        threshold: 0.2,
    })
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            id={title}
            className={styles.section}
            ref={ref}
        >
            <div className={styles.text}>{title}</div>
        </motion.div>
    )
}
