import styles from "./index.module.css";

import { Header } from "../../components/header";
import { Body } from "../../components/body";
import { Footer } from "../../components/footer";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const { id } = useRouter().query;
  useEffect(() => {
    if (id) {
      if (Array.isArray(id)) fetch(`/api/links/view/${id[0]}`);
      else fetch(`/api/links/view/${id}`);
    }
  }, [id]);

  return (
    <div className={styles.page}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
