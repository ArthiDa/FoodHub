const Burgers = () => {
    fetch('https://arthida.github.io/FoodHub/burgers.json')
        .then(res => res.json())
        .then(data => {
            for (burger of data) {
                // console.log(burger.images);
                let div = document.createElement('div')
                div.className = 'col';
                div.innerHTML = 
                `
                    <div class="card h-100 shadow">
                        <img src=${burger.images[1].lg} class="card-img-top img-card" alt=${burger.images[0].sm}>
                        <div class="card-body">
                            <h5 class="card-title">${burger.name}</h5>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                `
                document.getElementById('burgers').appendChild(div);
            }
        })

}
Burgers();