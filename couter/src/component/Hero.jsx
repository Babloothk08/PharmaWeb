
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";

function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true
  };
  return (
    <div className="slider-container  w-full overflow-hidden mt-20 ">
      <Slider {...settings} >
        <div className='bg-[url("https://www.alnylam.com/sites/default/files/2025-01/dancing-lady.jpg")] bg-center bg-cover w-full md:h-[500px]   text-start content-center md:pl-20 bg-fixed'>
           <div className=" flex flex-col text-white md:gap-5 max-sm:gap-2">
            <h1 className="md:text-6xl max-sm:text-xl">Silence disease</h1>
            <h1 className="md:text-6xl max-sm:text-xl font-bold text-green-300">Amplify life</h1>
            <p className="text-wrap pb-5 ">When RNAi therapeutics silence the genes that cause disease,<br />
              <span className="font-bold">the everyday joys of life can be amplified.</span></p>
           </div>
           <button className="text-green-600 border-2 w-38 h-10 text-xl font-bold hover:text-white hover:bg-green-600 cursor-pointer border-green-600 rounded-lg">LEARN MORE</button>
        </div>
        <div className='bg-[url("https://www.alnylam.com/sites/default/files/2025-01/abuela.jpg")] bg-center bg-cover w-full md:h-[500px]   text-start content-center md:pl-20 '>
           <div className=" flex flex-col text-white md:gap-5 max-sm:gap-2">
            <h1 className="md:text-6xl max-sm:text-xl">Silence disease</h1>
            <h1 className="md:text-6xl max-sm:text-xl font-bold text-green-300">Amplify life</h1>
            <p className="text-wrap pb-5 ">When RNAi therapeutics silence the genes that cause disease,<br />
              <span className="font-bold">the activities you love can be amplified..</span></p>
           </div>
           <button className="text-green-600 border-2 w-38 h-10 text-xl font-bold hover:text-white hover:bg-green-600 cursor-pointer border-green-600 rounded-lg">LEARN MORE</button>
        </div>
        <div className='bg-[url("https://www.alnylam.com/sites/default/files/2024-12/fishing-old-man-desktop.jpg")] bg-center bg-cover w-full md:h-[500px]   text-start content-center md:pl-20 '>
           <div className=" flex flex-col text-white md:gap-5 max-sm:gap-2">
            <h1 className="md:text-6xl max-sm:text-xl">Silence disease</h1>
            <h1 className="md:text-6xl max-sm:text-xl font-bold text-green-300">Amplify life</h1>
            <p className="text-wrap pb-5 ">When RNAi therapeutics silence the genes that cause disease,<br />
              <span className="font-bold">the moments that matter most can be amplified.</span></p>
           </div>
           <button className="text-green-600 border-2 w-38 h-10 text-xl font-bold hover:text-white hover:bg-green-600 cursor-pointer border-green-600 rounded-lg">LEARN MORE</button>
        </div>
        <div className='bg-[url("https://www.marksanspharma.com/assets/img/slider3.png")] bg-center bg-cover w-full md:h-[500px]   text-start content-center md:pl-20 '>
           <div className=" flex flex-col text-white md:gap-5 max-sm:gap-2">
            <h1 className="md:text-6xl max-sm:text-xl">Silence disease</h1>
            <h1 className="md:text-6xl max-sm:text-xl   font-bold text-green-300">Amplify life</h1>
            <p className="text-wrap pb-5 ">When RNAi therapeutics silence the genes that cause disease,<br />
              <span className="font-bold">the everyday joys of life can be amplified..</span></p>
           </div>
           <button className="text-green-600 border-2 w-38 h-10 text-xl font-bold hover:text-white hover:bg-green-600 cursor-pointer border-green-600 rounded-lg">LEARN MORE</button>
        </div>
        
      </Slider>
      
    </div>
  );
}

export default Hero