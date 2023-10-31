import React from "react";

interface layoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: layoutProps) {
  return (
    <main>
      <h1>layout desde el about</h1>
      {children}
    </main>
  );
}
