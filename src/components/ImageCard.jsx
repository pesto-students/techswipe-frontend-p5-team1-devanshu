/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { techStackIcons } from "../utils/constants";

export const ImageCard = ({ character }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="w-[290px] sm:w-[360px] md:w-[360px] my-10 border-2 border-slate-300 bg-white rounded-md">
      <div className="flex">
        <img
          src="https://randomuser.me/api/portraits/men/12.jpg "
          className="h-72 md:w-72 rounded-t-md sm:rounded-tl-md"
        />
        <div className="hidden sm:block md:block grow">
          <div className="bg-blue-500 text-center py-4 text-white font-medium rounded-tr-md">
            <div>
              6 <br /> Years
            </div>
          </div>
          <div className="p-2 flex flex-col">
            {character.techStack.slice(0, 3).map((stack, index) => (
              <div key={index}>
                <img
                  src={techStackIcons[stack]}
                  className="h-12 w-12 mt-2 rounded-md border-2"
                  alt="icon"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-3">
        <div className="w-full text-xl">{character.name}</div>
        <div className="my-4 p-2 border-b-2 bg-blue-500 rounded-md w-fit">
          {character.role}
        </div>
        <div className="">{character.bio}</div>
        <button
          className="text-blue-400"
          onClick={() => setShowMore(!showMore)}
        >
          Show more
        </button>
        {showMore && (
          <div className="">
            <div className="">Favorite Tech Stack</div>
            <div>Interests</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est
            sit amet facilisis magna etiam tempor. Vulputate mi sit amet mauris.
            Lectus proin nibh nisl condimentum id. Lacus sed viverra tellus in
            hac habitasse platea. Eu turpis egestas pretium aenean pharetra
            magna ac. Tempus egestas sed sed risus pretium quam vulputate
            dignissim. Fermentum dui faucibus in ornare quam. Viverra aliquet
            eget sit amet tellus cras adipiscing. Pretium aenean pharetra magna
            ac placerat vestibulum lectus mauris. Elementum nibh tellus molestie
            nunc non blandit massa enim. Tortor dignissim convallis aenean et
            tortor at. Vel facilisis volutpat est velit egestas dui id ornare
            arcu. Ligula ullamcorper malesuada proin libero nunc consequat
            interdum varius. Sit amet mauris commodo quis imperdiet massa
            tincidunt nunc pulvinar. Urna id volutpat lacus laoreet. Arcu risus
            quis varius quam quisque id. Elit duis tristique sollicitudin nibh
            sit amet. Amet est placerat in egestas erat. Feugiat pretium nibh
            ipsum consequat. Enim praesent elementum facilisis leo vel fringilla
            est. Id aliquet lectus proin nibh nisl condimentum. Viverra
            suspendisse potenti nullam ac tortor vitae purus faucibus ornare.
            Dui vivamus arcu felis bibendum ut tristique. Venenatis a
            condimentum vitae sapien pellentesque habitant. Sed elementum tempus
            egestas sed. Purus sit amet luctus venenatis lectus. Vel pretium
            lectus quam id leo in vitae turpis. Blandit volutpat maecenas
            volutpat blandit aliquam. Id leo in vitae turpis massa sed elementum
            tempus. Amet volutpat consequat mauris nunc congue nisi. Non quam
            lacus suspendisse faucibus interdum posuere. Sit amet risus nullam
            eget felis eget nunc. Odio ut sem nulla pharetra. Tortor vitae purus
            faucibus ornare suspendisse sed. Odio ut sem nulla pharetra diam
            sit. Tortor pretium viverra suspendisse potenti nullam ac tortor.
            Elit at imperdiet dui accumsan sit amet nulla. Pharetra vel turpis
            nunc eget lorem dolor sed viverra. Felis donec et odio pellentesque
            diam volutpat commodo sed. Purus in mollis nunc sed id. Turpis
            tincidunt id aliquet risus feugiat in ante metus dictum. Aliquam sem
            et tortor consequat id porta nibh venenatis. In massa tempor nec
            feugiat nisl pretium fusce id. Auctor elit sed vulputate mi sit
            amet. Tellus cras adipiscing enim eu turpis egestas. Praesent semper
            feugiat nibh sed pulvinar proin gravida hendrerit. Nam aliquam sem
            et tortor consequat. Elit pellentesque habitant morbi tristique.
            Orci a scelerisque purus semper eget duis. Vulputate sapien nec
            sagittis aliquam malesuada bibendum. Quis lectus nulla at volutpat
            diam ut venenatis. Dui ut ornare lectus sit amet est placerat in.
            Non odio euismod lacinia at. Facilisis magna etiam tempor orci eu.
            Sollicitudin nibh sit amet commodo nulla. Lectus nulla at volutpat
            diam ut venenatis tellus. Nisl condimentum id venenatis a. Vitae
            congue mauris rhoncus aenean vel elit scelerisque mauris. Et ligula
            ullamcorper malesuada proin libero nunc consequat interdum varius.
            Purus ut faucibus pulvinar elementum integer enim. Elementum eu
            facilisis sed odio morbi quis commodo odio aenean. Amet tellus cras
            adipiscing enim eu turpis. Nisi scelerisque eu ultrices vitae. Ac
            turpis egestas maecenas pharetra convallis posuere morbi. Viverra
            justo nec ultrices dui sapien. Sit amet mauris commodo quis
            imperdiet. Morbi non arcu risus quis varius quam quisque id.
            Convallis tellus id interdum velit laoreet. Suspendisse faucibus
            interdum posuere lorem ipsum dolor sit. Tortor at auctor urna nunc
            id cursus metus aliquam. Ut eu sem integer vitae justo. Risus nullam
            eget felis eget nunc lobortis mattis aliquam faucibus. Feugiat in
            ante metus dictum at tempor commodo ullamcorper a. Mauris augue
            neque gravida in fermentum et sollicitudin. Ut eu sem integer vitae
            justo. Vulputate odio ut enim blandit volutpat maecenas volutpat.
            Arcu dui vivamus arcu felis bibendum ut. Semper auctor neque vitae
            tempus quam pellentesque nec nam aliquam. Turpis massa tincidunt dui
            ut. Et ultrices neque ornare aenean. Cursus sit amet dictum sit amet
            justo. Ut eu sem integer vitae justo. Accumsan in nisl nisi
            scelerisque eu ultrices. Viverra aliquet eget sit amet tellus cras.
            Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus.
            At imperdiet dui accumsan sit amet nulla. Vulputate sapien nec
            sagittis aliquam malesuada bibendum arcu vitae. Nulla malesuada
            pellentesque elit eget gravida cum sociis natoque. Aliquet enim
            tortor at auctor urna nunc id cursus metus. Odio eu feugiat pretium
            nibh ipsum consequat nisl vel. Nulla malesuada pellentesque elit
            eget gravida cum sociis natoque penatibus. Eu turpis egestas pretium
            aenean pharetra magna. Vestibulum lectus mauris ultrices eros in
            cursus. Rhoncus est pellentesque elit ullamcorper dignissim cras
            tincidunt. Gravida arcu ac tortor dignissim convallis aenean et.
            Massa sed elementum tempus egestas sed sed. Non odio euismod lacinia
            at quis risus sed vulputate. Nulla pellentesque dignissim enim sit
            amet venenatis urna cursus eget. Diam donec adipiscing tristique
            risus nec feugiat in. Magna eget est lorem ipsum dolor sit.
            Pellentesque dignissim enim sit amet. Tristique senectus et netus et
            malesuada fames. Id porta nibh venenatis cras sed felis eget velit.
            Quis commodo odio aenean sed. Ac turpis egestas sed tempus urna et.
            Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Quis
            vel eros donec ac. Ultrices gravida dictum fusce ut placerat orci
            nulla pellentesque dignissim. Eget nunc lobortis mattis aliquam
            faucibus purus. Aliquet nec ullamcorper sit amet risus nullam eget
            felis. Tellus pellentesque eu tincidunt tortor.
          </div>
        )}
      </div>
    </div>
  );
};
