// @denoify-line-ignore
import 'isomorphic-fetch';
import LogSnag from './client/logsnag';

export * from './types/index';
export * from './client/error';
export { LogSnag };
export default LogSnag;
