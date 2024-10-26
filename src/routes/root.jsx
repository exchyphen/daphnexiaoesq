import { Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div>root page</div>
      <Link to={"about"}>about page</Link>
    </>
  );
}
