import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
import React from 'react';
import { createDevTools } from 'redux-devtools';

export default createDevTools(
  <DockMonitor
    changePositionKey="ctrl-Q"
    defaultIsVisible={false}
    defaultPosition="bottom"
    toggleVisibilityKey="ctrl-H"
  >
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
);
