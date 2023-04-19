import { ENDPOINTS } from '../constants';
import { HTTPResponseError } from './error';
import { TrackOptions } from '../types/index';
import { InsightMutateOptions, InsightTrackOptions } from '../types/insight';
import { toUnixTimestamp } from '../utils/date';
import { IdentifyOptions } from '../types/identify';

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
   * Get insight methods
   */
  get insight() {
    return {
      track: this.insightTrack.bind(this),
      mutate: this.insightMutate.bind(this)
    };
  }

  /**
   * Publish a new event to LogSnag
   * @param options
   * @returns true when successfully published
   */
  public async track(options: TrackOptions): Promise<boolean> {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.createAuthorizationHeader()
    };

    const method = 'POST';

    // Convert timestamp to unix timestamp if needed
    options.timestamp = toUnixTimestamp(options.timestamp);

    const body = JSON.stringify({
      ...options,
      user_id: options.userId,
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
   * Identify a user
   * @param options
   * @returns true when successfully published
   */
  public async identify(options: IdentifyOptions): Promise<boolean> {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.createAuthorizationHeader()
    };

    const method = 'POST';

    const body = JSON.stringify({
      ...options,
      user_id: options.userId,
      project: this.getProject()
    });

    const response = await fetch(ENDPOINTS.IDENTIFY, { method, body, headers });
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
  protected async insightTrack(options: InsightTrackOptions): Promise<boolean> {
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

  /**
   * Mutate an insight in LogSnag
   * @param options
   * @returns true when successfully published
   */
  protected async insightMutate(
    options: InsightMutateOptions
  ): Promise<boolean> {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.createAuthorizationHeader()
    };

    const method = 'PATCH';
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
