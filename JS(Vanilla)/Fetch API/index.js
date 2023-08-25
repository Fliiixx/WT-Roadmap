document.getElementById("getText").addEventListener("click", getText);

function getText(){
    /*fetch("sample.txt")
    //returns a promise
    .then(function(res) {
        console.log(res); //contains everthing (type, url , status, ok, body, ...)
        return res.text();
    })
    .then(function(data){
        console.log(data);
    })*/

    //better with arrow
    fetch("sample.txt")
    .then(res => res.text())
    .then(data => {
        document.getElementById("output").innerHTML = data;
    })
    .catch(err => console.log(err))
}

document.getElementById("getUsers").addEventListener("click", getUsers);

function getUsers(){
    fetch("users.json")
    .then(res => res.json())
    .then(data => {
        let output = "<h2>Users</h2>";
        data.forEach(function(user){
            output += `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Email: ${user.email}</li>
                </ul>    
            `;
        });
        document.getElementById("output").innerHTML = output;
    })
}

document.getElementById("getPosts").addEventListener("click", getPosts);

function getPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        let output = "<h2>Posts</h2>";
        data.forEach(function(posts){
            output += `
                <div>
                    <h3>${posts.title}</h3>
                    <p>${posts.body}</p>
                </div>
            `;
        });
        document.getElementById("output").innerHTML = output;


    })
}

document.getElementById("addPost").addEventListener("submit", addPost);

function addPost(e){
    e.preventDefault();

    let title = document.getElementById("title").value;
    let body = document.getElementById("body").value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json" 
        },
        body:JSON.stringify({title:title, body:body})  
    })
        .then(res => res.json())
        .then(data => console.log(data))
    
}
