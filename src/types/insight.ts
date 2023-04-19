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

export interface InsightMutateOptions extends InsightBase {
  /**
   * Insight value
   * example: { $inc: 1 }
   */
  value: { $inc: number };
}
