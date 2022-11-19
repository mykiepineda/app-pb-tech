import { useState } from "react";
import styles from "./Hero.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Carousel from "./Carousel";
import CarouselImage1 from "../../assets/carousel_1.png";
import CarouselImage2 from "../../assets/carousel_2.png";
import CarouselImage3 from "../../assets/carousel_3.png";

const DIRECTION_LEFT = "left";
const DIRECTION_RIGHT = "right";

const ORIGINAL_CAROUSEL_ITEMS = [
  {
    slideNo: 1,
    header: "Find the best laptop for your business",
    infoText:
      "Looking for a perfect laptop for the office? Use our custom tool to shop by price or features.",
    image: CarouselImage1,
    buttonText: "Find a laptop now",
    clickHandler: () => {},
  },
  {
    slideNo: 2,
    header: "Exclusive deals for business owners",
    infoText:
      "Gain access to PB Tech's commercial pricing and features such as leasing and flexible payments.",
    image: CarouselImage2,
    buttonText: "Apply for a business account",
    clickHandler: () => {},
  },
  {
    slideNo: 3,
    header: "We're happy to help with anything",
    infoText:
      "Let our PB Tech experts help you navigate your tech woes so you can focus on running your business",
    image: CarouselImage3,
    buttonText: "Talk to our team",
    clickHandler: () => {},
  },
];

const originalCarouselItemsLength = ORIGINAL_CAROUSEL_ITEMS.length;

const negativeIndexes = [...Array(originalCarouselItemsLength).keys()].map(
  (i) => i - originalCarouselItemsLength
);

const positiveIndexes = [...Array(originalCarouselItemsLength).keys()].map(
  (i) => (i > 0 ? i-- : i)
);

const carouselItemsWithClone = [
  ...ORIGINAL_CAROUSEL_ITEMS,
  ...ORIGINAL_CAROUSEL_ITEMS,
  ORIGINAL_CAROUSEL_ITEMS[0],
];

const Arrow = ({ direction, onClick }) => {
  const className =
    direction === DIRECTION_LEFT ? styles["arrow-left"] : styles["arrow-right"];
  return (
    <button className={className} onClick={onClick}>
      <ArrowForwardIcon style={{ fontSize: "28px" }} />
    </button>
  );
};

const SlideDots = ({ activeSlideNo, onSlideDotClick }) => {
  return (
    <ul className={styles["slide-dots"]}>
      {ORIGINAL_CAROUSEL_ITEMS.map((item, index) => {
        let className = styles.dot;
        if (item.slideNo === activeSlideNo) {
          className = `${className} ${styles.active}`;
        }
        return (
          <li key={index}>
            <button
              className={className}
              data-slide-no={item.slideNo}
            />
          </li>
        );
      })}
    </ul>
  );
};

const INITIAL_SLIDE_TRANSITION = {
  index: 0,
  style: {
    transform: `translateX(calc(-100vw * ${originalCarouselItemsLength}))`,
    transition: "0s",
    left: 0,
  },
};

const Hero = () => {
  const [slideTransition, setSlideTransition] = useState(
    INITIAL_SLIDE_TRANSITION
  );

  let activeCarouselItem, indexActiveSlideNo;
  if (slideTransition.index < 0) {
    indexActiveSlideNo = negativeIndexes.indexOf(slideTransition.index);
  } else {
    indexActiveSlideNo = positiveIndexes.indexOf(slideTransition.index);
  }
  if (indexActiveSlideNo < 0) {
    indexActiveSlideNo = 0;
  }
  activeCarouselItem = ORIGINAL_CAROUSEL_ITEMS[indexActiveSlideNo];

  const slide = (direction, i) => {
    const j = direction === DIRECTION_RIGHT ? i + 1 : i - 1;
    const { style } = INITIAL_SLIDE_TRANSITION;
    return {
      index: j,
      style: {
        ...style,
        transition: "0.3s",
        left: `${j * -100}vw`,
      },
    };
  };

  const sliding = (direction) => {
    setSlideTransition((prev) => {
      if (Math.abs(prev.index) === originalCarouselItemsLength) {
        setTimeout(() => {
          setSlideTransition(slide(direction, 0));
        }, 0);
        return INITIAL_SLIDE_TRANSITION;
      }
      return slide(direction, prev.index);
    });
  };

  const slideLeftHandler = () => {
    sliding(DIRECTION_LEFT);
  };

  const slideRightHandler = () => {
    sliding(DIRECTION_RIGHT);
  };

  const slideDotClickHandler = (event) => {
    const activeSlideNo = parseInt(event.target.dataset.slideNo);
    let index, direction;
    if (slideTransition.index < 0) {
      direction = DIRECTION_LEFT;
      index = negativeIndexes[activeSlideNo - 1];
    } else {
      direction = DIRECTION_RIGHT;
      index = positiveIndexes[activeSlideNo - 1];
    }
    setSlideTransition(slide(direction, index - 1));
  };

  return (
    <section className={styles.hero}>
      <Arrow direction={DIRECTION_LEFT} onClick={slideLeftHandler} />
      <div className={styles.carousel} style={slideTransition.style}>
        {carouselItemsWithClone.map((item, index) => (
          <Carousel key={index} data={item} />
        ))}
      </div>
      <Arrow direction={DIRECTION_RIGHT} onClick={slideRightHandler} />
      <SlideDots
        activeSlideNo={activeCarouselItem.slideNo}
        onSlideDotClick={slideDotClickHandler}
      />
    </section>
  );
};

export default Hero;
