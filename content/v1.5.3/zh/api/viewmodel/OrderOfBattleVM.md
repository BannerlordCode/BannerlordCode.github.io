---
title: "OrderOfBattleVM"
description: "OrderOfBattleVM 的自动生成类参考。"
---
# OrderOfBattleVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection
**Type:** `public class OrderOfBattleVM : ViewModel `
**Base:** ViewModel
**Source:** TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleVM.cs

## 概述

`OrderOfBattleVM` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleVM.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### RefreshValues
`public override void RefreshValues() `

### OnFinalize
`public override void OnFinalize() `

### Tick
`public void Tick() `

### Initialize
`public void Initialize(Mission mission,Camera missionCamera,Action<int> selectFormationAtIndex,Action<int> deselectFormationAtIndex,Action clearFormationSelection,Action onAutoDeploy,Action onBeginMission,Dictionary<int,Agent> formationIndicesAndSergeants) `

### LoadConfiguration
`protected virtual void LoadConfiguration() `

### SaveConfiguration
`protected virtual void SaveConfiguration() `

### GetAgentTooltip
`protected virtual List<TooltipProperty> GetAgentTooltip(Agent agent) `

### OnAllFormationsAssignedSergeants
`public void OnAllFormationsAssignedSergeants(Dictionary<int,Agent> preAssignedCaptains) `

### IsAnyClassSelectionEnabled
`public bool IsAnyClassSelectionEnabled() `

### ExecuteDisableAllClassSelections
`public void ExecuteDisableAllClassSelections() `

### AssignCaptain
`protected void AssignCaptain(Agent agent,OrderOfBattleFormationItemVM formationItem) `

### ExecuteAcceptHeroes
`public void ExecuteAcceptHeroes() `

### ExecuteSelectAllHeroes
`public void ExecuteSelectAllHeroes() `

### ExecuteClearHeroSelection
`public void ExecuteClearHeroSelection() `

### OnDeploymentFinalized
`public void OnDeploymentFinalized(bool playerDeployed) `

### SelectFormationItemAtIndex
`public void SelectFormationItemAtIndex(int index) `

### FocusFormationItemAtIndex
`public void FocusFormationItemAtIndex(int index) `

### DeselectAllFormations
`public void DeselectAllFormations() `

### OnUnitDeployed
`public void OnUnitDeployed() `

### OnEscape
`public bool OnEscape() `

### ClearFormationItem
`protected void ClearFormationItem(OrderOfBattleFormationItemVM formationItem) `

### ExecuteAutoDeploy
`public void ExecuteAutoDeploy() `

### ExecuteBeginMission
`public void ExecuteBeginMission() `

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey) `

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
