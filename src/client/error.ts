// import { Response } from "https://deno.land/std@0.157.0/http/server.ts";
/**
 * Fetch HTTP Response Error
 */
export class HTTPResponseError extends Error {
  constructor(response: Response) {
    super(`HTTP Error Response: ${response.status} ${response.statusText}`);
  }
}
