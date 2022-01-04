import React from "react";

const Individual = ({
  barberUrl = "https://app.waitwhile.com/welcome/republicbarbershop",
  description = "Tell me a fun fact about you so that you can break the ice with new customers. Maybe some hobbies, sports, favorite teams",
  facebook = "",
  instagram = "",
  name = "Republic Barber",
}) => {
  return (
    <a
      href={barberUrl}
      target="_blank"
      className="m-2 p-4 sm:m-3 sm:p-3 md:m-4 hover:bg-gray-100 rounded-lg shadow"
    >
      <div className="text-center mb-4 opacity-90 block relative">
        <img
          alt={name}
          src="http://placecorgi.com/472/343"
          className="mx-auto object-cover rounded-full h-40 w-40 "
        />
      </div>
      <div className="text-center">
        <p className="text-2xl text-gray-800">{name}</p>
        <p className="max-w-xs my-4">{description}</p>
        <button
          type="button"
          className="border-gray-800 hover:border-gray-900 border-2 focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 text-center"
        >{`Book with ${name.split(" ")[0]}`}</button>
      </div>
      {(facebook || instagram) && (
        <div className="pt-4 mt-4 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-around">
          {facebook && (
            <a href={facebook} target="_blank">
              <svg
                width="30"
                height="30"
                fill="currentColor"
                className="text-xl hover:text-gray-800 transition-colors duration-200"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
              </svg>
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="text-xl hover:text-gray-800 transition-colors duration-200"
                width="27"
                height="27"
                viewBox="0 0 512 512"
                style={{ enableBackground: "new 0 0 512 512" }}
                xmlSpace="preserve"
              >
                <path d="M427.413 50.087h-53.435c-15.981 0-28.935 12.954-28.935 28.935v53.435c0 15.979 12.954 28.935 28.935 28.935h53.435c15.981 0 28.935-12.955 28.935-28.935V79.022c0-15.981-12.954-28.935-28.935-28.935zm6.674 82.137c0 3.679-2.06 6.906-5.745 6.906h-53.435c-3.685 0-7.603-3.227-7.603-6.906V78.789c0-3.679 3.918-6.441 7.603-6.441h53.435c3.685 0 5.745 2.762 5.745 6.441v53.435z" />
                <path d="M403.462 5.565H109.907C49.821 5.565 0 54.365 0 114.637v282.261c0 60.272 49.821 109.537 109.907 109.537h293.554C463.549 506.435 512 457.17 512 396.898V114.637C512 54.365 463.549 5.565 403.462 5.565zm86.277 391.333c0 47.994-38.462 87.276-86.277 87.276H109.907c-47.815 0-87.647-39.281-87.647-87.276V217.043h138.83c-29.87 25.044-48.856 63.336-48.856 105.622 0 76.717 62.413 139.072 139.13 139.072s139.13-62.325 139.13-139.042c0-42.288-18.989-80.609-48.859-105.652h148.103v179.855zM251.364 205.681c64.445 0 116.87 52.429 116.87 116.87s-52.424 116.87-116.87 116.87-116.87-52.429-116.87-116.87 52.424-116.87 116.87-116.87zm238.375-10.898H305.864c-16.747-8.348-35.168-11.13-54.5-11.13-19.334 0-37.756 2.783-54.503 11.13h-174.6v-80.145c0-47.995 39.832-86.811 87.647-86.811h293.554c47.815 0 86.277 38.817 86.277 86.811v80.145z" />
                <path d="M251.364 239.072c-46.033 0-83.478 37.446-83.478 83.478 0 46.033 37.446 83.478 83.478 83.478 46.033 0 83.478-37.446 83.478-83.478s-37.445-83.478-83.478-83.478zm0 144.696c-33.75 0-61.217-27.462-61.217-61.217s27.467-61.217 61.217-61.217 61.217 27.462 61.217 61.217c.001 33.755-27.467 61.217-61.217 61.217z" />
              </svg>
            </a>
          )}
          {/* {twitter && <a href={twitter} target="_blank">
                    <svg width="30" height="30" fill="currentColor" className="text-xl hover:text-gray-800 transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z">
                        </path>
                    </svg>
                </a>}
                {linkedin && <a href={linkedin} target="_blank">
                    <svg width="30" height="30" fill="currentColor" className="text-xl hover:text-gray-800 transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
                        </path>
                    </svg>
                </a>} */}
        </div>
      )}
    </a>
  );
};

export default Individual;
