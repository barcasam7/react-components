import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef, useState } from "react";

const DraggableSlider = () => {
   const tabs = useRef<null | HTMLUListElement>(null);
   const [isDragging, setIsDragging] = useState<boolean>(false);
   const [hideLeft, setHideLeft] = useState<boolean>(true);
   const [hideright, setHideRight] = useState<boolean>(false);

   function scroll(type: string): void {
      if (tabs.current === null) {
         return;
      }
      let scrollWidth = (tabs.current.scrollLeft += type === "left" ? -340 : 340);
      handleIcons(scrollWidth);
   }

   function handleIcons(scrollWidth: number): void {
      if (tabs.current === null) {
         return;
      }
      let maxScrollableWidth = tabs.current.scrollWidth - tabs.current.clientWidth;

      scrollWidth <= 0 ? setHideLeft(true) : setHideLeft(false);
      maxScrollableWidth - scrollWidth <= 1 ? setHideRight(true) : setHideRight(false);
   }

   function dragging(e: React.MouseEvent<HTMLUListElement>) {
      const event = e;
      if (tabs.current === null) {
         return;
      }
      if (!isDragging) {
         return;
      }
      tabs.current.classList.add("dragging");
      tabs.current.scrollLeft -= event.movementX;
      handleIcons(tabs.current.scrollLeft);
   }

   function dragStop() {
      if (tabs.current === null) {
         return;
      }
      setIsDragging(false);
      tabs.current.classList.remove("dragging");
   }

   function dragStart() {
      setIsDragging(true);
   }

   document.addEventListener("mouseup", dragStop);
   return (
      <div className="wrapper">
         {!hideLeft && (
            <div className="icon">
               <FaChevronLeft onClick={() => scroll("left")} />
            </div>
         )}
         <ul className="tabs-box" ref={tabs} onMouseMove={dragging} onMouseDown={dragStart}>
            <li className="tab">PHP</li>
            <li className="tab active">JavaScript</li>
            <li className="tab">MySQL</li>
            <li className="tab">Databases</li>
            <li className="tab">Software Development</li>
            <li className="tab">BigQuery</li>
            <li className="tab">AWS</li>
            <li className="tab">Programming</li>
            <li className="tab">HTML</li>
            <li className="tab">Algorithms</li>
            <li className="tab">CSS</li>
            <li className="tab">Typescript</li>
            <li className="tab">Vue</li>
            <li className="tab">React</li>
            <li className="tab">Data Structure</li>
         </ul>
         {!hideright && (
            <div className="icon">
               <FaChevronRight onClick={() => scroll("right")} />
            </div>
         )}
      </div>
   );
};
export default DraggableSlider;
