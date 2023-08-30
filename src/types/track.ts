/**
 * Options for publishing LogSnag events
 */
export interface TrackOptions {
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
   * User ID
   * example: "user_123"
   */
  user_id?: string;

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

  /**
   * Event timestamp
   */
  timestamp?: number | Date;
}

export type TagKey = Lowercase<string>;

/** Tag Type **/
export type Tags = { [key: TagKey]: string | number | boolean };
export type Parser = 'markdown' | 'text';
