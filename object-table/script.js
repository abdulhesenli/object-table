
let cars = [
    {
        name: "Mercedes",
        model: "E240",
        speed: 260
    },

    {
        name: "Hundai",
        model: "Elantra",
        speed: 240
    },

    {
        name: "BMW",
        model: "X5",
        speed: 280
    },

    {
        name: "Opel",
        model: "Astra",
        speed: 220
    },

    {
        name: "Opel",
        model: "Astra",
        speed: 220
    }
]

let tab = document.getElementById("table")


function test() {
    let cvb = ""
    let id = 1
    for (let i = 0; i < cars.length; i++) {

        cvb += `<thead>
         <th scope="col">Ad</th>
            <th scope="col">Model</th>
            <th scope="col">Speed</th>
        
        </thead>`

        cvb += `<tr>`

        cvb += `<th > ${id} </th>`

        cvb += `<td>  ${cars[i].name}  </td>`
        cvb += `<td>  ${cars[i].model}  </td>`
        cvb += `<td>  ${cars[i].speed}  </td>`

        cvb += `</tr>`

    
        id++

    }
    tab.innerHTML = cvb;

}

test();