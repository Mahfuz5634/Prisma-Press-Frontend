
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <h1><a href="/blogs">blogs</a></h1>
      <h1>
        ${process.env.BACKEND_API_URL}
      </h1>
    </div>
  );
}
