import React from "react";

function VideoContent() {
  return (
    <>
      <div className="pt-10 w-full">
        <video autoPlay muted className="w-full h-[65vh] object-cover  ">
          <source
            src="https://www.alnylam.com/sites/default/files/videos/moasnippet.mp4"
            type="video/mp4"
            className=""
          />
        </video>
      </div>

      <div className="flex flex-col bg-[#333333] md:py-15 gap-15">
        <div className="flex flex-col justify-center text-center md:min-w-full md:px-50 gap-5 ">
          <h1 className="text-white shadow-2xl text-4xl">
            THE LEADING RNAi THERAPEUTICS COMPANY
          </h1>
          <p className="text-white">
            Alnylam has pioneered RNA interference (RNAi) therapeutics, an
            innovative class of medicines that treats diseases in a different
            way - by silencing the genes that cause or contribute to them. We
            are working diligently to develop RNAi-based medicines to benefit as
            many patients as possible.
          </p>
        </div>

        {/* ................................................image Tag................................................. */}

        <div className="flex justify-center gap-5 max-sm:flex-wrap sm:flex-wrap text-center ">
          <div className="overflow-hidden rounded-lg">
            <div className="relative bg-[url('https://static.wixstatic.com/media/e10b95_e0e30776eec448c59d953a4eb6c4a3c9~mv2.jpg/v1/fill/w_1188,h_892,fp_0.50_0.50,q_90,enc_avif,quality_auto/e10b95_e0e30776eec448c59d953a4eb6c4a3c9~mv2.jpg')] bg-center bg-cover w-90 md:h-90 h-72 group overflow-hidden flex items-end cursor-pointer transition-transform hover:scale-90 rounded-lg">
              <div className="absolute text-white text-3xl font-bold transition-all duration-500 group-hover:opacity-0 bg-green-800 scale-80 p-10 rounded-2xl">
                <h2 className="text-2xl ">
                  Common Heart Medications: What to Know
                </h2>
              </div>

              <div className="flex flex-col gap-5 p-5 group-hover:bg-green-800 scale-80 transition-all duration-500 ease-in-out hover:bg-amber-400 opacity-0 hover:opacity-100 rounded-2xl">
                <h1 className="text-2xl text-white font-bold">
                  Common Heart Medications: What to Know
                </h1>
                <p className="text-white">
                  If you recently have been diagnosed with a heart disease or
                  experienced a heart attack, you may have been prescribed some
                  medications to treat symptoms, such as hypertension, blood
                  clotting, arrhythmia, chest pain, high cholesterol, and more.
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg">
            <div className="relative bg-[url('https://static.wixstatic.com/media/3c2eca45c90b483b9386d2b7eef92ae2.jpg/v1/fill/w_1188,h_892,fp_0.50_0.50,q_90,enc_avif,quality_auto/3c2eca45c90b483b9386d2b7eef92ae2.jpg')] bg-center bg-cover w-90 md:h-90 h-72 group overflow-hidden flex items-end cursor-pointer transition-transform hover:scale-90 rounded-lg">
              <div className="absolute text-white text-3xl font-bold transition-all duration-500 group-hover:opacity-0 bg-green-800 scale-80 p-10 rounded-2xl">
                <h2 className="text-2xl ">
                  {" "}
                  Local Flu Shots = Local Donations.
                </h2>
              </div>
              <div className="flex flex-col gap-5 p-5 group-hover:bg-green-800 scale-80 transition-all duration-500 ease-in-out hover:bg-amber-400 opacity-0 hover:opacity-100 rounded-2xl">
                <h1 className="text-2xl text-white font-bold">
                  Local Flu Shots = Local Donations.
                </h1>
                <p className="text-white">
                  It extremely proud of their Flu Shot campaign for the 2017 Flu
                  Season. They were able to provide over 61,100 meals to the
                  Food Bank of Iowa, with the donation staying right in the
                  local community.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative bg-[url('https://static.wixstatic.com/media/e10b95_0157ec10ed9a401283dcb27f4e44111c~mv2.jpg/v1/fill/w_1188,h_892,fp_0.50_0.50,q_90,enc_avif,quality_auto/e10b95_0157ec10ed9a401283dcb27f4e44111c~mv2.jpg')] bg-center bg-cover w-90 md:h-90 h-72 group overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-90 rounded-lg flex items-end justify-end">
              <div className="absolute text-white text-3xl font-bold transition-all duration-500 group-hover:opacity-0 bg-green-800 scale-80 p-10 rounded-2xl">
                <h2 className="text-2xl ">
                  Most Smokers Want to Quit – So Why Don’t They?
                </h2>
              </div>
              <div className="flex flex-col gap-5 p-5 group-hover:bg-green-800 scale-80 transition-all duration-500 ease-in-out hover:bg-amber-400 opacity-0 hover:opacity-100 rounded-2xl">
                <h1 className="text-2xl text-white font-bold">
                  Most Smokers Want to Quit – So Why Don’t They?
                </h1>
                <p className="text-white">
                  Tobacco use is the number one cause of preventable disease and
                  death in the United States, and it can harm nearly every part
                  of a person’s body. The majority of adult smokers want to
                  quit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*......................................... Second Image Tag.................................... */}
        <div className="flex justify-center gap-5 max-sm:flex-wrap sm:flex-wrap text-center ">
          <div className="overflow-hidden rounded-lg">
            <div className="relative bg-[url('https://static.wixstatic.com/media/e10b95_88b06a3e2cb8414599d96dd59ff3f573~mv2.jpg/v1/fill/w_1188,h_892,fp_0.50_0.50,q_90,enc_avif,quality_auto/e10b95_88b06a3e2cb8414599d96dd59ff3f573~mv2.jpg')] bg-center bg-cover w-90 md:h-90 h-72 group overflow-hidden flex items-center cursor-pointer transition-transform hover:scale-90 rounded-2xl">
              <div className="flex flex-col gap-5 p-5 w-full h-full group-hover:bg-green-800 justify-center transition-all duration-500 ease-in-out opacity-0 hover:opacity-120 rounded-2xl">
                <h1 className="text-2xl text-white font-bold">
                  National Recovery Month
                </h1>
                <p className="text-white">
                  In the US 54.2 million people aged 12 and older were in need
                  of treatment for a substance use disorder. However, only 23%
                  received the treatment
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg">
            <div className="relative bg-[url('https://static.wixstatic.com/media/e10b95_405d383fb1544c6e83ca3f08da105c7e~mv2.jpg/v1/fill/w_636,h_636,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e10b95_405d383fb1544c6e83ca3f08da105c7e~mv2.jpg')] bg-center bg-cover w-90 md:h-90 h-72 group overflow-hidden flex items-center cursor-pointer transition-transform hover:scale-90 rounded-lg">
              <div className="flex flex-col gap-5 p-5 w-full h-full group-hover:bg-green-800 justify-center transition-all duration-500 ease-in-out opacity-0 hover:opacity-120 rounded-lg">
                <h1 className="text-2xl text-white font-bold">
                  Skin Health Supplements
                </h1>
                <p className="text-white">
                  Summer brings sunshine, activity, and fun—but it also
                  increases your risk of sunburns, dehydration, and fatigue.
                  Support your health with these evidence-backed supplements.
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg">
            <div className="relative bg-[url('https://static.wixstatic.com/media/e10b95_a04f87e3a7e941bf9014ec86a2ab2774~mv2.jpg/v1/fill/w_1188,h_892,fp_0.50_0.50,q_90,enc_avif,quality_auto/e10b95_a04f87e3a7e941bf9014ec86a2ab2774~mv2.jpg')] bg-center bg-cover w-90 md:h-90 h-72 group overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-90 rounded-lg flex items-center justify-center">
              <div className="flex flex-col gap-4 p-5 w-full h-full justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out bg-transparent group-hover:bg-green-800 rounded-lg">
                <h1 className="text-2xl text-white font-bold text-center">
                  Understanding Dehydration: How To Prevent It
                </h1>
                <p className="text-white text-center">
                  As summer temperatures rise, so does the risk of dehydration.
                  Lack of hydration is especially dangerous to children, the
                  elderly, and outdoor workers. Dehydration occurs when your
                  body loses more fluids than it takes in which can lead to
                  significant effects on the body’s organ systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoContent;
