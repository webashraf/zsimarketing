interface ICommonHeadingProps {
  title: string;
  subTitle?: string;
  position?: string;
}

const CommonHeading = ({
  title,
  subTitle = "",
  position = "start",
}: ICommonHeadingProps) => {
  return (
    <div className={`flex items-${position} flex-col pt-20 pb-14`}>
      <h1 className="text-4xl font-taviraj mb-3">{title}</h1>
      <p className="text-gray-600">{subTitle}</p>
    </div>
  );
};

export default CommonHeading;
