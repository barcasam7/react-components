import { useState } from "react";

type image = {
  id: number;
  url: string;
  title: string;
};

const images: image[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1516941064643-74aacd84843c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "11 Apostles, Victoria, Australia",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1576086135878-bd7e7c812b41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2095&q=80",
    title: "Blue Mountains, New South Wales, Australia",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1557214997-7eae7e0e7aaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    title: "Ayers Rock, Northern Terrority, Australia",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1609636379488-933529fe8182?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    title: "Whitsundays, Queensland, Australia",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1598298230762-e4cbaf605f4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    title: "Rottnest Island, Western Australia, Australia",
  },
];

const ExpandableImage = () => {
  let [imageId, setImageId] = useState<number>(1);
  return (
    <div className="image-container">
      {images.map(image => (
        <div
          key={image.id}
          className={image.id === imageId ? "active panel" : "panel"}
          style={{ backgroundImage: `url(${image.url})` }}
          onClick={() => setImageId(image.id)}
        >
          <h3>{image.title}</h3>
        </div>
      ))}
    </div>
  );
};
export default ExpandableImage;
