/** Properties Type **/
export type Properties = { [key: string]: string | number | boolean };

/**
 * Options for publishing LogSnag identify
 */
export interface IdentifyOptions {
  /**
   * User ID
   * example: "user_123"
   */
  userId: string;

  /**
   * User properties
   * example: { username: "mattie" }
   */
  properties: Properties;
}
