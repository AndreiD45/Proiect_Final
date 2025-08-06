import {useState, useEffect} from "react";
import styles from "./components/Grid.module.css"


function GridItems(url){
    
    function RenderParagraphs({ items }) {
        return (
          <>
            {items.map((item) => (
                    <div key={item.id} className={styles.gridItem}>
                        <img className={styles.image}src={item.image} alt="Missing Picture" />
                        <h3>{item.name}</h3>
                        <div className={styles.divButton}>
                        <button>Click me!</button>
                        <button>Buy me!</button>
                        </div>
                    </div>
            ))}
          </>
        );
      }

      const [info, getInfo] = useState(null);
      
      useEffect(() =>{
          fetch(url)
              .then(res => {
                  return res.json();
              })  
              .then(data => {
                  getInfo(data); 
                  
              })
      },[])
      
        return (
            <>
            {info && <RenderParagraphs items={info} />}
            </>
        );


}

export default GridItems