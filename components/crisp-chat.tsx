"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("a40042ab-f5f2-40a7-bd87-dba2b84830f0");
  }, []);

  return null;
};
