const trendingData = [
  {
    id: 0,
    title: 'LumiSource Gianna Mid-Century Modern Dining Chair',
    price: 11.99,
    image: 'img0.jpg',
    rate: 2,
  },
  {
    id: 1,
    title: 'Lifestyle Solutions Charcoal Gibbs Multi Position Push Back Recliner',
    price: 450.00,
    image: 'img1.jpg',
    rate: 4,
  },
  {
    id: 2,
    title: 'CorLiving Kelsey Brownish',
    price: 241.00,
    image: 'img2.jpg',
    rate: 5,
  },
  {
    id: 3,
    title: 'Richmond End Table – 94118',
    price: 87.90,
    image: 'img3.jpg',
    rate: 1,
  },
  {
    id: 4,
    title: 'Winsome Jefferson End Table',
    price: 184.00,
    image: 'img4.jpg',
    rate: 3,
  },
  {
    id: 5,
    title: 'CorLiving Kate White Bonded Leather Recliner',
    price: 321.00,
    image: 'img5.jpg',
    rate: 5,
  },
  {
    id: 6,
    title: 'Modway Pyramid Indoor or Outdoor Dining Side Chair',
    price: 199.99,
    image: 'img6.jpg',
    rate: 5,
  },
  {
    id: 7,
    title: 'WyndenHall Normandy End Side Table',
    price: 115.00,
    image: 'img7.jpg',
    rate: 4,
  }

];

const TrendingReducer = (state = defaultTrending, action) => {
  switch (action.type) {
    case 'GET_TRENDING':
      return {...state, ...{trendingData: trendingData}}
    default:
      return state;
  }
}

const defaultTrending = {
  trendingData: []
}

export default TrendingReducer
