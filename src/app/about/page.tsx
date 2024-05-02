import styles from "../page.module.css";
import Header from "../../components/global/header";

export default function AboutMe() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                {/*These boxes needs to be center of page each one 300x250px size with a margin of 15px and 20px padding.*/}
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.boxLeft}>
                            Tester
                        </div>
                        <div className={styles.boxCenter}>
                            {/*This box needs to be blue*/}
                        </div>
                        <div className={styles.boxRight}>
                            {/*This box needs to be red*/}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

