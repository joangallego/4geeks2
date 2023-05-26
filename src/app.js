/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function generarExcusa() {
    let indiceWho = Math.floor(Math.random() * who.length);
    let indiceAction = Math.floor(Math.random() * action.length);
    let indiceWhat = Math.floor(Math.random() * what.length);
    let indiceWhen = Math.floor(Math.random() * when.length);

    let excusa =
      who[indiceWho] +
      " " +
      action[indiceAction] +
      " " +
      what[indiceWhat] +
      " " +
      when[indiceWhen];
    return excusa;
  }

  let excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = generarExcusa();
};
