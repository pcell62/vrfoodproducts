// pages/catalog/index.js
import Header from "parts/Header";
import React from "react";
import Footer from "parts/Footer";
import first from "../assets/images/Catalog/1.png";
import second from "../assets/images/Catalog/2.png";
import third from "../assets/images/Catalog/3.png";
import fourth from "../assets/images/Catalog/4.png";
import fifth from "../assets/images/Catalog/5.png";

const CatalogPage = () => {
  const catalogPages = [
    {
      id: 1,
      title: "Our Valuable Customers",
      image: first,
      description:
        "VR Food Products - Our Valuable Customers and Company Profile",
    },
    {
      id: 2,
      title: "Tomato Sauce",
      image: second,
      description:
        "Premium Quality Tomato Sauce - Available in 1 kg / 500 g / 5 kg",
    },
    {
      id: 3,
      title: "Chinese Sauces",
      image: third,
      description:
        "Give Your Taste Buds A Chinese Treat - Complete Range of Chinese Sauces",
    },
    {
      id: 4,
      title: "Instant Pastes",
      image: fourth,
      description:
        "Instant Ready to Cook Pastes - Garlic, Ginger, and Ginger Garlic Paste",
    },
    {
      id: 5,
      title: "Mayonnaise",
      image: fifth,
      description:
        "Fresh Creamy Superior Taste Mayonnaise - Available in Various Flavors",
    },
  ];

  return (
    <main className="min-h-screen ">
      <Header />

      {/* Catalog Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="space-y-12">
          {catalogPages.map((page) => (
            <div
              key={page.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="  h-full">
                <img
                  src={page.image}
                  alt={page.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default CatalogPage;
