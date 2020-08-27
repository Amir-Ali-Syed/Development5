//Dataset from: https://www.kaggle.com/abcsds/pokemon

var gen1 = [];
var gen2 = [];
var gen3 = [];
var gen4 = [];
var gen5 = [];
var gen6 = [];
var dataset = [];
var typeColor;
var selectedPokemon;

var width = 600,
	height = 400,
	barHeight = 30,
	barOffset = 5;
	


//Function to get the correct color to the corresponding pokemon type 
function getTypeColor(pokemon){
	var color;
	if(pokemon.Type1 == "Bug"){
		color = "a8b820";
		return color;
	}
	if(pokemon.Type1 == "Dark"){
		color = "705848";
		return color;
	}
	if(pokemon.Type1 == "Dragon"){
		color = "7038F8";
		return color;
	}
	if(pokemon.Type1 == "Electric"){
		color = "F8D030";
		return color;
	}
	if(pokemon.Type1 == "Fairy"){
		color = "EE99AC";
		return color;
	}
	if(pokemon.Type1 == "Fighting"){
		color = "C03028";
		return color;
	}
	if(pokemon.Type1 == "Fire"){
		color = "F08030";
		return color;
	}
	if(pokemon.Type1 == "Flying"){
		color = "A890F0";
		return color;
	}
	if(pokemon.Type1 == "Ghost"){
		color = "705898";
		return color;
	}
	if(pokemon.Type1 == "Grass"){
		color = "78C850";
		return color;
	}
	if(pokemon.Type1 == "Ground"){
		color = "E0C068";
		return color;
	}
	if(pokemon.Type1 == "Ice"){
		color = "98D8D8";
		return color;
	}
	if(pokemon.Type1 == "Normal"){
		color = "A8A878";
		return color;
	}
	if(pokemon.Type1 == "Poison"){
		color = "A040A0";
		return color;
	}
	if(pokemon.Type1 == "Psychic"){
		color = "F85888";
		return color;
	}
	if(pokemon.Type1 == "Rock"){
		color = "B8A038";
		return color;
	}
	if(pokemon.Type1 == "Steel"){
		color = "B8B8D0";
		return color;
	}
	if(pokemon.Type1 == "Water"){
		color = "6890F0";
		return color;
	}
}
//Function to populate the dataset with details of the specific pokemon
function populateDataset(pokemon) {
	dataset.push({"Attack:": pokemon.Attack,  
				  "Defense:":pokemon.Defense,
				  "Speed:":  pokemon.Speed,
				  "SpAtk:":  pokemon.SpAtk,
				  "SpDef:":  pokemon.SpDef,
				  "HP:":	 pokemon.HP
				});
};


d3.json("data/pokemon.json").then(function(pokedex){

	//For loop to make arrays for each pokemon generation
	for(var i= 0, l = pokedex.length; i< l; i++){
		if(pokedex[i].Number<=151){
			gen1.push(pokedex[i]);
		}
		if(pokedex[i].Number>151 && pokedex[i].Number <=251){
			gen2.push(pokedex[i]);
		}
		if(pokedex[i].Number>251 && pokedex[i].Number <=386){
			gen3.push(pokedex[i]);
		}
		if(pokedex[i].Number>386 && pokedex[i].Number <=493){
			gen4.push(pokedex[i]);
		}
		if(pokedex[i].Number>493 && pokedex[i].Number <=649){
			gen5.push(pokedex[i]);
		}
		if(pokedex[i].Number>649 && pokedex[i].Number <=721){
			gen6.push(pokedex[i]);
		}
	}

	//On click shows all pokemons from that generation with their type color
	$( "#gen1" ).click(function() {
			$(".pokemon").remove();
			$("#generations").after('<div id="pokemons"></div>');
			for(var i= 0, l= gen1.length; i<l; i++){
				var color = getTypeColor(gen1[i]);
				var button = $('<button id="'+gen1[i].Number+'" class="pokemon" style="background-color:#'+color+';">'+gen1[i].Name+'</button>');
				$("#pokemons").append(button);
			}
	});
	$( "#gen2" ).click(function() {
			$(".pokemon").remove();
			$("#generations").after('<div id="pokemons"></div>');
			for(var i= 0, l= gen2.length; i<l; i++){
				var color = getTypeColor(gen2[i]);
				var button = $('<button id="'+gen2[i].Number+'" class="pokemon" style="background-color:#'+color+';">'+gen2[i].Name+'</button>');
				$("#pokemons").append(button);
			}
	});
	$( "#gen3" ).click(function() {
			$(".pokemon").remove();
			$("#generations").after('<div id="pokemons"></div>');
			for(var i= 0, l= gen3.length; i<l; i++){
				var color = getTypeColor(gen3[i]);
				var button = $('<button id="'+gen3[i].Number+'" class="pokemon" style="background-color:#'+color+';">'+gen3[i].Name+'</button>');
				$("#pokemons").append(button);
			}
	});
    $( "#gen4" ).click(function() {
			$(".pokemon").remove();
			$("#generations").after('<div id="pokemons"></div>');
			for(var i= 0, l= gen4.length; i<l; i++){
				var color = getTypeColor(gen4[i]);
				var button = $('<button id="'+gen4[i].Number+'" class="pokemon" style="background-color:#'+color+';">'+gen4[i].Name+'</button>');
				$("#pokemons").append(button);
			}
	});		
	$( "#gen5" ).click(function() {
			$(".pokemon").remove();
			$("#generations").after('<div id="pokemons"></div>');
			for(var i= 0, l= gen5.length; i<l; i++){
				var color = getTypeColor(gen5[i]);
				var button = $('<button id="'+gen5[i].Number+'" class="pokemon" style="background-color:#'+color+';">'+gen5[i].Name+'</button>');
				$("#pokemons").append(button);
			}
	});		
	$( "#gen6" ).click(function() {
			$(".pokemon").remove();
			$("#generations").after('<div id="pokemons"></div>');
			for(var i= 0, l= gen6.length; i<l; i++){
				var color = getTypeColor(gen6[i]);
				var button = $('<button id="'+gen6[i].Number+'" class="pokemon" style="background-color:#'+color+';">'+gen6[i].Name+'</button>');
				$("#pokemons").append(button);
			}
	});	


	$('body').on('click', '.pokemon', function () {
		dataset = [];
		d3.select("svg").remove();
		$("#pokemons").remove();
		$("#details").remove();
		 
		//for loop to get the pokemon which the user selects
		for(var i= 0, l= pokedex.length; i<l; i++){
			if(this.id==pokedex[i].Number){
				selectedPokemon = pokedex[i];
			}
		}
		 var detail = $('<div id="details"></div>');
		 var name = $('<h2>'+selectedPokemon.Name+'</h2>');
		 $("#stats").append(detail);
		 $("#details").append(name);

		populateDataset(selectedPokemon);

		var xScale = d3.scaleLinear()
			.domain([0,260])
			.range([0,width]);

		var key = Object.keys(dataset[0]);
		var value = Object.values(dataset[0]);
		var color = d3.scaleLinear().domain([0, 200]) //color transitions from red to green as the stats get better
					.range(['#FF0000','#00FF00'])
					.interpolate(d3.interpolateHcl);
		
		//creating svg tag and the bar to visualise the stats
		d3.select('#stats').append('svg')
		  .attr('width', width)
		  .attr('height', height)
		  .selectAll('rect')
		  .data(value)
		  .enter().append('rect')
		  .attr("width", function(d) {
			return xScale(d);
		  })
		  .attr('fill', function(d){
			  return color(d) }
		  	)
		  .attr('height', barHeight)
		  .attr('width', function(d){
			return xScale(d);
		  })
		  .attr('y', function(d,i){
			return i*(barHeight+barOffset)
		  })
		  .attr('x', 150);

		d3.select('svg')
		  .selectAll('text.labels')
		  .data(key)
		  .enter().append('text')
		  .text(function (d) { return d; })
		  .attr('x', 0)
		  .attr('y',function(d,i){
			  return i*(barHeight+barOffset)+barHeight/1.5;
		  })

		d3.select('svg')
		  .selectAll('text.stats')
		  .data(value)
		  .enter().append('text')
		  .text(function (d) { return d; })
		  .attr('x', 120)
		  .attr('y',function(d,i){
			  return i*(barHeight+barOffset)+barHeight/1.5;
		  })
		  .attr('text-anchor', 'end')
   });
});
