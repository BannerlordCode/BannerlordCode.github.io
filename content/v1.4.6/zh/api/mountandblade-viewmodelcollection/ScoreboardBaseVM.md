---
title: "ScoreboardBaseVM"
description: "ScoreboardBaseVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 60 个（方法 20、属性 36、字段 1）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/ScoreboardBaseVM.cs。"
---
# ScoreboardBaseVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public abstract class ScoreboardBaseVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/ScoreboardBaseVM.cs`

## 概述

ScoreboardBaseVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/ScoreboardBaseVM.cs。它是一个 public 类（abstract），实现/继承 ViewModel，继承链为 ScoreboardBaseVM → ViewModel。public/protected 成员共 60 个：20 方法、36 属性、1 字段、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ScoreboardBaseVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard），继承链 ScoreboardBaseVM → ViewModel。成员构成以属性为主（属性 36/60，方法 20/60），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/ScoreboardBaseVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ScoreboardBaseVM` | `public ScoreboardBaseVM(BattleScoreContext scoreboardContext)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnMainHeroDeath` | `public void OnMainHeroDeath()` | 方法 |
| `OnTakenControlOfAnotherAgent` | `public void OnTakenControlOfAnotherAgent()` | 方法 |
| `Initialize` | `public virtual void Initialize(IMissionScreen missionScreen, Mission mission, Action releaseSimulationSources, Action<bool>onToggle)` | 方法 |
| `UpdateQuitText` | `protected virtual void UpdateQuitText()` | 方法 |
| `OnDeploymentFinished` | `public virtual void OnDeploymentFinished()` | 方法 |
| `Tick` | `public void Tick(float dt)` | 方法 |
| `OnTick` | `protected abstract void OnTick(float dt);` | 方法 |
| `GetSide` | `protected SPScoreboardSideVM GetSide(BattleSideEnum side)` | 方法 |
| `SetMouseState` | `public void SetMouseState(bool visible)` | 方法 |
| `GetFormattedTimeTextFromSeconds` | `public static string GetFormattedTimeTextFromSeconds(int seconds)` | 方法 |
| `GetBattleMoraleOfSide` | `protected float GetBattleMoraleOfSide(BattleSideEnum side)` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `ExecuteShowScoreboardAction` | `public virtual void ExecuteShowScoreboardAction()` | 方法 |
| `ExecutePlayAction` | `public virtual void ExecutePlayAction()` | 方法 |
| `ExecuteFastForwardAction` | `public virtual void ExecuteFastForwardAction()` | 方法 |
| `ExecutePauseSimulationAction` | `public virtual void ExecutePauseSimulationAction()` | 方法 |
| `ExecuteEndSimulationAction` | `public virtual void ExecuteEndSimulationAction()` | 方法 |
| `ExecuteQuitAction` | `public virtual void ExecuteQuitAction()` | 方法 |
| `MissionTimeInSeconds` | `protected int MissionTimeInSeconds` | 属性 |
| `MissionTimeStr` | `public string MissionTimeStr` | 属性 |
| `IsPowerComparerEnabled` | `public bool IsPowerComparerEnabled` | 属性 |
| `QuitText` | `public string QuitText` | 属性 |
| `ShowScoreboardText` | `public string ShowScoreboardText` | 属性 |
| `FastForwardText` | `public string FastForwardText` | 属性 |
| `MoraleText` | `public string MoraleText` | 属性 |
| `Attackers` | `public SPScoreboardSideVM Attackers` | 属性 |
| `Defenders` | `public SPScoreboardSideVM Defenders` | 属性 |
| `NeutralTroops` | `public SPScoreboardSideVM NeutralTroops` | 属性 |
| `KillHint` | `public HintViewModel KillHint` | 属性 |
| `DeadHint` | `public HintViewModel DeadHint` | 属性 |
| `UpgradeHint` | `public HintViewModel UpgradeHint` | 属性 |
| `WoundedHint` | `public HintViewModel WoundedHint` | 属性 |
| `RoutedHint` | `public HintViewModel RoutedHint` | 属性 |
| `RemainingHint` | `public HintViewModel RemainingHint` | 属性 |
| `BattleResultIndex` | `public int BattleResultIndex` | 属性 |
| `BattleResult` | `public string BattleResult` | 属性 |
| `IsMouseEnabled` | `public bool IsMouseEnabled` | 属性 |
| `IsOver` | `public bool IsOver` | 属性 |
| `SimulationResult` | `public string SimulationResult` | 属性 |
| `IsMainCharacterDead` | `public bool IsMainCharacterDead` | 属性 |
| `ShowScoreboard` | `public bool ShowScoreboard` | 属性 |
| `IsSimulation` | `public bool IsSimulation` | 属性 |
| `IsNavalBattle` | `public bool IsNavalBattle` | 属性 |
| `IsFastForwarding` | `public bool IsFastForwarding` | 属性 |
| `IsPaused` | `public bool IsPaused` | 属性 |
| `PowerComparer` | `public PowerLevelComparer PowerComparer` | 属性 |
| `SetShortcuts` | `public virtual void SetShortcuts(ScoreboardHotkeys shortcuts)` | 方法 |
| `ShowMouseKey` | `public InputKeyItemVM ShowMouseKey` | 属性 |
| `ShowScoreboardKey` | `public InputKeyItemVM ShowScoreboardKey` | 属性 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `FastForwardKey` | `public InputKeyItemVM FastForwardKey` | 属性 |
| `PauseInputKey` | `public InputKeyItemVM PauseInputKey` | 属性 |
| `MBBindingList` | `public virtual MBBindingList<BattleResultVM>BattleResults` | 属性 |
| `MissionEndScoreboardDelayTime` | `protected const float MissionEndScoreboardDelayTime` | 字段 |
| `Categories` | `public enum Categories` | 属性 |
| `BattleResultType` | `protected enum BattleResultType` | 属性 |
| `Categories` | `public enum Categories` | 嵌套类型 |
| `BattleResultType` | `protected enum BattleResultType` | 嵌套类型 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CustomBattleScoreboardVM](../CustomBattleScoreboardVM)
- [同命名空间 ScoreboardHotkeys](../ScoreboardHotkeys)
- [同命名空间 SPScoreboardPartyVM](../SPScoreboardPartyVM)
- [同命名空间 SPScoreboardShipVM](../SPScoreboardShipVM)
