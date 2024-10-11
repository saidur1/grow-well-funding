import { cn } from "@/lib/utils";
import Image from "next/image";
import ApplyButton from "./applyButton";

interface Props {
  side: "left" | "right";
  title: string;
  description: string;
  imgSrc: string;
}

const InfoCard = ({ side, title, description, imgSrc }: Props) => {
  return (
    <section className="sectionContainer">
      <div
        className={cn(
          "flex  items-center gap-x-2",
          side === "right" ? "flex-row-reverse" : ""
        )}
      >
        <div className="flex-initial hidden md:block">
          <Image
            src={imgSrc}
            height={400}
            width={400}
            className="clipPathPolygon"
            alt="img"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-primary-main text-[26px]">{title}</h1>
          <p className="text-[17px] text-primary-gray mt-4">{description}</p>
          <div className="mt-3">
            <ApplyButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
