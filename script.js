var plant = 0;
var mod = 1;
var clicks = 0;


function play() {
  plant += mod;
  clicks += mod;
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
