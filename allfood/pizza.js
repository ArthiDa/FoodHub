const Pizza = () => {
    fetch('./pizzas.json')
        .then(res => res.json())
        .then(data => {
            for (pizza of data) {
                let div = document.createElement('div')
                div.className = 'col';
                div.innerHTML = 
                `
                    <div class="card h-100 shadow">
                        <img src=${pizza.img} class="card-img-top img-card" alt="pizza">
                        <div class="card-body">
                            <h5 class="card-title">${pizza.name}</h5>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                `
                document.getElementById('pizzas').appendChild(div);
            }
        })

}
Pizza();