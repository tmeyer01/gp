"use client";

import ColorCarousel from "@/app/adventures/ColorCarousel";
import { adventureData } from "@/app/adventures/adventureData";
import NavWhiteSpace from "@/app/components/sections/Nav/NavWhiteSpace/NavWhiteSpace";

import { useParams } from "next/navigation";

const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33", "#33FFFF"];

// console.log(colors);

function Adventure() {
  return (
    <>
      <NavWhiteSpace />

      {/* <p>{currentAdventure.discription}</p> */}
      <div className="">
        <div className="px-6">
          <div className="flex justify-between m-6 gap-4">
            <div className="border-2 w-1/2 px-6 ">
              <h1 className="font-bold text-2xl  pt-6">Title</h1>
              {/* <p className="px-6 pt-6">
                Originally from Southern California, I spent the better part of
                my teen years riding skateboards, cruising neighborhoods, and
                filming skating videos. Eventually, I discovered fixed-gear
                bikes and my entire world changed. Some of my most fondest
                memories are from riding bikes with my younger brother and
                cousin--anywhere we went, a video-camera came along with us, and
                it was then that I realized how important it was for me to
                document fleeting moments. Eventually, I moved to San Francisco
                in 2015 and my love for cycling and photography really took off.
                More than a decade into cycling and a thousand memories past, I
                still try to pay homage to the camera and all the small things I
                fell in love with. For me, cycling has never been about how fast
                you are, but how you can use a bike to navigate the world around
                you. Let&apos;s go for a ride some time, cameras required.{" "}
              </p> */}
              <ul className="pt-6">
                <li>Length:</li>
                <li>Elevation: </li>
                <li>Duration:</li>
              </ul>
            </div>
            <div className="  bg-black h-80 w-6/12 border-2 text-white">
              {" "}
              what
            </div>
          </div>
        </div>
        <div className="px-6">
          Write up
          <p className="px-6 pt-6">
            Originally from Southern California, I spent the better part of my
            teen years riding skateboards, cruising neighborhoods, and filming
            skating videos. Eventually, I discovered fixed-gear bikes and my
            entire world changed. Some of my most fondest memories are from
            riding bikes with my younger brother and cousin--anywhere we went, a
            video-camera came along with us, and it was then that I realized how
            important it was for me to document fleeting moments. Eventually, I
            moved to San Francisco in 2015 and my love for cycling and
            photography really took off. More than a decade into cycling and a
            thousand memories past, I still try to pay homage to the camera and
            all the small things I fell in love with. For me, cycling has never
            been about how fast you are, but how you can use a bike to navigate
            the world around you. Let&apos;s go for a ride some time, cameras
            required.{" "}
          </p>
          <p className="px-6 pt-6">
            Originally from Southern California, I spent the better part of my
            teen years riding skateboards, cruising neighborhoods, and filming
            skating videos. Eventually, I discovered fixed-gear bikes and my
            entire world changed. Some of my most fondest memories are from
            riding bikes with my younger brother and cousin--anywhere we went, a
            video-camera came along with us, and it was then that I realized how
            important it was for me to document fleeting moments. Eventually, I
            moved to San Francisco in 2015 and my love for cycling and
            photography really took off. More than a decade into cycling and a
            thousand memories past, I still try to pay homage to the camera and
            all the small things I fell in love with. For me, cycling has never
            been about how fast you are, but how you can use a bike to navigate
            the world around you. Let&apos;s go for a ride some time, cameras
            required.{" "}
          </p>
          <p className="px-6 pt-6">
            Originally from Southern California, I spent the better part of my
            teen years riding skateboards, cruising neighborhoods, and filming
            skating videos. Eventually, I discovered fixed-gear bikes and my
            entire world changed. Some of my most fondest memories are from
            riding bikes with my younger brother and cousin--anywhere we went, a
            video-camera came along with us, and it was then that I realized how
            important it was for me to document fleeting moments. Eventually, I
            moved to San Francisco in 2015 and my love for cycling and
            photography really took off. More than a decade into cycling and a
            thousand memories past, I still try to pay homage to the camera and
            all the small things I fell in love with. For me, cycling has never
            been about how fast you are, but how you can use a bike to navigate
            the world around you. Let&apos;s go for a ride some time, cameras
            required.{" "}
          </p>
        </div>
        <div className="w-full bg-white h-[40rem] px-12">PHOTOS</div>
        <div className="p-8">
          <h3 className="font-semibold"> More info</h3>
          <ul className="py-2 list-disc">
            <li>Bikepacking route</li>
            <li>Informal videos</li>
            <li>Check this out </li>
          </ul>
        </div>
      </div>

      {/* <div className="col-span-12 border-2">
        <div>
          <h1 className=" text-center">TITLE</h1>
          <h2 className=" text-center">Sub title</h2>
        </div>
        <div className="w-[1050px] h-[480px] border-2 text-center mx-auto">
          PHOTO
        </div>

        <div class="flex items-start">
          <div class="w-64 h-40 text-white text-center font-bold text-4xl rounded-full float-left shape-outside-ellipse bg-medium-purple p-10">
            <span class="inline-block pt-16">PHP</span>
          </div>

          <div class="flex-1">
            <p></p>
          </div>
        </div>
      </div>

      <div className="square">
        <div>
          <div className="float-left m-5 w-64 h-96" />
        </div>
        <p className="text-justify text-2xl">
          For the last year my life’s trajectory has started to arch more
          towards being a freelance photographer. That may seem to be the most
          logical course for how I’ve represented myself via social media but
          I’ve pretty much always tried to avoid promoting my hobby to the
          executive branch of my world. Now, photography has become a primary
          factor in making decisions that, well, make the most sense. How will
          this opportunity benefit me? How do I navigate, professionally, a
          space where I’ve only dabbled in casually until recent history? Those
          were questions I had to ask myself but I also had to become
          comfortable with the fact that I have so much to learn and more of
          these newbie questions will continue to arise. But, the biggest
          concern I had was: How do I continue to make work that I’m happy with
          now that there are other people that have to be pleased with my work?
          Photo Pace has been the best creative outlet that I’ve had in over a
          decade. Previously, I could sneak away to my garage and play my
          keyboard or upright piano for hours on end. No matter how hot or cold
          my garage would be--and it would be the extreme on both ends--I would
          be hovered over 88-keys until my hands physically could play anymore.
          Even though I wasn’t creating anything I could sit in front of the
          piano and begin to discover so much about my instrument and explore
          the theory behind what makes interesting or unique sounds. Those days
          have been gone for ages. Now, since joining up with the incredible
          homies that are Photo Pace, I’ve been able to push myself in a
          direction that allows me to explore this medium in the same way that I
          could explore music in the past. I have always known that photography
          would always be able to provide a great amount of opportunities.
          However, I also feared that working in this space had the potential to
          place a box around discovery, self and/or uniqueness. This was my
          biggest fear. As unpredictable as things were in 2020, so was being
          laid off [and out] of my career to then working gig-to-gig and now
          feeling like this is the best experience I’ve had in my entire life.
          But I didn’t want to take any job just because my future photographing
          was, and still is, [somewhat] uncertain. In the past, the jobs I would
          take were usually in some way related to my ambassadorship(s). Their
          direction: “We love what you do… just do that.” Cool! Who can’t do
          more of what they already do? But the more offers I’ve accepted the
          more I had to accept that expectations would be more detailed and less
          off-the-cuff.
        </p>
      </div> */}
    </>
  );
}

export default Adventure;
