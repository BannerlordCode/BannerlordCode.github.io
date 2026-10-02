---
title: "ScoreboardBaseVM"
description: "ScoreboardBaseVM 的自动生成类参考。"
---
# ScoreboardBaseVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection
**Type:** `public abstract class ScoreboardBaseVM : ViewModel `
**Base:** ViewModel
**Source:** TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/ScoreboardBaseVM.cs

## 概述

`ScoreboardBaseVM` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/ScoreboardBaseVM.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### RefreshValues
`public override void RefreshValues() `

### OnMainHeroDeath
`public void OnMainHeroDeath() `

### OnTakenControlOfAnotherAgent
`public void OnTakenControlOfAnotherAgent() `

### Initialize
`public virtual void Initialize(IMissionScreen missionScreen,Mission mission,Action releaseSimulationSources,Action<bool> onToggle) `

### UpdateQuitText
`protected virtual void UpdateQuitText() `

### OnDeploymentFinished
`public virtual void OnDeploymentFinished() `

### Tick
`public void Tick(float dt) `

### OnTick
`protected abstract void OnTick(float dt)`

### GetSide
`protected SPScoreboardSideVM GetSide(BattleSideEnum side) `

### SetMouseState
`public void SetMouseState(bool visible) `

### GetFormattedTimeTextFromSeconds
`public static string GetFormattedTimeTextFromSeconds(int seconds) `

### GetBattleMoraleOfSide
`protected float GetBattleMoraleOfSide(BattleSideEnum side) `

### OnFinalize
`public override void OnFinalize() `

### ExecuteShowScoreboardAction
`public virtual void ExecuteShowScoreboardAction() `

### ExecutePlayAction
`public virtual void ExecutePlayAction() `

### ExecuteFastForwardAction
`public virtual void ExecuteFastForwardAction() `

### ExecutePauseSimulationAction
`public virtual void ExecutePauseSimulationAction() `

### ExecuteEndSimulationAction
`public virtual void ExecuteEndSimulationAction() `

### ExecuteQuitAction
`public virtual void ExecuteQuitAction() `

### SetShortcuts
`public virtual void SetShortcuts(ScoreboardHotkeys shortcuts) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
