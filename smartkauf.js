const readline = require("readline-sync")

// Objecte der Rezepte

const brokkoliKartoffelGratin = {
    kartoffeln: 800,
    brokkoli: 400,
    kochschinken: 100,
    sahne: 200,
    milch: 200,
    mehl: 1,
    salz: 'nach Geschmack',
    pfeffer: 'nach Geschmack',
    muskat: 'nach Geschmack',
    zwiebel: 1,
    kaese: 100,
    oel: 'für die Form'
  };

  const italienischerKartoffelsalat = {
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
    const userName = getInput('Schoen das du dich fuer Smartkauf entschieden hast. Lass uns direkt anfangen! Damit ich mich vernuenftig auf dich einstellen kann, verrate mir doch bitte, wie darf ich sie nennen?');
    const user = {
        userName: userName,
      }
      return user;
  }

  let userArray = [""];

  const user = createUser();
  user.push(userArray);
  console.log("prüfung", user);

  const welcome = readline.question(`Okay ${user} Willst du dich auf die woche vorbereiten?`);




 
