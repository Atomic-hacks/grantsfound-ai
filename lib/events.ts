export type EventPayload = {
  name: string;
  properties?: Record<string, unknown>;
};

/**
 * Simple event bus placeholder so interns know where to push telemetry.
 */
export async function emitEvent(payload: EventPayload) {
  console.info("[events] mock emit", payload); // eslint-disable-line no-console
}
