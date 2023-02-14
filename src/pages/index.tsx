import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const { data, isLoading } = api.student.getAll.useQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <ul>
        {data?.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
