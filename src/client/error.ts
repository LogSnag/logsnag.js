/**
 * Fetch HTTP Response Error
 */
export class HTTPResponseError extends Error {
  public readonly message: string;

  constructor(status: number, statusText: string, body: any | undefined) {
    super(`HTTP Error Response: ${status} ${statusText}`);
    this.message = this.createReadableString(body);
  }

  /**
   * Create a readable string from the response body
   * @param body
   */
  createReadableString(body: any) {
    let error = '[LogSnag] Failed to publish: ';
    if (body && body.validation && Array.isArray(body.validation.body)) {
      error += body.validation.body
        .map((item: { message: string }) => item.message)
        .join(', ');
    } else {
      error += `: Please check our docs at https://docs.logsnag.com`;
    }
    return error;
  }

  toString() {
    return this.message;
  }

  /**
   * Get Error Info as JSON
   */
  toJSON() {
    return {
      message: this.message
    };
  }
}
