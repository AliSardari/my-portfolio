"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// تشخیص «بعد از هیدریشن» بدون setState داخل effect
export function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
