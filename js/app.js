var locFlag;
var answerFlag;
var loc = prompt('Are you located in USA?');
console.log('Location: ',loc);

if (loc.toUpperCase() == "Y" || loc.toUpperCase() == "YES") {
    var userName = prompt('Please enter your name.');
    console.log('User name is:',userName);
    alert(userName + ', welcome to my page, want to show my skills. Please guess ...');
    locFlag = true;
    } else
    {
    alert('Not interested to talk you.');
    locFlag = false;
    }
if (locFlag) {
    var mySkills = ['JAVA','HTML','JAVASCRIPT','ORACLE','PERL'];
    var answerSkill = prompt('What is one of my core software skill?');
    for(var i = 0; i < mySkills.length; i++){
        console.log('Current iteration skill value:',mySkills[i]);
        if (answerSkill.toUpperCase() === mySkills[i]) {
            alert('You guess is correct!');
            answerFlag = true;
            break;
        }
    }
    if (!answerFlag){
        alert('Incorrect guess, try again..something else');
    }
    answerFlag=false;
    var myFavoriteCity = ['NEW YORK', 'SEATTLE', 'CHICAGO', 'TAMPA', 'PORTLAND'];
    var answerCity = prompt('What is one of my favorite city?');
    for (var i = 0; i < myFavoriteCity.length; i++) {
        console.log('Current iteration skill value:', myFavoriteCity[i]);
        if (answerCity.toUpperCase() === myFavoriteCity[i]) {
            alert('You guess is correct!');
            answerFlag = true;
            break;
        }
    }
    if (!answerFlag) {
        alert('Incorrect guess, try again .. something else');
    }
    answerFlag=false;
    var myFavoriteFood = ['CHICKEN', 'FISH', 'FRUITS', 'NUTS', 'SALAD'];
    var answerFood = prompt('What is one of my favorite food?');
    for (var i = 0; i < myFavoriteFood.length; i++) {
        console.log('Current iteration skill value:', myFavoriteFood[i]);
        if (answerFood.toUpperCase() === myFavoriteFood[i]) {
            alert('You guess is correct!');
            answerFlag = true;
            break;
        }
    }
    if (!answerFlag) {
        alert('Incorrect guess, try again .. something else');
    }
    answerFlag=false;
    var myFavoriteDrink = ['TEA', 'BEER', 'JUICE', 'COFFEE', 'WATER'];
    var answerDrink = prompt('What is one of my favorite drink?');
    for (var i = 0; i < myFavoriteDrink.length; i++) {
        console.log('Current iteration skill value:', myFavoriteDrink[i]);
        if (answerDrink.toUpperCase() === myFavoriteDrink[i]) {
            alert('You guess is correct!');
            answerFlag = true;
            break;
        }
    }
      if (!answerFlag) {
        alert('Incorrect guess, try again .. something else');
    }
    answerFlag=false;
    var myFavoriteGame = ['FOOTBALL', 'SOCCER', 'BASEBALL', 'TENNIS', 'BADMINTON'];
    var answerGame = prompt('What is one of my favorite game');
    for (var i = 0; i < myFavoriteGame.length; i++) {
        console.log('Current iteration skill value:', myFavoriteGame[i]);
        if (answerGame.toUpperCase() === myFavoriteGame[i]) {
            alert('You guess is correct!');
            answerFlag = true;
            break;
        }
    }
      if (!answerFlag) {
        alert('Incorrect guess, try again ..');
    }
}
