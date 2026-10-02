---
title: "OrderOfBattleVM"
description: "Auto-generated class reference for OrderOfBattleVM."
---
# OrderOfBattleVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection
**Type:** `public class OrderOfBattleVM : ViewModel `
**Base:** ViewModel
**Source:** TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleVM.cs

## Overview

Auto-generated stub for `OrderOfBattleVM`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### RefreshValues
`public override void RefreshValues()`

### OnFinalize
`public override void OnFinalize()`

### Tick
`public void Tick()`

### Initialize
`public void Initialize(Mission mission,Camera missionCamera,Action<int> selectFormationAtIndex,Action<int> deselectFormationAtIndex,Action clearFormationSelection,Action onAutoDeploy,Action onBeginMission,Dictionary<int,Agent> formationIndicesAndSergeants)`

### LoadConfiguration
`protected virtual void LoadConfiguration()`

### SaveConfiguration
`protected virtual void SaveConfiguration()`

### GetAgentTooltip
`protected virtual List<TooltipProperty> GetAgentTooltip(Agent agent)`

### OnAllFormationsAssignedSergeants
`public void OnAllFormationsAssignedSergeants(Dictionary<int,Agent> preAssignedCaptains)`

### IsAnyClassSelectionEnabled
`public bool IsAnyClassSelectionEnabled()`

### ExecuteDisableAllClassSelections
`public void ExecuteDisableAllClassSelections()`

### AssignCaptain
`protected void AssignCaptain(Agent agent,OrderOfBattleFormationItemVM formationItem)`

### ExecuteAcceptHeroes
`public void ExecuteAcceptHeroes()`

### ExecuteSelectAllHeroes
`public void ExecuteSelectAllHeroes()`

### ExecuteClearHeroSelection
`public void ExecuteClearHeroSelection()`

### OnDeploymentFinalized
`public void OnDeploymentFinalized(bool playerDeployed)`

### SelectFormationItemAtIndex
`public void SelectFormationItemAtIndex(int index)`

### FocusFormationItemAtIndex
`public void FocusFormationItemAtIndex(int index)`

### DeselectAllFormations
`public void DeselectAllFormations()`

### OnUnitDeployed
`public void OnUnitDeployed()`

### OnEscape
`public bool OnEscape()`

### ClearFormationItem
`protected void ClearFormationItem(OrderOfBattleFormationItemVM formationItem)`

### ExecuteAutoDeploy
`public void ExecuteAutoDeploy()`

### ExecuteBeginMission
`public void ExecuteBeginMission()`

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

## See Also

- [Section index](../)
