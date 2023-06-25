import './style.css';
import Icon from './sliverware.png';
import breakFastScreens from './breakfast.js';
import lunchScreens from './lunch.js';
import dinnerScreens from './dinner.js';

export default function heroScreen() {
    // The main container of the element
    const main = document.createElement('div');
    main.classList.add('main-section');
  
    // The container holding the content of the nav bar
    const navSection = document.createElement('div');
    navSection.classList.add('nav-section');

    const resturantNameDiv = document.createElement('div');
    resturantNameDiv.classList.add('resturant-name');
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
    homeLink.style.borderBottom = '1px rgb(255, 255, 255) solid';

    const breakfastLink = document.createElement('button');
    breakfastLink.textContent = 'Breakfast';
    breakfastLink.addEventListener('click', function() {
        main.removeChild(navSection);
        main.removeChild(heroSection);
        main.remove();
        document.body.appendChild(breakFastScreens());
    });

    const lunchLink = document.createElement('button');
    lunchLink.textContent = 'Lunch';
    lunchLink.addEventListener('click', function() {
        main.removeChild(navSection);
        main.removeChild(heroSection);
        main.remove();
        document.body.appendChild(lunchScreens());
    });


    const dinnerLink = document.createElement('button');
    dinnerLink.textContent = 'Dinner';
    dinnerLink.addEventListener('click', function() {
            main.removeChild(navSection);
            main.removeChild(heroSection);
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
    const heroSection = document.createElement('div');
    heroSection.classList.add('hero-section');
  
    // Creating the header element
    const header = document.createElement('h1');
    header.textContent = 'Velinteno Restaurant';
    header.classList.add('header');
  
    heroSection.appendChild(header);
  
    main.appendChild(navSection);
    main.appendChild(heroSection);
  
    document.body.appendChild(main);
}
  