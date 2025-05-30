const attractions = [
    {
        name: "The British Museum",
        category: "Landmarks",
        price: 0,
        distance: 2.7,
        popularity: 4.9,
        rating: 5,
        popularityDescription: "★ Highly popular world-renowned museum with constant foot traffic.",
        description: "Free entry with optional donations (around £5).",
        image: "images/britishmuseum.jpg",
        link: "https://www.britishmuseum.org/",
        lat: 51.5194,
        lng: -0.1269,
        address: "Great Russell St, London WC1B 3DG",
        telephone: "+44 20 7323 8299",
        email: "info@britishmuseum.org",
        transport: "Tube: Tottenham Court Road | Train: Euston"
    },
    {
        name: "The London Eye",
        category: "Landmarks",
        price: 27,
        distance: 0,
        popularity: 4.7,
        rating: 5,
        popularityDescription: "★ Extremely popular, iconic attraction visited by millions yearly.",
        description: "Tickets from £27 for a stunning city view.",
        image: "images/londoneye.jpg",
        link: "https://www.londoneye.com/",
        lat: 51.5033,
        lng: -0.1195,
        address: "Riverside Building, County Hall, London SE1 7PB",
        telephone: "+44 20 7967 8021",
        email: "info@londoneye.com",
        transport: "Tube: Waterloo | Train: Waterloo"
    },
    {
        name: "The Shard",
        category: "Landmarks",
        price: 32,
        distance: 1.6,
        popularity: 4.5,
        rating: 4,
        popularityDescription: "★ Popular, but more of a premium experience — fewer visitors due to higher costs.",
        description: "Tickets from £32, premium options up to £100.",
        image: "images/shard.jpg",
        link: "https://www.the-shard.com/",
        lat: 51.5045,
        lng: -0.0865,
        address: "32 London Bridge St, London SE1 9SG",
        telephone: "+44 20 3102 3000",
        email: "info@the-shard.com",
        transport: "Tube: London Bridge | Train: London Bridge"
    },
    {
        name: "Natural History Museum",
        category: "History",
        price: 0,
        distance: 3.1,
        popularity: 4.8,
        rating: 5,
        popularityDescription: "★ Packed with families and students — a top free spot for all ages.",
        description: "Discover dinosaurs and natural wonders for free.",
        image: "images/naturalhistory.jpg",
        link: "https://www.nhm.ac.uk/",
        lat: 51.4967,
        lng: -0.1764,
        address: "Cromwell Rd, South Kensington, London SW7 5BD",
        telephone: "+44 20 7942 5000",
        email: "info@nhm.ac.uk",
        transport: "Tube: South Kensington | Train: West Brompton"
    },
    {
        name: "Churchill War Rooms",
        category: "History",
        price: 25,
        distance: 1.1,
        popularity: 4.6,
        rating: 4,
        popularityDescription: "★ Popular for history buffs — less footfall than museums but highly rated.",
        description: "Explore the historic bunker that housed Churchill's WWII command.",
        image: "images/churchill.jpg",
        link: "https://www.iwm.org.uk/visits/churchill-war-rooms",
        lat: 51.5021,
        lng: -0.1290,
        address: "Clive Steps, King Charles St, London SW1A 2AQ",
        telephone: "+44 20 7930 6961",
        email: "info@iwm.org.uk",
        transport: "Tube: Westminster | Train: Charing Cross"
    },
    {
        name: "Tower of London",
        category: "History",
        price: 29,
        distance: 3.5,
        popularity: 4.7,
        rating: 4,
        popularityDescription: "★ Iconic British site that draws large crowds, especially in summer.",
        description: "Visit the iconic fortress, prison and crown jewel home.",
        image: "images/toweroflondon.jpg",
        link: "https://www.hrp.org.uk/tower-of-london/",
        lat: 51.5081,
        lng: -0.0759,
        address: "St Katharine's & Wapping, London EC3N 4AB",
        telephone: "+44 333 320 6000",
        email: "info@hrp.org.uk",
        transport: "Tube: Tower Hill | Train: London Bridge"
    },
    {
        name: "Warner Bros. Studio Tour",
        category: "Entertainment",
        price: 49,
        distance: 25,
        popularity: 4.9,
        rating: 5,
        popularityDescription: "★ A bucket-list visit for Harry Potter fans — very high global interest.",
        description: "Behind-the-scenes magic of Harry Potter in London.",
        image: "images/warnerbros.jpg",
        link: "https://www.wbstudiotour.co.uk/",
        lat: 51.6907,
        lng: -0.4180,
        address: "Studio Tour Dr, Leavesden, Watford WD25 7LR",
        telephone: "+44 345 084 0900",
        email: "info@wbstudiotour.co.uk",
        transport: "Train: Watford Junction"
    },
    {
        name: "West End Theatre Show",
        category: "Entertainment",
        price: 30,
        distance: 1.2,
        popularity: 4.6,
        rating: 4,
        popularityDescription: "★ Award-winning shows in the West End — iconic nightlife option.",
        description: "Catch award-winning musicals in the world-famous West End.",
        image: "images/westend.jpg",
        link: "https://officiallondontheatre.com/",
        lat: 51.5128,
        lng: -0.1300,
        address: "West End, London",
        telephone: "+44 20 7087 7747",
        email: "info@officiallondontheatre.com",
        transport: "Tube: Leicester Square | Train: Charing Cross"
    },
    {
        name: "Madame Tussauds",
        category: "Entertainment",
        price: 33,
        distance: 2.0,
        popularity: 4.4,
        rating: 4,
        popularityDescription: "★ Famous wax museum — still popular but attracts more tourists than locals.",
        description: "Snap selfies with lifelike wax celebrities and historical figures.",
        image: "images/tussauds.jpg",
        link: "https://www.madametussauds.com/london/",
        lat: 51.5230,
        lng: -0.1544,
        address: "Marylebone Rd, London NW1 5LR",
        telephone: "+44 20 7487 0351",
        email: "info@madametussauds.com",
        transport: "Tube: Baker Street | Train: Marylebone"
    },
    {
        name: "London Zoo",
        category: "Family",
        price: 29,
        distance: 3.2,
        popularity: 4.6,
        rating: 4,
        popularityDescription: "★ Top destination for families with young kids.",
        description: "Over 750 species to explore — ideal for kids.",
        image: "images/zoo.jpg",
        link: "https://www.zsl.org/zsl-london-zoo",
        lat: 51.5353,
        lng: -0.1534,
        address: "Outer Cir, London NW1 4RY",
        telephone: "+44 20 7722 3333",
        email: "info@zsl.org",
        transport: "Tube: Camden Town | Train: Euston"
    },
    {
        name: "Science Museum",
        category: "Family",
        price: 0,
        distance: 3.3,
        popularity: 4.5,
        rating: 4,
        popularityDescription: "★ Highly rated for interactive learning — great for kids and adults.",
        description: "Free hands-on exhibits, from space travel to robots.",
        image: "images/sciencemuseum.jpg",
        link: "https://www.sciencemuseum.org.uk/",
        lat: 51.4978,
        lng: -0.1745,
        address: "Exhibition Rd, South Kensington, London SW7 2DD",
        telephone: "+44 20 7942 4000",
        email: "info@sciencemuseum.ac.uk",
        transport: "Tube: South Kensington | Train: West Brompton"
    },
    {
        name: "Sea Life London Aquarium",
        category: "Family",
        price: 28,
        distance: 0.5,
        popularity: 4.4,
        rating: 3,
        popularityDescription: "★ Popular Southbank spot for families — queues at peak times.",
        description: "Sharks, jellyfish and penguins near the Southbank.",
        image: "images/sealife.jpg",
        link: "https://www.visitsealife.com/london/",
        lat: 51.5020,
        lng: -0.1199,
        address: "County Hall, Westminster Bridge Rd, London SE1 7PB",
        telephone: "+44 20 7967 8000",
        email: "info@sealifelondon.com",
        transport: "Tube: Waterloo | Train: Waterloo"
    },
    {
        name: "Rainforest Café",
        category: "Dining",
        price: 18,
        distance: 0.8,
        popularity: 4.3,
        rating: 3,
        popularityDescription: "★ A hit with children — themed experience overshadows the food.",
        description: "Family-friendly themed dining in the heart of London.",
        image: "images/rainforestcafe.jpg",
        link: "https://therainforestcafe.co.uk/",
        lat: 51.5104,
        lng: -0.1339,
        address: "20 Shaftesbury Ave, London W1D 7EU",
        telephone: "+44 20 7434 3111",
        email: "info@therainforestcafe.co.uk",
        transport: "Tube: Piccadilly Circus | Train: Charing Cross"
    },
    {
        name: "Dishoom Covent Garden",
        category: "Dining",
        price: 25,
        distance: 0.9,
        popularity: 4.8,
        rating: 5,
        popularityDescription: "★ Extremely popular — long queues even on weekdays.",
        description: "Bombay-inspired Indian food with beautiful décor.",
        image: "images/dishoom.jpg",
        link: "https://www.dishoom.com/covent-garden/",
        lat: 51.5125,
        lng: -0.1245,
        address: "12 Upper St Martin's Ln, London WC2H 9FB",
        telephone: "+44 20 7420 9320",
        email: "info@dishoom.com",
        transport: "Tube: Covent Garden | Train: Charing Cross"
    },
    {
        name: "Borough Market",
        category: "Dining",
        price: 10,
        distance: 1.3,
        popularity: 4.7,
        rating: 5,
        popularityDescription: "★ Foodie haven — street food, produce, and tourists everywhere.",
        description: "London's best street food and artisanal eats.",
        image: "images/boroughmarket.jpg",
        link: "https://boroughmarket.org.uk/",
        lat: 51.5054,
        lng: -0.0900,
        address: "8 Southwark St, London SE1 1TL",
        telephone: "+44 20 7407 1002",
        email: "info@boroughmarket.org.uk",
        transport: "Tube: London Bridge | Train: London Bridge"
    }
];