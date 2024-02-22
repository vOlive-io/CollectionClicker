var coins = 50;
var berryFer1 = 0;
var berryFer2 = 0;
var berryFer3 = 0;
var berryFer4 = 0;
var berryFer5 = 0;
var berryFer6 = 0;
var berryFer7 = 0;
var comicBerry = 0;
var mod = 1;
var clicks = 0;


function play() {
  coins += mod;
  clicks += 1;
}


/*  
  let displayCount = count;
  for (let i = suffixes.length - 1; i >= 1; i--) {
    const limit = Math.pow(10, i * 3);
    if (count >= limit) {
      displayCount = (count / limit).toFixed(1) + suffixes[i];
      break;
    }
  }
  printerName.innerText = "You have $" + displayCount;
  tit.innerText = displayCount + " Cats - Catstack";
  checkAchievements();
  format();
}
/*
