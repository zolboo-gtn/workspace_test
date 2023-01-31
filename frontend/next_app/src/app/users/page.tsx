//
import Link from "next/link";

//
import { client } from "@/client";

const HomePage = async () => {
  const { status, body: users } = await client.user.getUsers();

  if (status !== 200) {
    return <div>{`Status: ${status}`}</div>;
  }

  return (
    <div>
      <div>Users Page</div>
      {users.map(({ id, name }) => (
        <li key={id}>
          <Link href={`/users/${id}`}>{name}</Link>
        </li>
      ))}
    </div>
  );
};

export default HomePage;
