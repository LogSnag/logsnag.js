import { ENDPOINTS } from '../constants';
import { HTTPResponseError } from './error';
import { PublishOptions } from '../types';
import { InsightOptions } from '../types/insight';

/**
 * LogSnag Client
 */
export default class LogSnag {
  private readonly token: string;
  private readonly project: string;

  /**
   * Construct a new LogSnag instance
   * @param token LogSnag API token
   * @param project LogSnag project name
   * for more information, see: docs.logsnag.com
   */
  constructor({ token, project }: { token: string; project: string }) {
    this.token = token;
    this.project = project;
  }

  /**
   * Get project name
   * @returns project name
   */
  getProject(): string {
    return this.project;
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
    const body = JSON.stringify({
      ...options,
      project: this.getProject()
    });

    const response = await fetch(ENDPOINTS.LOG, { method, body, headers });
    if (!response.ok) {
      throw new HTTPResponseError(
        response.status,
        response.statusText,
        await response.json()
      );
    }

    return true;
  }

  /**
   * Publish a new insight to LogSnag
   * @param options
   * @returns true when successfully published
   */
  public async insight(options: InsightOptions): Promise<boolean> {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.createAuthorizationHeader()
    };

    const method = 'POST';
    const body = JSON.stringify({
      ...options,
      project: this.getProject()
    });

    const response = await fetch(ENDPOINTS.INSIGHT, { method, body, headers });
    if (!response.ok) {
      throw new HTTPResponseError(
        response.status,
        response.statusText,
        await response.json()
      );
    }

    return true;
  }


}
