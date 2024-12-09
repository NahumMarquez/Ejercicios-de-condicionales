document.getElementById('loadData').addEventListener("click", () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            const userList = document.getElementById("userList");
            userList.innerHTML = ''; // Limpiar la lista antes de agregar los nuevos datos

            // Creando la lista de usuarios con estilos Bootstrap
            data.forEach(user => {
                const listItem = document.createElement("li");
                listItem.textContent = user.name;
                listItem.className = "list-group-item list-group-item-action"; // Clases de Bootstrap
                userList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
        });
});
