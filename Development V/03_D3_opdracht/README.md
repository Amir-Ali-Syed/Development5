### Index page

On index.html there are two buttons, one for the stats page and one for types page.

### Stats page:

This page is mainly done with javascript/jquery and d3 is used to get the data and create the bars.

There are six buttons for each Pokemon generation extracted from the dataset. Clicking on a button will show all the Pokemon from that generation and each element with the Pokemon name is coloured by its type.

Clicking on a Pokemon will give its combat stats. The stat bars transition from red to green depending on the stats.


### Types page:

Using d3 a circle is made for each Pokemon type, where there are 18 of. 
Each circle’s starting radius is zero and the radius in increased by one for each Pokemon of that type.

Hovering over the circle with the mouse will highlight the number of Pokemons there are for that type.