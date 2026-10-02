---
title: "ScoreboardBaseVM"
description: "Auto-generated class reference for ScoreboardBaseVM."
---
# ScoreboardBaseVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection
**Type:** `public abstract class ScoreboardBaseVM : ViewModel `
**Base:** ViewModel
**Source:** TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/ScoreboardBaseVM.cs

## Overview

Auto-generated stub for `ScoreboardBaseVM`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### RefreshValues
`public override void RefreshValues()`

### OnMainHeroDeath
`public void OnMainHeroDeath()`

### OnTakenControlOfAnotherAgent
`public void OnTakenControlOfAnotherAgent()`

### Initialize
`public virtual void Initialize(IMissionScreen missionScreen,Mission mission,Action releaseSimulationSources,Action<bool> onToggle)`

### UpdateQuitText
`protected virtual void UpdateQuitText()`

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

### Tick
`public void Tick(float dt)`

### OnTick
`protected abstract void OnTick(float dt)`

### GetSide
`protected SPScoreboardSideVM GetSide(BattleSideEnum side)`

### SetMouseState
`public void SetMouseState(bool visible)`

### GetFormattedTimeTextFromSeconds
`public static string GetFormattedTimeTextFromSeconds(int seconds)`

### GetBattleMoraleOfSide
`protected float GetBattleMoraleOfSide(BattleSideEnum side)`

### OnFinalize
`public override void OnFinalize()`

### ExecuteShowScoreboardAction
`public virtual void ExecuteShowScoreboardAction()`

### ExecutePlayAction
`public virtual void ExecutePlayAction()`

### ExecuteFastForwardAction
`public virtual void ExecuteFastForwardAction()`

### ExecutePauseSimulationAction
`public virtual void ExecutePauseSimulationAction()`

### ExecuteEndSimulationAction
`public virtual void ExecuteEndSimulationAction()`

### ExecuteQuitAction
`public virtual void ExecuteQuitAction()`

### SetShortcuts
`public virtual void SetShortcuts(ScoreboardHotkeys shortcuts)`

## See Also

- [Section index](../)
