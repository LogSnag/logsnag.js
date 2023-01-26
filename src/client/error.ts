/**
 * Fetch HTTP Response Error
 */
export class HTTPResponseError extends Error {

  public readonly status: number;
  public readonly statusText: string;
  public readonly body: any | undefined;

  constructor(status: number, statusText: string, body?: any) {
    // Validate that the status is a positive integer
    if (typeof status !== 'number' || status < 100 || status >= 600) {
      throw new Error('Invalid status code');
    }

    // Validate that the statusText is a non-empty string
    if (typeof statusText !== 'string' || !statusText) {
      throw new Error('Invalid status text');
    }

    super(`HTTP Error Response: ${status} ${statusText}`);
    this.status = status;
    this.statusText = statusText;
    this.body = body;
  }

  /**
   * Get Error Info as JSON
   */
  toJSON() {
    return {
      status: this.status,
      statusText: this.statusText,
      message: this.body && this.body.message ? this.body.message : undefined,
      body: this.body
    };
  }

}
