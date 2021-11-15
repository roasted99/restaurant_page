const homePage = () => {
    const div = document.createElement('div');

    const header = document.createElement('h1');
    header.classList.add('header');
    header.textContent = 'Breakfast Club';

    const description = document.createElement('p');
    description.textContent = 'Breakfast Club is an all day breakfast serving restaurant. Breakfast Club\'s pancakes are the best in town.It is located in the city center where you could visit our local museum.'

    const opening = document.createElement('div')
    const hour = document.createElement('h2');
    const weekdayHour = document.createElement('p');
    const weekendHour = document.createElement('p');
    hour.textContent = 'Operation Hours';
    weekdayHour.textContent = 'Weekday: 6AM - 8PM';
    weekendHour.textContent = 'Weekend: 6AM - 3PM';
    opening.appendChild(hour);
    opening.appendChild(weekdayHour);
    opening.appendChild(weekendHour);

    const add = document.createElement('div');
    const location = document.createElement('h2');
    const address = document.createElement('p');
    location.textContent = 'Location';
    address.textContent = '124 Breakfast Lane, Japan';
    add.appendChild(location);
    add.appendChild(address);

    div.appendChild(header);
    div.appendChild(description);
    div.appendChild(opening);
    div.appendChild(add);

    return {div}
};

export{homePage};
