import { useEffect, useState } from "react";
import { getStaff } from "../services/staff";

const About = () => {
  const [staff, setStaff] = useState();
  useEffect(() => {
    getStaff().then((_) => setStaff(_));
  }, []);
  return (
    <>
      <div>
        <div className="text-lg font-bold text-blue-500">About</div>
        <div>
          {!!staff &&
            staff.map((_: any, index: number) => <p key={index}>{_.name}</p>)}
        </div>
      </div>
    </>
  );
};

export default About;
