"use client";

import { useEffect, useRef } from "react";
import { clsx } from "clsx";

type AgentModalProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * A minimal dialog to outline the launch flow.
 * Interns: replace with fully featured orchestration wizard.
 */
export function AgentModal({ open, onClose }: AgentModalProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-label="Launch agent wizard"
      className={clsx(
        "backdrop:bg-slate/90 backdrop:backdrop-blur",
        "rounded-card border border-slate/30 bg-slate p-0 text-cloud"
      )}
      onClose={onClose}
    >
      <form method="dialog" className="space-y-6 p-8">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-gold">Preview</p>
          <h2 className="text-2xl font-display font-semibold">
            Agent launch assistant
          </h2>
          <p className="text-sm text-cloud/70">
            Interns: wire in orchestrator steps for grant intel, compliance, and
            reporting tasks. Capture agent goals and custom data connections.
          </p>
        </header>
        <div className="rounded-2xl border border-slate/50 p-4 text-sm text-cloud/80">
          <p className="font-semibold text-cloud">Mock configuration summary</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-cloud/70">
            <li>Primary workflow: KPI health check</li>
            <li>Data taps: CRM sandbox, budget sheet upload</li>
            <li>Escalations route to: compliance@grantsfound.ai</li>
          </ul>
        </div>
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full px-4 py-2 text-sm font-semibold text-cloud/70 hover:text-cloud focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-slate hover:bg-gold/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Confirm mock launch
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default AgentModal;
