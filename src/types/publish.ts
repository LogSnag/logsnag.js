/** Tag Type **/
export type Tags = Record<string, string | number | boolean>;

/**
 * Options for publishing LogSnag events
 */
export interface PublishOptions<
  Channel extends string = string,
  Event extends string = string,
  Icon extends string = string
> {
  /**
   * Channel name
   * example: "waitlist"
   */
  channel: Channel;

  /**
   * Event name
   * example: "User Joined"
   */
  event: Event;

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
  icon?: Icon;

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
