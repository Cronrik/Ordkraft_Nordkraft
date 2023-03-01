const genreElements = [
  "Læseglæde",
  "Sangtekster",
  "Erindringer",
  "Digte",
  "Exofiktion",
  "Fantasy",
  "Multikunstner",
  "Radiovært",
  "Krimi",
  "Sociale medier",
  "Faglitteratur",
];

genreElements.sort();

for (let i = 0; i < genreElements.length; i++) {
  document.getElementById("genreFiltre").innerHTML +=
    "<li>" + genreElements[i] + "</li>";
}

const landElements = [
  "Danmark",
  "Norge",
  "Sverige",
  "Tyskland",
];

landElements.sort();

for (let i = 0; i < landElements.length; i++) {
  document.getElementById("landFiltre").innerHTML +=
    "<li>" + landElements[i] + "</li>";
}

const lokationElements = [
  "Biffen - Sal B",
  "Royal Stage",
  "Bibliotekernes Scene",
];

lokationElements.sort();

for (let i = 0; i < lokationElements.length; i++) {
  document.getElementById("lokationFiltre").innerHTML +=
    "<li>" + lokationElements[i] + "</li>";
}