import { readFileSync, writeFileSync } from 'fs';

function fix(path, fn) {
  const txt = readFileSync(path, 'utf8');
  const out = fn(txt);
  if (out !== txt) {
    writeFileSync(path, out);
    console.log('fixed', path);
  }
}

const itemObjFix = (txt) => {
  return txt.replace(/```csharp\r?\n\s*var\s+tradeGood\s*=\s*ItemObject\.InitializeTradeGood\([\s\S]*?```/g, '```csharp\n// Example: add an existing item to the player party inventory.\nItemObject grain = MBObjectManager.Instance.GetObject<ItemObject>("grain");\nMobileParty.MainParty.ItemRoster.AddToCounts(grain, 50);\n```');
};

fix('content/v1.3.15/en/api/core/ItemObject.md', itemObjFix);
fix('content/v1.3.15/zh/api/core/ItemObject.md', itemObjFix);

const files = [
  'content/v1.3.0/zh/guide/common-issues.md',
  'content/v1.3.0/zh/guide/save-system.md',
  'content/v1.3.15/en/api/campaign-ext/actions-index.md',
  'content/v1.3.15/en/native-1.3.15-src/animation.md',
  'content/v1.3.15/en/native-1.3.15-src/audio.md',
  'content/v1.3.15/en/native-1.3.15-src/COMPLETE-TYPES.md',
  'content/v1.3.15/en/native-1.3.15-src/mission.md',
  'content/v1.3.15/en/native-1.3.15-src/network.md',
  'content/v1.3.15/en/native-1.3.15-src/physics.md',
  'content/v1.3.15/en/native-1.3.15-src/rendering.md',
  'content/v1.3.15/en/native-1.3.15-src/scene.md',
  'content/v1.3.15/en/native-1.3.15-src/utilities.md',
  'content/v1.3.15/zh/api/campaign-ext/actions-index.md',
  'content/v1.3.15/zh/api/core/ItemObject.md',
  'content/v1.3.15/zh/guide/asset-pipeline.md',
  'content/v1.3.15/zh/guide/campaign-system.md',
  'content/v1.3.15/zh/guide/common-patterns.md',
  'content/v1.3.15/zh/guide/game-systems-overview.md',
  'content/v1.3.15/zh/guide/localization.md',
  'content/v1.3.15/zh/guide/mission-system.md',
  'content/v1.3.15/zh/guide/save-system-guide.md',
  'content/v1.3.15/zh/guide/troubleshooting.md',
  'content/v1.3.15/zh/native-1.3.15-src/animation.md',
  'content/v1.3.15/zh/native-1.3.15-src/audio.md',
  'content/v1.3.15/zh/native-1.3.15-src/COMPLETE-FUNCTIONS.md',
  'content/v1.3.15/zh/native-1.3.15-src/COMPLETE-TYPES.md',
  'content/v1.3.15/zh/native-1.3.15-src/engine-core.md',
  'content/v1.3.15/zh/native-1.3.15-src/exports-and-bridge.md',
  'content/v1.3.15/zh/native-1.3.15-src/mission.md',
  'content/v1.3.15/zh/native-1.3.15-src/network.md',
  'content/v1.3.15/zh/native-1.3.15-src/physics.md',
  'content/v1.3.15/zh/native-1.3.15-src/rendering.md',
  'content/v1.3.15/zh/native-1.3.15-src/scene.md',
  'content/v1.3.15/zh/native-1.3.15-src/utilities.md',
];

const removePlaceholder = (txt) => {
  return txt.replace(/```csharp\r?\n[\s]*var\s+example\s*=\s*new\s+[^;()]+\(\s*\)\s*;[\s]*\r?\n```/g, '// （占位示例已移除，见正文说明）');
};

files.forEach((f) => fix(f, removePlaceholder));
