---
title: "ModuleCheckResult"
description: "存档模块兼容性检查的一条结论：只读结构体，两个字段在主构造器里赋值；Type 决定读档提示走哪条文案，改枚举名会断掉本地化查找。"
---

# ModuleCheckResult

**Namespace:** `SandBox`（嵌套在 `SandBoxSaveHelper` 内）
**Module:** SandBox
**Type:** `public readonly struct ModuleCheckResult(string moduleId, ModuleCheckResultType type)`
**Base:** 无
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/Sandbox/SandBoxSaveHelper.cs`

## 概述

`ModuleCheckResult` 是 `SandBoxSaveHelper` 里的**嵌套 `public readonly struct`**，声明在 `SandBoxSaveHelper.cs:24-29`，用 C# 主构造器语法写成一行。它只有两个只读字段：`ModuleId`（模块 id，`string`）与 `Type`（结论种类，[ModuleCheckResultType](../../core-extra/ModuleCheckResultType/)）。

它由 `CheckMetaDataCompatibilityErrors`（`SandBoxSaveHelper.cs:131`）生产，一共三个产出点：`:161` 存档里有、当前游戏里找不到的模块 → `(ModuleCheckResultType)0`；`:182` 当前游戏有、存档里没有的模块 → `(ModuleCheckResultType)1`；`:165` 找到了但版本不一致 → `(ModuleCheckResultType)2`。消费方有两处：`:72`（过滤官方模块后按 `Type` 分组）与 `:217`（`GetIsDisabledWithReason` 里逐条拼禁用原因）。

## 心智模型

把它当成**「一条检查结论，不是检查器」**。三条推论：

第一，**它不执行任何检查，只承载检查结果。** 真正的检查逻辑在 `CheckMetaDataCompatibilityErrors` 与 `MetaDataExtensions`，本结构体连方法都没有——两个字段 + 一个主构造器，仅此而已。**它没有任何 `IsError` / `IsFatal` 之类的派生属性。**

第二,**`Type` 的枚举名被直接当本地化 key 用。** `:95`：

```csharp
val2.SetTextVariable("ERROR", globalTextManager.FindText("str_load_module_error", item.Key.ToString()));
```

`item.Key` 是 `ModuleCheckResultType`，`.ToString()` 得到成员名。**所以把枚举成员改名（哪怕只是大小写）就会让 `FindText` 找不到对应文案，读档提示里那一段变成空。** 这一点是我在本页实测到的最硬的耦合。

第三，**两个字段都是 `readonly`，但结构体是「值语义 + 无装箱保护」的组合。** 它被塞进 `MBList<ModuleCheckResult>`（`:143`）、`List<ModuleCheckResult>`（`:72` 转过）、`IGrouping<ModuleCheckResultType, ModuleCheckResult>`（`:88`），每次都是拷贝。**字段都是引用类型（`string` 与枚举），所以拷贝成本很低，也因此「改字段」在编译期就被 `readonly` 挡住了。**

边界：**`public` 嵌套结构体**，编译期可引用 `SandBox.ModuleCheckResult`；**但它没有任何工厂方法**，唯一的创建路径是那两个 `new ModuleCheckResult(...)` 调用点。

## 如何使用

**怎么拿到它**：公开入口是 `SandBoxSaveHelper.CheckMetaDataCompatibilityErrors(MetaData)`（`:131`，`public static`）。它先 `ModuleHelper.GetModules(null)` 拿当前游戏已加载模块（`:140`），再 `MetaDataExtensions.GetModules(fileMetaData)` 拿存档里记录的模块（`:141`），逐个比对。

对一份存档元数据跑一遍检查并按类型统计：

```csharp
using SandBox;
using TaleWorlds.SaveSystem.Load;

// MetaData 从存档索引里拿；此处只演示调用形状
SaveGameFileInfo info = SaveGameFileInfo.GetSaveGameFileInfos(false)[0];
var results = SandBoxSaveHelper.CheckMetaDataCompatibilityErrors(info.MetaData);

Debug.Print("total issues = " + results.Count, 0);
foreach (ModuleCheckResult r in results)
{
    Debug.Print("  " + r.ModuleId + " -> " + r.Type, 0);
}
```

**用它最容易踩的一条**：**1.3.0 之前的老存档里存的是模块「名字」而不是「id」，两套匹配逻辑并存。** `:151` 与 `:174` 各有一句相同形状的判断：

```csharp
item.Id == text || (((ApplicationVersion)(ref applicationVersion)).IsOlderThan(ApplicationVersion.FromString("v1.3.0", 0)) && item.Name == text))
```

**只有当存档版本早于 v1.3.0 时才额外接受 `item.Name`。** 而 `:80` 的过滤侧还有一条**反向兼容**：`saveVersion` 早于 v1.3.0 时，存档里的 id 还会去和官方模块的 `Name` 比。**手写存档工具时漏掉任何一半，会得到「模块明明在却报缺失」的结果。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ModuleId` | `public readonly string ModuleId = moduleId` | 出问题的模块标识。**两个消费点**：`:96` 用 `string.Join("\n- ", item.Select((ModuleCheckResult x) => x.ModuleId))` 把它拼进提示文案；`:80` 的反向兼容过滤拿它和官方模块的 `Name` 比。**注意「缺失」与「新增」两种情况填的值不同**：`:161` 填的是存档里记录的字符串，`:182` 填的是 `item2.Id`。 |
| `Type` | `public readonly ModuleCheckResultType Type = type` | 结论种类。**三个产出点**（`:161` → 0 缺失、`:182` → 1 新增、`:165` → 2 版本不符）。**两个消费点**：`:88-89` 的 `group m by m.Type` 分组，以及 `:95` 的 `FindText("str_load_module_error", item.Key.ToString())` ——**枚举名直接进本地化查找**。 |
| `ModuleCheckResult(string, ModuleCheckResultType)` | 主构造器（`SandBoxSaveHelper.cs:24`） | C# 10 主构造器，两个 `readonly` 字段在声明处就地初始化（`:26`、`:28`）。**没有别的构造器，也没有静态工厂。** 引擎只在 `:161`、`:165`、`:182` 三处 `new`。 |

## 真实示例

按 `Type` 分组，这正是引擎 `:88-96` 做的事：

```csharp
using SandBox;

var results = SandBoxSaveHelper.CheckMetaDataCompatibilityErrors(info.MetaData);
foreach (var group in results.GroupBy(r => r.Type))
{
    // group.Key.ToString() 正是引擎拿去 FindText 的那个字符串
    Debug.Print(group.Key + " (" + group.Key + ") : " + string.Join(", ", group.Select(r => r.ModuleId)), 0);
}
```

用 `GetIsDisabledWithReason` 走另一条消费路径（`SandBoxSaveHelper.cs:188`）：

```csharp
using SandBox;
using TaleWorlds.Localization;

if (!SandBoxSaveHelper.GetIsDisabledWithReason(info, out TextObject reason))
{
    Debug.Print("save is loadable", 0);
}
else
{
    // 官方路径在这里会把每条 ModuleCheckResult 的 ModuleId 拼进 reason
    Debug.Print("disabled: " + reason, 0);
}
```

## 风险与边界

- **枚举成员名是本地化 key 的一部分。** `:95` 的 `FindText("str_load_module_error", item.Key.ToString())`。**改名 = 文案丢失。**
- **两条交叉链接实测过桶位**：`ModuleCheckResultType` 落在 `core-extra/` 而非 `core/`（`ls content/v1.4.5/zh/api/core-extra/ModuleCheckResultType.md` 存在）；**写本页时我一开始按命名空间猜成了 `core/`，被 `_check_links_exist` 报死链后改回。**
- **`Type` 的数值靠 int 强转传，不靠 switch。** `:161`/`:165`/`:182` 写的是 `(ModuleCheckResultType)0` / `2` / `1`。**`ModuleCheckResultType` 的声明顺序（`bin/TaleWorlds.Core/TaleWorlds.Core/ModuleCheckResultType.cs:5-7`：Removed / Added / VersionMismatch）必须保持不变。**
- **没有 `ToString()` 重写。** 调试输出只会看到 `SandBox.ModuleCheckResult` 这种默认字符串，**两个字段都拿不到**——必须逐个 `r.ModuleId` / `r.Type` 打印。
- **「缺失」与「新增」不是对称的。** 缺失填存档里的字符串、新增填当前游戏的 `Id`；老存档下两者可能一个是 Name 一个是 Id。**拿 `ModuleId` 直接去 `ModuleHelper.GetModuleInfo` 查，可能查不到。**
- **过滤会先剔掉官方模块。** `:72-85` 的 `Where` 把出现在 `ModuleHelper.GetOfficialModuleIds()`（`:71`）里的结论全部去掉。**所以「官方模块缺失」永远不会出现在结果里。**
- **嵌套在静态类里。** `SandBoxSaveHelper` 是 `public static class`（`:15`），所以 `ModuleCheckResult` 没有实例上下文，不能在静态类里持有本类型的非静态状态。

## 参见

- 生产者与消费者：[SandBoxSaveHelper](../../campaign-ext/SandBoxSaveHelper)（`CheckMetaDataCompatibilityErrors` 第 131 行、`:72` 过滤、`:88-96` 分组与拼文案、`:217` 禁用原因、`:15` 宿主静态类）
- 枚举：[ModuleCheckResultType](../../core-extra/ModuleCheckResultType/)（声明在 `bin/TaleWorlds.Core/TaleWorlds.Core/ModuleCheckResultType.cs:3`，三成员）
- 数据来源：[MetaData](../../save-system/MetaData/)（存档元数据）、[SaveGameFileInfo](../../save-system/SaveGameFileInfo/)（存档索引项，`MetaData` 是它的属性）、[ApplicationVersion](../../core-extra/ApplicationVersion/)（`:151` 的 v1.3.0 分界）
- 模块查询：[ModuleHelper](../../campaign-ext/ModuleHelper/)（`:71` `GetOfficialModuleIds`、`:140` `GetModules`）
- 文案查找：[GameTextManager](../../core-extra/GameTextManager/)（`:90` `Module.CurrentModule.GlobalTextManager` → `:95` `FindText`）、[TextObject](../../localization/TextObject/)
- 同桶：[ArenaPreloadView](../ArenaPreloadView/)、[MapAudioManager](../MapAudioManager/)、[NameplateSize](../NameplateSize/)、[SandBoxEditorMissionTester](../SandBoxEditorMissionTester/)、[DefeatHideoutBossObjective](../DefeatHideoutBossObjective/)
- 桶首页：[gameplay API 分区](../)