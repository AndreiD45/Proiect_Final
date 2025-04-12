

const userUrl = "http://localhost:3000/users"

export default function TestPush(data){

    fetch(userUrl, {
        method: "POST",
        headers: {
            'Content-type' : 'aplication/json'
        },
            body: JSON.stringify(data)
    })
    .then(res => res.json)
    .then(console.log())
}