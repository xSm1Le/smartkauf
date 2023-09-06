const readline = require("readline-sync")

// Objecte der Rezepte

const broKarGra = { // brokkoliKartoffelGratin
    title: "Brokkoli Kartoffel Gratin",
    serves: 2,
    zutaten: [
      {zutat:"Kartoffeln" maenge:800},
      {zutat:"Brokkoli" maenge:400},
      {zutat:"Kochschinken" maenge:100},
      {zutat:"Sahne" maenge:200},
      {zutat:"Milch" maenge:200},
      {zutat:"Mehl" maenge:1},
      {zutat:"Salz" maenge:"nach Geschmack"},
      {zutat:"Pfeffer" maenge:"nach Geschmack"},
      {zutat:"Muskat" maenge:"nach Geschmack"},
      {zutat:"Zwiebel" maenge:1},
      {zutat:"Kaese" maenge:100},
      {zutat:"Oel" maenge:"für die Form"},
    ]
  };

  const itakartsal = { // italienischerKartoffelsalat
    
    kartoffeln: 400,
    tomaten: 200,
    lauchzwiebeln: 100,
    oliven: 10,
    parmaschinken: 50,
    knoblauch: 1,
    kraeuter: 'italienische',
    olivenoel: 'nach Geschmack',
    essig: 'Wein-',
    salz: 'nach Geschmack',
    pfeffer: 'nach Geschmack',
    kapern: 'nach Belieben'
  };

  const spaghettiMitKnoblauchOelChili = {
    pasta: 320,
    knoblauch: 3,
    chilischote: 1,
    olivenoelTradizionale: 70,
    nativesOlivenoelExtraDelicato: 'nach Geschmack',
    salz: 'nach Geschmack'
  };

  
  const pastaMitPestoUndWalnüssen = {
    pasta: 300,
    kirschtomaten: 150,
    miniMozzarella: 200,
    pesto: 130,
    walnuesse: 70,
    rucola: 50,
    salz: 'nach Geschmack',
    pfeffer: 'nach Geschmack',
    nativesOlivenoelExtraDelicato: 'nach Geschmack'
  };

  const haehnchenbrustInBalsamicosauce = {
    haehnchenbrust: 1,
    balsamessig: 'aus Modena',
    wasser: 2,
    mehl: 'Weizenmehl Type 00',
    salz: 'nach Geschmack',
    pfeffer: 'nach Geschmack',
    olivenoelTradizionale: 'nach Bedarf'
  };
  
  const onePotPastaMitZucchiniUndChampignons = {
    pasta: 'nach Wahl',
    zucchini: 1,
    champignons: 250,
    thymian: 4,
    rosmarin: 1,
    knoblauch: 2,
    gemuesebruehe: '1 ½ Liter',
    sahne: 100,
    salz: 'nach Geschmack',
    pfeffer: 'nach Geschmack'
  };

  const onePotSpaghettiMitChampignons = {
    champignons: 250,
    olivenoel: '2 EL',
    zwiebel: 1,
    knoblauch: 1,
    salz: 'nach Geschmack',
    pfeffer: 'nach Geschmack',
    paprikapulver: 'edelsüßes',
    gemuesebruehepulver: '1 TL',
    tomatenmark: '1 EL',
    wasser: '450 ml',
    sahne: '100 ml',
    spaghetti: '180 g',
    parmesan: '40 g',
    rosmarin: 'nach Geschmack',
    thymian: 'nach Geschmack',
    schmand: '1 EL'
  };

  function getInput(promt) {
    return readline.question(promt);
  }

  function createUser() {
    console.log('Schoen das du dich fuer Smartkauf entschieden hast. Lass uns direkt anfangen!');
    const userName = getInput('Damit ich mich vernuenftig auf dich einstellen kann, verrate mir doch bitte, wie darf ich sie nennen?');
    const user = {
        userName: userName,
      }
      return user;
  }

  let userArray = [""];

  const user = createUser();
  
  // console.log("prüfung", user);

  const welcome = readline.question(`Okay ${user} Willst du dich auf die woche vorbereiten? Y / N `);