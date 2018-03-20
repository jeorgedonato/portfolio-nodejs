// Main navigation (currently supports max. 1 sub-level)
exports.siteName = `d3ga`

// Navigation

exports.navigation = [
    {
        name: 'Home', 
        href: '#'
    },
    {
        name: 'About', 
        href: '#about'
    },
    {
        name: 'Skills',
        href: '#skills'
    },
    {
        name: 'Projects', 
        href: '#projects'
    },
    {
        name: 'Contact',
        href: '#contact'
    }
]

// Skills

exports.skills = [
    {
        technology: 'HTML & CSS & Bootstrap',
        percent: '93'
    },
    {
        technology: 'JavaScript (ES6)',
        percent: '81'
    },
    {
        technology: 'Node.JS',
        percent: '80'
    },
    {
        technology: 'Adobe Illustrator',
        percent: '96'
    },
    {
        technology: 'Adobe Photoshop',
        percent: '95'
    }
]

// Projects

exports.projectThumbnails = [
    {
        title: 'Marvel Heroes Search',   
        href: 'https://d3ga.github.io/marvel-api/',
        src: '/images/thumbnail_marvel_compressed.jpg',
        alt: 'Thumbnail of project Marvel Heroes Search',
        description: 'A minimal design search engine for Marvel superheroes. You can see a picture of every character a small description and the comics that they have appeared using data provided by the Marvel API.'
    },
    {
        title: 'User Geolocation',   
        href: 'https://codepen.io/dega_k/pen/BJJmqV',
        src: '/images/thumbnail_google_maps_compressed.png',
        alt: 'Thumbnail of project User Geolocation',
        description: 'Estimates the users geolocation, ip, country, city, region, provider, and postal code using data from the ipinfo.io API and displays a marker on the map using the Google Maps API.'
    },
    {
        title: 'Beers Search',   
        href: 'https://codepen.io/dega_k/pen/vpOOza',
        src: '/images/thumbnail_punkapi_compressed.jpg',
        alt: 'Thumbnail of project Beers Search',
        description: 'Users can search for a large variety of beers and read a small description about their characteristics and their origin. Data provided by the Punk API'
    },
    {
        title: 'XKCD Comics',   
        href: 'https://codepen.io/dega_k/pen/XzGNPX',
        src: '/images/thumbnail_comics_compressed.jpg',
        alt: 'Thumbnail of project XKCD Comics',
        description: 'Need a small break with some developer comics? Then have a go! Browse a random comic or get a comic by their ID. Using data provided by the XKCD Comics API'
    }
]

// Footer

exports.socialIcons = [
    {
        faIcon: 'fa-github fa-2x',
        href: 'https://github.com/d3ga'
    },
    {
        faIcon: 'fa-linkedin-square fa-2x',
        href: 'https://www.linkedin.com/in/kostasdega/'
    },
    {
        faIcon: 'fa-behance fa-2x',
        href: 'https://www.behance.net/kostasdegaitas'
    },
    {
        faIcon: 'fa-eye fa-2x',
        href: 'http://cargocollective.com/kostasdegaitas'
    }
    
]