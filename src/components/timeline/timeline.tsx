import styles from './timeline.module.css'

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
    return <> {arr}</>;
}

export interface TimelineEvents{
    title: string
    date: string
    shortDescription: string
    longDescription: string
    technologies: Technology[]
}

export function Timeline({ events }: { events : TimelineEvents[]}): JSX.Element {
    return (
        <div className={styles.timeline}>
            {events.map((value, index) => {
                return (
                    <div
                        key={index}
                        className={
                            `${styles.container} ${index % 2 === 0 ? styles.left : styles.right}`
                        }
                    >
                        <div className={styles.content}>
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
                        </div>
                        <div className={styles.date}>{value.date}</div>
                    </div>
                )
            })}
        </div>
    )
}
