import { RefObject } from "react";

export async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function fade_in(ref: RefObject<HTMLDivElement | null>) {
  const elements = ref.current!.getElementsByClassName("fade-in") as HTMLCollectionOf<HTMLDivElement>; // Typecasting the HTMLCollectionOf so typescript doesn't hate me

  let offset_ms = 0;
  for (let i = 0; i < elements.length; i++) {
    offset_ms += 100;
    sleep(offset_ms).then(() => {
      elements.item(i)!.style.opacity = "1";
      elements.item(i)!.style.transform = "translate(0, -2rem)";
    });
  }
  // document.getElementById("pfp").style.opacity = "1";
  // document.getElementById("pfp").style.transform = "translate(0, -2rem)";
}

export function fade_out(ref: RefObject<HTMLDivElement | null>) {
  const elements = ref.current!.getElementsByClassName("fade-in") as HTMLCollectionOf<HTMLDivElement>; // Typecasting the HTMLCollectionOf so typescript doesn't hate me

  let offset_ms = 0;
  for (let i = 0; i < elements.length; i++) {
    offset_ms += 100;
    sleep(offset_ms).then(() => {
      elements.item(i)!.style.opacity = "0";
      elements.item(i)!.style.transform = "translate(0, 2rem)";
    });
  }
  // document.getElementById("pfp").style.opacity = "1";
  // document.getElementById("pfp").style.transform = "translate(0, -2rem)";
}
