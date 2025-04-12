import styles from "./components/Grid.module.css"
import GridItems from "./GridItems";

export default function Hardware(){

    const urlHw = "http://localhost:3000/hardware"

    return(
            <>
            <div className={styles.grid}>
            {GridItems(urlHw)}
            </div>
            </>
        );
}