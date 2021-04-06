import styles from './hero.module.css'
import Link from 'next/link'

export function Hero({ text, next } : { text : string, next : string}) : JSX.Element {
    return (
        <div id="top" className={styles.hero}>
            <div className={styles.text}>
                {text}
            </div>
            <div className={styles.continue}>
                <Link href={`#${next}`}>
                    <span></span>
                </Link>
            </div>
        </div>
    );
}