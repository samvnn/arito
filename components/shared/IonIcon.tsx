import { createElement } from "react";

// IonIcon component wrapper for TypeScript compatibility
export default function IonIcon({ name, ...props }: { name: string; [key: string]: any }) {
  return createElement("ion-icon" as any, { name, ...props });
}
