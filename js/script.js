/////////////////////////////////////
//             Resources           //
/////////////////////////////////////

const resources = {
	coins: 50,
	clicks: 0,
	modifier: 1,
	sqModifier: 1,
	berries: {
		berryFer1: 0,
		berryFer2: 0,
		berryFer3: 0,
		berryFer4: 0,
		berryFer5: 0,
		berryFer6: 0,
		berryFer7: 0,
		comicBerry: 0,
	},
	items: {
		item1: 0,
		item2: 0,
		item3: 0,
		item4: 0,
		item5: 0,
		item6: 0,
		item7: 0,
		item8: 0,
		item9: 0,
		item10: 0,
		item11: 0,
		item12: 0,
		item13: 0,
		item14: 0,
		item15: 0,
		item16: 0,
		item17: 0,
	},
};

/////////////////////////////////////
//             Functions           //
/////////////////////////////////////

const updateCurrency = () => {
	const coinsElement = document.getElementById('coins');
	coinsElement.textContent = resources.coins.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

const updateCostDisplay = () => {
	const costDisplay = document.getElementById('sales-price-mod');
	costDisplay.textContent = `cost: ${(24 + resources.modifier ** 2).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
}

const updateCostDisplaySq = () => {
	const costDisplay = document.getElementById('sales-price-mod-sq');
	costDisplay.textContent = `cost: ${(99 + resources.sqModifier ** 3).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
}


const updateAllDisplays = () => {
	updateCurrency();
	updateCostDisplaySq();
}

const play = () => {
	resources.coins += (1 * resources.modifier) - 1 + (resources.sqModifier ** 2);
	resources.clicks += 1;
	
	updateAllDisplays();
}

const Item = () => {
	const itemKeys = Object.keys(resources.items);
	const randomItemKey = itemKeys[Math.floor(Math.random() * itemKeys.length)];
	resources.items[randomItemKey] += 1;
}



const buyModSq = () => {
	if (resources.coins < 99 + resources.sqModifier ** 3) {
		return alert("Not enough money");
	}

	resources.coins -= 99 + resources.sqModifier ** 3;
	resources.sqModifier += 1;

	updateAllDisplays();
}

/////////////////////////////////////
//             Cookies             //
/////////////////////////////////////
window.addEventListener('beforeunload', () => {
	saveGame();
});

const saveGame = () => {
	localStorage.setItem('gameState', JSON.stringify(resources));
	console.log('Game saved!');
}

const loadGame = () => {
	const savedGameState = localStorage.getItem('gameState');
	if (savedGameState) {
		const parsedGameState = JSON.parse(savedGameState);
		Object.assign(resources, parsedGameState);
		console.log('Game loaded!');
	} else {
		console.log('No saved game found.');
	}

	updateAllDisplays();
}

// Start game code
// Please teach how to do your special comments

/*
const buyMod = () => {
	if (resources.coins < 24 + resources.modifier ** 2) {
		return alert("Not enough money");
	}

	resources.coins -= 24 + resources.modifier ** 2;
	resources.modifier += 1;

	updateAllDisplays();
}
 
const resizeSalesText = () => {
	const salesPriceElements = document.querySelectorAll('.sales-price');
	const containerWidth = 208;

	salesPriceElements.forEach((salesPriceText) => {
		const textWidth = salesPriceText.offsetWidth;

		if (textWidth > containerWidth) {
			const fontSize = parseFloat(window.getComputedStyle(salesPriceText).fontSize);
			const newFontSize = (containerWidth / textWidth) * fontSize;
			console.log(newFontSize);
			salesPriceText.style.fontSize = `${newFontSize}px`;
		}
	});
}
*/
loadGame();
