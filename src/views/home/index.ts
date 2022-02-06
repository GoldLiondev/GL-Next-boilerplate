import dynamic from "next/dynamic";

// exports
export const HeroView = dynamic(() => import("./Hero"));
