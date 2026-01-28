import styles from './styles.module.css'

export function Cycles() {
    return (
        <div className={styles.cycles}>
            <span>Ciclos:</span>

            <div className={styles.cycleDots}>
                <span><div className={`${styles.cycleDot} ${styles.workTime}`}></div></span>
                <span><div className={`${styles.cycleDot} ${styles.shortBreakTime}`}></div></span>
                <span><div className={`${styles.cycleDot} ${styles.workTime}`}></div></span>
                <span><div className={`${styles.cycleDot} ${styles.shortBreakTime}`}></div></span>
                <span><div className={`${styles.cycleDot} ${styles.workTime}`}></div></span>
                <span><div className={`${styles.cycleDot} ${styles.shortBreakTime}`}></div></span>
                <span><div className={`${styles.cycleDot} ${styles.workTime}`}></div></span>
                <span><div className={`${styles.cycleDot} ${styles.longBreakTime}`}></div></span>
            </div>
        </div>
    );
}