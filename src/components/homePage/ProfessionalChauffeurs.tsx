import Image from "next/image";
import CommonHeading from "../commonHeading/commonHeading";
import AnimatedCard from "../ui/AnimatedCard";

const ProfessionalChauffeurs = () => {
  const driverInfo = [
    {
      id: "1",
      name: "Marco Watkid",
      position: "Driver",
      photo: "https://rpclimo.com/wp-content/uploads/2023/11/3.png",
    },
    {
      id: "2",
      name: "Marily Sulli",
      position: "Driver",
      photo: "https://rpclimo.com/wp-content/uploads/2023/11/5.png",
    },
    {
      id: "3",
      name: "Shila devic",
      position: "Driver",
      photo: "https://rpclimo.com/wp-content/uploads/2023/11/4.png",
    },
    {
      id: "4",
      name: "Louis Coburn",
      position: "Driver",
      photo: "https://rpclimo.com/wp-content/uploads/2023/11/Untitled-1-1.png",
    },
  ];
  return (
    <div className="lg:px-0 px-5">
      <CommonHeading
        title="Our Professional Chauffeurs
"
        subTitle="Our team of professional chauffeurs stands as the cornerstone of our commitment to excellence in transportation. Handpicked for their expertise, dedication, and unwavering professionalism, our chauffeurs are more than drivers—they are ambassadors of luxury, ensuring that your journey is not just a commute but an experience to remember."
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        {driverInfo.map((driver) => (
          <div className="w-full" key={driver.id + driver.name}>
            <Image
              src={driver.photo}
              alt={driver.name + "image"}
              width={400}
              height={500}
              className="w-full"
            />
            <div className="-translate-y-3 w-full">
              <AnimatedCard>
                <h3 className="lg:text-2xl text-xl font-mulish">
                  {driver.name}
                </h3>
                <h4 className="font-light text-center font-mulish">
                  {driver.position}
                </h4>
              </AnimatedCard>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalChauffeurs;
