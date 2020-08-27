//Dataset from: https://www.kaggle.com/abcsds/pokemon

//An Object Array for all the different positions for the types
var typesDataset = [
{"x_axis": 150, "y_axis": 250, "type": "Grass", "r":0},
{"x_axis": 450, "y_axis": 250, "type": "Fire", "r":0},
{"x_axis": 750, "y_axis": 250, "type": "Water", "r":0},
{"x_axis": 150, "y_axis": 450, "type": "Dragon", "r":0},
{"x_axis": 450, "y_axis": 450, "type": "Fairy", "r":0},
{"x_axis": 750, "y_axis": 450, "type": "Poison", "r":0},
{"x_axis": 150, "y_axis": 650, "type": "Electric", "r":0},
{"x_axis": 450, "y_axis": 650, "type": "Steel", "r":0},
{"x_axis": 750, "y_axis": 650, "type": "Rock", "r":0},
{"x_axis": 150, "y_axis": 850, "type": "Ground", "r":0},
{"x_axis": 450, "y_axis": 850, "type": "Flying", "r":0},
{"x_axis": 750, "y_axis": 850, "type": "Fighting", "r":0},
{"x_axis": 150, "y_axis": 1050, "type": "Psychic", "r":0},
{"x_axis": 450, "y_axis": 1050, "type": "Dark", "r":0},
{"x_axis": 750, "y_axis": 1050, "type": "Bug", "r":0},
{"x_axis": 150, "y_axis": 1250, "type": "Ice", "r":0},
{"x_axis": 450, "y_axis": 1250, "type": "Ghost", "r":0},
{"x_axis": 750, "y_axis": 1250, "type": "Normal", "r":0}];

//Function to get the correct color to the corresponding pokemon type 
function getTypeColor(pokemon){
	var color;
	if(pokemon == "Bug"){
		color = "a8b820";
		return color;
	}
	if(pokemon == "Dark"){
		color = "705848";
		return color;
	}
	if(pokemon == "Dragon"){
		color = "7038F8";
		return color;
	}
	if(pokemon == "Electric"){
		color = "F8D030";
		return color;
	}
	if(pokemon == "Fairy"){
		color = "EE99AC";
		return color;
	}
	if(pokemon == "Fighting"){
		color = "C03028";
		return color;
	}
	if(pokemon == "Fire"){
		color = "F08030";
		return color;
	}
	if(pokemon == "Flying"){
		color = "A890F0";
		return color;
	}
	if(pokemon == "Ghost"){
		color = "705898";
		return color;
	}
	if(pokemon == "Grass"){
		color = "78C850";
		return color;
	}
	if(pokemon == "Ground"){
		color = "E0C068";
		return color;
	}
	if(pokemon == "Ice"){
		color = "98D8D8";
		return color;
	}
	if(pokemon == "Normal"){
		color = "A8A878";
		return color;
	}
	if(pokemon == "Poison"){
		color = "A040A0";
		return color;
	}
	if(pokemon == "Psychic"){
		color = "F85888";
		return color;
	}
	if(pokemon == "Rock"){
		color = "B8A038";
		return color;
	}
	if(pokemon == "Steel"){
		color = "B8B8D0";
		return color;
	}
	if(pokemon == "Water"){
		color = "6890F0";
		return color;
	}
}

d3.json("data/pokemon.json").then(function(pokedex){

	var svg = d3.select("body")
						 .append("svg")
                         .attr("width", 1080)
						 .attr("height", 2000)
						 .style("display", "block")
						 .style("margin-left", "auto")
						 .style("margin-right", "auto");


	var elem = svg.selectAll("g")
					.data(typesDataset);
				 
	var elemEnter = elem.enter()
						 .append("g");

	var circle = elemEnter.append("circle")
							.style("fill",function(d){return getTypeColor(d.type)})
							.attr("cx", function(d){return d.x_axis})
							.attr("cy", function(d){return d.y_axis})
							.attr("r", 0);
	
	var circles = circle.transition()
						.ease(d3.easeElastic)
						.duration(4500)
						.attr("cx", function(d){return d.x_axis})
						.attr("cy", function(d){return d.y_axis})
						.attr("r", function(d){
								var radius = 0;
									for(var i= 0, l = pokedex.length; i< l; i++){
										if(pokedex[i].Type1 == d.type || pokedex[i].Type2 == d.type){
											radius++;
											d.r = radius;
										}
									}
									return radius;});

	circle.on("mouseover", showTotalNumber);
	circle.on("mouseout", removeTotalNumber);
	
	elemEnter.append("text")
	  			.attr("id", "type")
	  			.data(typesDataset)					
	  			.text(function(d){return d.type})
	  			.attr("x", function(d){return d.x_axis})
	  			.attr("y", function(d){return d.y_axis - 5})
	  			.style("text-anchor","middle")
				.style("fill", "white");
	
	function showTotalNumber(d,i){
				var label = d3.select(this.parentNode)
				.append("text")
	  			.attr("id", "label")				
	  			.text(d.r)
	  			.attr("x",d.x_axis)
	  			.attr("y",d.y_axis + 15)
	  			.style("text-anchor","middle")
				.style("fill", "white")
				.style("opacity", 0);

				label.transition()
						.duration(500)
						.style("opacity", 1.0)
	}
	function removeTotalNumber(d,i){
		d3.selectAll("#label")
			.remove();
}
});