import {useState, useEffect} from "react"

function Fetch(){

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


function returnParagraph(e, nr){ 

    nr;

      return <><div>Hello, {e[nr].name}</div>
      <div>Your email is {e[nr].email}</div>
      </>
}


return(
    <>
    <div>
        {info && returnParagraph(info, 0)}
        <br />
        {info && returnParagraph(info, 1)}
    </div>
    </>
)

}

export default Fetch