// "use client";
// import React, { useEffect, useState } from "react";
// import "../App.css";

// const data = [
//   {
//     image: "/images/home/homefood.jpg", // Ensure the path is correct
//   },
//   {
//     image: "/images/home/momo2.jpg",
//   },
//   {
//     image: "/images/home/newari.jpg",
//   },
//   {
//     image: "/images/home/keema.jpg",
//   },
// ];

// const Banner = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % data.length); // Wrap around logic
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="max-w-screen-2xl container mx-auto xl:px-24 ">
//       <div className="py-4 flex flex-col md:flex-row justify-between items-center gap-8">
//         <div className="md:w-1/2 space-y-7 px-4 mt-20 ">
//           <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
//             Delicate <span className="text-red">Flavors</span>, Delivered with
//             Care.
//           </h2>
//           <p className="font-semibold">
//             Unwrap Joy with Every Bite: Order from Our Exquisite Collection.
//             Foodie Favorites Await. Dive into our Delicious Selections.
//           </p>
//           <button className="btn bg-red px-8 py-3 font-semibold text-white">
//             Order Now
//           </button>
//         </div>
//         <div className="md:w-1/2 w-full h-full relative">
//           <img
//             src={data[currentSlide].image}
//             alt="Delicious food"
//             className="object-cover mt-20 w-1000  img"
//           />
//         </div>
//       </div>
//       <div>
//         life. Babies, with their innocent expressions and unblemished view of
//         the world, represent the epitome of purity and potential. As they embark
//         on their journey from infancy to childhood, they experience a whirlwind
//         of developmental milestones, each crucial for shaping their future
//         selves. From the moment of birth, a baby begins to adapt to a new world
//         outside the womb. This transition is marked by the first cry, a sign of
//         life and the baby’s initial response to the external environment. The
//         early days are a period of adjustment for both the baby and the parents.
//         During this time, the baby relies entirely on caregivers for
//         nourishment, comfort, and protection. This dependency creates a unique
//         bond, laying the foundation for emotional and social development.
//         Physical growth is perhaps the most visible aspect of a baby’s
//         development. In the first year, babies undergo rapid changes, doubling
//         their birth weight by six months and tripling it by their first
//         birthday. Motor skills develop sequentially, starting with simple
//         reflexes and progressing to more complex movements like rolling over,
//         sitting, crawling, and eventually walking. These milestones are not just
//         indicators of physical growth but also of neurological development.
//         Cognitive development in babies is equally remarkable. Even in the early
//         months, babies begin to recognize faces, particularly those of their
//         parents. They start to learn through their senses, exploring the world
//         by touching, tasting, and observing. The emergence of language is
//         another significant milestone. Initially, babies communicate through
//         cries and coos, but by the end of the first year, many can say simple
//         words and understand basic instructions. This linguistic development is
//         crucial as it lays the groundwork for later communication skills and
//         cognitive functions. x
//       </div>
//     </div>
//   );
// };

// export default Banner;

"use client";
import React, { useEffect, useState } from "react";
import "../App.css";

const data = [
  {
    image: "/images/home/homefood.jpg", // Ensure the path is correct
  },
  {
    image: "/images/home/momo2.jpg",
  },
  {
    image: "/images/home/newari.jpg",
  },
  {
    image: "/images/home/keema.jpg",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length); // Wrap around logic
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 pt-20">
      {/* Added padding-top to avoid overlapping */}
      <div className="py-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2 space-y-7 px-4 mt-20">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Delicate <span className="text-red">Flavors</span>, Delivered with
            Care.
          </h2>
          <p className="font-semibold">
            Unwrap Joy with Every Bite: Order from Our Exquisite Collection.
            Foodie Favorites Await. Dive into our Delicious Selections.
          </p>
          <button className="btn bg-red px-8 py-3 font-semibold text-white">
            Order Now
          </button>
        </div>
        <div className="md:w-1/2 w-full h-full relative">
          <div className="w-full h-96 flex justify-center items-center overflow-hidden bg-gray-200">
            <img
              src={data[currentSlide].image}
              alt="Delicious food"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
