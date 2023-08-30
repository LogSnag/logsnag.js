interface InsightBase {
  /**
   * Insight title
   * example: "User Count"
   */
  title: string;

  /**
   * Event icon (emoji)
   * must be a single emoji
   * example: "👨"
   */
  icon?: string;
}

/**
 * Options for publishing LogSnag insight
 */
export interface InsightTrackOptions extends InsightBase {
  /**
   * Insight value
   * example: 100
   */
  value: string | boolean | number;
}

export interface InsightIncrementOptions extends InsightBase {
  /**
   * Insight value
   * example: 1
   */
  value: number;
}
