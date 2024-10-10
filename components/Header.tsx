"use client";

import React, { useState } from "react";
import style from "../styles/NavBar.module.css";
import { Carousel, Slide, Slider } from "react-scroll-snap-anime-slider";
import StorySlider from "./StorySlider";
import { people } from "./Constants";

export default function Header() {
  const [showStorySlider, setShowStorySlider] = useState(false);
  const [user, setUser] = useState({});
  let total = 20;
  let visible = 6;
  let step = 3;

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
