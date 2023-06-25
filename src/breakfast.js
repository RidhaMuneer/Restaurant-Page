import './style.css';
import Icon from './sliverware.png';
import lunchScreens from './lunch.js';
import dinnerScreens from './dinner.js';
import heroScreen from './hero.js';

export default function breakFastScreens() {

    const main = document.createElement('div');
    main.classList.add('main-section-breakfast');
  
    // The container holding the content of the nav bar
    const navSection = document.createElement('div');
    navSection.classList.add('nav-section-breakfast');

    const resturantNameDiv = document.createElement('div');
    resturantNameDiv.classList.add('resturant-name-breakfast');
    const restaurantName = document.createElement('span');
    restaurantName.textContent = 'Restaurant name';

    const resturantIcon = new Image();
    resturantIcon.src = Icon;
    resturantIcon.classList.add('resturant-icon');

    resturantNameDiv.appendChild(resturantIcon);

    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('options');

    const homeLink = document.createElement('button');
    homeLink.classList.add('home-link');
    homeLink.textContent = 'Home';
    homeLink.addEventListener('click', function() {
        main.removeChild(navSection);
        main.removeChild(menuSection);
        main.remove();
        document.body.appendChild(heroScreen());
    });

    const breakfastLink = document.createElement('button');
    breakfastLink.textContent = 'Breakfast';
    breakfastLink.style.borderBottom = '1px rgb(255, 255, 255) solid';

    const lunchLink = document.createElement('button');
    lunchLink.textContent = 'Lunch';
    lunchLink.addEventListener('click', function() {
        main.removeChild(navSection);
        main.removeChild(menuSection);
        main.remove();
        document.body.appendChild(lunchScreens());
    });


    const dinnerLink = document.createElement('button');
    dinnerLink.textContent = 'Dinner';
    dinnerLink.addEventListener('click', function() {
        main.removeChild(navSection);
        main.removeChild(menuSection);
        main.remove();
        document.body.appendChild(dinnerScreens());
    });



    optionsDiv.appendChild(homeLink);
    optionsDiv.appendChild(breakfastLink);
    optionsDiv.appendChild(lunchLink);
    optionsDiv.appendChild(dinnerLink);
  
    // Appending the navigation elements to the nav section
    navSection.appendChild(resturantNameDiv);
    navSection.appendChild(optionsDiv);
  
    // The container holding the hero section header
    const menuSection = document.createElement('div');
    menuSection.classList.add('menu-section');

    const box1 = document.createElement('div');
    box1.classList.add('menu-box');

    const title1 = document.createElement('h3');
    title1.classList.add('menu-title');
    title1.textContent = 'Section 1';

    const p1 = document.createElement('p');
    p1.textContent = 'American Breakfast';

    const p1Price = document.createElement('p');
    p1Price.classList.add('menu-price');
    p1Price.textContent = '$10.00';

    const p2 = document.createElement('p');
    p2.textContent = 'British Breakfast';

    const p2Price = document.createElement('p');
    p2Price.classList.add('menu-price');
    p2Price.textContent = '$10.00';

    const p3 = document.createElement('p');
    p3.textContent = 'Brazilain Breakfast';

    const p3Price = document.createElement('p');
    p3Price.classList.add('menu-price');
    p3Price.textContent = '$10.00';

    const p4 = document.createElement('p');
    p4.textContent = 'Brazilain Breakfast';

    const p4Price = document.createElement('p');
    p4Price.classList.add('menu-price');
    p4Price.textContent = '$10.00';

    const p5 = document.createElement('p');
    p5.textContent = 'Brazilain Breakfast';

    const p5Price = document.createElement('p');
    p5Price.classList.add('menu-price');
    p5Price.textContent = '$10.00';

    box1.appendChild(title1);
    box1.appendChild(p1);
    box1.appendChild(p1Price);
    box1.appendChild(p2);
    box1.appendChild(p2Price);
    box1.appendChild(p3);
    box1.appendChild(p3Price);
    box1.appendChild(p4);
    box1.appendChild(p4Price);
    box1.appendChild(p5);
    box1.appendChild(p5Price);

    const box2 = document.createElement('div');
    box2.classList.add('menu-box');

    const title2 = document.createElement('h3');
    title2.classList.add('menu-title');
    title2.textContent = 'Section 2';

    const p6 = document.createElement('p');
    p6.textContent = 'Item 6';

    const p6Price = document.createElement('p');
    p6Price.classList.add('menu-price');
    p6Price.textContent = '$10.00';

    const p7 = document.createElement('p');
    p7.textContent = 'Item 7';

    const p7Price = document.createElement('p');
    p7Price.classList.add('menu-price');
    p7Price.textContent = '$10.00';

    box2.appendChild(title2);
    box2.appendChild(p6);
    box2.appendChild(p6Price);
    box2.appendChild(p7);
    box2.appendChild(p7Price);

    const box3 = document.createElement('div');
    box3.classList.add('menu-box');

    const title3 = document.createElement('h3');
    title3.classList.add('menu-title');
    title3.textContent = 'Section 3';

    const p8 = document.createElement('p');
    p8.textContent = 'Item 8';

    const p8Price = document.createElement('p');
    p8Price.classList.add('menu-price');
    p8Price.textContent = '$10.00';

    const p9 = document.createElement('p');
    p9.textContent = 'Item 9';

    const p9Price = document.createElement('p');
    p9Price.classList.add('menu-price');
    p9Price.textContent = '$10.00';

    box3.appendChild(title3);
    box3.appendChild(p8);
    box3.appendChild(p8Price);
    box3.appendChild(p9);
    box3.appendChild(p9Price);

    menuSection.appendChild(box1);
    menuSection.appendChild(box2);
    menuSection.appendChild(box3);
  
    main.appendChild(navSection);
    main.appendChild(menuSection);
  
    document.body.appendChild(main);
};