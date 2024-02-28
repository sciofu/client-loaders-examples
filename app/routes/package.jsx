import { cacheClientLoader } from "remix-client-cache";

export {homeLoader as loader} from '../pages';
export {homeView as default} from '../pages';

export const clientLoader = (args) => cacheClientLoader(args, {key: 'package-cached-movies', type: 'normal'})

clientLoader.hydrate = true;
