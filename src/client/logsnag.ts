import fetch from 'node-fetch';
import { LOGSNAG_ENDPOINT } from '../constants';
import { HTTPResponseError } from './error';

import type { ClientGenerics, ClientOptions, PublishOptions } from '../types';

/**
 * LogSnag Client
 */
export default class LogSnag<
  TOptions extends Partial<ClientGenerics> = {
    channel: string;
    event: string;
    project: string;
  }
> {
  private readonly token: string;
  private readonly project: TOptions['project'];

  /**
   * Construct a new LogSnag instance
   * @param token LogSnag API token
   * @param project LogSnag project name
   * for more information, see: docs.logsnag.com
   */
  constructor({ token, project }: ClientOptions<TOptions['project']>) {
    this.token = token;
    this.project = project;
  }

  /**
   * Get project name
   * @returns project name
   */
  getProject(): TOptions['project'] {
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
  public async publish(options: PublishOptions<TOptions>): Promise<boolean> {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.createAuthorizationHeader()
    };

    const method = 'POST';
    const body = JSON.stringify({
      ...options,
      project: this.getProject()
    });

    const response = await fetch(LOGSNAG_ENDPOINT, { method, body, headers });
    if (!response.ok) {
      throw new HTTPResponseError(response);
    }

    return true;
  }
}
