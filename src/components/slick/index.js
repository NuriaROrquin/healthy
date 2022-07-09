import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { ChevronLeft } from "../../icons/chevronLeft";
import { ChevronRight } from "../../icons/chevronRight";

export default function Carrousel() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        leftChevron={
          <button className="rounded-full bg-teal w-8 absolute h-8 flex justify-center items-center">
            <ChevronLeft />
          </button>
        }
        rightChevron={
          <button className="rounded-full bg-teal w-8 absolute h-8 flex justify-center items-center">
            <ChevronRight />
          </button>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{ height: 200, background: "#EEE" }}>First card</div>
        <div style={{ height: 200, background: "#EEE" }}>Second card</div>
        <div style={{ height: 200, background: "#EEE" }}>Third card</div>
        <div style={{ height: 200, background: "#EEE" }}>Fourth card</div>
      </ItemsCarousel>
    </div>
  );
}
