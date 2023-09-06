import readlineSync from 'readline-sync';
import { users } from './users.js';


// Objecte der Rezepte

const broKarGra = { // brokkoliKartoffelGratin
    title: "Brokkoli Kartoffel Gratin",
    serves: 2,
    zutaten: [
      {zutat:"Kartoffeln", maenge:800},
      {zutat:"Brokkoli", maenge:400},
      {zutat:"Kochschinken", maenge:100},
      {zutat:"Sahne", maenge:200},
      {zutat:"Milch", maenge:200},
      {zutat:"Mehl", maenge:1},
      {zutat:"Salz", maenge:"nach Geschmack"},
      {zutat:"Pfeffer", maenge:"nach Geschmack"},
      {zutat:"Muskat", maenge:"nach Geschmack"},
      {zutat:"Zwiebel", maenge:1},
      {zutat:"Kaese", maenge:100},
      {zutat:"Oel", maenge:"für die Form"},
    ]
  };

  const itakartsal = { // Italienischer Kartoffelsalat
    title: "Italienischer Kartoffelsalat",
    serves: "2",
    zutaten: [
      { zutat: "Kartoffeln", maenge: 400 },
      { zutat: "Tomaten", maenge: 200 },
      { zutat: "Lauchzwiebeln", maenge: 100 },
      { zutat: "Oliven", maenge: 10 },
      { zutat: "Parmaschinken", maenge: 50 },
      { zutat: "Knoblauch", maenge: 1 },
      { zutat: "Kraeuter", maenge: "italienische" },
      { zutat: "Olivenoel", maenge: "nach Geschmack" },
      { zutat: "Essig", maenge: "Wein-" },
      { zutat: "Salz", maenge: "nach Geschmack" },
      { zutat: "Pfeffer", maenge: "nach Geschmack" },
      { zutat: "Kapern", maenge: "nach Belieben" }
    ]
  };

const spaMiKno = {
    title: "Spaghetti mit Knoblauch, Öl und Chili",
    serves: 2,
    zutaten: [
      { zutat: "Pasta", maenge: 320 },
      { zutat: "Knoblauch", maenge: 3 },
      { zutat: "Chilischote", maenge: 1 },
      { zutat: "OlivenoelTradizionale", maenge: 70 },
      { zutat: "NativesOlivenoelExtraDelicato", maenge: "nach Geschmack" },
      { zutat: "Salz", maenge: "nach Geschmack" }
    ]
};

const paMiPeUnWal = {
    title: "Pasta mit Pesto und Walnüssen",
    serves: 2,
    zutaten: [
      { zutat: "Pasta", maenge: 300 },
      { zutat: "Kirschtomaten", maenge: 150 },
      { zutat: "MiniMozzarella", maenge: 200 },
      { zutat: "Pesto", maenge: 130 },
      { zutat: "Walnuesse", maenge: 70 },
      { zutat: "Rucola", maenge: 50 },
      { zutat: "Salz", maenge: "nach Geschmack" },
      { zutat: "Pfeffer", maenge: "nach Geschmack" },
      { zutat: "NativesOlivenoelExtraDelicato", maenge: "nach Geschmack" }
    ]
};

const hahnblasami = {
    title: "Hähnchenbrust in Balsamicosauce",
    serves: 2,
    zutaten: [
      { zutat: "Hähnchenbrust", maenge: 1 },
      { zutat: "Balsamessig", maenge: "aus Modena" },
      { zutat: "Wasser", maenge: 2 },
      { zutat: "Mehl", maenge: "Weizenmehl Type 00" },
      { zutat: "Salz", maenge: "nach Geschmack" },
      { zutat: "Pfeffer", maenge: "nach Geschmack" },
      { zutat: "OlivenoelTradizionale", maenge: "nach Bedarf" }
    ]
};

const pasmizucha = {
    title: "One-Pot-Pasta mit Zucchini und Champignons",
    serves: "2",
    zutaten: [
      { zutat: "Pasta", maenge: "nach Wahl" },
      { zutat: "Zucchini", maenge: 1 },
      { zutat: "Champignons", maenge: 250 },
      { zutat: "Thymian", maenge: 4 },
      { zutat: "Rosmarin", maenge: 1 },
      { zutat: "Knoblauch", maenge: 2 },
      { zutat: "Gemuesebruehe", maenge: "1 ½ Liter" },
      { zutat: "Sahne", maenge: 100 },
      { zutat: "Salz", maenge: "nach Geschmack" },
      { zutat: "Pfeffer", maenge: "nach Geschmack" }
    ]
};

const spaMiCha = {
    title: "One-Pot-Spaghetti mit Champignons",
    serves: 2,
    zutaten: [
      { zutat: "Champignons", maenge: 250 },
      { zutat: "Olivenoel", maenge: "2 EL" },
      { zutat: "Zwiebel", maenge: 1 },
      { zutat: "Knoblauch", maenge: 1 },
      { zutat: "Salz", maenge: "nach Geschmack" },
      { zutat: "Pfeffer", maenge: "nach Geschmack" },
      { zutat: "Paprikapulver", maenge: "edelsüßes" },
      { zutat: "Gemuesebruehepulver", maenge: "1 TL" },
      { zutat: "Tomatenmark", maenge: "1 EL" },
      { zutat: "Wasser", maenge: "450 ml" },
      { zutat: "Sahne", maenge: "100 ml" },
      { zutat: "Spaghetti", maenge: "180 g" },
      { zutat: "Parmesan", maenge: "40 g" },
      { zutat: "Rosmarin", maenge: "nach Geschmack" },
      { zutat: "Thymian", maenge: "nach Geschmack" },
      { zutat: "Schmand", maenge: "1 EL" }
    ]
};

  function getInput(promt) {
    return readline.question(promt);
  }

  users

  console.log('Smartkauf - Alles was du im Alltag brauchst!');

      
  function checkUser() {
    const name = readlineSync.question('Mit wem hab ich das vergnuegen? verrate mir bitte deinen Namen! ');

    const user = users.find(user => user.name === name);

    if (user) {
      console.log(`Willkommen zurueck ${user.name}!` );
    } else {
      console.log(`Ein neuer User! Herzlich Willkommen, ${name}! Registriere dich bitte auf unserer Homepage! Vorab kannst du das Programm aber als Gast nutzen! Kurze Info: Als Gast kannst du leider nicht alle Features nutzen!`);

      const firstStep = readlineSync.question(`Also ${name}, verrate mir bitte, wie kann ich dir helfen? Willst du anfangen deine Woche zu planen? Antwortmoeglichkeiten: Y/N: `);
      if (firstStep !== "") {
        const tageDieWoche = readlineSync.question(`An wie vielen Tagen soll dein Leben mal rund laufen? Kurze Info: Als Gast kannst du nur 1 - 3 Tage vorplanen! Moechtest du 1, 2 oder 3 Tage planen? Antwortmoeglichkeiten: 1/2/3 /A fuer Abbrechen: `);
        if (tageDieWoche === "A") {
          console.log("Schade! Dann noch einen schoenen Tag und spiel bitte mit den Autos auf der Autobahn, Gruesse!");
        }
      } else {
        console.log("Schade, dann kann ich dir leider nicht weiter helfen!");
      }

    }

     return user
    }

    const user = checkUser();

 
