const limitedChicken = () => {
    fetch('https://648ab7a5b23b9c503377b5d1--rococo-duckanoo-32f1e7.netlify.app/chicken.json')
        .then(res => res.json())
        .then(data => {
            let count = 0;
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
                count += 1;
                if (count == 3) {
                    break;
                }
            }
        })

}
limitedChicken();