import { useState } from "react";

import styles from "./OurTopSellers.module.css";

import MacBookPro14Image from "../assets/macbook-pro-14.png";
import DellLatitudeE7450Image from "../assets/dell-latitude-e7450.png";
import AsusExpertBookImage from "../assets/asus-expertbook.png";
import HpGamingLaptopImage from "../assets/hp-gaming-laptop.png";
import LenovoV15IglImage from "../assets/lenovo-v15-igl.webp";
import MicrosoftSurfaceLaptop4Image from "../assets/microsoft-surface-laptop-4.webp";
import AcerNitro5Image from "../assets/acer-nitro-5.webp";
import LenovoThinkpadX1FoldUltraImage from "../assets/lenovo-thinkpad-x1-fold-ultra.jpg";
import MicrosoftSurfaceLaptopStudioImage from "../assets/microsoft-surface-laptop-studio.jpg";
import DellAlienwareM15 from "../assets/dell-alienware-m15.webp";
import HpEduLaptopImage from "../assets/hp-edu-laptop.webp";
import Apple2022MacBookAirImage from "../assets/apple-2022-macbook-air.webp";
import AsusVivoBookGo14Image from "../assets/asus-vivobook-go-14.webp";
import AcerSpin1Image from "../assets/acer-spin-1.webp";

import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";

const CARDS_PER_VIEW = 4;

const ORIGINAL_ITEM_LIST = [
  {
    name: "Apple MacBook Pro",
    image: MacBookPro14Image,
    position: 1,
  },
  {
    name: "Dell Latitude E7450",
    image: DellLatitudeE7450Image,
    position: 2,
  },
  {
    name: "Asus ExpertBook",
    image: AsusExpertBookImage,
    position: 3,
  },
  { name: "HP Gaming Laptop", image: HpGamingLaptopImage, position: 4 },
  { name: "Lenovo V15 IGL", image: LenovoV15IglImage, position: 5 },
  {
    name: "Microsoft Surface 4",
    image: MicrosoftSurfaceLaptop4Image,
    position: 6,
  },
  { name: "Acer Nitro 5", image: AcerNitro5Image, position: 7 },
  {
    name: "Apple MacBook Air",
    image: Apple2022MacBookAirImage,
    position: 8,
  },
  {
    name: "Dell Alienware M15",
    image: DellAlienwareM15,
    position: 9,
  },
  {
    name: "Asus VivoBook Go",
    image: AsusVivoBookGo14Image,
    position: 10,
  },
  { name: "HP Edu Laptop", image: HpEduLaptopImage, position: 11 },
  {
    name: "Lenovo Fold Ultra",
    image: LenovoThinkpadX1FoldUltraImage,
    position: 12,
  },
  {
    name: "Microsoft Surf Studio",
    image: MicrosoftSurfaceLaptopStudioImage,
    position: 13,
  },
  { name: "Acer Spin 1", image: AcerSpin1Image, position: 14 },
];

const originalItemListLength = ORIGINAL_ITEM_LIST.length;

const itemListWithClone = [
  ...ORIGINAL_ITEM_LIST,
  ...ORIGINAL_ITEM_LIST,
  ...ORIGINAL_ITEM_LIST.slice(0, CARDS_PER_VIEW),
];

const Rating = () => {
  return <StarRoundedIcon color="yellow" />;
};

const Card = ({ name, image }) => {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <img src={image} loading="lazy" alt={name} />
      <div>
        <div>
          <Rating />
          <Rating />
          <Rating />
          <Rating />
        </div>
        <h5>Normally $1,699.00</h5>
        <h4>Now $1,1628.00</h4>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

const Arrow = ({ direction, onClick }) => {
  const className =
    direction === "left" ? styles["arrow-left"] : styles["arrow-right"];
  return (
    <button className={`${styles.arrow} ${className}`} onClick={onClick}>
      <ChevronLeftOutlinedIcon />
    </button>
  );
};

const INITIAL_SLIDE_TRANSITION = {
  index: 0,
  style: {
    transform: `translateX(calc(-270px * ${originalItemListLength}))`,
    transition: "0s",
    left: 0,
  },
};

const OurTopSellers = () => {
  const [slideTransition, setSlideTransition] = useState(INITIAL_SLIDE_TRANSITION);

  const slide = (direction, i) => {
    const j = direction === "right" ? i + 1 : i - 1;
    const { style } = INITIAL_SLIDE_TRANSITION;
    return {
      index: j,
      style: {
        ...style,
        transition: "0.3s",
        left: `${j * -270}px`,
      },
    };
  };

  const sliding = (direction) => {
    setSlideTransition((prev) => {
      if (Math.abs(prev.index) === originalItemListLength) {
        setTimeout(() => {
          setSlideTransition(slide(direction, 0));
        }, 0);
        return INITIAL_SLIDE_TRANSITION;
      }
      return slide(direction, prev.index);
    });
  };

  const slideLeftHandler = () => {
    sliding("left");
  };

  const slideRightHandler = () => {
    sliding("right");
  };

  return (
    <section className={styles.container}>
      <h1>Our Top Sellers</h1>
      <div className={styles.wrapper}>
        <Arrow direction="left" onClick={slideLeftHandler} />
        <div className={styles.carousel}>
          <div className={styles.cards} style={slideTransition.style}>
            {itemListWithClone.map((item, index) => (
              <Card name={item.name} image={item.image} key={index} />
            ))}
          </div>
        </div>
        <Arrow direction="right" onClick={slideRightHandler} />
      </div>
    </section>
  );
};

export default OurTopSellers;
