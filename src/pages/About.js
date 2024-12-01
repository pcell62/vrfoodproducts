import Header from "parts/Header";
import React from "react";
import Footer from "parts/Footer";
import photo1 from "../assets/images/IMG_2612.jpg";
import photo2 from "../assets/images/IMG_2616.jpg";

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-5 flex flex-col justify-center">
        <div className="container mx-auto px-4 ">
          <div className="">
            <div className="text-center max-w-8xl mx-auto mb-12">
              <h1 className="text-4xl font-semibold text-gray-800">
                Our Mission
              </h1>
              <p className="text-gray-600 text-xl">
                Our mission is to bring flavor and convenience to the food
                industry by delivering high-quality sauces and condiments,
                backed by reliable service and innovative packaging solutions.
              </p>
            </div>
            <div className="text-center max-w-8xl mx-auto mb-12">
              <h3 className="text-4xl font-semibold text-gray-800">
                Why Choose Us
              </h3>
              <ul className="text-gray-600 list-disc list-inside text-xl">
                <li>
                  Custom Solutions: We offer flexibility in flavors and
                  packaging, providing both bulk solutions and ready-to-shelf
                  bottled products.
                </li>
                <li>
                  Quality Ingredients: Our commitment to quality starts with
                  sourcing the finest ingredients and maintaining rigorous
                  standards in every product.
                </li>
                <li>
                  B2B Expertise: With years of experience in the food
                  manufacturing industry, we understand the unique demands of
                  B2B clients and aim to exceed expectations with every order.
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <div
                className="flex items-center justify-center text-4xl font-semibold text-gray-800 mb-20 mx-auto"
                style={{ textAlign: "center" }}
              >
                Meet Our Co-Founders
              </div>
              <div className="md:flex justify-center space-x-8 mb-10 flex-col sm:flex-row">
                <div className="text-center px-10">
                  <img
                    src={photo1}
                    alt="Co-Founder 1"
                    className="w-100 h-100 object-cover rounded-full mx-auto shadow-xl"
                  />
                  <p className="text-gray-800 mt-4 text-3xl">Swati Raut</p>
                </div>
                <div
                  className="text-center m-0 px-10"
                  style={{ marginLeft: "0px" }}
                >
                  <img
                    src={photo2}
                    alt="Co-Founder 2"
                    className="w-100 h-100 object-cover rounded-full mx-auto shadow-xl"
                  />
                  <p className="text-gray-800 mt-4 text-3xl">Niket Raut</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center max-w-8xl mx-auto flex flex-col justify-center">
            <div className="text-center max-w-6xl mx-auto ">
              <h3 className="text-4xl font-semibold text-gray-800">Join Us</h3>
              <p className="text-gray-600 text-2xl">
                Partner with us to bring exceptional sauces and condiments to
                your business, and let us help you serve the best to your
                customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AboutPage;
