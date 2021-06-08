import Link from "next/link";

const ClientProjectsPage = () => {
  const clients = [
    { id: "mugia", name: "Mugia" },
    { id: "max", name: "Maximillian" },
    { id: "andrey", name: "Andrey" },
  ];

  return (
    <div>
      <h1>Clients Project Page</h1>
      <ul>
        {clients.map((client) => {
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default ClientProjectsPage;
