const fs = require('fs');

function inspectJSX(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // find <button that has <div inside it
  const regex = /<button[\s\S]*?<\/button>/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const btnText = match[0];
    if (btnText.includes('<div')) {
      const lineNo = content.substring(0, match.index).split('\n').length;
      console.log(`${filePath}:${lineNo} -> button containing div:\n${btnText.substring(0, 150)}...\n---`);
    }
  }
}

inspectJSX('src/components/PhoneSimulator.tsx');
inspectJSX('src/components/MyShadowScreen.tsx');
inspectJSX('src/components/PawnRankBadge.tsx');
inspectJSX('src/components/BottomNavigation.tsx');
inspectJSX('src/App.tsx');
