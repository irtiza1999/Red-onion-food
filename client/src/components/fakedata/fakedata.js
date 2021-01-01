const foods = [
  {
    key: '1',
    name: 'Healthy Meal Plan',
    shortDescription: 'How we dream about our future',
    longDescription:
      'How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future',
    price: 20.99,
    imgName: 'lunch1.png',
    category: 'Lunch',
  },
  {
    key: '2',
    name: 'Fried Chicken Bento',
    shortDescription: 'How we dream about our future',
    longDescription:
      'How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future',
    price: 9.99,
    imgName: 'lunch2.png',
    category: 'Lunch',
  },
  {
    key: '3',
    name: 'Tarragon-Rubbled-Salmon',
    shortDescription: 'How we dream about our future',
    longDescription:
      'How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future',
    price: 7.99,
    imgName: 'lunch3.png',
    category: 'Lunch',
  },
  {
    key: '4',
    name: 'Indian Lunch',
    shortDescription: 'How we dream about our future',
    longDescription:
      'How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future',
    price: 8.99,
    imgName: 'lunch4.png',
    category: 'Lunch',
  },
  {
    key: '5',
    name: 'Beef Steak',
    shortDescription: 'How we dream about our future',
    longDescription:
      'How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future',
    price: 15.99,
    imgName: 'lunch5.png',
    category: 'Lunch',
  },
  {
    key: '6',
    name: 'Honey-Soy-Glazed Salmon with Peppers',
    shortDescription: 'How we dream about our future',
    longDescription:
      'How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future',
    price: 7.99,
    imgName: 'lunch6.png',
    category: 'Lunch',
  },
  {
    key: '7',
    name: 'Bagel and cream cheese',
    shortDescription: 'How we dream about our future',
    longDescription:
      'How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future',
    price: 6.99,
    imgName: 'breakfast1.png',
    category: 'Breakfast',
  },
  {
    key: '8',
    name: 'Breakfast Sandwich',
    shortDescription: 'How we dream about our future',
    longDescription:
      'How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future',
    price: 9.99,
    imgName: 'breakfast2.png',
    category: 'Breakfast',
  },
  {
    key: '9',
    name: 'Baked Chicken',
    shortDescription: 'How we dream about our future',
    longDescription:
      'How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future',
    price: 10.99,
    imgName: 'breakfast3.png',
    category: 'Breakfast',
  },
  {
    key: '10',
    name: 'Eggs Benedict',
    shortDescription: 'How we dream about our future',
    longDescription:
      'How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future',
    price: 8.99,
    imgName: 'breakfast4.png',
    category: 'Breakfast',
  },
  {
    key: '11',
    name: 'Toast Croissant Fried Egg',
    shortDescription: 'How we dream about our future',
    longDescription:
      'How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future',
    price: 19.99,
    imgName: 'breakfast5.png',
    category: 'Breakfast',
  },
  {
    key: '12',
    name: 'Full Breakfast Fried Egg Toast Brunch',
    shortDescription: 'How we dream about our future',
    longDescription:
      'How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future',
    price: 3.99,
    imgName: 'breakfast6.png',
    category: 'Breakfast',
  },
  {
    key: '13',
    name: 'Salmon with Grape Fruit and Lentil Salad',
    shortDescription: 'How we dream about our future',
    longDescription:
      'How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future',
    price: 9.99,
    imgName: 'dinner1.png',
    category: 'Dinner',
  },
  {
    key: '14',
    name: 'Lemony Salmon Piccata',
    shortDescription: 'How we dream about our future',
    longDescription:
      'How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future',
    price: 10.99,
    imgName: 'dinner2.png',
    category: 'Dinner',
  },
  {
    key: '15',
    name: 'Pork Tenderloin With Quinoa Pilaf',
    shortDescription: 'How we dream about our future',
    longDescription:
      'How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future',
    price: 12.99,
    imgName: 'dinner3.png',
    category: 'Dinner',
  },
  {
    key: '16',
    name: 'French fries with cheese',
    shortDescription: 'How we dream about our future',
    longDescription:
      'How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future',
    price: 8.99,
    imgName: 'dinner4.png',
    category: 'Dinner',
  },
  {
    key: '17',
    name: 'Garlic Butter Baked Salmon',
    shortDescription: 'How we dream about our future',
    longDescription:
      'How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future',
    price: 6.99,
    imgName: 'dinner5.png',
    category: 'Dinner',
  },
  {
    key: '18',
    name: 'Baked Chicken',
    shortDescription: 'How we dream about our future',
    longDescription:
      'How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future. How we dream about our future',
    price: 9.99,
    imgName: 'dinner6.png',
    category: 'Dinner',
  },
]

export default foods
