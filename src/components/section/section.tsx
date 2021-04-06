import styles from './section.module.css'

export function Section({ title } : { title: string } ) : JSX.Element {
    return (
    <section id={title} className={styles.section}>
        <div className={styles.text}>
            {title}
        </div>
    </section>);
}