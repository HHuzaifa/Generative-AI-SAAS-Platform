"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("39f52ec8-1597-4511-b0fc-50aecfd88755");
  }, []);

  return null;
};
