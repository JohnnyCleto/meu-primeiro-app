const restaurants = [
  {
    id: 1,
    name: "Burger House",
    category: "Hambúrguer • Lanches",
    rating: "4.8",
    deliveryTime: "30-40 min",
    image: require("../../assets/images/burger1.jpeg"),
    emoji: "🍔",
    description: "Hambúrgueres artesanais, batatas e bebidas.",
    foods: [
      {
        id: 1,
        name: "Classic Burger",
        price: 29.9,
        image: "🍔",
        description:
          "Hambúrguer artesanal com queijo, alface, tomate e molho especial da casa.",
      },
      {
        id: 2,
        name: "Cheese Burger",
        price: 32.9,
        image: "🍔",
        description:
          "Hambúrguer artesanal com queijo, cebola e molho especial.",
      },
      {
        id: 3,
        name: "Batata Crocante",
        price: 14.9,
        image: "🍟",
        description: "Porção de batatas fritas crocantes.",
      },
      {
        id: 4,
        name: "Refrigerante",
        price: 7.9,
        image: "🥤",
        description: "Refrigerante gelado de 350ml.",
      },
    ],
  },

  {
    id: 2,
    name: "Pizza Mania",
    category: "Pizza • Italiana",
    rating: "4.7",
    deliveryTime: "35-45 min",
    image: require("../../assets/images/pizza1.jpeg"),
    emoji: "🍕",
    description:
      "Pizzas artesanais preparadas com ingredientes selecionados.",
    foods: [
      {
        id: 5,
        name: "Pizza de Calabresa",
        price: 39.9,
        image: "🍕",
        description: "Pizza com molho de tomate, queijo e calabresa.",
      },
      {
        id: 6,
        name: "Pizza de Queijo",
        price: 37.9,
        image: "🍕",
        description:
          "Pizza tradicional com molho de tomate e bastante queijo.",
      },
      {
        id: 7,
        name: "Pizza de Frango",
        price: 42.9,
        image: "🍕",
        description:
          "Pizza de frango desfiado com queijo e molho especial.",
      },
    ],
  },

  {
    id: 3,
    name: "Sushi House",
    category: "Japonesa • Sushi",
    rating: "4.9",
    deliveryTime: "40-50 min",
    image: require("../../assets/images/SushiHouse.jpeg"),
    description: "Comida japonesa preparada na hora.",
    foods: [
      {
        id: 8,
        name: "Combo Sushi",
        price: 49.9,
        image: require("../../assets/images/ComboSushi.jpeg"),
        description: "Combo com diferentes tipos de sushi.",
      },
      {
        id: 9,
        name: "Temaki Salmão",
        price: 24.9,
        image: require("../../assets/images/Salmão.jpeg"),
        description: "Temaki de salmão com arroz e alga.",
      },
    ],
  },
];

export default restaurants;