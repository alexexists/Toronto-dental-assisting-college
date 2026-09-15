/**
 * Client-side error reporting hook for the root error boundary.
 * Reserved for a future analytics / monitoring integration.
 */
export function reportClientError(_error: unknown, _context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
}
