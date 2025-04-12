import styles from "./components/Grid.module.css"
import GridItems from "./GridItems.jsx"

function Grid(){

    const urlGames = "http://localhost:3000/games"

    return(
        <>
        <div className={styles.grid}>
        {GridItems(urlGames)}
        </div>
        </>
    )

}

export default Grid