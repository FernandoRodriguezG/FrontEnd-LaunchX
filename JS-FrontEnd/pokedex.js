const fetchPokemon = () => {
    const pokeNombre = document.getElementById("datos");
    const poketipos = document.getElementById("tipos");
    const pokestats = document.getElementById("stats");
    const moves = document.getElementById("moves");
    pokeNombre.innerHTML = '';
    poketipos.innerHTML = '';
    pokestats.innerHTML = '';
    moves.innerHTML = '';
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            pokeDatos(data);
            
        }
    });
}

//Bonus -> (Responsive, Despliegue, Otras rutas de busqueda)

const rangoPokes = (pokemon) =>{
    const rango = document.getElementById("pokeRango");
    rango.innerHTML += "Pokemon del rango seleccionado: <br>";
    for(i=0;i<pokemon.results.length;i++){
        rango.innerHTML += pokemon.results[i].name + "<br>";
        if(i==pokemon.results.length-1){
            rango.inner
        }
    }
}

const pokeDatos = (pokemon) =>{
    const pokeNombre = document.getElementById("datos");
    pokeNombre.innerHTML += pokemon.id + " - "+pokemon.name.toUpperCase();
    const poketipos = document.getElementById("tipos");
    poketipos.innerHTML += "Tipos: <br>";
    for(i=0;i<pokemon.types.length;i++){
        poketipos.innerHTML += pokemon.types[i].type.name + "<br>";
    }
    poketipos.innerHTML += "Movimientos:";
    const pokestats = document.getElementById("stats");
    for(j=0;j<pokemon.stats.length;j++){
        pokestats.innerHTML += pokemon.stats[j].stat.name + " : " + pokemon.stats[j].base_stat + "<br>";
    }
    const moves = document.getElementById("moves");
    for(k=0;k<10;k++){
        moves.innerHTML +=  "<li class='list-group-item bg-success'>"+pokemon.moves[k].move.name+"</li>";
    }
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}