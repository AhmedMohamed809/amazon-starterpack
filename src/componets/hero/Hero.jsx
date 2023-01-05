import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.h_sides}>
        <span className={css.text1}>skin protection cream</span>
        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            Seedily say has suitable disposal and boy. Exerise joy man childern
            rejoiced
          </span>
        </div>
      </div>
      {/* middle side hero img */}
      <div className={css.wrapper}>
        {/* blue circle */}
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          className={css.blueCircle}
        ></motion.div>
        {/* hero img */}
        <motion.img
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          src={HeroImg}
          alt=""
          width={600}
        />
        <motion.div
          initial={{ right: "4%" }}
          whileInView={{ right: "2%" }}
          transition={transition}
          className={css.cart2}
        >
          <RiShoppingBagFill />
          <div className={css.singup}>
            <span>Best Singup Offers</span>

            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>
      {/* right side */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className={css.customers}
        >
          <span>1000K</span>
          <span>Happy Customers</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
