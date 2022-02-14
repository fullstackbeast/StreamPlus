import consoleLogger from '../../infrastructure/logger/console';
import elasticSearchLogger from '../../infrastructure/logger/elastic-search';



// const env = 'development';

const services = {
   log: process.env.NODE_ENV === 'development' ? consoleLogger : elasticSearchLogger
}

export default services;