import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import  ".././css/utility.css"
// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Swiper modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import { useNavigate } from 'react-router-dom'




const Hero = () => {

  const navigate = useNavigate();



  return (
    // < !--Starting main area-- >
    <div id="hero" className="flex-box">
      <div className="swiper">
        <div className="swiper-wrapper">
          <Swiper
            className="mySwiper"
            modules={[ Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
          >
            <SwiperSlide>
              <div className="swiper-slide" onClick={() => { navigate("/womens") }} >
                <div className="hero-img">
                  <img src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg" alt="hero-image" />
                  <div className="hero-txt">
                    <h1>Beauty Products</h1>
                    <p>Explore Top Sellers</p>
                  </div>
                  <div className="hero-para">
                    <p>You are on amazon.com. You can also shop on Amazon India for millions of products with
                      fast
                      local
                      delivery. <a href="#"> Click here to go to amazon.in</a> </p>
                  </div>
                  <div className="hide-txt"></div>
                  <div className="image-overlay"></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide" onClick={() => { navigate("/home") }} >
                <div className="hero-img">
                  <img src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" alt="hero-image" />
                  <div className="hero-txt">
                    <h1>Kitchen Favorites</h1>
                    <p>Under $50</p>
                  </div>
                  <div className="hero-para">
                    <p>You are on amazon.com. You can also shop on Amazon India for millions of products with
                      fast
                      local
                      delivery. <a href="#"> Click here to go to amazon.in</a> </p>
                  </div>
                  <div className="hide-txt second"></div>
                  <div className="image-overlay"></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide" onClick={() => { navigate("/allProducts") }} >
                <div className="hero-img">
                  <img src="https://m.media-amazon.com/images/I/61USQwqEHkL._SX1500_.jpg" alt="hero-image" />
                  <div className="hero-txt">
                    <h1>Shop Early</h1>
                    <p>Black Friday deals</p>
                  </div>
                  <div className="hero-para">
                    <p>You are on amazon.com. You can also shop on Amazon India for millions of products with
                      fast
                      local
                      delivery. <a href="#"> Click here to go to amazon.in</a> </p>
                  </div>
                  <div className="hide-txt third"></div>
                  <div className="image-overlay"></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide" onClick={() => { navigate("/gadgets") }} >
                <div className="hero-img">
                  <img src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" alt="hero-image" />
                  <div className="hero-txt">
                    <h1>Shop Books</h1>
                    <p>Explore Titles</p>
                  </div>
                  <div className="hero-para">
                    <p>You are on amazon.com. You can also shop on Amazon India for millions of products with
                      fast
                      local
                      delivery. <a href="#"> Click here to go to amazon.in</a> </p>
                  </div>
                  <div className="hide-txt fourth"></div>
                  <div className="image-overlay"></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide" onClick={() => { navigate("/toys") }} >
                <div className="hero-img">
                  <img src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" alt="hero-image" />

                  <div className="hero-para">
                    <p>You are on amazon.com. You can also shop on Amazon India for millions of products with
                      fast
                      local
                      delivery. <a href="#"> Click here to go to amazon.in</a> </p>
                  </div>
                  <div className="image-overlay"></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide" onClick={() => { navigate("/gadgets") }} >
                <div className="hero-img">
                  <img src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg" alt="hero-image" />

                  <div className="hero-para">
                    <p>You are on amazon.com. You can also shop on Amazon India for millions of products with
                      fast
                      local
                      delivery. <a href="#"> Click here to go to amazon.in</a> </p>
                  </div>
                  <div className="image-overlay"></div>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

        <div className="swiper-pagination"></div>

        <div className="slider-btn"></div>
        <div className="slider-btn"></div>

      </div>
    </div >
  )
}




export default Hero
