async function get_items(){
    // Connect to the API
    const conn = await fetch("https://ecuaguia.com/iceland/api-get-items")
    // Get the data from the API
    const response = await conn.json()
    console.log(response)
    // let name = "Tristan"
    // const item = {"id":10,"name":"xxxxx"}
    let vat = 1.24 


    response.forEach( item => {
    let div_item = `<div class="item">
                    <div>${item.id}</div>
                    <div>${item.name}</div>
                    <img src="https://ecuaguia.com/iceland/images/${item.image}">
                    <div>=(${item.price}*${vat})</div>
                    </div>`
    document.querySelector("#items").insertAdjacentHTML("beforeend", div_item)
    })

    
}

get_items()