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

    const item1 = document.createElement('div');
    item1.classList.add('item');
    const pancakes = document.createElement('h3');
    pancakes.textContent = 'Pancakes';
    const pancakesPic = document.createElement('img');
    pancakesPic.classList.add('pics');
    pancakesPic.src = '../Imgs/pancakes.png';

    const waffles = document.createElement('h3');
    waffles.classList.add('item');
    waffles.textContent = 'Waffles';
    const wafflesPic = document.createElement('img');
    wafflesPic.classList.add('pics');
    wafflesPic.src = '../Imgs/waffle.png';
    
    const burrito = document.createElement('h3');
    burrito.textContent = 'Breakfast Burrito';
    const burritoPic = document.createElement('img');
    burritoPic.classList.add('pics');
    burritoPic.src = '../Imgs/burrito.png';

    const english = document.createElement('h3');
    english.textContent = 'Full English Breakfast';
    const englishPic = document.createElement('img');
    englishPic.classList.add('pics');
    englishPic.src = '../Imgs/english-breakfast.png';

    foodBox.append(foods, pancakes, pancakesPic, waffles, wafflesPic, burrito, burritoPic, english, englishPic);

    //drinks
    const drinksBox = document.createElement('div');
    const drinks = document.createElement('h2');
    drinks.textContent = 'Drinks';

    const coffee = document.createElement('h3');
    coffee.textContent = 'Coffee';
    const coffeePic = document.createElement('img');
    coffeePic.classList.add('pics');
    coffeePic.src = '../Imgs/coffee-cup.png';


    const tea = document.createElement('h3');
    tea.textContent = 'English Tea';
    const teaPic = document.createElement('img');
    teaPic.classList.add('pics');
    teaPic.src = '../Imgs/green-tea.png';
    
    const orange = document.createElement('h3');
    orange.textContent = 'Orange Juice';
    const orangePic = document.createElement('img');
    orangePic.classList.add('pics');
    orangePic.src = '../Imgs/orange-juice.png';
    drinksBox.append(drinks, coffee, coffeePic, tea, teaPic, orange, orangePic);

    menuItem.append(header, foodBox, drinksBox);

    return {menuItem};
};

export{ menu };