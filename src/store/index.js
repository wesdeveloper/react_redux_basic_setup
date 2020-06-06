import devStore from './configStore.dev';
import prodStore from './configStore.prod';

export default (process.env.NODE_ENV === 'development' ? devStore : prodStore);
