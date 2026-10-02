---
title: "OrderOfBattleVM"
description: "OrderOfBattleVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle, inheriting ViewModel; 50 exposed members (25 methods, 24 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderOfBattleVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderOfBattleVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

OrderOfBattleVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is OrderOfBattleVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 50 public/protected members: 25 methods, 24 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderOfBattleVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`, inheritance chain OrderOfBattleVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 25/50, properties 24/50), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TotalFormationCount` | `protected int TotalFormationCount` | property |
| `List` | `public List<MissionOrderVM.FormationConfiguration>CurrentConfiguration` | property |
| `OrderOfBattleVM` | `public OrderOfBattleVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `Tick` | `public void Tick()` | method |
| `Initialize` | `public void Initialize(Mission mission, Camera missionCamera, Action<int>selectFormationAtIndex, Action<int>deselectFormationAtIndex, Action clearFormationSelection, Action onAutoDeploy, Action onBeginMission, Dictionary<int, Agent>formationIndicesAndSergeants)` | method |
| `LoadConfiguration` | `protected virtual void LoadConfiguration()` | method |
| `SaveConfiguration` | `protected virtual void SaveConfiguration()` | method |
| `List` | `protected virtual List<TooltipProperty>GetAgentTooltip(Agent agent)` | method |
| `OnAllFormationsAssignedSergeants` | `public void OnAllFormationsAssignedSergeants(Dictionary<int, Agent>preAssignedCaptains)` | method |
| `IsAnyClassSelectionEnabled` | `public bool IsAnyClassSelectionEnabled()` | method |
| `ExecuteDisableAllClassSelections` | `public void ExecuteDisableAllClassSelections()` | method |
| `AssignCaptain` | `protected void AssignCaptain(Agent agent, OrderOfBattleFormationItemVM formationItem)` | method |
| `ExecuteAcceptHeroes` | `public void ExecuteAcceptHeroes()` | method |
| `ExecuteSelectAllHeroes` | `public void ExecuteSelectAllHeroes()` | method |
| `ExecuteClearHeroSelection` | `public void ExecuteClearHeroSelection()` | method |
| `OnDeploymentFinalized` | `public void OnDeploymentFinalized(bool playerDeployed)` | method |
| `SelectFormationItemAtIndex` | `public void SelectFormationItemAtIndex(int index)` | method |
| `FocusFormationItemAtIndex` | `public void FocusFormationItemAtIndex(int index)` | method |
| `DeselectAllFormations` | `public void DeselectAllFormations()` | method |
| `OnUnitDeployed` | `public void OnUnitDeployed()` | method |
| `OnEscape` | `public bool OnEscape()` | method |
| `ClearFormationItem` | `protected void ClearFormationItem(OrderOfBattleFormationItemVM formationItem)` | method |
| `ExecuteAutoDeploy` | `public void ExecuteAutoDeploy()` | method |
| `ExecuteBeginMission` | `public void ExecuteBeginMission()` | method |
| `IsPoolAcceptingHeroTroops` | `public bool IsPoolAcceptingHeroTroops` | property |
| `CanStartMission` | `public bool CanStartMission` | property |
| `BeginMissionText` | `public string BeginMissionText` | property |
| `HasSelectedHeroes` | `public bool HasSelectedHeroes` | property |
| `MBBindingList` | `public MBBindingList<OrderOfBattleFormationItemVM>FormationsFirstHalf` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `AreCameraControlsEnabled` | `public bool AreCameraControlsEnabled` | property |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral` | property |
| `IsPoolAcceptingCaptain` | `public bool IsPoolAcceptingCaptain` | property |
| `IsPoolAcceptingAny` | `public bool IsPoolAcceptingAny` | property |
| `SelectedHeroCount` | `public int SelectedHeroCount` | property |
| `AreHotkeysEnabled` | `public bool AreHotkeysEnabled` | property |
| `ClearSelectionHint` | `public HintViewModel ClearSelectionHint` | property |
| `AutoDeployText` | `public string AutoDeployText` | property |
| `SelectAllHint` | `public HintViewModel SelectAllHint` | property |
| `MissingFormationsHint` | `public HintViewModel MissingFormationsHint` | property |
| `LastSelectedHeroItem` | `public OrderOfBattleHeroItemVM LastSelectedHeroItem` | property |
| `CanToggleHeroSelection` | `public bool CanToggleHeroSelection` | property |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotkey)` | method |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotkey)` | method |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | property |
| `MBBindingList` | `public MBBindingList<OrderOfBattleFormationItemVM>FormationsSecondHalf` | property |
| `MBBindingList` | `public MBBindingList<OrderOfBattleHeroItemVM>UnassignedHeroes` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace OrderOfBattleFormationClassChangedEvent](../OrderOfBattleFormationClassChangedEvent/)
- [same namespace OrderOfBattleFormationClassSelectorItemVM](../OrderOfBattleFormationClassSelectorItemVM/)
- [same namespace OrderOfBattleFormationClassVM](../OrderOfBattleFormationClassVM/)
- [same namespace OrderOfBattleFormationFilterSelectorItemComparer](../OrderOfBattleFormationFilterSelectorItemComparer/)
