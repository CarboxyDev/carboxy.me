import styles from "../styles/404.module.css";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="mb-12">
          <h1 className="text-9xl font-nunito text-center">
            <span className={styles.magicText}>404</span>
          </h1>
          <p className="mt-8 text-2xl font-nunito text-slate-200">
            Looks like you&apos;re lost. You may wanna{" "}
            <Link
              href="/"
              className="underline decoration-primary decoration-2 hover:text-primary hover:animate-pulse"
            >
              go back
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
