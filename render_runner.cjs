const { register } = require('node:module');

require.extensions['.jpg'] = () => ({});
require.extensions['.png'] = () => ({});
require.extensions['.svg'] = () => ({});

async function run() {
  const React = require('react');
  const { renderToString } = require('react-dom/server');
  // Use tsx to load App
  const App = (await import('./src/App.tsx')).default;
  const html = renderToString(React.createElement(App));
  const fs = require('fs');
  fs.writeFileSync('rendered_app.html', '<div id="root">' + html + '</div>');
  console.log('Successfully written rendered_app.html, length:', html.length);
}

run().catch(console.error);
