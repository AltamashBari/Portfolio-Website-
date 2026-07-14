"use client";

import { Printer } from "@phosphor-icons/react";

/** Triggers the browser print dialog (users can save the page as a PDF). */
export function PrintButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`group inline-flex items-center gap-2.5 rounded-[2px] bg-canvas px-7 py-3.5 text-sm text-ink transition-colors duration-300 hover:bg-olive hover:text-canvas ${className}`}
    >
      <Printer size={16} weight="regular" />
      Print / Save as PDF
    </button>
  );
}
