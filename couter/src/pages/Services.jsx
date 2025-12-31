import React from "react";
import Hero from "../component/Hero";
import Section from "../component/Section";

function Services() {
  return (
    <>
      <Hero />
      <div className="flex flex-col  md:max-w-full md:mx-25 mt-8 md:gap-5  max-sm:gap-5 max-sm:px-10">
        <div>
          <h1 className="text-5xl font-semibold">Our Services</h1>
        </div>
        <div className="flex max-sm:flex-wrap  w-full gap-2 items-center ">
          <div className="flex flex-col w-full items-center">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://static.wixstatic.com/media/70e4e9_7ba9d1d9b3504c628115d30a70ae702a~mv2.png/v1/fill/w_676,h_900,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/pillsets%20w-effects.png"
                alt=""
                className="cursor-pointer  w-90 h-53 transition-transform duration-[1000ms] hover:scale-120 rounded-lg "
              />
            </div>
            <h1 className="self-start text-lg font-semibold ">
              Prepackaged pill service
            </h1>
            <p className=" py-2 ">
              Prepackaged daily medications, delivered in easy-to-use pouches so
              you never miss a dose.
            </p>
          </div>
          <div className="flex flex-col w-full gap-3 items-center ">
            <div className="overflow-hidden  rounded-lg">
              <img
                src="https://static.wixstatic.com/media/70e4e9_09ac7aa42ddc42769867628271b76603~mv2.png/v1/fill/w_688,h_918,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/vaccine%20w-effects.png"
                alt=""
                className="w-90  h-53 cursor-pointer transition-transform duration-[1000ms] hover:scale-120 rounded-lg"
              />
            </div>
            <h1 className="self-start text-lg font-semibold ">
              Vaccine clinic
            </h1>
            <p className=" py-2 ">
              Fast, convenient vaccinations for flu, travel, COVID-19, RSV,
              shingles, and more.
            </p>
          </div>
          <div className="flex flex-col w-full items-center rounded-lg ">
            <div className="overflow-hidden">
              <img
                src="https://static.wixstatic.com/media/70e4e9_fe2024f3fcea4590bcb5f2c591ca4179~mv2.png/v1/fill/w_688,h_918,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/apothecary%20w-effects.png"
                alt=""
                className="w-90  h-53 cursor-pointer transition-transform duration-[1000ms] hover:scale-120 rounded-lg"
              />
            </div>
            <h1 className="self-start text-lg font-semibold">Compounding</h1>
            <p className="py-2 ">
              Customized medications made just for you: bioidentical hormones,
              pain creams, pediatric formulas, and more.
            </p>
          </div>
          <div className="flex flex-col w-full items-center rounded-lg">
            <div className="overflow-hidden">
              <img
                src="https://static.wixstatic.com/media/70e4e9_2507c916551540ccb39914be3124effc~mv2.png/v1/fill/w_688,h_918,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/wheelchair%20w-effects.png"
                alt=""
                className="w-90  h-53 cursor-pointer transition-transform duration-[1000ms] hover:scale-120 rounded-lg"
              />
            </div>
            <h1 className="self-start text-lg font-semibold">
              Medical equipment
            </h1>
            <p className=" py-2 ">
              {" "}
              We provide medical equipment for home use—from braces and supports
              to nebulizers and walkers.
            </p>
          </div>
        </div>
        <div className="flex max-sm:flex-wrap  w-full gap-2 items-center ">
          <div className="flex flex-col w-full items-center">
            <div className="overflow-hidden  rounded-lg">
              <img
                src="https://static.wixstatic.com/media/e10b95_68ae7f765b39473f9f1806c5810d3f2a~mv2.jpg/v1/fill/w_600,h_450,fp_0.50_0.60,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dispill%20Packaging_Mockup_Top.jpg"
                alt=""
                className="cursor-pointer  w-90 h-53 transition-transform duration-[1000ms] hover:scale-120 rounded-lg"
              />
            </div>
            <h1 className="self-start text-lg font-semibold ">
              Prepackaged pill service
            </h1>
            <p className=" py-2 ">
              We understand the hassle. That’s why we offer multi-dose
              medication packaging, an easier way to manage your prescriptions.
            </p>
          </div>
          <div className="flex flex-col w-full gap-3 items-center ">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://static.wixstatic.com/media/e10b95_d90395b7e3604413aa446708190491d5~mv2.jpg/v1/fill/w_600,h_450,fp_0.76_0.44,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/calendar_pin_date_appointment_purple.jpg"
                alt=""
                className="w-90  h-53 cursor-pointer transition-transform duration-[1000ms] hover:scale-120 rounded-lg"
              />
            </div>
            <h1 className="self-start text-lg font-semibold ">
              Vaccine clinic
            </h1>
            <p className=" py-2 ">
              Medication synchronization lets your regimen work with your
              schedule, not against it. No more trips across town multiple times
              a month, just to pick up a single prescription.
            </p>
          </div>
          <div className="flex flex-col w-full items-center  ">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://static.wixstatic.com/media/e10b95_8032206ca8e84de88dab66d0d157f349~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Medication%20Consultation_MTM%20Review_Medicap_edited.jpg"
                alt=""
                className="w-90  h-53 cursor-pointer transition-transform duration-[1000ms] hover:scale-120 rounded-lg"
              />
            </div>
            <h1 className="self-start text-lg font-semibold">Compounding</h1>
            <p className="py-2 ">
              Whether your regimen includes a short-term prescription or has
              multiple maintenance medications, making sense of it all can be
              challenging. Let us help you understand with a medication review..
            </p>
          </div>
          <div className="flex flex-col w-full items-center">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://static.wixstatic.com/media/e10b95_6eed7408c6434e3bab3a7bf638eda7b9~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/vitamins_supplements_fish%20oil_spoons_leaves_natural_edited.jpg"
                alt=""
                className="w-90  h-53 cursor-pointer transition-transform duration-[1000ms] hover:scale-120 rounded-lg"
              />
            </div>
            <h1 className="self-start text-lg font-semibold">
              Medical equipment
            </h1>
            <p className=" py-2 ">
              Your system can also be running short on nutrients due to diet or
              lifestyle choices. Maybe you're missing out on enough magnesium in
              your diet, affecting your sleep and anxiety levels.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center py-20 gap-3  ">
        <div className="flex flex-col justify-center items-center bg-[#f8EFE8] gap-2 md:h-48 w-80 h-50">
          <img
            src="https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/service1.png"
            alt="images"
            className="bg-center bg-cover bg-no-repeat "
          />
          <h2 className="text-3xl font-semibold">Discount system</h2>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#f8EFE8] gap-2 md:h-48 w-80 h-50">
          <img
            src="https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/service2.png"
            alt="images"
            className="bg-center bg-cover bg-no-repeat"
          />
          <h2 className="text-3xl font-semibold">Best quality</h2>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#f8EFE8] gap-2 md:h-48 w-80 h-50">
          <img
            src="https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/service3.png"
            alt="images"
            className="bg-center bg-cover bg-no-repeat"
          />
          <h2 className="text-3xl font-semibold">Online shop</h2>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#f8EFE8] gap-2 md:h-48 w-80 h-50">
          <img
            src="https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/service4.png"
            alt="images"
            className="bg-center bg-cover bg-no-repeat"
          />
          <h2 className="text-3xl font-semibold">Public Service</h2>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#f8EFE8] gap-2 md:h-48 w-80 h-50">
          <img
            src="https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/service5.png"
            alt="images"
            className="bg-center bg-cover bg-no-repeat"
          />
          <h2 className="text-3xl font-semibold">Flexible payment</h2>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#f8EFE8] gap-2 md:h-48 w-80 h-50">
          <img
            src="https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/service6.png"
            alt="images"
            className="bg-center bg-cover bg-no-repeat"
          />
          <h2 className="text-3xl font-semibold">Product Return</h2>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#f8EFE8] gap-2 md:h-48 w-80 h-50">
          <img
            src="https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/service7.png"
            alt="images"
            className="bg-center bg-cover bg-no-repeat"
          />
          <h2 className="text-3xl font-semibold">Free Delivery</h2>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#f8EFE8] gap-2 md:h-48 w-80 h-50">
          <img
            src="https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/service8.png"
            alt="images"
            className="bg-center bg-cover bg-no-repeat"
          />
          <h2 className="text-3xl font-semibold">Public Service</h2>
        </div>
      </div>
      <Section />
    </>
  );
}

export default Services;
