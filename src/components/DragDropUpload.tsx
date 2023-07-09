import { useRef, useState } from "react";

const DragDrogUpload = () => {
  type image = {
    url: string;
    name: string;
  };

  const [images, setImages] = useState<image[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<null | HTMLInputElement>(null);

  const selectFiles = () => {
    if (fileInputRef.current !== null) {
      fileInputRef.current.click();
    }
  };

  const onFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files as FileList;
    addFiles(files);
  };

  const addFiles = (files: FileList) => {
    if (files.length === 0) return;

    for (let index = 0; index < files.length; index++) {
      if (files[index].type.split("/")[0] !== "image") {
        continue;
      }
      if (!images.some((e) => e.name === files[index].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[index].name,
            url: URL.createObjectURL(files[index]),
          },
        ]);
      }
    }
  };

  // @ts-ignore
  const deleteImage = (event: React.MouseEvent<HTMLSpanElement>, deleteIndex: number) => {
    setImages((current) =>
      // @ts-ignore
      current.filter((image, index) => {
        return index !== deleteIndex;
      })
    );
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  };

  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    addFiles(files);
  };

  return (
    <div className="card-upload">
      <div className="top">
        <p>Drag & Drop image upload</p>
      </div>
      <div className="drag-area" onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
        {isDragging ? (
          <span className="select">Drop images here</span>
        ) : (
          <>
            Drag & Drop image here or{" "}
            <span className="select" role="button" onClick={selectFiles}>
              {" "}
              Browse
            </span>
          </>
        )}
        <input type="file" name="file" className="file" multiple ref={fileInputRef} onChange={onFileSelect} />
      </div>
      <div className="container">
        {images.map((image, index) => (
          <div key={index} className="image">
            <span className="delete" onClick={(e) => deleteImage(e, index)}>
              &times;
            </span>
            <img src={image.url} alt={image.name} />
          </div>
        ))}
      </div>
      <button type="button">Upload</button>
    </div>
  );
};
export default DragDrogUpload;
