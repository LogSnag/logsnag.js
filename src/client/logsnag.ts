import fetch from 'node-fetch';
import { LOGSNAG_ENDPOINT } from '../constants';
import { HTTPResponseError } from './error';
import { PublishOptions } from '../types';

/**
 * LogSnag Client
 */
export default class LogSnag {
  private readonly token: string;

  /**
   * Construct a new LogSnag instance
   * @param token: your API token. See docs.logsnag.com for details
   */
  constructor(token: string) {
    this.token = token;
  }

  /**
   * Creates authorization header
   * @returns Authorization header value
   */
  private createAuthorizationHeader(): string {
    return `Bearer ${this.token}`;
  }

  /**
   * Publish a new event to LogSnag
   * @param options
   * @returns true when successfully published
   */
  public async publish(options: PublishOptions): Promise<boolean> {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.createAuthorizationHeader()
    };

    const method = 'POST';
    const body = JSON.stringify(options);

    const response = await fetch(LOGSNAG_ENDPOINT, { method, body, headers });
    if (!response.ok) {
      throw new HTTPResponseError(response);
    }

    return true;
  }
}
