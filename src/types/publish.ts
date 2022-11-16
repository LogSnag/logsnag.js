
/** Tag Type **/
export type Tags = { [key: string]: string | number | boolean };

export type Parser = 'markdown' | 'text';

/**
 * Options for publishing LogSnag events
 */
export interface PublishOptions {
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
   */
  tags?: Tags;

  /**
   * Send push notification
   */
  notify?: boolean;

  /**
   * Parser for description
   */
  parser?: Parser;

}
