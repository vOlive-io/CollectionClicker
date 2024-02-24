/////////////////////////////////////
//             Resources           //
/////////////////////////////////////

const resources = {
	coins: 50,
	clicks: 0,
	modifier: 1,
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

const play = () => {
	resources.coins += resources.modifier;
	resources.clicks += 1;
}

const Item = () => {
	const itemKeys = Object.keys(resources.items);
	const randomItemKey = itemKeys[Math.floor(Math.random() * itemKeys.length)];
	resources.items[randomItemKey] += 1;
}