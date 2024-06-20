import Link from "next/link";

export default function SignUpForm() {
  return (
    <form className="w-96 flex flex-col justify-center items-center bg-white rounded-2xl p-5 gap-5">
      <h1 className="font-bold text-4xl text-justify mb-4">
        PKBOW<br></br>CARDS
      </h1>

      <input type="text" placeholder="user" className="border-b-2 h-10 p-3" />
      <input
        type="text"
        placeholder="password"
        className="border-b-2 h-10 p-3"
      />
      <input
        type="text"
        placeholder="confirm password"
        className="border-b-2 h-10 p-3"
      />
      <div className="flex flex-col gap-3 justify-center items-center">
        <button className="w-40 h-12 bg-blue-500 rounded-2xl font-bold text-white text-2xl">
          SIGN UP
        </button>

        <p>
          <Link href="/login">or continue to login</Link>
        </p>
      </div>
    </form>
  );
}
