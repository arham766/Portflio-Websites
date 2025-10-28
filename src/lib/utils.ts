/**
 * Simple class name merge utility.
 * Combines multiple class strings conditionally and removes duplicates.
 */
export function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(" ");
}
