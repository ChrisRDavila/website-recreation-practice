window.onload = function() {
const oldH1 = document.querySelector("h1");
oldH1.remove();
const newH1 = document.createElement("h1");
const body = document.querySelector("body");
body.append(newH1);
newH1.append("Web Recreation Pactice");
const pElement = document.createElement("p");
body.append(pElement);
pElement.append("the HTML of this webpage was createed with JavaScript.");
const img = new Image();
img.src = "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900";
document.body.appendChild(img);
img.alt = "This is an image of a Multicolored Tanager bird from birdsoftheworld.org"
img.style = "width:50%";
const H2 = document.createElement("h1");
body.append(H2);
H2.append("Facts about the Multicolored Tanager");
const ul = document.createElement("ul");
body.append(ul);
const li1 = document.createElement("li");
ul.append(li1);
li1.append("It is endemic to the mountains of Colombia.");
const li2 = document.createElement("li");
ul.append(li2);
li2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
const h2 = document.createElement("h2");
body.append(h2);
h2.append("Source");
const anchor = document.createElement("a");
anchor.href = "https://en.wikipedia.org/wiki/Multicoloured_tanager";
body.append(anchor);
anchor.append("Wikipedia");
}