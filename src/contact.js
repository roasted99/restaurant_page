const contact = () => {
    const header = document.createElement('div');

    const contactUs = document.createElement('h1');
    contactUs.classList.add('header')
    contactUs.textContent = 'Contact Us';

    const logoPic = document.createElement('img');
    logoPic.classList.add('logo-pic')
    logoPic.classList.add('pics');
    logoPic.src = '../Imgs/logo.png';

    const address = document.createElement('p');
    address.textContent = '124 Breakfast Lane, Nagoya, Japan';
    const phone = document.createElement('p');
    phone.textContent = '123-456-789, 987-654-321';
    const email = document.createElement('p');
    email.textContent = 'info@breakfastclub.com';

    header.append(contactUs, logoPic, address, phone, email);

    return{header};
};

export{ contact }