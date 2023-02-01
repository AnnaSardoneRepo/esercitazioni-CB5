import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const name = router.query.name;

  console.log(router);

  return (
    <div>
    <h1> Nome: {name}</h1>

    </div>
  )
};

export default Page;