// tools/_v146_fix_xver.mjs (worker-57, batch-3 task D)
// Replace ONLY the false trailing clause of each `## 跨版本提示` section
// ("bannerlord-1.4.5/ ... 未能核对") with a verified, traceable 1.4.5 conclusion.
// Every fact below came from tools/_v146_xver.mjs over the real source trees.
// 1.4.5 = ORIGINAL SOURCE (bannerlord-1.4.5/Bannerlord.Source/bin/<Asm>/<Asm>/<Type>.cs)
// 1.4.6 = DECOMPILED         (bannerlord-1.4.6/<Module>/<Type>.cs)
import { readFileSync, writeFileSync } from 'fs';

const BIN = 'bannerlord-1.4.5/Bannerlord.Source/bin/';

// p = [binRelativePath, lines145, lines146, file146, specific]
const D = {
  'core/MBSubModuleBase.md': ['TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBSubModuleBase.cs', 129, 162, 'bannerlord-1.4.6/TaleWorlds.MountAndBlade/MBSubModuleBase.cs',
    '**三版 public/protected 表面完全一致（各 30 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 与 1.4.6 都是 30 个回调，这是个跨三个版本都没动过的扩展点。'],
  'core/Module.md': ['TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Module.cs', 1768, 1940, 'bannerlord-1.4.6/TaleWorlds.MountAndBlade/Module.cs',
    '**1.4.5 与 1.4.6 的 public 表面 0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化**（各 66 个成员）。**本段上文说的 `ShutDownWithDelay` 签名变化，实为反编译形态差异、不是语义差异**：1.4.5 的 `Module.cs` 第 1663 行与 1.4.6 的第 1771 行**都是 `public async void ShutDownWithDelay(string reason, int seconds)`**，两侧一字不差；只有 1.3.15 的第 1711 行显示为 `public void`，那是反编译器把 `async` 状态机展开后的呈现（紧邻的第 1713–1720 行就是 `<ShutDownWithDelay>d__137` 状态机与 `AsyncVoidMethodBuilder`）。**语义上这个方法从 1.3.x 起就是 async 的，没有发生版本变更。**'],
  'core-extra/ArmorComponent.md': ['TaleWorlds.Core/TaleWorlds.Core/ArmorComponent.cs', 229, 345, 'bannerlord-1.4.6/TaleWorlds.Core/ArmorComponent.cs',
    '**1.4.5 侧结论：public/protected 表面与 1.4.6 完全一致（0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 **已经带有 `IsNoSlim`** —— 也就是说本段上文说的「1.4.6 新增」在时间上要提前：`IsNoSlim` 是 **1.3.15 → 1.4.5 之间**落地的，1.4.5 与 1.4.6 都一样。'],
  'core-extra/Banner.md': ['TaleWorlds.Core/TaleWorlds.Core/Banner.cs', 613, 718, 'bannerlord-1.4.6/TaleWorlds.Core/Banner.cs',
    '**1.4.5 侧结论：三版 public 表面完全一致（各 49 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 的 613 行明显短于 1.4.6 的 718 行，差的 105 行**全部是反编译产物**（逐成员 `// Token: … RID: … RVA: …` 注释与 file-scoped→block-scoped namespace 换行），不是代码量差异。'],
  'core-extra/BannerComponent.md': ['TaleWorlds.Core/TaleWorlds.Core/BannerComponent.cs', 49, 64, 'bannerlord-1.4.6/TaleWorlds.Core/BannerComponent.cs',
    '**1.4.5 侧结论：三版 public/protected 表面完全一致（各 7 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 49 行、1.4.6 是 64 行，差的 15 行是反编译注释与 namespace 换行。'],
  'core-extra/BindingPath.md': ['TaleWorlds.Library/TaleWorlds.Library/BindingPath.cs', 234, 264, 'bannerlord-1.4.6/TaleWorlds.Library/BindingPath.cs',
    '**1.4.5 侧结论：三版 public 表面完全一致（各 17 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 234 行、1.4.6 是 264 行，行数差来自反编译注释。'],
  'core-extra/BodyProperties.md': ['TaleWorlds.Core/TaleWorlds.Core/BodyProperties.cs', 220, 354, 'bannerlord-1.4.6/TaleWorlds.Core/BodyProperties.cs',
    '**1.4.5 侧结论：三版 public 表面完全一致（各 22 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 只有 220 行而 1.4.6 有 354 行，这个**近一倍的行数差全部是反编译形态**（1.4.5 是原始源码，1.4.6 是反编译产物），不代表 1.4.6 逻辑变复杂了。'],
  'core-extra/Crafting.md': ['TaleWorlds.Core/TaleWorlds.Core/Crafting.cs', 1108, 1284, 'bannerlord-1.4.6/TaleWorlds.Core/Crafting.cs',
    '**1.4.5 侧结论：与 1.4.6 的 public 表面 0 新增 / 0 移除 / 0 可访问性变化**，唯一一处签名写法差异是 `TryGetWeaponPropertiesFromXmlCode`，且它属于**反编译形态差异、不是语义差异**：1.4.5 写 `out (CraftingPiece, int) pieces`，1.4.6 写 `out ValueTuple<CraftingPiece, int> pieces` —— 元组语法与展开写法的区别，两个 `out` 参数的类型完全相同。'],
  'core-extra/Equipment.md': ['TaleWorlds.Core/TaleWorlds.Core/Equipment.cs', 653, 930, 'bannerlord-1.4.6/TaleWorlds.Core/Equipment.cs',
    '**1.4.5 侧结论：与 1.4.6 的 public 表面 0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化**（各 46 个成员）。**本段上文「1.3.15 与 1.4.6 完全一致」的说法要修正**：1.4.5 的 `Equipment.cs` 第 48 行已有 `public EquipmentType ItemEquipmentType => _equipmentType;`，而 1.3.15 整份 `Equipment.cs` 搜不到 `ItemEquipmentType` —— 该属性是 **1.3.15 → 1.4.5 之间**新增的，1.4.5 与 1.4.6 一致。'],
  'core-extra/EquipmentElement.md': ['TaleWorlds.Core/TaleWorlds.Core/EquipmentElement.cs', 477, 552, 'bannerlord-1.4.6/TaleWorlds.Core/EquipmentElement.cs',
    '**1.4.5 侧结论：三版 public/protected 表面完全一致（各 42 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 477 行、1.4.6 是 552 行，差的是反编译注释。'],
  'core-extra/EquipmentIndex.md': ['TaleWorlds.Core/TaleWorlds.Core/EquipmentIndex.cs', 27, 52, 'bannerlord-1.4.6/TaleWorlds.Core/EquipmentIndex.cs',
    '**1.4.5 侧结论：三版全部 20 个枚举值的数值完全相同**。1.4.5 把隐式值全部写成了显式值（如 `None = -1`、`WeaponItemBeginSlot = 0`、`Horse = 10`、`NumEquipmentSetSlots = 12`），1.3.15 与 1.4.6 的反编译产物省略了隐式值（如只留 `Weapon0 = 0`、`NumPrimaryWeaponSlots = 4`）；**逐值回填后两边数值一致，这是反编译形态差异、不是语义差异**。注意本段上文写的是「19 个枚举值」，实际是 20 个。'],
  'core-extra/EventBase.md': ['TaleWorlds.Library/TaleWorlds.Library.EventSystem/EventBase.cs', 6, 10, 'bannerlord-1.4.6/TaleWorlds.Library/EventSystem/EventBase.cs',
    '**1.4.5 侧结论：三版都是空类，public 表面均为空（0 成员）**。1.4.5 只有 6 行（`namespace TaleWorlds.Core;` 式 file-scoped 写法），1.3.15 与 1.4.6 各 10 行，行数差只是 namespace 块的括号换行。'],
  'core-extra/Game.md': ['TaleWorlds.Core/TaleWorlds.Core/Game.cs', 453, 656, 'bannerlord-1.4.6/TaleWorlds.Core/Game.cs',
    '**1.4.5 侧结论：三版 public/protected 表面完全一致（各 53 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 453 行、1.4.6 是 656 行，差的是反编译注释。'],
  'core-extra/GameManagerBase.md': ['TaleWorlds.Core/TaleWorlds.Core/GameManagerBase.cs', 275, 335, 'bannerlord-1.4.6/TaleWorlds.Core/GameManagerBase.cs',
    '**1.4.5 侧结论：三版 public/protected/abstract 表面完全一致（各 34 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 275 行、1.4.6 是 335 行。'],
  'core-extra/GameModel.md': ['TaleWorlds.Core/TaleWorlds.Core/GameModel.cs', 6, 10, 'bannerlord-1.4.6/TaleWorlds.Core/GameModel.cs',
    '**1.4.5 侧结论：三版都是空抽象类，public 表面均为空（0 成员）**。1.4.5 的 6 行就是 `namespace TaleWorlds.Core;` + `public abstract class GameModel` + 一个空体；1.3.15 与 1.4.6 各 10 行，差的 4 行是 namespace 块的括号。'],
  'core-extra/GameModelsManager.md': ['TaleWorlds.Core/TaleWorlds.Core/GameModelsManager.cs', 32, 40, 'bannerlord-1.4.6/TaleWorlds.Core/GameModelsManager.cs',
    '**1.4.5 侧结论：三版 public/protected 表面完全一致**，仍是本段上文列的那三个成员（构造器、`GetGameModel<T>()`、`GetGameModels()`），0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化。1.4.5 是 32 行、1.4.6 是 40 行。'],
  'core-extra/GameStateManager.md': ['TaleWorlds.Core/TaleWorlds.Core/GameStateManager.cs', 399, 492, 'bannerlord-1.4.6/TaleWorlds.Core/GameStateManager.cs',
    '**1.4.5 侧结论：与 1.4.6 的 public/protected 表面 0 新增 / 0 移除 / 0 可访问性变化**（各 22 个成员）。唯一一处写法差异是嵌套枚举 `JobType` 的限定写法：1.4.5 写 `public readonly JobType Job`，1.4.6 写 `public readonly GameStateManager.GameStateJob.JobType Job` —— **反编译形态差异、不是语义差异**，类型是同一个。'],
  'core-extra/HorseComponent.md': ['TaleWorlds.Core/TaleWorlds.Core/HorseComponent.cs', 210, 281, 'bannerlord-1.4.6/TaleWorlds.Core/HorseComponent.cs',
    '**1.4.5 侧结论：与 1.4.6 的 public/protected 表面 0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化**。嵌套结构体 `MaterialProperty` 两边都有，**写法差异属反编译形态**：1.4.5 用 C# 12 主构造器写成一行 `public struct MaterialProperty(string name)`，1.4.6 反编译成块体（第 262 行的 `public struct MaterialProperty` + 第 265 行的构造器），语义相同。'],
  'core-extra/InformationManager.md': ['TaleWorlds.Library/TaleWorlds.Library/InformationManager.cs', 153, 265, 'bannerlord-1.4.6/TaleWorlds.Library/InformationManager.cs',
    '**1.4.5 侧结论：与 1.4.6 的 public/protected 表面 0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化**。嵌套结构体 `TooltipRegistry` 两边都有，**写法差异属反编译形态**：1.4.5 用 C# 12 主构造器写成一行，1.4.6 反编译成块体（第 240 行的结构体 + 内部构造器），语义相同。'],
  'core-extra/ItemComponent.md': ['TaleWorlds.Core/TaleWorlds.Core/ItemComponent.cs', 30, 43, 'bannerlord-1.4.6/TaleWorlds.Core/ItemComponent.cs',
    '**1.4.5 侧结论：三版 public/protected 表面完全一致（各 5 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 30 行、1.4.6 是 43 行。'],
  'core-extra/ItemModifierGroup.md': ['TaleWorlds.Core/TaleWorlds.Core/ItemModifierGroup.cs', 87, 118, 'bannerlord-1.4.6/TaleWorlds.Core/ItemModifierGroup.cs',
    '**1.4.5 侧结论：三版 public/protected 表面完全一致（各 10 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 87 行、1.4.6 是 118 行。'],
  'core-extra/ItemObject.md': ['TaleWorlds.Core/TaleWorlds.Core/ItemObject.cs', 960, 1379, 'bannerlord-1.4.6/TaleWorlds.Core/ItemObject.cs',
    '**1.4.5 侧结论：三版 public 表面完全一致（各 84 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 960 行、1.4.6 是 1379 行，**约 420 行的差全部是反编译注释与 namespace 换行**，不是成员增减。'],
  'core-extra/ParameterContainer.md': ['TaleWorlds.Library/TaleWorlds.Library/ParameterContainer.cs', 190, 226, 'bannerlord-1.4.6/TaleWorlds.Library/ParameterContainer.cs',
    '**1.4.5 侧结论：三版 public 表面完全一致（各 16 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 190 行、1.4.6 是 226 行。'],
  'core-extra/PropertyObject.md': ['TaleWorlds.Core/TaleWorlds.Core/PropertyObject.cs', 44, 70, 'bannerlord-1.4.6/TaleWorlds.Core/PropertyObject.cs',
    '**1.4.5 侧结论：本类自身三版完全一致（各 6 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。**本段上文关于派生家族的说法要撤回** —— 实测 `TraitObject.cs` 在**三个版本里都存在**（1.3.15 与 1.4.6 在 `<Module>/CharacterDevelopment/` 下，1.4.5 在 `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterDevelopment/` 下），且 `Hero.cs` 在三个版本里**都恰好引用 `TraitObject` 5 次、都 0 次引用 `CultureTrait`**；`CultureTrait.cs` 与 `HeroTraitDeveloperResolver.cs` 同样三个版本都在。**所以 1.3.15 → 1.4.6 这个区间内并没有发生本段上文描述的「新增 `TraitObject` 并改走特性路径」的演化。**'],
  'core-extra/SaddleComponent.md': ['TaleWorlds.Core/TaleWorlds.Core/SaddleComponent.cs', 14, 20, 'bannerlord-1.4.6/TaleWorlds.Core/SaddleComponent.cs',
    '**1.4.5 侧结论：三版 public/protected 表面完全一致（各 1 个成员、0 个属性，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 14 行、1.3.15 与 1.4.6 各 20 行；差的 6 行是 `using System;`、namespace 块括号与 `// Token:` 注释 —— **本段上文说的「逐字节结构一致」不准确**：三份文件的字节不同，**一致的是 public 表面**（都是那个拷贝构造器加一个 `GetCopy()` 覆盖）。'],
  'core-extra/SkillObject.md': ['TaleWorlds.Core/TaleWorlds.Core/SkillObject.cs', 50, 64, 'bannerlord-1.4.6/TaleWorlds.Core/SkillObject.cs',
    '**1.4.5 侧结论：三版 public 表面完全一致（各 6 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 50 行、1.4.6 是 64 行。'],
  'core-extra/TradeItemComponent.md': ['TaleWorlds.Core/TaleWorlds.Core/TradeItemComponent.cs', 42, 54, 'bannerlord-1.4.6/TaleWorlds.Core/TradeItemComponent.cs',
    '**1.4.5 侧结论：三版 public/protected 表面完全一致（各 5 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 42 行、1.4.6 是 54 行。'],
  'core-extra/ViewModel.md': ['TaleWorlds.Library/TaleWorlds.Library/ViewModel.cs', 637, 725, 'bannerlord-1.4.6/TaleWorlds.Library/ViewModel.cs',
    '**1.4.5 侧结论：三版 public 表面完全一致（含全部事件与委托在内，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 637 行、1.4.6 是 725 行。'],
  'core-extra/WeaponComponent.md': ['TaleWorlds.Core/TaleWorlds.Core/WeaponComponent.cs', 56, 87, 'bannerlord-1.4.6/TaleWorlds.Core/WeaponComponent.cs',
    '**1.4.5 侧结论：三版 public/protected 表面完全一致（各 8 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 56 行、1.4.6 是 87 行。'],
  'localization/TextObject.md': ['TaleWorlds.Localization/TaleWorlds.Localization/TextObject.cs', 433, 454, 'bannerlord-1.4.6/TaleWorlds.Localization/TextObject.cs',
    '**1.4.5 侧结论：与 1.4.6 的 public 表面 0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化**（各 33 个成员）。**本段上文说 `GetDepth` 是「1.4.6 新增」在时间上要提前**：1.4.5 **已经带有 `GetDepth(int maxDepth)`**，所以它是 **1.3.15 → 1.4.5 之间**落地的，1.4.5 与 1.4.6 一样。1.4.5 是 433 行、1.4.6 是 454 行。'],
  'save-system/SaveablePropertyAttribute.md': ['TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveablePropertyAttribute.cs', 15, 21, 'bannerlord-1.4.6/TaleWorlds.SaveSystem/SaveablePropertyAttribute.cs',
    '**1.4.5 侧结论：三版 public 表面完全一致（1 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 15 行、1.4.6 是 21 行。'],
  'save-system/SaveableTypeDefiner.md': ['TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveableTypeDefiner.cs', 150, 176, 'bannerlord-1.4.6/TaleWorlds.SaveSystem/SaveableTypeDefiner.cs',
    '**1.4.5 侧结论：三版 public/protected 表面完全一致（各 23 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 150 行、1.4.6 是 176 行。'],
};

let changed = 0;
for (const [rel, [p145, l145, l146, f146, specific]] of Object.entries(D)) {
  const page = 'content/v1.4.6/zh/api/' + rel;
  const src = readFileSync(page, 'utf8');
  const h = src.indexOf('## 跨版本提示');
  if (h < 0) { console.log('NO SECTION ' + page); continue; }
  const after = h + '## 跨版本提示'.length;
  const nxt = src.slice(after).search(/\n## /);
  const end = nxt < 0 ? src.length : after + nxt;
  const sec = src.slice(after, end);
  if (!/`bannerlord-1\.4\.5\/`/.test(sec)) { console.log('NO FALSE CLAUSE ' + page); continue; }
  const newText =
    '**1.4.5 侧结论**：打开 `' + BIN + p145 + '`（' + l145 + ' 行）与 `' + f146 + '`（' + l146 +
    ' 行）逐成员比对 public/protected 表面。' + specific +
    '\n\n**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。';
  const newSec = sec.replace(/`bannerlord-1\.4\.5\/`[^\n]*/, '\n\n' + newText);
  writeFileSync(page, src.slice(0, after) + newSec + src.slice(end), 'utf8');
  changed++;
}
console.log('rewritten=' + changed + ' of ' + Object.keys(D).length);