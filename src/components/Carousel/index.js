import React, { useEffect, useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { ChevronLeft } from "../../icons/chevronLeft";
import { ChevronRight } from "../../icons/chevronRight";
import { v4 as uuid } from "uuid";

export default function Carrousel({
  numeroDeCardsPorSlide,
  cards,
  insideChevron,
  withoutPadding,
}) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 70;

  return (
    <div
      className="carousel"
      style={{
        padding: `${
          !withoutPadding && window.innerWidth > 720
            ? `0 ${chevronWidth}px`
            : ""
        }`,
        overflow: "hidden",
      }}
    >
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={
          window.innerWidth > 1080
            ? numeroDeCardsPorSlide
            : window.innerWidth > 720
            ? 2
            : 1
        }
        gutter={20}
        leftChevron={
          <button
            value="Arrow Left"
            aria-label="Arrow Left"
            className="rounded-full bg-greenAqua w-8 absolute h-8 flex justify-center items-center"
          >
            <ChevronLeft />
          </button>
        }
        rightChevron={
          <button
            value="Arrow Right"
            aria-label="Arrow Right"
            className="rounded-full bg-greenAqua w-8 absolute h-8 flex justify-center items-center"
          >
            <ChevronRight />
          </button>
        }
        outsideChevron={insideChevron ? false : window.innerWidth > 720}
        chevronWidth={chevronWidth}
        infiniteLoop={false}
      >
        {cards.map((item) => {
          return <div id={`carousel-${uuid()}`}>{item.card}</div>;
        })}
      </ItemsCarousel>
    </div>
  );
}
