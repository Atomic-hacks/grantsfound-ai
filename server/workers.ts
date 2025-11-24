"use server";

import sampleJob from "./jobs/sampleJob";

/**
 * Register background workers here.
 * Interns: hook into your queue system and schedule cadence.
 */
export async function runSampleJob() {
  return sampleJob();
}
