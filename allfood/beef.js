const Beef = () => {
    fetch('https://arthida.github.io/FoodHub/beef.json')
        .then(res => res.json())
        .then(data => {
            for (beef of data) {
                console.log(beef);
                let div = document.createElement('div')
                div.className = 'col';
                div.innerHTML =
                    `
                    <div class="card h-100 shadow">
                        <img src=${beef.strMealThumb} class="card-img-top img-card" alt="vegan">
                        <div class="card-body">
                            <h5 class="card-title">${beef.strMeal}</h5>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                `
                document.getElementById('beefs').appendChild(div);
            }
        })

}
Beef();