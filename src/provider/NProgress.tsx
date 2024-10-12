"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const NProgress = () => {
  return (
    <ProgressBar
      height="3px"
      color="#345259"
      options={{ showSpinner: false }}
    />
  );
};

export default NProgress;
