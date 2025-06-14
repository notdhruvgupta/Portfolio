import Image from "next/image";
import BentoGrid from "./BentoGrid";
import { TimelineExample } from "./Test";

export default function Home() {
  return (
    <div className="font-nohemi bg-primary-bg">
      <BentoGrid />
      {/* <TimelineExample /> */}
    </div>
  );
}
