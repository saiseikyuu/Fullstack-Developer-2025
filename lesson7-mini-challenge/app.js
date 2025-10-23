async function getData(){
    try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();
        console.log(data.results);
        console.log(data.results.map(u => `${u.name.first} - ${u.email}`));
    } catch (error) {
        console.log(error);
    }
}

getData();