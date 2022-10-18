/**
 * Fetch HTTP Response Error
 */
export class HTTPResponseError extends Error {

  public readonly status: number;
  public readonly statusText: string;
  public readonly body: any | undefined;

  constructor(status: number, statusText: string, body: any | undefined) {
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
