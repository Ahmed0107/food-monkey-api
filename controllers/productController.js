// TODO: menu categories should be added

const getMenuItems = (req, res) => {
  const { menuType } = req.params;
  const menuItems = [
    // TODO: food items from (id = 1) to (id = 5)
    {
      id: 1,
      title: "Caper and vermicelli spaghetti",
      menuType: "food",
      price: 53,
      rating: 3.7,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/food_1.jpeg`,
    },

    {
      id: 2,
      title: "Scallop and turkey pie",
      menuType: "food",
      price: 87,
      rating: 4.2,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/food_2.jpeg`,
    },

    {
      id: 3,
      title: "Pepper and tofu maki",
      menuType: "food",
      price: 25,
      rating: 4.5,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/food_3.jpeg`,
    },

    {
      id: 4,
      title: "Courgette and bean risotto",
      menuType: "food",
      price: 65,
      rating: 4.8,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/food_4.jpeg`,
    },
    {
      id: 5,
      title: "Vermicelli and rocket penne",
      menuType: "food",
      price: 82,
      rating: 4.2,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/food_5.jpeg`,
    },

    // TODO: beverages items from (id = 6) to (id = 10)
    {
      id: 6,
      title: "Thyme and ginger crumble",
      menuType: "beverages",
      price: 12,
      rating: 4.2,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/beverages_1.jpeg`,
    },

    {
      id: 7,
      title: "Sweetcorn and dolcelatte pasta",
      menuType: "beverages",
      price: 24,
      rating: 4.5,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/beverages_2.jpeg`,
    },

    {
      id: 8,
      title: "Fennel and coriander stew",
      menuType: "beverages",
      price: 15,
      rating: 4.8,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/beverages_3.jpeg`,
    },

    {
      id: 9,
      title: "Coconut and currant cake",
      menuType: "beverages",
      price: 16,
      rating: 4.9,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/beverages_4.jpeg`,
    },

    {
      id: 10,
      title: "Banana and camembert pancake",
      menuType: "beverages",
      price: 25,
      rating: 3.9,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/beverages_5.jpeg`,
    },

    // TODO: desserts items from (id = 11) to (id = 15)
    {
      id: 11,
      title: "Cream and milk chocolate mousse",
      menuType: "desserts",
      price: 17,
      rating: 3.7,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/desserts_1.jpeg`,
    },

    {
      id: 12,
      title: "Crab and squash vindaloo",
      menuType: "desserts",
      price: 18,
      rating: 3.7,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/desserts_2.jpeg`,
    },

    {
      id: 13,
      title: "Lime and chilli skewers",
      menuType: "desserts",
      price: 25,
      rating: 3.7,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/desserts_3.jpeg`,
    },

    {
      id: 14,
      title: "Yoghurt and sultana cake",
      menuType: "desserts",
      price: 26,
      rating: 3.7,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/desserts_4.jpeg`,
    },

    {
      id: 15,
      title: "Marjoram and sorrel risotto",
      menuType: "desserts",
      price: 27,
      rating: 3.7,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/desserts_5.jpeg`,
    },

    // TODO: promotions items from (id = 16) to (id = 20)
    {
      id: 16,
      title: "Fish and chilli skewers",
      menuType: "promotions",
      price: 24,
      rating: 3.7,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/promotions_1.jpeg`,
    },

    {
      id: 17,
      title: "Persimmon and bilberry jam",
      menuType: "promotions",
      price: 28,
      rating: 3.7,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/promotions_2.jpeg`,
    },

    {
      id: 18,
      title: "Tofu and sausage gyoza",
      menuType: "promotions",
      price: 33,
      rating: 3.7,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/promotions_3.jpeg`,
    },

    {
      id: 19,
      title: "Black pepper and tahini ciabatta",
      menuType: "promotions",
      price: 28,
      rating: 3.7,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/promotions_4.jpeg`,
    },

    {
      id: 20,
      title: "Squash and bresaola",
      menuType: "promotions",
      price: 24,
      rating: 3.7,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/promotions_5.jpeg`,
    },
  ];

  const foundedItems = [];

  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].menuType === menuType) {
      foundedItems.push(menuItems[i]);
    }
  }

  res.send(foundedItems);
};

const getItemById = (req, res) => {
  const { id } = req.params;

  const menuItems = [
    // TODO: food items from (id = 1) to (id = 5)
    {
      id: 1,
      title: "Caper and vermicelli spaghetti",
      menuType: "food",
      price: 53,
      rating: 3.7,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/food_1.jpeg`,
    },

    {
      id: 2,
      title: "Scallop and turkey pie",
      menuType: "food",
      price: 87,
      rating: 4.2,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/food_2.jpeg`,
    },

    {
      id: 3,
      title: "Pepper and tofu maki",
      menuType: "food",
      price: 25,
      rating: 4.5,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/food_3.jpeg`,
    },

    {
      id: 4,
      title: "Courgette and bean risotto",
      menuType: "food",
      price: 65,
      rating: 4.8,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/food_4.jpeg`,
    },
    {
      id: 5,
      title: "Vermicelli and rocket penne",
      menuType: "food",
      price: 82,
      rating: 4.2,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/food_5.jpeg`,
    },

    // TODO: beverages items from (id = 6) to (id = 10)
    {
      id: 6,
      title: "Thyme and ginger crumble",
      menuType: "beverages",
      price: 12,
      rating: 4.2,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/beverages_1.jpeg`,
    },

    {
      id: 7,
      title: "Sweetcorn and dolcelatte pasta",
      menuType: "beverages",
      price: 24,
      rating: 4.5,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/beverages_2.jpeg`,
    },

    {
      id: 8,
      title: "Fennel and coriander stew",
      menuType: "beverages",
      price: 15,
      rating: 4.8,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/beverages_3.jpeg`,
    },

    {
      id: 9,
      title: "Coconut and currant cake",
      menuType: "beverages",
      price: 16,
      rating: 4.9,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/beverages_4.jpeg`,
    },

    {
      id: 10,
      title: "Banana and camembert pancake",
      menuType: "beverages",
      price: 25,
      rating: 3.9,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/beverages_5.jpeg`,
    },

    // TODO: desserts items from (id = 11) to (id = 15)
    {
      id: 11,
      title: "Cream and milk chocolate mousse",
      menuType: "desserts",
      price: 17,
      rating: 3.7,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/desserts_1.jpeg`,
    },

    {
      id: 12,
      title: "Crab and squash vindaloo",
      menuType: "desserts",
      price: 18,
      rating: 3.7,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/desserts_2.jpeg`,
    },

    {
      id: 13,
      title: "Lime and chilli skewers",
      menuType: "desserts",
      price: 25,
      rating: 3.7,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/desserts_3.jpeg`,
    },

    {
      id: 14,
      title: "Yoghurt and sultana cake",
      menuType: "desserts",
      price: 26,
      rating: 3.7,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/desserts_4.jpeg`,
    },

    {
      id: 15,
      title: "Marjoram and sorrel risotto",
      menuType: "desserts",
      price: 27,
      rating: 3.7,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/desserts_5.jpeg`,
    },

    // TODO: promotions items from (id = 16) to (id = 20)
    {
      id: 16,
      title: "Fish and chilli skewers",
      menuType: "promotions",
      price: 24,
      rating: 3.7,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/promotions_1.jpeg`,
    },

    {
      id: 17,
      title: "Persimmon and bilberry jam",
      menuType: "promotions",
      price: 28,
      rating: 3.7,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/promotions_2.jpeg`,
    },

    {
      id: 18,
      title: "Tofu and sausage gyoza",
      menuType: "promotions",
      price: 33,
      rating: 3.7,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/promotions_3.jpeg`,
    },

    {
      id: 19,
      title: "Black pepper and tahini ciabatta",
      menuType: "promotions",
      price: 28,
      rating: 3.7,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/promotions_4.jpeg`,
    },

    {
      id: 20,
      title: "Squash and bresaola",
      menuType: "promotions",
      price: 24,
      rating: 3.7,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/promotions_5.jpeg`,
    },
  ];

  const foundedItem = menuItems.find((item) => item.id == id);
  if (foundedItem) {
    res.send(foundedItem);
  } else {
    res.send({
      message: "no product found with this id",
    });
  }
};

const getOffers = (req, res) => {
  const menuItems = [
    // TODO: food items from (id = 1) to (id = 5)
    {
      id: 1,
      title: "Caper and vermicelli spaghetti",
      menuType: "food",
      price: 40,
      oldPrice: 53,
      rating: 3.7,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/food_1.jpeg`,
    },

    {
      id: 2,
      title: "Scallop and turkey pie",
      menuType: "food",
      price: 70,
      oldPrice: 87,
      rating: 4.2,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/food_2.jpeg`,
    },

    {
      id: 3,
      title: "Pepper and tofu maki",
      menuType: "food",
      price: 19,
      oldPrice: 25,
      rating: 4.5,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/food_3.jpeg`,
    },

    {
      id: 4,
      title: "Courgette and bean risotto",
      menuType: "food",
      price: 50,
      oldPrice: 65,
      rating: 4.8,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/food_4.jpeg`,
    },
    {
      id: 5,
      title: "Vermicelli and rocket penne",
      menuType: "food",
      price: 70,
      oldPrice: 82,
      rating: 4.2,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/food_5.jpeg`,
    },
  ];

  res.send(menuItems);
};

const getFoodTypes = (req, res) => {
  const foodTypes = [
    {
      title: "Egyptian",
      image: `${req.protocol}://${req.headers.host}/uploads/type_image_1.png`,
    },
    {
      title: "Sri Lankan",
      image: `${req.protocol}://${req.headers.host}/uploads/type_image_2.png`,
    },
    {
      title: "Khaligi",
      image: `${req.protocol}://${req.headers.host}/uploads/type_image_3.png`,
    },
    {
      title: "Indian",
      image: `${req.protocol}://${req.headers.host}/uploads/type_image_4.png`,
    },
    {
      title: "Italian",
      image: `${req.protocol}://${req.headers.host}/uploads/type_image_5.png`,
    },
  ];

  res.send(foodTypes);
};

module.exports = { getMenuItems, getItemById, getOffers, getFoodTypes };
