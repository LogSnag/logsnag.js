/**
 * Options for publishing LogSnag events
 */
export interface PublishOptions <TProject = string, TChannel = string, TEvent = string> {
  /**
   * Project name
   * example: "my-saas"
   */
  project: TProject;

  /**
   * Channel name
   * example: "waitlist"
   */
  channel: TChannel;

  /**
   * Event name
   * example: "User Joined"
   */
  event: TEvent;

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
   * Send push notification
   */
  notify?: boolean;
}
