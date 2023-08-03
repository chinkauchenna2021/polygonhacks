import { Button } from "@/components/ui/button";
import Head from "next/head";
import Link from "next/link";
import { api } from "Y/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
    const getAll = api.example.getAll.useQuery();

  return (
    <>
      <Button />
    </>
  );
}
