/////////////////////////////////////
//             Resources           //
/////////////////////////////////////

const resources = {
	coins: 50,
	clicks: 0,
	modifier: 1,
	sqModifier: 1,
	fourthModifier: 1,
	eighthModifier: 1,
	sixteenthModifier: 1,
	thirtySecondModifier: 1,
	sixtyFourthModifier: 1,
	oneTwentyEighthModifier: 1,
	twoFiftySixthModifier: 1,
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

const defaultResources = resources;

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

const updateCostDisplay4th = () => {
	const costDisplay = document.getElementById('sales-price-mod-4th');
	costDisplay.textContent = `cost: ${(999 + resources.fourthModifier ** 5).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
}

const updateCostDisplay8th = () => {
	const costDisplay = document.getElementById('sales-price-mod-8th');
	costDisplay.textContent = `cost: ${(9999 + resources.eighthModifier ** 9).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`;
}

const updateCostDisplay16th = () => {
	const costDisplay = document.getElementById('sales-price-mod-16th');
	costDisplay.textContent = `cost: ${(99999 + resources.sixteenthModifier ** 17).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`;
}

const updateCostDisplay32nd = () => {
	const costDisplay = document.getElementById('sales-price-mod-32nd');
	costDisplay.textContent = `cost: ${(999999 + resources.thirtySecondModifier ** 33).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`;
}

const updateCostDisplay64th = () => {
	const costDisplay = document.getElementById('sales-price-mod-64th');
	costDisplay.textContent = `cost: ${(9999999 + resources.sixtyFourthModifier ** 65).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`;
}

const updateCostDisplay128th = () => {
	const costDisplay = document.getElementById('sales-price-mod-128th');
	costDisplay.textContent = `cost: ${(99999999 + resources.oneTwentyEighthModifier ** 129).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`;
}

const updateCostDisplay256th = () => {
	const costDisplay = document.getElementById('sales-price-mod-256th');
	costDisplay.textContent = `cost: ${(999999999 + resources.twoFiftySixthModifier ** 257).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`;
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

const updateAllDisplays = () => {
	updateCurrency();
	updateCostDisplay();
	resizeSalesText();
	updateCostDisplaySq();
	updateCostDisplay4th();
	updateCostDisplay8th();
	updateCostDisplay16th();
	updateCostDisplay32nd();
	updateCostDisplay64th();
	updateCostDisplay128th();
	updateCostDisplay256th();
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

const buyMod = () => {
	if (resources.coins < 24 + resources.modifier ** 2) {
		return alert("Not enough money");
	}

	resources.coins -= 24 + resources.modifier ** 2;
	resources.modifier += 1;

	updateAllDisplays();
}

const buyModSq = () => {
	if (resources.coins < 99 + resources.sqModifier ** 3) {
		return alert("Not enough money");
	}

	resources.coins -= 99 + resources.sqModifier ** 3;
	resources.sqModifier += 1;

	updateAllDisplays();
}

const buyMod4th = () => {
	if (resources.coins < 999 + resources.fourthModifier ** 5) {
		return alert("Not enough money");
	}

	resources.coins -= 99 + resources.fourthModifier ** 5;
	resources.fourthModifier += 1;

	updateAllDisplays();
}

const buyMod8th = () => {
	if (resources.coins < 9999 + resources.eighthModifier ** 9) {
		return alert("Not enough money");
	}

	resources.coins -= 9999 + resources.eighthModifier ** 9;
	resources.eighthModifier += 1;

	updateAllDisplays();
}

const buyMod16th = () => {
	if (resources.coins < 99999 + resources.sixteenthModifier ** 17) {
		return alert("Not enough money");
	}

	resources.coins -= 99999 + resources.sixteenthModifier ** 17;
	resources.sixteenthModifier += 1;

	updateAllDisplays();
}

const buyMod32nd = () => {
	if (resources.coins < 999999 + resources.thirtySecondModifier ** 33) {
		return alert("Not enough money");
	}

	resources.coins -= 999999 + resources.thirtySecondModifier ** 33;
	resources.thirtySecondModifier += 1;

	updateAllDisplays();
}

const buyMod64th = () => {
	if (resources.coins < 9999999 + resources.sixtyFourthModifier ** 65) {
		return alert("Not enough money");
	}

	resources.coins -= 9999999 + resources.sixtyFourthModifier ** 65;
	resources.sixtyFourthModifier += 1;

	updateAllDisplays();
}

const buyMod128th = () => {
	if (resources.coins < 99999999 + resources.oneTwentyEighthModifier ** 129) {
		return alert("Not enough money");
	}

	resources.coins -= 99999999 + resources.oneTwentyEighthModifier ** 129;
	resources.oneTwentyEighthModifier += 1;

	updateAllDisplays();
}

const buyMod256th = () => {
	if (resources.coins < 999999999 + resources.twoFiftySixthModifier ** 257) {
		return alert("Not enough money");
	}

	resources.coins -= 999999999 + resources.twoFiftySixthModifier ** 257;
	resources.twoFiftySixthModifier += 1;

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
	let parsedGameState; // Declare the variable outside the if block

	const savedGameState = localStorage.getItem('gameState');
	if (savedGameState) {
		parsedGameState = JSON.parse(savedGameState);
		// Update the resources object with new keys from saved game state
		Object.assign(resources, parsedGameState);
		console.log('Game loaded!');
	} else {
		console.log('No saved game found.');
		return; // Exit the function if there's no saved game
	}

	// Check if there are new keys added to the resources object
	const resourceKeys = Object.keys(defaultResources);
	resourceKeys.forEach((key) => {
		if (!(key in parsedGameState)) {
			// If a new key is found, set its default value from the original resources object
			resources[key] = getDefaultFromOriginal(key);
		}
	});

	updateAllDisplays();
}

// Function to get default value from the original resources object
const getDefaultFromOriginal = (key) => {
	if (key in resources) {
		return defaultResources[key];
	} else {
		// Handle nested objects if necessary
		return null;
	}
}

// Start game code
// Please teach how to do your special comments


loadGame();






let isDragging = false;
let startX, scrollLeft;

const salesContainer = document.getElementById('sales');

salesContainer.addEventListener('mousedown', (e) => {
	isDragging = true;
	startX = e.pageX - salesContainer.offsetLeft;
	scrollLeft = salesContainer.scrollLeft;
});

salesContainer.addEventListener('mouseup', () => {
	isDragging = false;
});

salesContainer.addEventListener('mousemove', (e) => {
	if (!isDragging) return;
	const x = e.pageX - salesContainer.offsetLeft;
	const walk = (x - startX) * 2; // Adjust the multiplier based on your preference
	salesContainer.style.transform = `translateX(${walk}px)`;
});
