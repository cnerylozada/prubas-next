import { useEffect, useState } from "react";
import { getStaff } from "../services/staff";

export async function getStaticProps() {
  const staff = await getStaff();
  return {
    props: { staff },
  };
}
const About = ({ staff }: { staff: any }) => {
  // const [staff, setStaff] = useState<any>();
  // useEffect(() => {
  //   getStaff().then((_) => setStaff(_));
  // }, []);
  return (
    <>
      <div>
        <div className="text-lg font-bold text-blue-500">About</div>
        <div>
          <p>Notes</p>
          <ul className="list-inside list-disc">
            <li>
              getStaticProps page: el json de la data cargada se genera al
              <span className="font-bold">inicio de la app</span> (ver
              inspector), es por eso q la data y la pagina se cargan cai de
              inmediato cuando entras en ella
            </li>
          </ul>
        </div>
        <div>
          {!staff && <p>Loading ...</p>}
          {!!staff &&
            staff.map((_: any, index: number) => <p key={index}>{_.name}</p>)}
        </div>
      </div>
    </>
  );
};

export default About;
