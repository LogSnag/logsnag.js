import { Response } from 'node-fetch';

/**
 * Fetch HTTP Response Error
 */
export class HTTPResponseError extends Error {
  constructor(response: Response) {
    super(`HTTP Error Response: ${response.status} ${response.statusText}`);
  }
}
