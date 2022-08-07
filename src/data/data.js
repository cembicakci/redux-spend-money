const data = [
    {
      id: 1,
      title: 'Big Mac',
      price: 2,
      image: 'https://neal.fun/spend/images/big-mac.jpg',
      amount: 0
    },
    {
      id: 2,
      title: 'Flip Flops',
      price: 3,
      image: 'https://neal.fun/spend/images/flip-flops.jpg',
      amount: 0
    },
    {
      id: 3,
      title: 'Coca-Cola Pack',
      price: 5,
      image: 'https://neal.fun/spend/images/coca-cola-pack.jpg',
      amount: 0
    },
    {
      id: 4,
      title: 'Movie Ticket',
      price: 12,
      image: 'https://neal.fun/spend/images/movie-ticket.jpg',
      amount: 0
    },
    {
      id: 5,
      title: 'Book',
      price: 15,
      image: 'https://neal.fun/spend/images/book.jpg',
      amount: 0
    },
    {
      id: 6,
      title: 'Lobster Dinner',
      price: 45,
      image: 'https://neal.fun/spend/images/lobster-dinner.jpg',
      amount: 0
    },
    {
      id: 7,
      title: 'Video Game',
      price: 60,
      image: 'https://neal.fun/spend/images/video-game.jpg',
      amount: 0
    },
    {
      id: 8,
      title: 'Amazon Echo',
      price: 99,
      image: 'https://neal.fun/spend/images/amazon-echo.jpg',
      amount: 0
    },
    {
      id: 9,
      title: 'Year of Netflix',
      price: 100,
      image: 'https://neal.fun/spend/images/year-of-netflix.jpg',
      amount: 0
    },
    {
      id: 10,
      title: 'Air Jordans',
      price: 125,
      image: 'https://neal.fun/spend/images/air-jordans.jpg',
      amount: 0
    },
    {
      id: 11,
      title: 'Airpods',
      price: 199,
      image: 'https://neal.fun/spend/images/airpods.jpg',
      amount: 0
    },
    {
      id: 12,
      title: 'Gaming Console',
      price: 299,
      image: 'https://neal.fun/spend/images/gaming-console.jpg',
      amount: 0
    },
    {
      id: 13,
      title: 'Drone',
      price: 350,
      image: 'https://neal.fun/spend/images/drone.jpg',
      amount: 0
    },
    {
      id: 14,
      title: 'Smartphone',
      price: 699,
      image: 'https://neal.fun/spend/images/smartphone.jpg',
      amount: 0
    },
    {
      id: 15,
      title: 'Bike',
      price: 800,
      image: 'https://neal.fun/spend/images/bike.jpg',
      amount: 0
    },
    {
      id: 16,
      title: 'Kitten',
      price: 1500,
      image: 'https://neal.fun/spend/images/kitten.jpg',
      amount: 0
    },
    {
      id: 17,
      title: 'Puppy',
      price: 1500,
      image: 'https://neal.fun/spend/images/puppy.jpg',
      amount: 0
    },
    {
      id: 18,
      title: 'Auto Rickshaw',
      price: 2300,
      image: 'https://neal.fun/spend/images/auto-rickshaw.jpg',
      amount: 0
    },
    {
      id: 19,
      title: 'Horse',
      price: 2500,
      image: 'https://neal.fun/spend/images/horse.jpg',
      amount: 0
    },
    {
      id: 20,
      title: 'Acre of Farmland',
      price: 3000,
      image: 'https://neal.fun/spend/images/acre-of-farmland.jpg',
      amount: 0
    },
    {
      id: 21,
      title: 'Designer Handbag',
      price: 5500,
      image: 'https://neal.fun/spend/images/designer-handbag.jpg',
      amount: 0
    },
    {
      id: 22,
      title: 'Hot Tub',
      price: 6000,
      image: 'https://neal.fun/spend/images/hot-tub.jpg',
      amount: 0
    },
    {
      id: 23,
      title: 'Luxury Wine',
      price: 7000,
      image: 'https://neal.fun/spend/images/luxury-wine.jpg',
      amount: 0
    },
    {
      id: 24,
      title: 'Diamond Ring',
      price: 10000,
      image: 'https://neal.fun/spend/images/diamond-ring.jpg',
      amount: 0
    },
    {
      id: 25,
      title: 'Jet Ski',
      price: 12000,
      image: 'https://neal.fun/spend/images/jet-ski.jpg',
      amount: 0
    },
    {
      id: 26,
      title: 'Rolex',
      price: 15000,
      image: 'https://neal.fun/spend/images/rolex.jpg',
      amount: 0
    },
    {
      id: 27,
      title: 'Ford F-150',
      price: 30000,
      image: 'https://neal.fun/spend/images/ford-f-150.jpg',
      amount: 0
    },
    {
      id: 28,
      title: 'Tesla',
      price: 75e3,
      image: 'https://neal.fun/spend/images/tesla.jpg',
      amount: 0
    },
    {
      id: 29,
      title: 'Monster Truck',
      price: 15e4,
      image: 'https://neal.fun/spend/images/monster-truck.jpg',
      amount: 0
    },
    {
      id: 30,
      title: 'Ferrari',
      price: 25e4,
      image: 'https://neal.fun/spend/images/ferrari.jpg',
      amount: 0
    },
    {
      id: 31,
      title: 'Single Family Home',
      price: 3e5,
      image: 'https://neal.fun/spend/images/single-family-home.jpg',
      amount: 0
    },
    {
      id: 32,
      title: 'Gold Bar',
      price: 7e5,
      image: 'https://neal.fun/spend/images/gold-bar.jpg',
      amount: 0
    },
    {
      id: 33,
      title: 'McDonalds Franchise',
      price: 15e5,
      image: 'https://neal.fun/spend/images/mcdonalds-franchise.jpg',
      amount: 0
    },
    {
      id: 34,
      title: 'Superbowl Ad',
      price: 525e4,
      image: 'https://neal.fun/spend/images/superbowl-ad.jpg',
      amount: 0
    },
    {
      id: 35,
      title: 'Yacht',
      price: 75e5,
      image: 'https://neal.fun/spend/images/yacht.jpg',
      amount: 0
    },
    {
      id: 36,
      title: 'M1 Abrams',
      price: 8e6,
      image: 'https://neal.fun/spend/images/m1-abrams.jpg',
      amount: 0
    },
    {
      id: 37,
      title: 'Formula 1 Car',
      price: 15e6,
      image: 'https://neal.fun/spend/images/formula-1-car.jpg',
      amount: 0
    },
    {
      id: 38,
      title: 'Apache Helicopter',
      price: 31e6,
      image: 'https://neal.fun/spend/images/apache-helicopter.jpg',
      amount: 0
    },
    {
      id: 39,
      title: 'Mansion',
      price: 45e6,
      image: 'https://neal.fun/spend/images/mansion.jpg',
      amount: 0
    },
    {
      id: 40,
      title: 'Make a Movie',
      price: 1e8,
      image: 'https://neal.fun/spend/images/make-a-movie.jpg',
      amount: 0
    },
    {
      id: 41,
      title: 'Boeing 747',
      price: 148e6,
      image: 'https://neal.fun/spend/images/boeing-747.jpg',
      amount: 0
    },
    {
      id: 42,
      title: 'Mona Lisa',
      price: 780000000,
      image: 'https://neal.fun/spend/images/mona-lisa.jpg',
      amount: 0
    },
    {
      id: 43,
      title: 'Skyscraper',
      price: 85e7,
      image: 'https://neal.fun/spend/images/skyscraper.jpg',
      amount: 0
    },
    {
      id: 44,
      title: 'Cruise Ship',
      price: 93e7,
      image: 'https://neal.fun/spend/images/cruise-ship.jpg',
      amount: 0
    },
    {
      id: 45,
      title: 'NBA Team',
      price: 2120000000,
      image: 'https://neal.fun/spend/images/nba-team.jpg',
      amount: 0
    },
  ];
  
  export default data;