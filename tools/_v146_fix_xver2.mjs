// tools/_v146_fix_xver2.mjs (worker-57, batch-3 task D, pass 2)
// Same defect, different wording: these 11 pages said
// "`bannerlord-1.4.5/` 本机只有 DLL、无 C# 源码，未能核对" (or the SaveManager
// variant), which my first grep pattern did not match. Only the
// `## 跨版本提示` section is touched.
import { readFileSync, writeFileSync } from 'fs';

const BIN = 'bannerlord-1.4.5/Bannerlord.Source/bin/';
const WHY =
  '\n\n**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。';

const D = {
  'core-extra/BasicCharacterObject.md': ['TaleWorlds.Core/TaleWorlds.Core/BasicCharacterObject.cs', 558, 'bannerlord-1.4.6/TaleWorlds.Core/BasicCharacterObject.cs', 797,
    '**三版 public/protected 表面完全一致（各 67 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。'],
  'core-extra/BodyPropertiesJsonConverter.md': ['TaleWorlds.Core/TaleWorlds.Core/BodyPropertiesJsonConverter.cs', 30, 'bannerlord-1.4.6/TaleWorlds.Core/BodyPropertiesJsonConverter.cs', 42,
    '**三版 public/protected 表面完全一致（各 4 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。本段上文说的「方法体逐字相同」在 1.4.5 侧同样成立 —— 1.4.5 的原始源码里 `ReadJson` / `WriteJson` 的字段名与分支顺序与两版反编译产物一致。'],
  'core-extra/CraftingPiece.md': ['TaleWorlds.Core/TaleWorlds.Core/CraftingPiece.cs', 299, 'bannerlord-1.4.6/TaleWorlds.Core/CraftingPiece.cs', 466,
    '**与 1.4.6 的 public 表面 0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化**。`MaterialsUsed` 这个属性**三版都有**（1.3.15 与 1.4.6 在第 218 行、1.4.5 在第 92 行），写法差异属**反编译形态**：1.4.5 是表达式体 `public MBReadOnlyList<(CraftingMaterials, int)> MaterialsUsed => _materialsUsed;`，1.3.15 与 1.4.6 反编译成块体并把元组展开写成 `ValueTuple<CraftingMaterials, int>`。**类型完全相同，不是新增成员。**'],
  'core-extra/CraftingTemplate.md': ['TaleWorlds.Core/TaleWorlds.Core/CraftingTemplate.cs', 261, 'bannerlord-1.4.6/TaleWorlds.Core/CraftingTemplate.cs', 351,
    '**三版 public/protected 表面完全一致（各 22 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。'],
  'core-extra/DynamicBodyProperties.md': ['TaleWorlds.Core/TaleWorlds.Core/DynamicBodyProperties.cs', 86, 'bannerlord-1.4.6/TaleWorlds.Core/DynamicBodyProperties.cs', 85,
    '**与 1.4.6 的 public 表面 0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化**；嵌套写法差异属反编译形态（1.4.5 用 C# 12 主构造器单行声明，1.4.6 反编译成块体）。**并且 1.4.5 的原始源码解开了本段上文标记为无法判定的那一条**：该文件第 23–35 行的 `operator ==` 原始写法是 `if ((object)a == (object)b) { return true; }` 再 `if ((object)a == null || (object)b == null) { return false; }` 之后逐字段比 —— **首项确实是装箱后的引用相等比较，不是自身递归调用**。1.4.6 反编译产物里那个 `a == b` 首项是渲染丢失装箱转换造成的假象。'],
  'core-extra/EventManager.md': ['TaleWorlds.Library/TaleWorlds.Library.EventSystem/EventManager.cs', 54, 'bannerlord-1.4.6/TaleWorlds.Library/EventSystem/EventManager.cs', 59,
    '**三版 public 表面完全一致（各 2 个成员：构造器 + 两个方法，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。注意 1.4.5 的目录是 `TaleWorlds.Library/TaleWorlds.Library.EventSystem/`（外层与内层目录名不完全相同），本段上文提到的底层 `DictionaryByType.cs` 在 1.4.5 里对应 `bin/TaleWorlds.Library/TaleWorlds.Library.EventSystem/DictionaryByType.cs`。'],
  'core-extra/FaceGen.md': ['TaleWorlds.Core/TaleWorlds.Core/FaceGen.cs', 144, 'bannerlord-1.4.6/TaleWorlds.Core/FaceGen.cs', 219,
    '**三版 public 表面完全一致（各 25 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。本段上文说「退化分支的返回值与 1.3.15 也逐字相同」——1.4.5 的原始源码同样走的是这条退化分支，签名侧无变化。'],
  'core-extra/StaticBodyProperties.md': ['TaleWorlds.Core/TaleWorlds.Core/StaticBodyProperties.cs', 233, 'bannerlord-1.4.6/TaleWorlds.Core/StaticBodyProperties.cs', 275,
    '**三版 public/protected 表面完全一致（各 25 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。**并且 1.4.5 的原始源码同样解开了本段上文标记为无法判定的那一条**：该文件第 137–151 行的 `operator ==` 原始写法是 `if ((object)a == (object)b) { return true; }` 再 `if ((object)a == null || (object)b == null) { return false; }` 之后逐字段比 8 个 `KeyPartN` —— **首项是装箱引用比较，不是自身递归调用**。'],
  'core-extra/WeaponDesign.md': ['TaleWorlds.Core/TaleWorlds.Core/WeaponDesign.cs', 294, 'bannerlord-1.4.6/TaleWorlds.Core/WeaponDesign.cs', 359,
    '**三版 public 表面完全一致（各 29 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。'],
  'core-extra/WeaponDesignElement.md': ['TaleWorlds.Core/TaleWorlds.Core/WeaponDesignElement.cs', 179, 'bannerlord-1.4.6/TaleWorlds.Core/WeaponDesignElement.cs', 251,
    '**三版 public/protected 表面完全一致（各 22 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。'],
  'save-system/SaveManager.md': ['TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveManager.cs', 174, 'bannerlord-1.4.6/TaleWorlds.SaveSystem/SaveManager.cs', 201,
    '**三版 public 表面完全一致（各 8 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）** —— 本段上文说「不是『一致』，是没能实际核对」，该保留意见**现已撤销**：1.4.5 的 `SaveManager.cs` 里 `.sav` 常量、`InitializeGlobalDefinitionContext`、`CheckSaveableTypes`、四参 `Save`、两参/三参 `Load`、`LoadMetaData`、`ShouldResolveConflicts` 的签名与 1.4.6 逐个一致。'],
};

// Match any trailing sentence about the 1.4.5 tree being unavailable, whatever the wording.
const FALSE_CLAUSE = /`bannerlord-1\.4\.5\/`[^\n]*/;

let changed = 0;
for (const [rel, [p145, l145, f146, l146, specific]] of Object.entries(D)) {
  const page = 'content/v1.4.6/zh/api/' + rel;
  const src = readFileSync(page, 'utf8');
  const h = src.indexOf('## 跨版本提示');
  if (h < 0) { console.log('NO SECTION ' + page); continue; }
  const after = h + '## 跨版本提示'.length;
  const nxt = src.slice(after).search(/\n## /);
  const end = nxt < 0 ? src.length : after + nxt;
  const sec = src.slice(after, end);
  if (!FALSE_CLAUSE.test(sec)) { console.log('NO FALSE CLAUSE ' + page); continue; }
  const newText =
    '**1.4.5 侧结论**：打开 `' + BIN + p145 + '`（' + l145 + ' 行）与 `' + f146 + '`（' + l146 +
    ' 行）逐成员比对 public/protected 表面。' + specific + WHY;
  const newSec = sec.replace(FALSE_CLAUSE, '\n\n' + newText);
  writeFileSync(page, src.slice(0, after) + newSec + src.slice(end), 'utf8');
  changed++;
}
console.log('rewritten=' + changed + ' of ' + Object.keys(D).length);