import { useEffect, useState } from "react";
import { getStaff } from "../services/staff";

const Random = () => {
  const [staff, setStaff] = useState<any>();
  useEffect(() => {
    getStaff().then((_) => setStaff(_));
  }, []);

  return (
    <div className="space-y-10">
      <div className="text-lg font-bold text-blue-500">
        Client-side Rendering useEffect
      </div>
      <div>
        <p>Notes</p>
        <ul className="list-inside list-disc">
          <li>
            Statically generate (pre-render) parts of the page that do not
            require external data. (ver view page source)
          </li>
          <li>En Fetch/XHR se carga el servicio</li>
          <li>El servicio se llama cada vez q se accede a la pagina</li>
          <li>Cada usuario podra ver data diferente con llamada a la pagina</li>
          <li>
            The team behind Next.js has created a React hook for data fetching
            called SWR. We highly recommend it if you’re{" "}
            <span className="font-bold">fetching data on the client side.</span>
          </li>
        </ul>
      </div>
      <div>
        <div>Data:</div>
        {!staff && <p>Loading ...</p>}
        {!!staff &&
          staff.map((_: any, index: number) => <p key={index}>{_.name}</p>)}
      </div>
    </div>
  );
};

export default Random;
