// built-in/ core module
//local module
//node: runtime env
//third-party module: file/function user

//core module:
//import module


const http = require("http");
const server = http.createServer((req, res) => {
    console.log("hello");
    if (req.method === "GET") {
        res.end("opening");
    } else {
        res.end("taata");
    }
})

let port = 8080;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
})