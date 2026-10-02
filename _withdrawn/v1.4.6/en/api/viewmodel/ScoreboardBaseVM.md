---
title: "ScoreboardBaseVM"
description: "ScoreboardBaseVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard, inheriting ViewModel; 60 exposed members (20 methods, 36 properties, 1 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/ScoreboardBaseVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ScoreboardBaseVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public abstract class ScoreboardBaseVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/ScoreboardBaseVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

ScoreboardBaseVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/ScoreboardBaseVM.cs. It is a public class (abstract), implementing/inheriting ViewModel; the inheritance chain is ScoreboardBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 60 public/protected members: 20 methods, 36 properties, 1 fields, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ScoreboardBaseVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`, inheritance chain ScoreboardBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 36/60, methods 20/60), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/ScoreboardBaseVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ScoreboardBaseVM` | `public ScoreboardBaseVM(BattleScoreContext scoreboardContext)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnMainHeroDeath` | `public void OnMainHeroDeath()` | method |
| `OnTakenControlOfAnotherAgent` | `public void OnTakenControlOfAnotherAgent()` | method |
| `Initialize` | `public virtual void Initialize(IMissionScreen missionScreen, Mission mission, Action releaseSimulationSources, Action<bool>onToggle)` | method |
| `UpdateQuitText` | `protected virtual void UpdateQuitText()` | method |
| `OnDeploymentFinished` | `public virtual void OnDeploymentFinished()` | method |
| `Tick` | `public void Tick(float dt)` | method |
| `OnTick` | `protected abstract void OnTick(float dt);` | method |
| `GetSide` | `protected SPScoreboardSideVM GetSide(BattleSideEnum side)` | method |
| `SetMouseState` | `public void SetMouseState(bool visible)` | method |
| `GetFormattedTimeTextFromSeconds` | `public static string GetFormattedTimeTextFromSeconds(int seconds)` | method |
| `GetBattleMoraleOfSide` | `protected float GetBattleMoraleOfSide(BattleSideEnum side)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `ExecuteShowScoreboardAction` | `public virtual void ExecuteShowScoreboardAction()` | method |
| `ExecutePlayAction` | `public virtual void ExecutePlayAction()` | method |
| `ExecuteFastForwardAction` | `public virtual void ExecuteFastForwardAction()` | method |
| `ExecutePauseSimulationAction` | `public virtual void ExecutePauseSimulationAction()` | method |
| `ExecuteEndSimulationAction` | `public virtual void ExecuteEndSimulationAction()` | method |
| `ExecuteQuitAction` | `public virtual void ExecuteQuitAction()` | method |
| `MissionTimeInSeconds` | `protected int MissionTimeInSeconds` | property |
| `MissionTimeStr` | `public string MissionTimeStr` | property |
| `IsPowerComparerEnabled` | `public bool IsPowerComparerEnabled` | property |
| `QuitText` | `public string QuitText` | property |
| `ShowScoreboardText` | `public string ShowScoreboardText` | property |
| `FastForwardText` | `public string FastForwardText` | property |
| `MoraleText` | `public string MoraleText` | property |
| `Attackers` | `public SPScoreboardSideVM Attackers` | property |
| `Defenders` | `public SPScoreboardSideVM Defenders` | property |
| `NeutralTroops` | `public SPScoreboardSideVM NeutralTroops` | property |
| `KillHint` | `public HintViewModel KillHint` | property |
| `DeadHint` | `public HintViewModel DeadHint` | property |
| `UpgradeHint` | `public HintViewModel UpgradeHint` | property |
| `WoundedHint` | `public HintViewModel WoundedHint` | property |
| `RoutedHint` | `public HintViewModel RoutedHint` | property |
| `RemainingHint` | `public HintViewModel RemainingHint` | property |
| `BattleResultIndex` | `public int BattleResultIndex` | property |
| `BattleResult` | `public string BattleResult` | property |
| `IsMouseEnabled` | `public bool IsMouseEnabled` | property |
| `IsOver` | `public bool IsOver` | property |
| `SimulationResult` | `public string SimulationResult` | property |
| `IsMainCharacterDead` | `public bool IsMainCharacterDead` | property |
| `ShowScoreboard` | `public bool ShowScoreboard` | property |
| `IsSimulation` | `public bool IsSimulation` | property |
| `IsNavalBattle` | `public bool IsNavalBattle` | property |
| `IsFastForwarding` | `public bool IsFastForwarding` | property |
| `IsPaused` | `public bool IsPaused` | property |
| `PowerComparer` | `public PowerLevelComparer PowerComparer` | property |
| `SetShortcuts` | `public virtual void SetShortcuts(ScoreboardHotkeys shortcuts)` | method |
| `ShowMouseKey` | `public InputKeyItemVM ShowMouseKey` | property |
| `ShowScoreboardKey` | `public InputKeyItemVM ShowScoreboardKey` | property |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `FastForwardKey` | `public InputKeyItemVM FastForwardKey` | property |
| `PauseInputKey` | `public InputKeyItemVM PauseInputKey` | property |
| `MBBindingList` | `public virtual MBBindingList<BattleResultVM>BattleResults` | property |
| `MissionEndScoreboardDelayTime` | `protected const float MissionEndScoreboardDelayTime` | field |
| `Categories` | `public enum Categories` | property |
| `BattleResultType` | `protected enum BattleResultType` | property |
| `Categories` | `public enum Categories` | nested type |
| `BattleResultType` | `protected enum BattleResultType` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CustomBattleScoreboardVM](../CustomBattleScoreboardVM/)
- [same namespace ScoreboardHotkeys](../ScoreboardHotkeys/)
- [same namespace SPScoreboardPartyVM](../SPScoreboardPartyVM/)
- [same namespace SPScoreboardShipVM](../SPScoreboardShipVM/)
