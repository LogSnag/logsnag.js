
/**
 * Options for publishing LogSnag insight
 */
export interface InsightOptions {

  /**
   * Insight title
   * example: "User Count"
   */
  title: string;

  /**
   * Insight value
   * example: 100
   */
  value: string | boolean | number;

  /**
   * Event icon (emoji)
   * must be a single emoji
   * example: "👨"
   */
  icon?: string;

}
