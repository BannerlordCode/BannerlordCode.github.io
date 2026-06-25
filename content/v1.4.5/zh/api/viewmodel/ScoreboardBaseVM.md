---
title: "ScoreboardBaseVM"
description: "ScoreboardBaseVM 的自动生成类参考。"
---
# ScoreboardBaseVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ScoreboardBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard/ScoreboardBaseVM.cs`

## 概述

`ScoreboardBaseVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MissionTimeStr` | `public string MissionTimeStr { get; set; }` |
| `IsPowerComparerEnabled` | `public bool IsPowerComparerEnabled { get; set; }` |
| `QuitText` | `public string QuitText { get; set; }` |
| `ShowScoreboardText` | `public string ShowScoreboardText { get; set; }` |
| `FastForwardText` | `public string FastForwardText { get; set; }` |
| `MoraleText` | `public string MoraleText { get; set; }` |
| `Attackers` | `public SPScoreboardSideVM Attackers { get; set; }` |
| `Defenders` | `public SPScoreboardSideVM Defenders { get; set; }` |
| `NeutralTroops` | `public SPScoreboardSideVM NeutralTroops { get; set; }` |
| `KillHint` | `public HintViewModel KillHint { get; set; }` |
| `DeadHint` | `public HintViewModel DeadHint { get; set; }` |
| `UpgradeHint` | `public HintViewModel UpgradeHint { get; set; }` |
| `WoundedHint` | `public HintViewModel WoundedHint { get; set; }` |
| `RoutedHint` | `public HintViewModel RoutedHint { get; set; }` |
| `RemainingHint` | `public HintViewModel RemainingHint { get; set; }` |
| `BattleResultIndex` | `public int BattleResultIndex { get; set; }` |
| `BattleResult` | `public string BattleResult { get; set; }` |
| `IsMouseEnabled` | `public bool IsMouseEnabled { get; set; }` |
| `IsOver` | `public bool IsOver { get; set; }` |
| `SimulationResult` | `public string SimulationResult { get; set; }` |
| `IsMainCharacterDead` | `public bool IsMainCharacterDead { get; set; }` |
| `ShowScoreboard` | `public bool ShowScoreboard { get; set; }` |
| `IsSimulation` | `public bool IsSimulation { get; set; }` |
| `IsNavalBattle` | `public bool IsNavalBattle { get; set; }` |
| `IsFastForwarding` | `public bool IsFastForwarding { get; set; }` |
| `IsPaused` | `public bool IsPaused { get; set; }` |
| `PowerComparer` | `public PowerLevelComparer PowerComparer { get; set; }` |
| `ShowMouseKey` | `public InputKeyItemVM ShowMouseKey { get; set; }` |
| `ShowScoreboardKey` | `public InputKeyItemVM ShowScoreboardKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `FastForwardKey` | `public InputKeyItemVM FastForwardKey { get; set; }` |
| `PauseInputKey` | `public InputKeyItemVM PauseInputKey { get; set; }` |
| `BattleResults` | `public virtual MBBindingList<BattleResultVM> BattleResults { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ScoreboardBaseVM 实例
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.RefreshValues();
```

### OnMainHeroDeath
`public void OnMainHeroDeath()`

**用途 / Purpose:** 在 「main hero death」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ScoreboardBaseVM 实例
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.OnMainHeroDeath();
```

### OnTakenControlOfAnotherAgent
`public void OnTakenControlOfAnotherAgent()`

**用途 / Purpose:** 在 「taken control of another agent」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ScoreboardBaseVM 实例
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.OnTakenControlOfAnotherAgent();
```

### Initialize
`public virtual void Initialize(IMissionScreen missionScreen, Mission mission, Action releaseSimulationSources, Action<bool> onToggle)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 ScoreboardBaseVM 实例
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.Initialize(missionScreen, mission, releaseSimulationSources, onToggle);
```

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

**用途 / Purpose:** 在 「deployment finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ScoreboardBaseVM 实例
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.OnDeploymentFinished();
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 ScoreboardBaseVM 实例
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.Tick(0);
```

### SetMouseState
`public void SetMouseState(bool visible)`

**用途 / Purpose:** 为 「mouse state」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ScoreboardBaseVM 实例
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.SetMouseState(false);
```

### GetFormattedTimeTextFromSeconds
`public static string GetFormattedTimeTextFromSeconds(int seconds)`

**用途 / Purpose:** 读取并返回当前对象中 「formatted time text from seconds」 的结果。

```csharp
// 静态调用，不需要实例
ScoreboardBaseVM.GetFormattedTimeTextFromSeconds(0);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ScoreboardBaseVM 实例
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.OnFinalize();
```

### ExecuteShowScoreboardAction
`public virtual void ExecuteShowScoreboardAction()`

**用途 / Purpose:** 执行 「show scoreboard action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ScoreboardBaseVM 实例
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.ExecuteShowScoreboardAction();
```

### ExecutePlayAction
`public virtual void ExecutePlayAction()`

**用途 / Purpose:** 执行 「play action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ScoreboardBaseVM 实例
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.ExecutePlayAction();
```

### ExecuteFastForwardAction
`public virtual void ExecuteFastForwardAction()`

**用途 / Purpose:** 执行 「fast forward action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ScoreboardBaseVM 实例
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.ExecuteFastForwardAction();
```

### ExecutePauseSimulationAction
`public virtual void ExecutePauseSimulationAction()`

**用途 / Purpose:** 执行 「pause simulation action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ScoreboardBaseVM 实例
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.ExecutePauseSimulationAction();
```

### ExecuteEndSimulationAction
`public virtual void ExecuteEndSimulationAction()`

**用途 / Purpose:** 执行 「end simulation action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ScoreboardBaseVM 实例
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.ExecuteEndSimulationAction();
```

### ExecuteQuitAction
`public virtual void ExecuteQuitAction()`

**用途 / Purpose:** 执行 「quit action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ScoreboardBaseVM 实例
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.ExecuteQuitAction();
```

### SetShortcuts
`public virtual void SetShortcuts(ScoreboardHotkeys shortcuts)`

**用途 / Purpose:** 为 「shortcuts」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ScoreboardBaseVM 实例
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.SetShortcuts(shortcuts);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ScoreboardBaseVM instance = ...;
```

## 参见

- [本区域目录](../)