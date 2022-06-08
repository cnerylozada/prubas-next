import { getUsers } from "../../services/user";

export async function getServerSideProps(context: any) {
  const userList = await getUsers();
  return {
    props: { userList },
  };
}

const User = ({ userList }: { userList: any }) => {
  return (
    <div className="space-y-10">
      <div className="text-lg font-bold text-blue-500">getServerSideProps</div>
      <div>
        <p>Notes</p>
        <ul className="list-inside list-disc">
          <li>
            En Fetch/XHR se consulta el servicio solo cuando la pagina es
            visitada
          </li>
          <li>Genera un .json solo cuando la pagina es visitada</li>
          <li>
            <span className="font-bold">
              Si se llama ejecuta la pagina desde el buscador:
            </span>
            Retorna un documento en el inspector con el preview del html el cual
            contiene tanto data estatica como dinamica
          </li>
        </ul>
      </div>

      <div>
        <p>List of Users:</p>
        <div>
          {userList.map((_: any, index: number) => (
            <p key={index}>{_.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
