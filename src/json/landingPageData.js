/* eslint-disable import/extensions */

// Services Img Imports
import Web from "../assets/images/Services/Web.png";
import Mobile from "../assets/images/Services/Mobile.png";
import UIUX from "../assets/images/Services/Design.png";
import Web2 from "../assets/images/Services/Web2.png";
import Mobile3 from "../assets/images/Services/Mobile3.png";
import UIUX3 from "../assets/images/Services/Design3.png";

// Advantages
import one from "../assets/images/Advantages/1.png";
import two from "../assets/images/Advantages/2.png";
import three from "../assets/images/Advantages/3.png";
import four from "../assets/images/Advantages/4.png";
import five from "../assets/images/Advantages/5.png";
import six from "../assets/images/Advantages/6.png";
import seven from "../assets/images/Advantages/7.png";
import eight from "../assets/images/Advantages/8.png";
import nine from "../assets/images/Advantages/9.png";

import JalMayo from "../assets/images/Portfolio/jal_mayo.jpg";
import DarkSoy from "../assets/images/Portfolio/dark_soy.jpg";
import BarMayo from "../assets/images/Portfolio/bar_mayo.jpg";
import EggMayo from "../assets/images/Portfolio/EggMayo.jpg";
import ItaMayo from "../assets/images/Portfolio/ItaMayo.jpg";
import GarMayo from "../assets/images/Portfolio/GarMayo.jpg";
import TandMayo from "../assets/images/Portfolio/TandMayo.jpg";
import PeriMayo from "../assets/images/Portfolio/PeriMayo.jpg";
import Classic from "../assets/images/Portfolio/Classic.jpg";
import GreChil from "../assets/images/Portfolio/GreenChilli.jpg";
import MintMayo from "../assets/images/Portfolio/MintMayo.jpg";
import Schez from "../assets/images/Portfolio/Schez.jpg";
import Ginger from "../assets/images/Portfolio/Ginger.jpg";
import Garlic from "../assets/images/Portfolio/Garlic.jpg";
import RedCHill from "../assets/images/Portfolio/RedChill.jpg";
import TomKet from "../assets/images/Portfolio/TomKet.jpg";
import TomSauce from "../assets/images/Portfolio/TomSauce.jpg";
import eight8 from "../assets/images/Portfolio/8to8.jpg";
import eight9 from "../assets/images/Portfolio/8to9.jpg";
import worct from "../assets/images/Portfolio/worct.jpg";
import sweetChill from "../assets/images/Portfolio/sweetChill.jpg";
import mustard from "../assets/images/Portfolio/Mustard.jpg";

export const Services = [
  {
    title: "Sauces",
    imageUrl: Web,
    animation: "left",
    imageUrl2: Web2,
  },
  {
    title: "Ready to cook pastes",
    imageUrl: Mobile,
    animation: "up",
    imageUrl2: Mobile3,
  },
  {
    title: "Mayonnaise",
    imageUrl: UIUX,
    animation: "right",
    imageUrl2: UIUX3,
  },
];

export const Portfolios = [
  {
    id: "sauce_001",
    title: "Red Chilly Sauce",
    type: "Sauces",
    imageUrl: RedCHill,
    packaging: ["200g x48pet /GB", "700 x 24 Pet Bott", "5 kg x 4 Cans"],
  },
  {
    id: "sauce_002",
    title: "Green Chilly Sauce",
    type: "Sauces",
    imageUrl: GreChil,
    packaging: ["200g x48pet /GB", "700 x 24 Pet Bott", "5kg. X 4 cans"],
  },
  {
    id: "sauce_003",
    title: "Soya Sauce",
    type: "Sauces",
    imageUrl: DarkSoy,
    packaging: ["200g x48pet /GB", "700 x 24 Pet Bott", "5kg. X 4 cans"],
  },
  {
    id: "sauce_004",
    title: "Sezchwan Sauce",
    type: "Sauces",
    imageUrl: Schez,
    packaging: ["250g x 24 GB", "300g X 24 GB", "1kg.X20 pet"],
  },
  {
    id: "sauce_005",
    title: "8 to 8 Sauce - 200g",
    packaging: ["200g x48pet"],
    type: "Sauces",
    imageUrl: eight8,
  },
  {
    id: "sauce_006",
    title: "8 to 9 Sauce - 200g",
    packaging: ["200g x 48pet"],
    type: "Sauces",
    imageUrl: eight9,
  },
  {
    id: "sauce_007",
    title: "Worsestershire Sauce",
    packaging: ["200g x 48pet"],
    type: "Sauces",
    imageUrl: worct,
  },
  {
    id: "sauce_008",
    title: "Tomato Sauce",
    packaging: ["500g x 24pet", "1kg.x 20 pet", "5kg x 4 cans"],
    type: "Sauces",
    imageUrl: TomSauce,
  },
  {
    id: "sauce_009",
    title: "Tomato Ketchup",
    type: "Sauces",
    imageUrl: TomKet,
    packaging: ["500g x24pet", "1kg.x 20 pet", "5kg. X 4 cans"],
  },
  {
    id: "sauce_010",
    title: "Sweet Chilli Sauce",
    packaging: ["200g x 48pet"],
    type: "Sauces",
    imageUrl: sweetChill,
  },
  {
    id: "sauce_014",
    title: "Mustard Sauce",
    packaging: ["300g x 24 GB"],
    type: "Sauces",
    imageUrl: mustard,
  },

  {
    id: "paste_001",
    title: "Garlic Paste",
    type: "Chutneys and Paste",
    imageUrl: Garlic,
    packaging: ["300G x 24 GB"],
  },
  {
    id: "paste_002",
    title: "Ginger Paste",
    type: "Chutneys and Paste",
    imageUrl: Ginger,
    packaging: ["300G x 24 GB"],
  },
  {
    id: "mayo_001",
    title: "Eggless Mayonnaise",
    type: "Mayonnaise",
    imageUrl: EggMayo,
    packaging: ["250g x 48pet", "500g x24pet", "1kg.x 20 pouches/jar"],
  },
  {
    id: "mayo_002",
    title: "Tandoori Mayonnaise",
    type: "Mayonnaise",
    imageUrl: TandMayo,
    packaging: ["250g x 48pet", "500g x24pet", "1kg.x 20 pouches/jar"],
  },
  {
    id: "mayo_003",
    title: "Peri Peri Mayonnaise",
    type: "Mayonnaise",
    imageUrl: PeriMayo,
    packaging: ["250g x 48pet", "500g x24pet", "1kg.x 20 pouches/jar"],
  },
  {
    id: "mayo_004",
    title: "Garlic Mayonnaise",
    type: "Mayonnaise",
    imageUrl: GarMayo,
    packaging: ["250g x 48pet", "500g x24pet", "1kg.x 20 pouches/jar"],
  },
  {
    id: "mayo_005",
    title: "Mint Mayonnaise",
    type: "Mayonnaise",
    imageUrl: MintMayo,
    packaging: ["250g x 48pet", "500g x24pet", "1kg.x 20 pouches/jar"],
  },
  {
    id: "mayo_006",
    title: "Italian Herb Mayonnaise",
    type: "Mayonnaise",
    imageUrl: ItaMayo,
    packaging: ["250g x 48pet", "500g x24pet", "1kg.x 20 pouches/jar"],
  },
  {
    id: "mayo_007",
    title: "Barbeque Mayonnaise",
    type: "Mayonnaise",
    imageUrl: BarMayo,
    packaging: ["250g x 48pet", "500g x24pet", "1kg.x 20 pouches/jar"],
  },
  {
    id: "mayo_009",
    title: "Jalapeno Cheese Mayonnaise",
    type: "Mayonnaise",
    imageUrl: JalMayo,
    packaging: ["250g x 48pet", "500g x24pet", "1kg.x 20 pouches/jar"],
  },

  {
    id: "mayo_011",
    title: "Egg Mayonnaise",
    type: "Mayonnaise",
    imageUrl: Classic,
    packaging: ["250g x 48pet", "500g x24pet", "1kg.x 20 pouches"],
  },
];

export const Advantages = [
  [
    {
      imageUrl: one,
    },
    {
      imageUrl: two,
    },
    {
      imageUrl: nine,
    },
  ],
  [
    {
      imageUrl: three,
    },
    {
      imageUrl: four,
    },
    {
      imageUrl: seven,
    },
  ],
  [
    {
      imageUrl: five,
    },
    {
      imageUrl: six,
    },
    {
      imageUrl: eight,
    },
  ],
  [],
];
