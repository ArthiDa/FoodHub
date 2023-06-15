const Seafood = () => {
    fetch('./seafood.json')
        .then(res => res.json())
        .then(data => {
            for (seafood of data) {
                let div = document.createElement('div')
                div.className = 'col';
                div.innerHTML =
                    `
                    <div class="card h-100 shadow">
                        <img src=${seafood.strMealThumb} class="card-img-top img-card" alt="vegan">
                        <div class="card-body">
                            <h5 class="card-title">${seafood.strMeal}</h5>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                `
                document.getElementById('seafoods').appendChild(div);
                
            }
        })

}
Seafood();