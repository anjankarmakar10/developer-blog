import React from "react";
import clsx from "clsx";
import { Rss } from "react-feather";

import Logo from "@/components/Logo";
import VisuallyHidden from "@/components/VisuallyHidden";

import styles from "./Header.module.css";
import DarkModeToggle from "../DarkModeToggle";
import Link from "next/link";

function Header({ theme, className, ...delegated }) {
  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <Logo />

      <div className={styles.actions}>
        <Link
          href="https://rss.app/feeds/a7cOcMGhTZ9IaVFH.xml"
          className={styles.action}
        >
          <Rss
            size="1.5rem"
            style={{
              // Optical alignment
              transform: "translate(2px, -2px)",
            }}
          />
          <VisuallyHidden>View RSS feed</VisuallyHidden>
        </Link>
        <DarkModeToggle className={styles.action} initialTheme={theme} />
      </div>
    </header>
  );
}

export default Header;
