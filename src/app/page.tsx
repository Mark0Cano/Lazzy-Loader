"use client"; // This is a client component 
// Importing React & Hooks
import { useState } from "react" 
import type { MouseEventHandler } from "react";

// Importing components
import { LazzyImage } from "./RandomFox"
import { NextPage } from "next";

// Importing Icons
import FavoriteIcon from '@mui/icons-material/Favorite';

// Getting a random number
const random = () => Math.floor(Math.random() * 123) + 1;

// Genering an ID
const generateId = () => Math.random().toString(36).substr(2, 9);

// Defining Types
type ImageItem = { id: string; url:string}

const Home: NextPage = () => {
  const [images, setImages] = useState<Array<ImageItem>>([])

const addNewFox:MouseEventHandler<HTMLButtonElement> = (event) => {
  const newImageItem = {
    id: generateId(),
    url: `https://randomfox.ca//images//${random()}.jpg` 
  };

  setImages([
    ...images,
    newImageItem
  ]);
};

  return (
    <main className="
      flex min-h-screen flex-col items-center justify-between p-24 mb-20
      
    ">
      <div className="flex gap-4 font-bold underline">
        <h1>Fox Generator :3 </h1> 
        <FavoriteIcon />
        </div>
      <h3 className="mt-4 mb-4">Hola, estamos empezando el proyecto con TypeScript... :3</h3>
      
      <button 
        onClick={addNewFox} 
        className="
          flex items-center justify-center gap-2
          w-56 h-9 rounded-md
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...
          text-slate-100
        ">
        Add a Foxie <FavoriteIcon />
      </button>
      
      {images.map(({id, url}) => (
      <div key={id} className="p-4 ">
        <LazzyImage image={url} />
      </div>
      ))}
    </main>
  )
}

export default Home;