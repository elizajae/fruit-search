const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

// Filter fruit list based on user input.
// If the user input is found in the fruit name then it should be in the results
// .toLowercase should be used on the fruit and the user input
function search(userInput) {
  let results = [];

  results = fruit.filter((fruitName) => {
    if (fruitName.toLowerCase().includes(userInput.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });

  return results;
}

// Use the search function to get a filtered list of results
// Use the filtered results to call showSuggestions(...)
function searchHandler(e) {
  //   console.log(e.target.value);
  //   console.log(search(e.target.value));

  // Get the user input
  let userInput = e.target.value;

  // Use the search function to get a filtered list of results
  let filteredResults = search(userInput);

  // Use the filtered results to call showSuggestions(...)
  showSuggestions(filteredResults, userInput);
}

// Get the ul element
// Clear the previous suggestions
// Go through the list of results and create an li for each of them
// Put the name of fruit in li elements
// Put each li in the ul element

function showSuggestions(results, inputVal) {
  const parent = document.getElementById("results");
  const suggestions = document.getElementsByClassName("suggestions")[0];

  // clearing results when no input is provided
  parent.innerHTML = "";
  if (inputVal.length < 1) {

    // Hide suggestions when not needed. Position is absolute and height is fixed to avoid shifting content.
    suggestions.style.display = "none";
    return;
  }

// show suggestions if hidden
  suggestions.style.display = "flex";

  results.forEach((fruitName) => {
    const li = document.createElement("li");
    li.textContent = fruitName;
    parent.appendChild(li);

    // highlighting background of li
    li.addEventListener("mouseover", () => {
      li.style.backgroundColor = "#E65C00";
    });

    li.addEventListener("mouseout", () => {
      li.style.backgroundColor = "";
    });
  });
}

function useSuggestion(e) {
  //   console.log(e.target.outerText);
  input.value = e.target.outerText;

  // clearing suggestions after selecting a li
  const parent = document.getElementById("results");
  parent.innerHTML = "";
// hiding results
  const suggestions = document.getElementsByClassName("suggestions")[0];
  suggestions.style.display = "none";
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
