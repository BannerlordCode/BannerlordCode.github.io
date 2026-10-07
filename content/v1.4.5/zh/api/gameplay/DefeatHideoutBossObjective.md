---
title: "DefeatHideoutBossObjective"
description: "劫匪藏身处任务的击败头目目标：唯一的状态是两个 TextObject，isDuel 一个布尔决定四段文案；它不自己判定完成，完成回调由 MissionController 挂。"
---

# DefeatHideoutBossObjective

**Namespace:** `SandBox.Missions.MissionLogics.Hideout.Objectives`
**Module:** SandBox
**Type:** `internal class DefeatHideoutBossObjective : MissionObjective`
**Base:** `MissionObjective`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Hideout.Objectives/DefeatHideoutBossObjective.cs`

## 概述

`DefeatHideoutBossObjective` 是 33 行、5 个成员的最小任务目标。它继承 [MissionObjective](../../mission-ext/MissionObjective/)，只实现基类要求的三个抽象成员：`UniqueId`（硬编码字符串）、`Name`、`Description`。**两个 `TextObject` 都在构造器里一次性定死，由 `isDuel` 布尔四选二。**

构造器 32 行里有 22 行是反编译器的 `//IL_xxxx:` 注释与类型转换残留——**真正的逻辑只有两行三元表达式**（`:29` 与 `:30`），分别给 `_name` 与 `_description` 赋值。它有 4 个官方构造点，两个在 `HideoutAmbushMissionController.cs`（`:968` 决斗版、`:985` 普通版），两个在 `HideoutMissionController.cs`（`:945` 与 `:971`），**两个 Controller 对同一场景各有一份**。

## 心智模型

把它当成**「一对手写文案」**。三条推论：

第一，**它没有自己的逻辑，只有文案。** 全类除了两个三元表达式之外**没有任何方法**——基类那一堆 `IsActive` / `IsStarted` / `IsCompleted` / `Mission` 全部由 `MissionObjective` 自己管。**判定「头目被打死了」的是 `HideoutMissionController` / `HideoutAmbushMissionController`，不是这个类。**

第二,**`isDuel` 决定四段文案，两两成对。** `:31` 选标题（`"Win the Duel"` / `"Win the Fight"`），`:32` 选描述（`"Win the duel against the bandit boss."` / `"Eliminate the bandit boss and his troops."`）。**四个 key 各不相同**（`QEynMlwL` / `0sPTRh6L` / `t13oVKkw` / `7vqW1CsE`），**改一处文案必须同步改对应 key，不能只改英文串。**

第三，**`UniqueId` 是存档与任务面板的锚。** `:14` 硬编码 `"hideout_mission_defeat_hideout_boss_objective"`。**两个 Controller 共用同一个 id** —— **所以同一个存档里若同时存在决斗版与普通版目标，它们的 id 是一样的。** 这是本类最值得警惕的一点。

边界：**`internal` 类**，编译期不可引用；且构造器第二个参数 `bool isDuel` **没有默认值也没有具名参数契约**，四个调用点都写成 `isDuel: true` / `isDuel: false` 的具名形式。

## 如何使用

**怎么拿到它**：正常路径由两个 `HideoutMissionController` 之一构造并存进自己的字段（`:968`/`:985`/`:945`/`:971`）。本类**没有工厂方法**，`new DefeatHideoutBossObjective(...)` 在 mod 代码里写不出来（`internal`）。

用基类提供的 builder 造一个等价目标——**这是 mod 侧唯一能走的路**（`MissionObjective.GenericMissionObjectiveBuilder` 在 `MissionObjective.cs:10`）：

```csharp
using SandBox;
using TaleWorlds.Core;
using TaleWorlds.Localization;
using TaleWorlds.MountAndBlade;

// 基类的泛型 builder 造一个功能等价的目标
MissionObjective myObjective = new MissionObjective.GenericMissionObjectiveBuilder()
    .SetName(new TextObject("{=my_obj}Win the Fight"))
    .SetDescription(new TextObject("{=my_obj2}Eliminate the bandit boss and his troops."))
    .SetOnCompleteCallback(o => Debug.Print("objective done: " + o.UniqueId, 0))
    .Build();

Debug.Print("built " + myObjective.UniqueId, 0);
```

**用它最容易踩的一条**：**`UniqueId` 硬编码且被两个 Controller 共用，改不动也躲不掉。** `:14` 写死 `"hideout_mission_defeat_hideout_boss_objective"`。**做自己的藏身处任务时不要复用这个 id**——`HideoutAmbushMissionController` 与 `HideoutMissionController` 各建一份，两者 id 完全一致。**面板上出现两个同名目标时，根因几乎一定是这个。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_name` | `private readonly TextObject _name` | 标题文案。**`readonly`，只在 `:29` 赋值一次**，由 `isDuel` 在 `"{=QEynMlwL}Win the Duel"` 与 `"{=0sPTRh6L}Win the Fight"` 之间二选一。**两个 key 不同，改文案要各自对应。** |
| `_description` | `private readonly TextObject _description` | 描述文案。**同样 `readonly`，只在 `:30` 赋值**，二选一为 `"{=t13oVKkw}Win the duel against the bandit boss."` 或 `"{=7vqW1CsE}Eliminate the bandit boss and his troops."`。 |
| `UniqueId` | `public override string UniqueId => "hideout_mission_defeat_hideout_boss_objective"` | **硬编码常量（`:14`）。** 覆盖基类 `MissionObjective.cs:121` 的抽象成员。**它被两个 Controller 共用**，是任务面板去重与存档关联的依据。**不可配置。** |
| `Name` | `public override TextObject Name => _name` | 覆盖 `MissionObjective.cs:123` 的抽象成员，**返回构造时定好的那个实例**（不是每次 new）。 |
| `Description` | `public override TextObject Description => _description` | 覆盖 `MissionObjective.cs:125`，同上，返回构造时的实例。 |
| `DefeatHideoutBossObjective(Mission, bool)` | `public DefeatHideoutBossObjective(Mission mission, bool isDuel) : base(mission)` | 唯一构造器（`:20-31`）。`:29`/`:30` 两行三元赋值。**`isDuel` 无默认值，四个官方调用点都用具名实参。** 传 `null` mission 会让 `base(mission)` 之后基类的 `Mission` 属性为 null。 |

## 真实示例

对照四个官方调用点 —— `isDuel` 是唯一的自由变量：

```csharp
using SandBox;
using TaleWorlds.MountAndBlade;

// HideoutAmbushMissionController.cs:968 / HideoutMissionController.cs:945 都是这一支
// isDuel: true  -> "Win the Duel" / "Win the duel against the bandit boss."
// isDuel: false -> "Win the Fight" / "Eliminate the bandit boss and his troops."
Debug.Print("两个 Controller 各有一份，isDuel 只有 true/false 两种取值", 0);
Debug.Print("UniqueId 恒为 hideout_mission_defeat_hideout_boss_objective", 0);
```

用 builder 版本做对照——注意它拿不到那个硬编码的 `UniqueId`：

```csharp
using TaleWorlds.Localization;
using TaleWorlds.MountAndBlade;

MissionObjective duel = new MissionObjective.GenericMissionObjectiveBuilder()
    .SetName(new TextObject("{=my_duel}Win the Duel"))
    .SetDescription(new TextObject("{=my_duel2}Win the duel against the bandit boss."))
    .Build();

MissionObjective fight = new MissionObjective.GenericMissionObjectiveBuilder()
    .SetName(new TextObject("{=my_fight}Win the Fight"))
    .SetDescription(new TextObject("{=my_fight2}Eliminate the bandit boss and his troops."))
    .Build();

Debug.Print("builder 版 id = '" + duel.UniqueId + "' (基类生成，与官方硬编码不同)", 0);
Debug.Print("title  = " + duel.Name + " / " + fight.Name, 0);
```

## 风险与边界

- **`internal` 类，编译期不可引用。** 只能靠基类 builder 造等价物。
- **`UniqueId` 硬编码且被两个 Controller 共用。** 见上。
- **文案 key 四个各不相同。** `{=QEynMlwL}`、`{=0sPTRh6L}`（`:29` 的两个三元）与 `{=t13oVKkw}`、`{=7vqW1CsE}`（`:30` 的两个三元）。**四个都要在语料里有对应条目，缺一个就退化成英文原文。**
- **构造器里没有 null 检查。** `mission` 传 null 不报错，但基类 `Mission` 属性会是 null，后续任何取 `Mission` 的逻辑会空引用。
- **本类不判完成、不订阅事件。** 完成条件在 `HideoutMissionController` / `HideoutAmbushMissionController` 那一侧。**指望给它一个回调是不存在的。**
- **32 行里 22 行是反编译残留。** `:22-28` 的 `//IL_xxxx:` 注释是 ILSpy 对未还原表达式的标注，**不是引擎逻辑**。源码里真正可读的部分就是 `:29`、`:30` 两行。
- **`TextObject` 构造时第二参显式传 `(Dictionary<string, object>)null`。** 这是反编译器为默认参数补的实参，**等价于不传**。

## 参见

- 基类与契约：[MissionObjective](../../mission-ext/MissionObjective/)（`UniqueId` `:121`、`Name` `:123`、`Description` `:125` 是抽象成员；`GenericMissionObjectiveBuilder` 在 `:10`，`SetName` `:14`、`SetDescription` `:20`、`SetOnCompleteCallback` `:63`、`Build` `:81`）
- 唯一持有者：`bannerlord-1.4.5/Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Hideout/HideoutAmbushMissionController.cs:968`、`:985` 与 `HideoutMissionController.cs:945`、`:971`
- 文案类型：[TextObject](../../localization/TextObject/)
- 所属场景：藏身处伏击 / 藏身处任务；同桶的 [HideoutCinematicAgentInfo](../HideoutCinematicAgentInfo/)、[MissionHideoutAmbushBossFightCinematicView](../MissionHideoutAmbushBossFightCinematicView/)
- 同桶：[SandBoxEditorMissionTester](../SandBoxEditorMissionTester/)、[ArenaPreloadView](../ArenaPreloadView/)、[MapAudioManager](../MapAudioManager/)、[ModuleCheckResult](../ModuleCheckResult/)、[NameplateSize](../NameplateSize/)
- 桶首页：[gameplay API 分区](../)