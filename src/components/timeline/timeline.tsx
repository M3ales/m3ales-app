import styles from './timeline.module.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Technology {
    name: string
    tooltip: string
    colour: string
}

function Technologies({ technologies }: { technologies: Technology[] }) {
    const arr: JSX.Element[] = technologies.map((tech) => {
        return (
            <div key={tech.name} className={styles[tech.colour]}>
                {tech.name}
            </div>
        )
    })
    // screw you typescript
    return <> {arr}</>
}

export interface TimelineEvents {
    title: string
    date: string
    shortDescription: string
    longDescription: string
    technologies: Technology[]
}

export function Timeline({
    events,
}: {
    events: TimelineEvents[]
}): JSX.Element {
    return (
        <div className={styles.timeline}>
            {events.map((value, index) => {
                const variants = {
                    hidden: { opacity: 0, x: index % 2 === 0 ? 10 : -10 },
                    visible: { opacity: 1, x: 0 },
                    hiddenDate: { opacity: 0, x: index % 2 === 0 ? -10 : 10 },
                }

                const [ref, inView] = useInView({
                    threshold: 0,
                })
                return (
                    <div
                        ref={ref}
                        key={index}
                        className={`${styles.container} ${
                            index % 2 === 0 ? styles.left : styles.right
                        }`}
                    >
                        <motion.div
                            initial={variants.hidden}
                            animate={
                                inView ? variants.visible : variants.hidden
                            }
                            transition={{
                                delay: 0.3,
                                ease: 'easeOut',
                                duration: 1,
                            }}
                            className={styles.content}
                        >
                            <div className={styles.title}>
                                <span>{value.title}</span>
                            </div>
                            <div className={styles.tech}>
                                <Technologies
                                    technologies={value.technologies}
                                />
                            </div>
                            <div className={styles.shortDescription}>
                                {value.shortDescription}
                            </div>
                            <div
                                className={
                                    styles.longDescription + ' ' + styles.hidden
                                }
                            >
                                {value.longDescription}
                            </div>
                        </motion.div>
                        <motion.div
                            animate={
                                inView ? variants.visible : variants.hiddenDate
                            }
                            transition={{ ease: 'easeIn', duration: 0.5 }}
                            className={styles.date}
                        >
                            {value.date}
                        </motion.div>
                    </div>
                )
            })}
        </div>
    )
}
