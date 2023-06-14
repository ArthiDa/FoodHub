const Chicken = () => {
    fetch('http://127.0.0.1:5500/chicken.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            for (chicken of data) {
                let div = document.createElement('div')
                div.className = 'col';
                div.innerHTML =
                    `
                    <div class="card h-100 shadow">
                        <img src=${chicken.strMealThumb} class="card-img-top img-card" alt="vegan">
                        <div class="card-body">
                            <h5 class="card-title">${chicken.strMeal}</h5>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                `
                document.getElementById('chickens').appendChild(div);
            }
        })

}
Chicken();