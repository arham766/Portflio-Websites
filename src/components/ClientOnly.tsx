"use client";

import { ReactNode, useEffect, useState } from "react";

export default function ClientOnly({ children }: { children: ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Render nothing on the server, render children only in the browser
  if (!hasMounted) return null;

  return <>{children}</>;
}