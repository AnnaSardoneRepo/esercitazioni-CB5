import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const id = router.query.id;

  console.log(router);

  return (
    <div>
    <h1> #{id}</h1>

    </div>
  )
};

export default Page;