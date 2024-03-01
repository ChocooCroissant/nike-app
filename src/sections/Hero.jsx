import { useState } from "react";
import { arrowRight } from "../../assets/icons";
import { bigShoe1 } from "../../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[1] font-bold">
          <span className="xl:bg-white lg:z-10 xl:whitespace-nowrap relative pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">
            Nike
          </span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort,
          and innovation for your active life.
        </p>
        <Button 
          label="Shop now"
          iconURL={arrowRight}
        />
        <div className="flex flex-wrap justify-start items-start w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center 
        item-center xl:min-h-screen bg-primary bg-hero bg-center bg-cover"
      >
        <img 
          src={bigShoeImg} 
          alt="shoe collection"
          width={610}
          height={500}
          className="relative object-contain" 
        />
        <div className=" w-full">
        <div 
          className="flex max-sm:-bottom-[32%] max-sm:right-[-5%] max-sm:left-[-5%] max-xl:-bottom-[30%] max-xl:left-[20%] -bottom-[5%] left-[16%] max-sm:gap-3 gap-4 sm:gap-6 absolute max-sm:px-6">
          {shoes.map((shoe) => (
            <div 
              key={shoe.bigShoe}
            >
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;



