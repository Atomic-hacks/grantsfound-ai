/**
 * Placeholder background job. Wire up BullMQ/Cloud Tasks/etc. later.
 */
export async function sampleJob() {
  // TODO: replace with KPI recalculation logic.
  return {
    executedAt: new Date().toISOString(),
    notes: "Sample job ran with mock payload.",
  };
}

export default sampleJob;
