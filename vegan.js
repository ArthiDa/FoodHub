const limitedvegan = () => {
    fetch('http://127.0.0.1:5500/vegan.json')
        .then(res => res.json())
        .then(data => {
            const vegans = data.filter(vegan => vegan.id <= 3)
            for (vegan of vegans) {
                let div = document.createElement('div')
                div.className = 'col';
                div.innerHTML = 
                `
                    <div class="card h-100 shadow">
                        <img src=${vegan.image} class="card-img-top img-card" alt="vegan">
                        <div class="card-body">
                            <h5 class="card-title">${vegan.title}</h5>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                `
                document.getElementById('vegans').appendChild(div);
            }
        })

}
limitedvegan();