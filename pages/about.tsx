import { getStaff } from "../services/staff";

export async function getStaticProps() {
  const staff = await getStaff();
  return {
    props: { staff },
  };
}
const About = ({ staff }: { staff: any }) => {
  return (
    <>
      <div className="space-y-10">
        <div className="text-lg font-bold text-blue-500">getStaticProps</div>
        <div>
          <p>Notes</p>
          <ul className="list-inside list-disc">
            <li>
              Static Generation is the pre-rendering method that generates the
              HTML at build time. The pre-rendered HTML is then reused on each
              request.
            </li>
            <li>
              getStaticProps page: el json de la data cargada se genera al
              <span className="font-bold">inicio de la app</span> (ver
              inspector), es por eso q la data y la pagina se cargan casi de
              inmediato cuando entras en ella
            </li>
            <li>
              Note: In development mode, getStaticProps runs on each request
              instead.
            </li>
            <li>
              El View page source muestra un html con la data statica y con la
              data retornada del servicio llamado
            </li>
            <li>En Fetch/XHR se carga solo el .json</li>
            <li>
              No se vuelve a consultar el servicio y siempre se muestra la misma
              data cada vez q entramos en esta pagina
            </li>
            <li>Cada usuario vera la misma data siempre por cada build</li>
            <li>
              In production, getStaticProps runs at build time. However, this
              behavior can be enhanced using the{" "}
              <span className="font-bold">fallback key</span> returned by
              getStaticPaths
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
    </>
  );
};

export default About;
