/**
 * Check if timestamp is in milliseconds
 * @param timestamp
 */
function isTimestampInMilliseconds(timestamp: number): boolean {
  return (
    Math.abs(Date.now() - timestamp) < Math.abs(Date.now() - timestamp * 1000)
  );
}

/**
 * Convert optional timestamp to unix timestamp
 * @param timestamp
 */
export function toUnixTimestamp(timestamp?: number | Date): number | undefined {
  if (!timestamp) return undefined;

  if (timestamp instanceof Date) {
    timestamp = timestamp.getTime();
  }

  if (isTimestampInMilliseconds(timestamp)) {
    timestamp = Math.floor(timestamp / 1000);
  }

  return timestamp;
}