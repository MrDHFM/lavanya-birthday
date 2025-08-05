import React from "react";
import {
  BirthdayBox,
  BirthdayHeading,
  Greeting,
  ResponsiveImage,
} from "../styles";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

const useWindowSize = () => {
  const [size, setSize] = React.useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  React.useEffect(() => {
    const handleResize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
};

function BirthdayCard() {
  const [width, height] = useWindowSize();

  return (
    <>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={200}
        recycle={false}
      />
      <BirthdayBox
        as={motion.div}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
       
          <ResponsiveImage
            src="/lavanya.jpg"
            alt="Lavanya in traditional attire"
          />
          <div>
            {" "}
            <BirthdayHeading>Happy Birthday Lavanya! 🎉🌟</BirthdayHeading>
            <Greeting>
              Wishing you a magical day filled with love, laughter, and
              unforgettable moments.
              <br />
              May all your dreams come true!
            </Greeting>
          </div>
      
      </BirthdayBox>
    </>
  );
}

export default BirthdayCard;
