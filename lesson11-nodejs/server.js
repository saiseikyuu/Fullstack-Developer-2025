import http from 'node:http';


const PORT = 3000;

const server = http.createServer((req, res) => {

    if (req.url === '/api' && req.method === 'GET'
        
    ) {
        res.end('Hello this is /api endpoint');
    }


})

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})