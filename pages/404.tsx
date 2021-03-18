import Link from "next/link";
import classes from "../styles/error.module.scss";

export default function Error() {
  return (
    <div>
      <h1 className={classes.error}>Error occured</h1>
      <p>
        Please go to the <Link href="/">Home page</Link>
      </p>
    </div>
  );
}
