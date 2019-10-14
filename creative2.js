/*global fetch*/
/*global moment*/

document.getElementById("recipeSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("recipeInput").value;
  if (value === "")
    return;
  console.log(value);
  const url = "https://www.food2fork.com/api/search?key=3ea984aea24904f7b83ac84e01b86706&q=" + value;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      console.log(json);
      let results = "";
      for (let i=0; i < json.recipes.length; i++) {
      }
      results += "<p>";
      for (let i=0; i < json.recipes.length; i++) {
  results += '<h2>' + json.recipes[i].title;
  results += '<p>';
	results += json.recipes[i].recipe_id;
	results += "<p>";
      }
      results += "</p>";
      document.getElementById("recipeResults").innerHTML = results;
    });
});

    document.getElementById("cookitSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("cookitInput").value;
    const url2 = "https://www.food2fork.com/api/get?key=3ea984aea24904f7b83ac84e01b86706&rId=" + value;
  fetch(url2)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
      results += json.recipe.title; 
      results += "<p>"
      results += json.recipe.ingredients;
      for (let i = 0; i < json.recipe.length; i++) {
        results += [i+1] + json.recipe.ingredients[i]; 
        results += "<p>";
      }
      results += "<p>"; 
      document.getElementById("cookitResults").innerHTML = results;
      });
    });


