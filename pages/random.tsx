import { useEffect, useState } from "react";
import { getStaff } from "../services/staff";

const Random = () => {
  const [staff, setStaff] = useState<any>();
  useEffect(() => {
    getStaff().then((_) => setStaff(_));
  }, []);

  return (
    <div className="space-y-10">
      <div className="text-lg font-bold text-blue-500">Random</div>
      <div>
        <p>Notes</p>
        <ul className="list-inside list-disc">
          <li>
            El View page source muestra un html con data statica sin la data
            retornada del servicio a llamado
          </li>
          <li>En Fetch/XHR se carga se invoca el servicio</li>
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
