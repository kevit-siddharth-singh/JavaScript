const apiUrl = "https://reqres.in/api/users?page=1&&per_page=15";


const table_body = document.querySelector("tbody");
// console.log(table_body);


fetch(apiUrl, {method: "GET"})
.then(response => {
    return response.json();
}).then(
    data => {
        data.data.forEach(element => {
            const data = document.createElement("tr");
            data.innerHTML = `<td> <img src=${element.avatar} alt="" width="60" height="60"/> </td>
            <td>${element.first_name}</td>
            <td>${element.last_name}</td>

            
            `;
            table_body.append(data);
        });
    }
)


