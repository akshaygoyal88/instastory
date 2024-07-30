import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";
import styles from "../styles/StorySlider.module.css";
import style from "../styles/NavBar.module.css";

const progressStyle: React.CSSProperties = {
  height: "3px",
  width: "0%",
  borderRadius: "100vh",
  backgroundColor: "#f7f7f5",
};
interface StorySliderProps {
  user?: any;
}
const StorySlider: React.FC<StorySliderProps> = ({ user }) => {
  const sliderRef = useRef<Slider>(null);
  const [progress, setProgress] = useState(0);
  let lastClickTime = 0;
  console.log(user);

  const handleDoubleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    const timeSinceLastClick = now - lastClickTime;
    const { clientX } = event;
    const sliderWidth = sliderRef.current?.innerSlider?.list?.offsetWidth ?? 0;

    if (timeSinceLastClick < 300) {
      const isRightSide = clientX > sliderWidth / 2;

      if (sliderRef.current) {
        if (isRightSide) {
          sliderRef.current.slickNext();
        } else {
          sliderRef.current.slickPrev();
        }
      }
    }

    lastClickTime = now;
  };

  const settings = {
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    arrows: true,
    nextArrow: <div className={`story__next ${styles.story__next}`}></div>,
    prevArrow: <div className={`story__prev ${styles.story__prev}`}></div>,
    dots: true,
    customPaging: (i: number) => (
      <div className="swiper-pagination-progress" style={progressStyle}></div>
    ),
  };

  useEffect(() => {
    if (sliderRef.current) {
      const interval = setInterval(() => {
        if (sliderRef.current) {
          const slick = sliderRef.current.innerSlider;
          const currentSlide = slick.state.currentSlide;
          const slidesCount = slick.props.slidesToShow;
          const progressPercentage = ((currentSlide + 1) / slidesCount) * 100;
          setProgress(progressPercentage);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div>
      <div style={{ marginLeft: "6px", marginTop: "13px" }}>
        <div className="relative z-10 h-14 w-14 select-none rounded-full bg-[#ebebeb] object-cover dark:bg-[#1c1c1c]">
          <div
            className={`relative z-10 h-15 w-15 select-none rounded-full overflow-hidden object-cover p-[2px]  ${style.gradientBorder} ${style.imageContainer}`}
          >
            <img
              className={`r relative z-10 h-17 w-17 select-none rounded-full bg-[#ebebeb]  p-[2px] dark:bg-[#1c1c1c] w-full h-full object-cover ${style.image}`}
              src={user.image}
              alt="avatar"
              style={{ zIndex: "99" }}
            />
          </div>
        </div>
      </div>

      <div
        className={`story ${styles.story}`}
        style={{ position: "absolute", top: "0px" }}
      >
        <Slider
          {...settings}
          ref={sliderRef}
          className={`story__slider ${styles.story__slider}`}
          onClick={handleDoubleClick}
          style={{ zIndex: "1" }}
        >
          {user?.story?.map((data: string | undefined, index: number) =>
            data?.includes(".mp4") ? (
              <div
                key={index + "ffgfd"}
                className={`story__slide ${styles.story__slide}`}
              >
                <video autoPlay>
                  <source src={data} type="video/mp4" />
                </video>
              </div>
            ) : (
              <div
                key={index + "ffgfd"}
                className={`story__slide ${styles.story__slide}`}
              >
                <img
                  src={data}
                  alt="Slide 1"
                  style={{
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                  }}
                />
              </div>
            )
          )}
        </Slider>
      </div>
    </div>
  );
};

export default StorySlider;
