import {useState, useEffect} from "react";


function Test(){
    
    function RenderParagraphs({ items }) {
        return (
          <>
            {items.map((item) => (
              <p key={item.id}>{item.name}</p>
            ))}
          </>
        );
      }

      const [info, getInfo] = useState(null);
      
      useEffect(() =>{
          fetch("http://localhost:3000/games")
              .then(res => {
                  return res.json();
              })  
              .then(data => {
                  getInfo(data);
                  console.log(data);    
                  
              })
      },[])
      
        return (
          <div>
            <h1>My Paragraphs</h1>
            {info && <RenderParagraphs items={info} />}
          </div>
        );


}

export default Test