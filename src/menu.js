const menu = () => {
    const menuItem = document.createElement('div');

    const header = document.createElement('h1');
    header.classList.add('header')
    header.textContent = 'Menu';

    //food
    const foodBox = document.createElement('div');
    foodBox.classList.add('foodItems')
    const foods = document.createElement('h2');
    foods.textContent = 'Food Items';

    //Pancake
    const item1 = document.createElement('div');
    item1.classList.add('item');

    const pancakes = document.createElement('h3');
    pancakes.textContent = 'Pancakes';
    const pancakesPic = document.createElement('img');
    pancakesPic.classList.add('pics');
    pancakesPic.src = '../Imgs/pancakes.png';

    item1.append(pancakes, pancakesPic);

    //Waffles
    const item2 = document.createElement('div');
    item2.classList.add('item');

    const waffles = document.createElement('h3');
    waffles.textContent = 'Waffles';
    const wafflesPic = document.createElement('img');
    wafflesPic.classList.add('pics');
    wafflesPic.src = '../Imgs/waffle.png';

    item2.append(waffles, wafflesPic);

    //Burrito
    const item3 = document.createElement('div');
    item3.classList.add('item');

    const burrito = document.createElement('h3');
    burrito.textContent = 'Breakfast Burrito';
    const burritoPic = document.createElement('img');
    burritoPic.classList.add('pics');
    burritoPic.src = '../Imgs/burrito.png';

    item3.append(burrito, burritoPic);

    //English Breakfast
    const item4 = document.createElement('div');
    item4.classList.add('item');

    const english = document.createElement('h3');
    english.textContent = 'Full English Breakfast';
    const englishPic = document.createElement('img');
    englishPic.classList.add('pics');
    englishPic.src = '../Imgs/english-breakfast.png';
    
    item4.append(english, englishPic)

    foodBox.append(foods, item1, item2, item3, item4);

    //drinks
    const drinksBox = document.createElement('div');
    drinksBox.classList.add('drinksItems')
    const drinks = document.createElement('h2');
    drinks.textContent = 'Drinks';

    //Coffee
    const item5 = document.createElement('div');
    item5.classList.add('item');

    const coffee = document.createElement('h3');
    coffee.textContent = 'Coffee';
    const coffeePic = document.createElement('img');
    coffeePic.classList.add('pics');
    coffeePic.src = '../Imgs/coffee-cup.png';

    item5.append(coffee, coffeePic);

    //Tea
    const item6 = document.createElement('div');
    item6.classList.add('item');

    const tea = document.createElement('h3');
    tea.textContent = 'English Tea';
    const teaPic = document.createElement('img');
    teaPic.classList.add('pics');
    teaPic.src = '../Imgs/green-tea.png';

    item6.append(tea, teaPic);

    //Orange Juice
    const item7 = document.createElement('div');
    item7.classList.add('item');

    const orange = document.createElement('h3');
    orange.textContent = 'Orange Juice';
    const orangePic = document.createElement('img');
    orangePic.classList.add('pics');
    orangePic.src = '../Imgs/orange-juice.png';

    item7.append(orange, orangePic)

    drinksBox.append(drinks, item5, item6, item7);

    menuItem.append(header, foodBox, drinksBox);

    return {menuItem};
};

export{ menu };