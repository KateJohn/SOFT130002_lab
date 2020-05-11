const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

const a = document.createElement("div");
a.className = "item";
a.innerHTML =
    "<p style='margin-top: 1em; margin-bottom: 1em'>Genre: Human</p>" +
    "<div class='inner-box'>" +
        "<h3 style='display: inline'>Micheal Jackson   </h3>" +
        "<h4 style='display: inline'>lifetime:1022-1055</h4>" +
    "</div>" +
    "<div class='inner-box'>" +
        "<h3>Popular Photos</h3>" +
        "<img src='human1.jpg' alt='' class='photo'>" +
        "<img src='human2.jpg' alt='' class='photo'>" +
        "<img src='human3.jpg' alt='' class='photo'>" +
    "</div>" +
    "<div id='bt1'>" +
        "<button>Visit</button>" +
    "</div>";

document.body.appendChild(a);

const b = document.createElement("div");
b.className = "item";
b.innerHTML =
    "<p style='margin-top: 1em; margin-bottom: 1em'>Genre: Classical</p>" +
    "<div class='inner-box'>" +
        "<h3 style='display: inline'>Maria JK   </h3>" +
        "<h4 style='display: inline'>lifetime:1920-2001</h4>" +
    "</div>" +
    "<div class='inner-box'>" +
        "<h3>Popular Photos</h3>" +
        "<img src='classical1.jpg' alt='' class='photo'>" +
        "<img src='classical2.jpg' alt='' class='photo'>" +
    "</div>" +
    "<div id='bt2'>" +
        "<button>Visit</button>" +
    "</div>";

document.body.appendChild(b);

const c = document.createElement("div");
c.className = "item";
c.innerHTML =
    "<p style='margin-top: 1em; margin-bottom: 1em'>Genre: Abstract</p>" +
    "<div class='inner-box'>" +
        "<h3 style='display: inline'>John Herry UY   </h3>" +
        "<h4 style='display: inline'>lifetime:1894-1928</h4>" +
    "</div>" +
    "<div class='inner-box'>" +
        "<h3>Popular Photos</h3>" +
        "<img src='abstract1.jpg' alt='' class='photo'>" +
        "<img src='abstract2.jpg' alt='' class='photo'>" +
        "<img src='abstract3.jpg' alt='' class='photo'>" +
        "<img src='abstract4.jpg' alt='' class='photo'>" +
        "<img src='abstract5.jpg' alt='' class='photo'>" +
    "</div>" +
    "<div id='bt3'>" +
        "<button>Visit</button>" +
    "</div>";

document.body.appendChild(c);

const d = document.createElement("div");
d.className = "item";
d.innerHTML =
    "<p style='margin-top: 1em; margin-bottom: 1em'>Genre: Beauty</p>" +
    "<div class='inner-box'>" +
        "<h3 style='display: inline'>Coco   </h3>" +
        "<h4 style='display: inline'>lifetime:1777-1799</h4>" +
    "</div>" +
    "<div class='inner-box'>" +
        "<h3>Popular Photos</h3>" +
        "<img src='beauty1.jpg' alt='' class='photo'>" +
        "<img src='beauty2.jpg' alt='' class='photo'>" +
    "</div>" +
    "<div id='bt4'>" +
        "<button>Visit</button>" +
    "</div>";

document.body.appendChild(d);
