"use client";

import React, { useState } from "react";
import style from "../styles/NavBar.module.css";
import {
  ButtonBack,
  ButtonNext,
  Carousel,
  Slide,
  Slider,
  SliderBarLine,
} from "react-scroll-snap-anime-slider";
import StorySlider from "./StorySlider";

export default function Header() {
  const [showStorySlider, setShowStorySlider] = useState(false);
  const [user, setUser] = useState({});
  let total = 20;
  let visible = 6;
  let step = 3;

  const people = [
    {
      image: "/image1.jpeg",
      name: "Tom Smith",
      story: [
        "https://picsum.photos/450/800",
        "https://exit109.com/~dnn/clips/RW20seconds_1.mp4#t=.1",
      ],
    },
    {
      image: "/image2.jpg",
      name: "Helo Mask",
      story: [
        "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1822458/pexels-photo-1822458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
    },
    {
      image: "/image3.jpeg",
      name: "Sweety Jha",
      story: [
        "https://images.pexels.com/photos/2106685/pexels-photo-2106685.jpeg",
      ],
    },
    {
      image: "/image4.jpeg",
      name: "Amit Shina",
      story: [
        "https://images.pexels.com/photos/13325051/pexels-photo-13325051.jpeg",
      ],
    },
    {
      image: "/image5.jpeg",
      name: "Anshul Agrawal",
      story: [
        "https://images.pexels.com/photos/1144686/pexels-photo-1144686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
    },
    {
      image: "/image6.jpeg",
      name: "Pari",
      story: [
        "https://images.pexels.com/photos/6032899/pexels-photo-6032899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
    },
    {
      image: "/image7.jpeg",
      name: "Ananya",
      story: [
        "https://images.pexels.com/photos/1028927/pexels-photo-1028927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
    },
    {
      image: "/image8.jpeg",
      name: "Ankita Kaur",
      story: [
        " https://images.pexels.com/photos/1028927/pexels-photo-1028927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
    },
  ];
  const handleProfileClick = (data: { image: string; name: string }) => {
    console.log("Profile clicked");
    setShowStorySlider(true);
    setUser(data);
  };

  return (
    <nav className={style.navbar}>
      {!showStorySlider && (
        <img
          className={style.img}
          src="https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg"
        ></img>
      )}
      {showStorySlider && (
        <div>
          <div
            style={{
              zIndex: "99",
              color: "white",
              position: "absolute",
              right: "33px",
              top: "18px",
              fontSize: "20px",
            }}
          >
            <span style={{ display: "flex" }}>
              ...
              <h1
                style={{ marginLeft: "13px" }}
                onClick={() => setShowStorySlider(false)}
              >
                X
              </h1>
            </span>
          </div>
        </div>
      )}

      {showStorySlider ? (
        <StorySlider user={user} />
      ) : (
        <Carousel totalSlides={total} visibleSlides={visible} step={step}>
          <div
            className="overflow-x-auto-scroll"
            style={{ marginTop: "-15px" }}
          >
            <div className="ml-2  flex cursor-pointer flex-col ">
              <button type="button">
                <Slider
                  style={{
                    marginBottom: "-15px",
                    width: "100%",
                  }}
                  trayProps={{
                    style: {
                      paddingTop: "6px",
                      paddingBottom: "32px",
                    },
                  }}
                >
                  <ul className="flex font-serif  ">
                    {people.map((data, index) => (
                      <Slide key={index}>
                        <li className="flex  flex-col  space-y-1 relative">
                          <div className="relative z-10 h-14 w-14 select-none rounded-full bg-[#ebebeb] object-cover dark:bg-[#1c1c1c]">
                            <div
                              className={`relative z-10 h-15 w-15 select-none rounded-full overflow-hidden object-cover p-[2px]  ${style.gradientBorder} ${style.imageContainer}`}
                            >
                              <img
                                className={`r relative z-10 h-17 w-17 select-none rounded-full bg-[#ebebeb]  p-[2px] dark:bg-[#1c1c1c] w-full h-full object-cover ${style.image}`}
                                src={data.image}
                                alt="avatar"
                                onClick={() => handleProfileClick(data)}
                              />
                            </div>
                            <div>
                              <span className="text-[10px] whitespace-nowrap">
                                {data.name}
                              </span>
                            </div>
                          </div>
                        </li>
                      </Slide>
                    ))}
                  </ul>
                </Slider>
              </button>
            </div>
          </div>
        </Carousel>
      )}
    </nav>
  );
}
