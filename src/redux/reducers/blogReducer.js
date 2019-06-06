
const blogPosts = [
  {
    id: 0,
    title: 'School Is Soon: Set Up',
    content: 'We have some simple decorating ideas to make your coffee table stylish and functional. It all starts and',
    date: 'September 17, 2018',
    image: 'post0.png',
  },
  {
    id: 1,
    title: 'School Is Soon: Set Up',
    content: 'We have some simple decorating ideas to make your coffee table stylish and functional. It all starts and',
    date: 'September 17, 2018',
    image: 'post1.png',
  },
  {
    id: 2,
    title: 'School Is Soon: Set Up',
    content: 'We have some simple decorating ideas to make your coffee table stylish and functional. It all starts and',
    date: 'September 17, 2018',
    image: 'post2.png',
  },
];

const defaultBlog = {
  blogPosts: [],
};


const BlogReducer = (state = defaultBlog, action) => {
  switch (action.type) {
    case 'GET_BLOGPOSTS':
      return { ...state, blogPosts };
    default:
      return state;
  }
};

export default BlogReducer;
