import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import Header from "parts/Header";
import Footer from "parts/Footer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images
import first from "../assets/images/Catalog/product_Catalogue_page-0001.jpg";
import second from "../assets/images/Catalog/product_Catalogue_page-0002.jpg";
import third from "../assets/images/Catalog/product_Catalogue_page-0003.jpg";
import fourth from "../assets/images/Catalog/product_Catalogue_page-0004.jpg";
import fifth from "../assets/images/Catalog/product_Catalogue_page-0005.jpg";
import sixth from "../assets/images/Catalog/product_Catalogue_page-0006.jpg";
import seventh from "../assets/images/Catalog/product_Catalogue_page-0007.jpg";
import eighth from "../assets/images/Catalog/product_Catalogue_page-0008.jpg";
import ninth from "../assets/images/Catalog/product_Catalogue_page-0009.jpg";
import tenth from "../assets/images/Catalog/product_Catalogue_page-0010.jpg";
import eleventh from "../assets/images/Catalog/product_Catalogue_page-0011.jpg";
import twelfth from "../assets/images/Catalog/product_Catalogue_page-0012.jpg";
import thirteenth from "../assets/images/Catalog/product_Catalogue_page-0013.jpg";

const CatalogPage = () => {
  const catalogPages = [
    { id: 1, title: "One", image: first },
    { id: 2, title: "Two", image: second },
    { id: 3, title: "Three", image: third },
    { id: 4, title: "Four", image: fourth },
    { id: 5, title: "Five", image: fifth },
    { id: 6, title: "Six", image: sixth },
    { id: 7, title: "Seven", image: seventh },
    { id: 8, title: "Eight", image: eighth },
    { id: 9, title: "Nine", image: ninth },
    { id: 10, title: "Ten", image: tenth },
    { id: 11, title: "Eleven", image: eleventh },
    { id: 12, title: "Twelve", image: twelfth },
    { id: 13, title: "Thirteen", image: thirteenth },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <main className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop
          centeredSlides
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
          }}
          onBeforeInit={(swiper) => {
            /* eslint-disable no-param-reassign */
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            /* eslint-enable no-param-reassign */
          }}
        >
          {catalogPages.map((page) => (
            <SwiperSlide key={page.id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={page.image}
                  alt={`Catalog page ${page.title}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Footer />
    </main>
  );
};

export default CatalogPage;
