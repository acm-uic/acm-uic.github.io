import * as React from "react";
import clsx from "clsx";
import styles from "./ShimmerLine.module.css";

export interface ShimmerLineProps {
  /**
   * Show shimmer animation
   * @default true
   */
  animate?: boolean;
}

export const ShimmerLine: React.FC<ShimmerLineProps> = ({ animate = true }) => (
  <span className={clsx(styles.lines, styles.shine, animate && styles.shineAnimation)} />
);
