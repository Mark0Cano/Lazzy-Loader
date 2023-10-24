// Importing React & Hooks
import { useRef, useEffect, useState } from "react";

//We define a typo for our props
type Props = { image:string };

// Firs we define a function the it returns TSX
export const LazzyImage = ({image}: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null);
    //Defining the state for de url images
    const [src, setSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=");

    // We use useEffect to charge the element before de Observer gets in
    useEffect(() => {
        // New Observer
    const observer = new IntersectionObserver((entries)=>{
        //We look each element and we apply a function for each
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // onIntersection -> console.log
                // console.log("Hey there :3!");

                // The state get the image element
                setSrc(image);
            }
        })//Observer is only exsiting, we need to call it
    });

    //Orseve node
    if (node.current) {
        observer.observe(node.current)
    }
    

    //Desconection
    return () => {
        observer.disconnect()
    }
    // Setting the image get by state
    }, [image]);

    return (
        <img 
            ref={node}

            // The src is inicializated with a empty state
            src={src} 
            width={320} 
            height="auto"
            className="rounded bg-teal-200"
        />);
};