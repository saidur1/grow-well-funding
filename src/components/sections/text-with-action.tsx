import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import ApplyButton from "../ui/applyButton";

interface Props {
  actionButton?: boolean;
  center?: boolean;
  title: string;
  children?: ReactNode;
  para1: string;
  para2: string;
  titleClasses?: string;
}

const TextWithAction = ({
  actionButton = true,
  center = true,
  title,
  children,
  titleClasses,
  para1,
  para2,
}: Props) => {
  return (
    <section
      className={cn(
        "my-[50px] sectionContainer flex flex-col justify-center  space-y-[20px]",
        center ? "items-center" : "text-start"
      )}
    >
      <h1
        className={cn(
          "text-[30px] md:text-[40px] text-primary-main max-w-[505px]",
          center ? "text-center" : "text-left",
          titleClasses
        )}
      >
        {title}
      </h1>

      {para1 && (
        <p
          className={cn(
            "text-primary-gray text-wrap",
            center ? "text-center" : "items-start"
          )}
        >
          {para1}
        </p>
      )}
      {para2 && (
        <p
          className={cn(
            "text-primary-gray text-wrap",
            center ? "text-center" : "items-start"
          )}
        >
          {para2}
        </p>
      )}
      {children}
      <div>{actionButton && <ApplyButton />}</div>
    </section>
  );
};

export default TextWithAction;
