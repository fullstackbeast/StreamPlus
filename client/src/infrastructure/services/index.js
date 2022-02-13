import consoleLogger from './logger/console';
import elasticSearchLogger from './logger/elastic-search';


// const env = 'development';

const services = {
   log: process.env.NODE_ENV === 'development' ? consoleLogger : elasticSearchLogger
}

export default services;