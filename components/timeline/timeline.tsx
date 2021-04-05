import styles from './timeline.module.css'

export function Timeline(props) : JSX.Element {
    return (
        <div className={styles.timeline}>
            {
                props.items.map((value, index) => {
                return (
                    <div key={index} className={styles.container + " " + (index % 2 == 0 ? styles.left : styles.right)}>
                        <div className={styles.content}>
                            <div className={styles.title}>
                                <span>{value.title}</span>
                            </div>
                            <div className={styles.tech}>
                                {
                                    value.technologies.map((value, index) =>
                                    {
                                        return (<div key={index} className={styles.itemGreen}>{value.name}</div>)
                                    })
                                }
                            </div>
                            <div className={styles.descriptionShort}>{value.shortDescription}</div>
                            <div className={styles.descriptionLong + " " + styles.hidden}>
                                {value.longDescription}
                            </div>
                        </div>
                    </div>)
                })
            }
        </div>
    )
}
