/**
 * LogSnag Base Endpoint
 */
const LOGSNAG_BASE = 'https://api.logsnag.com';

export const ENDPOINTS = {
  /**
   * LogSnag Log Endpoint
   */
  LOG: LOGSNAG_BASE + '/v1/log',

  /**
   * LogSnag Identify Endpoint
   */
  IDENTIFY: LOGSNAG_BASE + '/v1/identify',

  /**
   * LogSnag Insight Endpoint
   */
  INSIGHT: LOGSNAG_BASE + '/v1/insight',

  /**
   * LogSnag Group Endpoint
   */
  GROUP: LOGSNAG_BASE + '/v1/group'
};
