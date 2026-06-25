---
title: "ScoreboardBaseVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScoreboardBaseVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ScoreboardBaseVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ScoreboardBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard/ScoreboardBaseVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnMainHeroDeath
`public void OnMainHeroDeath()`

**用途 / Purpose:** 当 `main hero death` 事件触发时调用此方法。

### OnTakenControlOfAnotherAgent
`public void OnTakenControlOfAnotherAgent()`

**用途 / Purpose:** 当 `taken control of another agent` 事件触发时调用此方法。

### Initialize
`public virtual void Initialize(IMissionScreen missionScreen, Mission mission, Action releaseSimulationSources, Action<bool> onToggle)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

**用途 / Purpose:** 当 `deployment finished` 事件触发时调用此方法。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### SetMouseState
`public void SetMouseState(bool visible)`

**用途 / Purpose:** 设置 `mouse state` 的值或状态。

### GetFormattedTimeTextFromSeconds
`public static string GetFormattedTimeTextFromSeconds(int seconds)`

**用途 / Purpose:** 获取 `formatted time text from seconds` 的当前值。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### ExecuteShowScoreboardAction
`public virtual void ExecuteShowScoreboardAction()`

**用途 / Purpose:** 执行 `show scoreboard action` 操作或流程。

### ExecutePlayAction
`public virtual void ExecutePlayAction()`

**用途 / Purpose:** 执行 `play action` 操作或流程。

### ExecuteFastForwardAction
`public virtual void ExecuteFastForwardAction()`

**用途 / Purpose:** 执行 `fast forward action` 操作或流程。

### ExecutePauseSimulationAction
`public virtual void ExecutePauseSimulationAction()`

**用途 / Purpose:** 执行 `pause simulation action` 操作或流程。

### ExecuteEndSimulationAction
`public virtual void ExecuteEndSimulationAction()`

**用途 / Purpose:** 执行 `end simulation action` 操作或流程。

### ExecuteQuitAction
`public virtual void ExecuteQuitAction()`

**用途 / Purpose:** 执行 `quit action` 操作或流程。

### SetShortcuts
`public virtual void SetShortcuts(ScoreboardHotkeys shortcuts)`

**用途 / Purpose:** 设置 `shortcuts` 的值或状态。

## 使用示例

```csharp
var implementation = new CustomScoreboardBaseVM();
```

## 参见

- [完整类目录](../catalog)