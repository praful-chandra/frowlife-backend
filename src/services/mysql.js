import {createConnection} from 'mysql';
import {config} from './config';
import {logger} from './logger';

export function getConnection() {
	// Test connection health before returning it to caller.
	if ((_connection) && (_connection._socket) &&
		(_connection._socket.readable) &&
		(_connection._socket.writable)) {
		return _connection;
	}
	logger.info(((_connection) ? 'UNHEALTHY SQL CONNECTION; RE' : '') + 'CONNECTING TO SQL.');
	var connection = createConnection(config.db);
	connection.connect(function (err) {
		if (err) {
			logger.error('SQL CONNECT ERROR: ' + err);
		} else {
			logger.info('SQL CONNECT SUCCESSFUL.');
		}
	});
	connection.on('close', function (err) {
		logger.info('SQL CONNECTION CLOSED.');
	});
	
	connection.on('error', function (err) {
		logger.error('SQL CONNECTION ERROR: ' + err);
	});
	var _connection = connection;
	return _connection;
}