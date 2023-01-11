// function([string1, string2],target id,[color1,color2])    
 consoleText(['Drug trafficking is the act of producing, distributing, or selling illegal drugs. It is a serious crime that is punishable by law in most countries. The illegal drug trade is a global problem that involves organized crime groups and networks, and it often leads to violence and corruption. Some common drugs that are trafficked include cocaine, heroin, marijuana, and methamphetamine. The penalties for drug trafficking can vary depending on the type and amount of drug involved, as well as the jurisdiction in which the crime was committed. In general, drug trafficking is considered a felony offense and can result in imprisonment, fines, and other penalties..', 'toasttoastoasttoast', 'Insider trading is illegal and unethical. It refers to the practice of using non-public information to make financial decisions, such as buying or selling securities. This is illegal because it gives the insider an unfair advantage over other investors who do not have access to this information. Engaging in insider trading can lead to serious consequences, including fines, imprisonment, and a loss of reputation. It is important to always follow the law and act with integrity when making financial decisions.', 'Sports bribery is considered a serious crime and is generally punished by law in most countries. In addition to legal consequences, individuals and organizations involved in sports bribery may also face sanctions from sports governing bodies, such as disqualification or expulsion from competitions, loss of titles or awards, and fines.'], 'text',['red','blue','cyan']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 100)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 100)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 30)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 40)
}