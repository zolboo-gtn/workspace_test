//
import Link from "next/link";

//
import { client } from "@/client";

const HomePage = async ({ params: { uid } }: { params: { uid: string } }) => {
  const { status, body: user } = await client.user.getUser({
    params: {
      id: uid,
    },
  });

  if (status !== 200) {
    return <div>{`Status: ${status}`}</div>;
  }

  return (
    <div>
      <Link href="/users">Back to Users Page</Link>
      <div>User Page</div>
      <div>{`ID: ${user.id}`}</div>
      <div>{`NAME: ${user.name}`}</div>
      <div>{`EMAIL: ${user.email}`}</div>
      <div>{`PHONE: ${user.phone}`}</div>
    </div>
  );
};

export default HomePage;
