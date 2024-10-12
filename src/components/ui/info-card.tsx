import { cn } from "@/lib/utils";
import Image from "next/image";
import ApplyButton from "./applyButton";

interface Props {
  side: "left" | "right";
  title: string;
  description: string;
  imgSrc: string;
  titleClasses?: string;
  applyButton?: boolean;
  para2?: string;
  para3?: string;
}

const InfoCard = ({
  side,
  title,
  description,
  imgSrc,
  titleClasses,
  applyButton,
  para2,
  para3,
}: Props) => {
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
          <h1 className={cn("text-primary-main text-[26px]", titleClasses)}>
            {title}
          </h1>
          {description && (
            <p className="text-[17px] text-primary-gray mt-4">{description}</p>
          )}
          {para2 && (
            <p className="text-[17px] text-primary-gray mt-4">{para2}</p>
          )}
          {para3 && (
            <p className="text-[17px] text-primary-gray mt-4">{para3}</p>
          )}
          {applyButton && (
            <div className="mt-3">
              <ApplyButton />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
