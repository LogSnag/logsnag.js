import type { ClientGenerics } from '.';

/**
 * Tag Type
 */
export type Tags = Record<string, string | number | boolean>;

/**
 * Options for publishing LogSnag events
 */
export interface PublishOptions<
  TOptions extends ClientGenerics = {
    channel: string;
    event: string;
    project: string;
  }
> {
  /**
   * Project name
   * example: "my-saas"
   */
  project?: TOptions['project'];

  /**
   * Channel name
   * example: "waitlist"
   */
  channel: TOptions['channel'];

  /**
   * Event name
   * example: "User Joined"
   */
  event: TOptions['event'];

  /**
   * Event description
   * example: "joe@example.com joined waitlist"
   */
  description?: string;

  /**
   * Event icon (emoji)
   * must be a single emoji
   * example: "🎉"
   */
  icon?: string;

  /**
   * Event tags
   * example: { username: "mattie" }
   */
  tags?: Tags;

  /**
   * Send push notification
   */
  notify?: boolean;
}
