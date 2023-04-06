"use client";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return <div>{error.message}</div>;
};

export default Error;
