/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
// prettier-ignore
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from "react-tabs";
import "react-tabs/style/react-tabs.css";

const FoodPortfolio = ({ data }) => {
  const productData = [
    {
      id: 1,
      title: "Red Chilly Sauce",
      packaging: ["200g x48pet /GB", "700 x 24 Pet Bott", "5 kg x 4 Cans"],
      type: "Sauces",
    },
    {
      id: 2,
      title: "Green Chilly Sauce",
      packaging: ["200g x48pet /GB", "700 x 24 Pet Bott", "5kg x 4 cans"],
      type: "Sauces",
    },
    {
      id: 3,
      title: "Soya Sauce",
      packaging: ["200g x48pet /GB", "700 x 24 Pet Bott", "5kg x 4 cans"],
      type: "Sauces",
    },
    {
      id: 4,
      title: "Sezchwan Sauce",
      packaging: ["250g x 24 GB", "300g X 24 GB", "1kg.X20 pet"],
      type: "Sauces",
    },
    {
      id: 5,
      title: "8 to 8 Sauce - 200g",
      packaging: ["200g x48pet"],
      type: "Sauces",
    },
    {
      id: 6,
      title: "8 to 9 Sauce - 200g",
      packaging: ["200g x 48pet"],
      type: "Sauces",
    },
    {
      id: 7,
      title: "Worsestershire Sauce",
      packaging: ["200g x 48pet"],
      type: "Sauces",
    },
    {
      id: 8,
      title: "Tomato Sauce",
      packaging: ["500g x 24pet", "1kg.x 20 pet", "5kg x 4 cans"],
      type: "Sauces",
    },
    {
      id: 9,
      title: "Tomato Ketchup",
      packaging: ["500g x 24pet", "1kg.x 20 pet", "5kg x 4 cans"],
      type: "Sauces",
    },
    {
      id: 10,
      title: "Sweet Chilli Sauce",
      packaging: ["200g x 48pet"],
      type: "Sauces",
    },
    {
      id: 11,
      title: "Pizza Sauce",
      packaging: ["250g x 24 GB", "1kg.x 20 pet"],
      type: "Sauces",
    },
    {
      id: 12,
      title: "Tamarind Sauce",
      packaging: ["200g x 24pet"],
      type: "Sauces",
    },
    {
      id: 13,
      title: "Peri Peri Sauce",
      packaging: ["200g x 48pet"],
      type: "Sauces",
    },
    {
      id: 14,
      title: "Mustard Sauce",
      packaging: ["300g x 24 GB"],
      type: "Sauces",
    },
    {
      id: 15,
      title: "Red Hot Papper Sauce (Tabasco)",
      packaging: ["85g x 120 GB"],
      type: "Sauces",
    },
    {
      id: 16,
      title: "Green Hot Papper Sauce (Tabasco)",
      packaging: [],
      type: "Sauces",
    },
    {
      id: 17,
      title: "Corriender Chutney",
      packaging: ["250g x 24 GB"],
      type: "Chutneys and Paste",
    },
    {
      id: 18,
      title: "Mint Chutney",
      packaging: ["250g x 24 GB"],
      type: "Chutneys and Paste",
    },
    {
      id: 19,
      title: "Corriender Mint Chutney",
      packaging: ["250g x 24 GB"],
      type: "Chutneys and Paste",
    },
    {
      id: 20,
      title: "Green Chilly Chutney",
      packaging: ["200g x 48pet", "250g x 24pet"],
      type: "Chutneys and Paste",
    },
    {
      id: 21,
      title: "Garlic Chilly Chutney",
      packaging: ["200g x 48pet", "700g x 24pet"],
      type: "Chutneys and Paste",
    },
    {
      id: 22,
      title: "Panipuri Chutney",
      packaging: ["250g x 24 GB"],
      type: "Chutneys and Paste",
    },
    {
      id: 23,
      title: "Samosa Chutney",
      packaging: ["250g x 24 GB"],
      type: "Chutneys and Paste",
    },
    {
      id: 24,
      title: "Date & Tamarind Chutney",
      packaging: ["250g x 24 GB"],
      type: "Chutneys and Paste",
    },
    {
      id: 25,
      title: "Sezchwan Chutney",
      packaging: ["250g x 24 GB", "300g x 24 GB", "1kg. x 20 pet"],
      type: "Chutneys and Paste",
    },
    {
      id: 26,
      title: "Garlic Paste",
      packaging: ["300G x 24 GB"],
      type: "Chutneys and Paste",
    },
    {
      id: 27,
      title: "Ginger Paste",
      packaging: ["300G x 24 GB"],
      type: "Chutneys and Paste",
    },
    {
      id: 28,
      title: "Garlic Ginger Paste Mixed",
      packaging: ["300G x 24 GB"],
      type: "Chutneys and Paste",
    },
    {
      id: 29,
      title: "Mustard Paste",
      packaging: ["300G x 24 GB"],
      type: "Chutneys and Paste",
    },
    {
      id: 30,
      title: "Eggless Mayonnaise",
      packaging: ["250g x 48pet", "500g x24pet", "1kg.x 20 pouches/jar"],
      type: "Mayonnaise",
    },
    {
      id: 31,
      title: "Tandoori Mayonnaise",
      packaging: ["250g x 48pet", "500g x24pet", "1kg.x 20 pouches/jar"],
      type: "Mayonnaise",
    },
    {
      id: 32,
      title: "Peri Peri Mayonnaise",
      packaging: ["250g x 48pet", "500g x24pet", "1kg.x 20 pouches/jar"],
      type: "Mayonnaise",
    },
    {
      id: 33,
      title: "Garlic Mayonnaise",
      packaging: ["250g x 48pet", "500g x24pet", "1kg.x 20 pouches/jar"],
      type: "Mayonnaise",
    },
    {
      id: 34,
      title: "Mint Mayonnaise",
      packaging: ["250g x 48pet", "500g x24pet", "1kg.x 20 pouches/jar"],
      type: "Mayonnaise",
    },
    {
      id: 35,
      title: "Italian Herb Mayonnaise",
      packaging: ["250g x 48pet", "500g x24pet", "1kg.x 20 pouches/jar"],
      type: "Mayonnaise",
    },
    {
      id: 36,
      title: "Barbeque Mayonnaise",
      packaging: ["250g x 48pet", "500g x24pet", "1kg.x 20 pouches/jar"],
      type: "Mayonnaise",
    },
    {
      id: 37,
      title: "Chipotle Dip Mayonnaise",
      packaging: ["250g x 48pet", "500g x24pet", "1kg.x 20 pouches/jar"],
      type: "Mayonnaise",
    },
    {
      id: 38,
      title: "Jalapeno Cheese Mayonnaise",
      packaging: ["250g x 48pet", "500g x24pet", "1kg.x 20 pouches/jar"],
      type: "Mayonnaise",
    },
    {
      id: 39,
      title: "Sandwich Spread",
      packaging: ["250g x 48pet", "500g x24pet", "1kg.x 20 pouches/jar"],
      type: "Mayonnaise",
    },
    {
      id: 40,
      title: "Egg Mayonnaise",
      packaging: ["250g x 48pet", "500g x24pet", "1kg.x 20 pouches"],
      type: "Mayonnaise",
    },
    {
      id: 41,
      title: "Apple Cider Vinegar",
      packaging: ["700g x 24 pet"],
      type: "Vinegars and Flavours",
    },
    {
      id: 42,
      title: "Synthetic Vinegar",
      packaging: ["700g x 24 pet"],
      type: "Vinegars and Flavours",
    },
    {
      id: 43,
      title: "White Vinegar",
      packaging: ["700g x 24 pet"],
      type: "Vinegars and Flavours",
    },
    {
      id: 44,
      title: "Chilly Vinegar",
      packaging: ["700g x 24 pet"],
      type: "Vinegars and Flavours",
    },
    {
      id: 45,
      title: "Rose Water",
      packaging: ["700g x 24 pet", "500ml x 48pet"],
      type: "Vinegars and Flavours",
    },
    {
      id: 46,
      title: "Kewda Water",
      packaging: ["700g x 24 pet", "500ml x 48pet"],
      type: "Vinegars and Flavours",
    },
  ];
  const [showSummary, setShowSummary] = useState(false);
  const toggleSummary = () => {
    setShowSummary((prev) => !prev);
  };
  const [curcat, setCurcat] = useState("Sauces");

  // Filter items by type
  const sauces = data.filter((item) => item.type === "Sauces");
  const mayonnaise = data.filter((item) => item.type === "Mayonnaise");
  const chutneys = data.filter((item) => item.type === "Chutneys and Paste");

  return (
    <div className="container mx-auto p-4">
      <Tabs className="flex flex-col">
        <TabList className="flex flex-wrap gap-4 mb-8">
          <Tab className="rounded-full cursor-pointer outline-none">
            <button
              onClick={() => setCurcat("Sauces")}
              className="px-6 py-2 text-orange-600 border-2 border-orange-600 rounded-full hover:bg-orange-600 hover:text-white focus:bg-orange-600 focus:text-white transition-colors"
            >
              Sauces
            </button>
          </Tab>
          <Tab className="rounded-full cursor-pointer outline-none">
            <button
              onClick={() => setCurcat("Mayonnaise")}
              className="px-6 py-2 text-orange-600 border-2 border-orange-600 rounded-full hover:bg-orange-600 hover:text-white focus:bg-orange-600 focus:text-white transition-colors"
            >
              Mayonnaise
            </button>
          </Tab>
          <Tab className="rounded-full cursor-pointer outline-none">
            <button
              onClick={() => setCurcat("Chutneys and Paste")}
              className="px-6 py-2 text-orange-600 border-2 border-orange-600 rounded-full hover:bg-orange-600 hover:text-white focus:bg-orange-600 focus:text-white transition-colors"
            >
              Chutneys & Paste
            </button>
          </Tab>
          <Tab className="rounded-full cursor-pointer outline-none">
            <button
              onClick={() => setCurcat("Vinegars and Flavours")}
              className="px-6 py-2 text-orange-600 border-2 border-orange-600 rounded-full hover:bg-orange-600 hover:text-white focus:bg-orange-600 focus:text-white transition-colors"
            >
              Vinegars and Flavours
            </button>
          </Tab>
        </TabList>
        <button
          onClick={toggleSummary}
          className="mb-6 mx-auto px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
        >
          {showSummary ? "Hide Summary" : "Show All Product Summary"}
        </button>
        {/* Product Summary Table */}
        {showSummary && (
          <div className="overflow-x-auto mb-8">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Sr No
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Product Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Packaging Type
                  </th>
                </tr>
              </thead>
              <tbody>
                {productData
                  .filter((item) => item.type === curcat)
                  .map((item, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                    >
                      <td className="border border-gray-300 px-4 py-2">
                        {item.id}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.title}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.packaging.join(", ")}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}

        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sauces.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <div className="relative w-full h-64 bg-white">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold text-center text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 text-center mt-1">
                    {item.type}
                  </p>
                </div>
                {/* Packaging Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <ul className="text-white text-center space-y-2">
                    {item.packaging.map((pack, index) => (
                      <li key={index} className="text-xl">
                        {pack}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mayonnaise.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <div className="relative  w-full h-64 bg-white">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold text-center text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 text-center mt-1">
                    {item.type}
                  </p>
                </div>
                {/* Packaging Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <ul className="text-white text-center space-y-2">
                    {item.packaging.map((pack, index) => (
                      <li key={index} className="text-xl">
                        {pack}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chutneys.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <div className="relative w-full h-64 bg-white">
                  {" "}
                  {/* Fixed height and white background */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold text-center text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 text-center mt-1">
                    {item.type}
                  </p>
                </div>
                {/* Packaging Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <ul className="text-white text-center space-y-2">
                    {item.packaging.map((pack, index) => (
                      <li key={index} className="text-xl">
                        {pack}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default FoodPortfolio;
