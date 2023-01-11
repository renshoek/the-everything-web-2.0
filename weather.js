function weather() {

    var tempa = ['1', '2', '3', ' ', '-', '-1', '-2'];
    var tempb = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    var tempc = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
     var tempd = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0.'];
     var tempe = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    var condit = ['sunshine', 'rain', 'fog', 'smog', 'storm', 'M̸̨͇͉̱͈͈͎͔͚͚̱͉̞͎͈̰͗͆̄́̑̃̄̌̎̽̒̚͜Ư̴̧͓̟̜̯̘͕̻̖̪͖͖͓̝̞̫͓͉͍̲̤̖̰͎̩̙͇̳̰̮̯͙͎̥̜͓̻̪̜̲̣̗͆́͂̀͗̃̾̅̏̉̈̅̈̒͂͐̀͋̿̄̔̆̑̀͌͑̎̊̅̅̋̔̿̇̾͂͆̕͜͝͝͠͠͝ͅͅŖ̵̨̡̪̮͈̫͚̘̘̺̤͉̪̳̱̙͔͖̈͋̕̕D̴͍͈̥̤̻̃̍̈̑͂̀̋͊̎́͊́̏̅̊̀̌̀̿̏͊̈́̎͐̀̀́̈́̆̿͐̉̀̄̋̒̀̕̚̚͘͘̚͠Ȩ̵̧̛̭̲̻̞͓͍̘̗͖̎̈́͋̈́͗̊͐̌̀̂̍̂́̈́͊̃́̄͊̏̌͂̿͊͂̌͆͋̔͊̐̈́͂͑̓͊̽̋́̈́̏̋͆̏̓͆̏̕͘̕̚̕͝͝Ŗ̷̨̢̛̩̙̗̩̝̲̮͕̜̺̙͍͇̫̮̤͔̤̹̱͔̥̝̭̺̫̟̱̗̠̣̯̦͍͚̘̺͇͙͖͕̯̠̍͑̀̋̊̉̎̈͑̿̆̍͊͊̓͆̉͒̓̎̾͒͊̍̔̎̋͐͑͒̀̈́̏̎̇̐̔̉̚͘̚͜͜͠͝͝͠͝͠ͅ', 'wind', 'clouds', 'atmospheric pressure', 'frost', 'snow', 'haze', 'tornadoes', 'drizzle', 'sandstorms'];


    var direct = ['north', 'east', 'south', 'west'];

    var temp1 = tempa[Math.floor(Math.random() * tempa.length)];
    var temp2 = tempb[Math.floor(Math.random() * tempb.length)];
    var temp3 = tempc[Math.floor(Math.random() * tempc.length)];
    var temp4 = tempd[Math.floor(Math.random() * tempd.length)];
    var temp5 = tempe[Math.floor(Math.random() * tempe.length)];
    var condit1 = condit[Math.floor(Math.random() * condit.length)];


    var direct1 = direct[Math.floor(Math.random() * direct.length)];
    document.getElementById("weather").innerHTML = ('WEATHER REPORT: CURRENT TEMPERATURE: ' + temp1 + temp2 + ' °C DEGREES:' + ' WIND COMING FROM: THE: ' + direct1 + ', TRAVELLING: AT: ' + temp2 + temp3 + ' KILOMETERS km. / h. (PER HOUR). ' + temp4 + temp5 + '% percEnt CHANCE: OF INCOMING ' + condit1);

};

function weatherGet() {
    document.getElementById("weather").innerHTML = weather;
};

setInterval(weather, 6000);
