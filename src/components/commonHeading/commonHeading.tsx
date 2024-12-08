interface ICommonHeadingProps {
  title: string;
  subTitle?: string;
}

const CommonHeading = ({ title, subTitle = "" }: ICommonHeadingProps) => {
  return (
    <div className="flex justify-center items-center w-[60%] mx-auto pt-20 pb-14">
      <h1 className="text-4xl font-taviraj">{title}</h1>
      <p className="text-gray-600">{subTitle}</p>
    </div>
  );
};

export default CommonHeading;
