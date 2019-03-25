// Import all integrations that should/can be tested
import * as electricityContribSources from '../../integrations/electricity'; // eslint-disable-line
import * as transportationContribSources from '../../integrations/transportation'; // eslint-disable-line
const sourceInstances = {
  ...electricityContribSources,
  ...transportationContribSources,
};

const express = require('express');
const path = require('path');

const app = express();
const server = require('http').Server(app);

const io = require('socket.io')(server);

app.use('/vendor', express.static(path.join(__dirname, 'vendor')));

io.on('connection', (socket) => {
  console.log('client connected');

  socket.emit('integrations', Object.keys(sourceInstances));

  socket.on('run', async (data) => {
    console.log(`running ${data.sourceIdentifier}..`);
    const sourceInstance = sourceInstances[data.sourceIdentifier];
    const log = [];
    const pushLog = (level, message) => log.push({
      key: log.length.toString(),
      datetime: new Date(),
      level,
      message: message.toString(),
    });
    const logger = {
      logDebug: message => pushLog('debug', `[${data.sourceIdentifier}] ${message}`),
      logWarning: message => pushLog('warning', `[${data.sourceIdentifier}] ${message}`),
      logError: message => pushLog('error', `[${data.sourceIdentifier}] ${message}`),
    };
    const requestWebView = () => { throw Error('NotImplemented'); };
    const requestLogin = () => ({ username: data.username, password: data.password });
    try {
      pushLog('debug', '[playground] starting connect()');
      const initState = await sourceInstance.connect(requestLogin, requestWebView, logger);
      pushLog('debug', '[playground] collect()');
      const results = await sourceInstance.collect(initState, logger);
      pushLog('debug', '[playground] done');
      socket.emit('runLogs', log);
      socket.emit('runResults', results);
    } catch (e) {
      // console.error(e)
      socket.emit('runLogs', log);
      socket.emit('runError', {
        name: e.name,
        message: e.message,
        stack: e.stack,
        code: e.code,
      });
    }
    console.log('..done');
  });
});

app.get('/', (req, res) => { res.sendFile('index.html', { root: __dirname }); });

server.listen(3000, () => {
  console.log('Listening on *:3000');
});
