const Dessert = () => {
    fetch('./dessert.json')
        .then(res => res.json())
        .then(data => {
            let count = 0;
            for (dessert of data) {
                let div = document.createElement('div')
                div.className = 'col';
                div.innerHTML =
                    `
                    <div class="card h-100 shadow">
                        <img src=${dessert.strMealThumb} class="card-img-top img-card" alt="vegan">
                        <div class="card-body">
                            <h5 class="card-title">${dessert.strMeal}</h5>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                `
                document.getElementById('desserts').appendChild(div);
                count += 1;
                if (count == 3) {
                    break;
                }
            }
        })

}
Dessert();