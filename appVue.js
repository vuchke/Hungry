/////////////                     Mob Nav                     /////////////
const mobileNavApp = {
  data() {
    return {
      mobNavOpen: false,
    };
  },
};
Vue.createApp(mobileNavApp).mount("#mobile-nav");

/////////////                Menu App                     /////////////
const menuApp = {
  data() {
    return {
      currentMenu: "pizza",
      soups: [
        {
          img: "./assets/images/menu-images/soup/image9.jpg",
          name: "Italian Wedding Soup",
          price: 11.5,
          description:
            "Classic soup consisting of chicken broth, bite-size meatballs, fresh spinach, and acini di pepe pasta",
        },
        {
          img: "./assets/images/menu-images/soup/image1.jpg",
          name: "Chicken Noodle Soup",
          price: 11.5,
          description:
            "Tender chunks of chicken breast, fresh seasonal vegetables, and egg noodles in a flavorful chicken broth",
        },
        {
          img: "./assets/images/menu-images/soup/image2.jpg",
          name: "Chicken Tortellini",
          price: 11.5,
          description:
            "Tender chunks of chicken breast, fresh seasonal vegetables, and cheese-stuffed tortellini in a succulent chicken broth",
        },
        {
          img: "./assets/images/menu-images/soup/image4.jpg",
          name: "Chicken Dumpling Soup",
          price: 11.5,
          description: "Creamy chicken soup with delicious potato dumplings",
        },
        {
          img: "./assets/images/menu-images/soup/image3.jpg",
          name: "Cream of Mushroom",
          price: 11.5,
          description:
            "Freshly sliced portabella mushrooms swimming in a rich cream sauce",
        },
        {
          img: "./assets/images/menu-images/soup/image5.jpg",
          name: "Minestrone",
          price: 11.5,
          description:
            "Fresh vegetables, beans, and pasta in a light tomato broth topped with grated parmesan cheese",
        },
        {
          img: "./assets/images/menu-images/soup/image6.jpg",
          name: "French Onion",
          price: 11.5,
          description:
            "Golden brown onion broth topped with sourdough bread and melted mozzarella cheese",
        },
        {
          img: "./assets/images/menu-images/soup/image7.jpg",
          name: "Lobster Bisque",
          price: 11.5,
          description:
            "Smooth, creamy soup heavenly flavored and simmered with fresh chunks of real lobster",
        },
        {
          img: "./assets/images/menu-images/soup/image8.jpg",
          name: "Cauliflower Soup",
          price: 11.5,
          description:
            "Pureed cauliflower creates a wonderfully creamy soup; meaty shiitakes add textural flair. ",
        },
        {
          img: "./assets/images/menu-images/soup/image10.jpg",
          name: "Hot And Sour Shrimp Soup",
          price: 11.5,
          description:
            "With its lively dance of flavors, this soup is a spring tonic. ",
        },
      ],
      pizzas: [
        {
          img: "./assets/images/menu-images/pizza/pizza1.jpg",
          name: "Pizza capricciosa",
          price: 24.99,
          description:
            "Pizza capricciosa is a style of pizza in Italian cuisine prepared with mozzarella cheese, Italian baked ham, mushroom, artichoke and tomato.",
        },
        {
          img: "./assets/images/menu-images/pizza/pizza2.jpg",
          name: "Amore Roma",
          price: 27.99,
          description:
            "An old world masterpiece! Pepperoni, Italian sausage, mushrooms and black olives ",
        },
        {
          img: "./assets/images/menu-images/pizza/pizza3.jpg",
          name: "Americana",
          price: 24.99,
          description:
            "A bacon cheeseburger pizza with a mustard glaze, topped with mozzarella, ground beef, bacon and cheddar.",
        },
        {
          img: "./assets/images/menu-images/pizza/pizza4.jpg",
          name: "Classic Supreme",
          price: 31.99,
          description:
            "Pepperoni, Italian sausage, black olives, mushrooms, green peppers and red onions",
        },
        {
          img: "./assets/images/menu-images/pizza/pizza5.jpg",
          name: "Chicken Bacon Ranch",
          price: 22.99,
          description:
            "Our own grilled chicken and bacon, sitting on a bed of creamy ranch dressing and mozzarella",
        },
        {
          img: "./assets/images/menu-images/pizza/pizza6.jpg",
          name: "Buffalo Chicken",
          price: 22.99,
          description:
            "Spicy delight! From the city that never sleeps, our own famous grilled chicken marinated in our wing sauce, on a glaze of ranch dressing, topped with fresh mozzarella",
        },
        {
          img: "./assets/images/menu-images/pizza/pizza7.jpg",
          name: "Chicken Caesar",
          price: 28.99,
          description:
            "Creamy Caesar dressing with a hint of garlic, topped with marinated chicken breast and mozzarella; baked, then coated with shredded lettuce and fresh tomatoes",
        },
        {
          img: "./assets/images/menu-images/pizza/pizza8.jpg",
          name: "Ciao Bella",
          price: 29.99,
          description:
            "Fresh basil, tomatoes and garlic, with mozzarella and your choice of tomato sauce or olive oil glaze",
        },
        {
          img: "./assets/images/menu-images/pizza/pizza9.jpg",
          name: "Grecian Gourmet",
          price: 26.99,
          description:
            "Feta, black olives, spinach, green peppers, tomatoes and mozzarella",
        },
        {
          img: "./assets/images/menu-images/pizza/pizza10.jpg",
          name: "Texas Bar-B-Que",
          price: 39.99,
          description:
            "Olive oil glaze smothered with barbecued chicken breast, red onions, fresh cilantro and mozzarella",
        },
      ],
      pastas: [
        {
          img: "./assets/images/menu-images/pasta/pasta1.jpg",
          name: "seafood linguine florentine ",
          price: 22.5,
          description:
            "Prawns, shrimp and mussels sautéed with spinach, in a white wine cream sauce",
        },
        {
          img: "./assets/images/menu-images/pasta/pasta2.jpeg",
          name: "sicilian penne ",
          price: 20.5,
          description:
            "Chicken breast, chorizo sausage, peppers and onion served in a spicy tomato cream sauce, as hot as you like it",
        },
        {
          img: "./assets/images/menu-images/pasta/pasta3.jpg",
          name: "rotini di pollo",
          price: 18.0,
          description:
            "Sliced chicken breast in a teriyaki cream sauce and topped with green onion and sesame seeds",
        },
        {
          img: "./assets/images/menu-images/pasta/pasta4.jpg",
          name: "prawn linguine ",
          price: 21.0,
          description:
            "Prawns, fire roasted tomatoes with baby spinach, tossed with linguine roasted garlic pureé and white wine. the finished with sea salt",
        },
        {
          img: "./assets/images/menu-images/pasta/pasta5.jpg",
          name: "linguine san marzano",
          price: 17.75,
          description:
            "Sundried tomatoes and mushrooms served in a herbs, garlic & olive oil. topped with feta cheese",
        },
        {
          img: "./assets/images/menu-images/pasta/pasta6.jpg",
          name: 'the "forager" ',
          price: 18.5,
          description:
            "Fettuccine with sliced portobella and button mushrooms with fresh spinach in a white wine cream sauce drizzled with truffle oil and finished with shredded parmesan and green onions",
        },
        {
          img: "./assets/images/menu-images/pasta/pasta7.jpg",
          name: "spaghetti con lobster ",
          price: 20.25,
          description:
            "An amazing combination of lobster meat, fresh spinach, capers, and sweet bell peppers in a lobster bisque cream sauce",
        },
      ],
      deserts: [
        {
          img: "./assets/images/menu-images/pasta/pasta1.jpg",
          name: "seafood linguine florentine ",
          price: 22.5,
          description:
            "Prawns, shrimp and mussels sautéed with spinach, in a white wine cream sauce",
        },
        {
          img: "./assets/images/menu-images/pasta/pasta2.jpeg",
          name: "sicilian penne ",
          price: 20.5,
          description:
            "Chicken breast, chorizo sausage, peppers and onion served in a spicy tomato cream sauce, as hot as you like it",
        },
        {
          img: "./assets/images/menu-images/pasta/pasta3.jpg",
          name: "rotini di pollo",
          price: 18.0,
          description:
            "Sliced chicken breast in a teriyaki cream sauce and topped with green onion and sesame seeds",
        },
      ],
      wines: [
        {
          img: "./assets/images/menu-images/pasta/pasta1.jpg",
          name: "seafood linguine florentine ",
          price: 22.5,
          description:
            "Prawns, shrimp and mussels sautéed with spinach, in a white wine cream sauce",
        },
        {
          img: "./assets/images/menu-images/pasta/pasta2.jpeg",
          name: "sicilian penne ",
          price: 20.5,
          description:
            "Chicken breast, chorizo sausage, peppers and onion served in a spicy tomato cream sauce, as hot as you like it",
        },
        {
          img: "./assets/images/menu-images/pasta/pasta3.jpg",
          name: "rotini di pollo",
          price: 18.0,
          description:
            "Sliced chicken breast in a teriyaki cream sauce and topped with green onion and sesame seeds",
        },
      ],
      beers: [
        {
          img: "./assets/images/menu-images/beer/jelen.webp",
          name: "Jelen Pivo ",
          price: 22.5,
          description:
            "Jelen pivo is a pale lager produced by the Apatin Brewery from Serbia that belongs to American-Canadian concern Molson Coors. It contains 5% alcohol and belongs to the class of light lagers. Jelen has won various awards within Serbia and participates in a variety of sponsorships.",
        },
        {
          img: "./assets/images/menu-images/beer/toborg.webp",
          name: "Tuborg ",
          price: 20.5,
          description:
            "Tuborg is a Danish brewing company founded in 1873 on a harbour in Hellerup, an area North of Copenhagen, Denmark. Since 1970 it has been part of the Carlsberg Group. The brewery's flagship, the Tuborg pilsner, was brewed for the first time in 1880.",
        },
        {
          img: "./assets/images/menu-images/beer/staropramen.webp",
          name: "Staropramen",
          price: 18.0,
          description:
            "Staropramen Brewery is the second largest brewery in the Czech Republic, and is situated in the Smíchov district of Prague. It was founded in 1869 and the brand name Staropramen, literally meaning “old spring”, was registered in 1911.",
        },
      ],
      drinks: [
        {
          img: "./assets/images/menu-images/pasta/pasta1.jpg",
          name: "seafood linguine florentine ",
          price: 22.5,
          description:
            "Prawns, shrimp and mussels sautéed with spinach, in a white wine cream sauce",
        },
        {
          img: "./assets/images/menu-images/pasta/pasta2.jpeg",
          name: "sicilian penne ",
          price: 20.5,
          description:
            "Chicken breast, chorizo sausage, peppers and onion served in a spicy tomato cream sauce, as hot as you like it",
        },
        {
          img: "./assets/images/menu-images/pasta/pasta3.jpg",
          name: "rotini di pollo",
          price: 18.0,
          description:
            "Sliced chicken breast in a teriyaki cream sauce and topped with green onion and sesame seeds",
        },
      ],
    };
  },
};
Vue.createApp(menuApp).mount("#menu");
