
/** Tag Type **/
export type Tags = { [key: string]: string };

/**
 * Options for publishing LogSnag events
 */
export interface PublishOptions {
  /**
   * Project name
   * example: "my-saas"
   */
  project: string;

  /**
   * Channel name
   * example: "waitlist"
   */
  channel: string;

  /**
   * Event name
   * example: "User Joined"
   */
  event: string;

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
   * TODO update requirements
   */
  tags?: Tags;

  /**
   * Send push notification
   */
  notify?: boolean;
}
