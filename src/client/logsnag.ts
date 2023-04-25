import { ENDPOINTS } from '../constants';
import { HTTPResponseError } from './error';
import { TrackOptions } from '../types/index';
import { InsightIncrementOptions, InsightTrackOptions } from '../types/insight';
import { toUnixTimestamp } from '../utils/date';
import { IdentifyOptions } from '../types/identify';

/**
 * LogSnag Client
 */
export default class LogSnag {
  private readonly token: string;
  private readonly project: string;
  private disabled = false;

  /**
   * Construct a new LogSnag instance
   * @param token LogSnag API token
   * @param project LogSnag project name
   * @param disableTracking Disable tracking
   * for more information, see: docs.logsnag.com
   */
  constructor({
    token,
    project,
    disableTracking = false
  }: {
    token: string;
    project: string;
    disableTracking?: boolean;
  }) {
    this.token = token;
    this.project = project;
    this.disabled = disableTracking || false;
  }

  /**
   * Disable tracking for this instance
   * (this is useful for development)
   */
  disableTracking() {
    this.disabled = true;
  }

  /**
   * Enable tracking for this instance
   * (this is useful for development)
   */
  enableTracking() {
    this.disabled = false;
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
      increment: this.insightIncrement.bind(this)
    };
  }

  /**
   * Publish a new event to LogSnag
   * @param options
   * @returns true when successfully published
   */
  public async track(options: TrackOptions): Promise<boolean> {
    if (this.disabled) return true;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.createAuthorizationHeader()
    };

    const method = 'POST';

    // Convert timestamp to unix timestamp if needed
    options.timestamp = toUnixTimestamp(options.timestamp);

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
   * Identify a user
   * @param options
   * @returns true when successfully published
   */
  public async identify(options: IdentifyOptions): Promise<boolean> {
    if (this.disabled) return true;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.createAuthorizationHeader()
    };

    const method = 'POST';

    const body = JSON.stringify({
      ...options,
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
    if (this.disabled) return true;
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
   * Increment an insight value
   * @param options
   * @returns true when successfully published
   */
  protected async insightIncrement(
    options: InsightIncrementOptions
  ): Promise<boolean> {
    if (this.disabled) return true;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.createAuthorizationHeader()
    };

    const method = 'PATCH';
    const body = JSON.stringify({
      project: this.getProject(),
      icon: options.icon,
      title: options.title,
      value: {
        $inc: options.value
      }
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
