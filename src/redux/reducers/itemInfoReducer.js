const itemFromServer = {
  id: 2,
  title: 'CorLiving Kelsey Brownish',
  descr: 'This versatile coffee table is crafted in solid oak and features a smooth, linseed oil finish which retains the natural beauty of the grain.',
  price: 241,
  image: 'img2-large.jpg',
  rate: 5,
  additional: {
    brand: 'LumiSource',
    manufacturer: 'France',
    material: 'Leather',
    room: 'Dining Room',
    style: 'Modern',
  },
  tags: [
    'decoration', 'interior', 'cool design', 'kitchen', 'living room',
  ],
  categories: [
    'Cozy Modern Furniture', 'Living Room Furniture', 'Wooden Room Sets',
  ],
};

const defaultItemInfoState = {
  itemInfo: {
    id: 0,
    title: '',
    descr: '',
    price: 0,
    image: '',
    rate: 0,
    additional: {},
    tags: [],
    categories: [],
  },
};


const itemInfoReducer = (state = defaultItemInfoState, action) => {
  switch (action.type) {
    case 'LOAD_ITEM':
      return { ...state, itemInfo: itemFromServer };
    default:
      return state;
  }
};

export default itemInfoReducer;
