import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  center?: boolean;
  titleClasses?: string;
}

const SectionTitle = ({ title, description, center, titleClasses }: Props) => {
  return (
    <div className="my-[50px] mt-[100px] sectionContainer space-y-2">
      <h1
        className={cn(
          "text-primary-main text-[45px]",
          titleClasses,
          center ? "text-center" : "text-start"
        )}
      >
        {title}
      </h1>
      <p
        className={cn(
          center ? "text-center mx-auto" : "text-start",
          "max-w-[721px] "
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
