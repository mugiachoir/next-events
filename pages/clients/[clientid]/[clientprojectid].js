import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();

  console.log(router.query.clientprojectid);
  console.log(router.query.clientid);

  return <div>Project Page for a specific project for a selected client</div>;
};

export default SelectedClientProjectPage;
