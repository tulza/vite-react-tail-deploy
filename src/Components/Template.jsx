import { motion } from "framer-motion";
import React, { Fragment, useEffect, useState } from "react";

const Template = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    console.log(rotate);
  }, [rotate]);
  return (
    <Fragment>
      <div className="flex flex-col justify-center text-white gap-4">
        <motion.div
          animate={{ rotate }}
          className="radical-limination-circle outline-dashed w-[200px]  outline-white flex justify-center items-center aspect-square text-white p-8 rounded-full"
        >
          <h1 className="text-5xl">:3</h1>
        </motion.div>
        <input
          className="mx-5"
          type="range"
          min={-180}
          max={180}
          value={rotate}
          onChange={(e) => {
            setRotate(parseFloat(e.target.value) || 0);
          }}
        />
        <p className="text-xl font-bold text-center">{rotate}</p>
      </div>
    </Fragment>
  );
};

export default Template;
