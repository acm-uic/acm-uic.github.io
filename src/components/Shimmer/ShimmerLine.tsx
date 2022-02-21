import * as React from "react";
import clsx from "clsx";
import styles from "./ShimmerLine.module.css";

export const ShimmerLine: React.FC = () => <span className={clsx(styles.lines, styles.shine)} />;
