import { TagKey } from './track';

/** Properties Type **/
export type Properties = { [key: TagKey]: string | number | boolean };

interface GroupWithUserOptions {
  /**
   * Group ID
   * example: "group_123"
   */
  group_id: string;

  /**
   * User ID
   * example: "user_123"
   */
  user_id: string;
}

interface GroupWithPropertiesOptions {
  /**
   * Group ID
   * example: "group_123"
   */
  group_id: string;

  /**
   * User ID
   * example: "user_123"
   */
  user_id: string | undefined;

  /**
   * Group properties
   * example: { username: "mattie" }
   */
  properties: Properties;
}

/**
 * Options for publishing LogSnag group
 */
export type GroupOptions = GroupWithUserOptions | GroupWithPropertiesOptions;
