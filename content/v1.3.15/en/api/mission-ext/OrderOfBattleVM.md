---
title: "OrderOfBattleVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderOfBattleVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleVM.cs`

## Overview

`OrderOfBattleVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentConfiguration` | `public List<MissionOrderVM.FormationConfiguration> CurrentConfiguration { get; }` |
| `IsPoolAcceptingHeroTroops` | `public bool IsPoolAcceptingHeroTroops { get; set; }` |
| `CanStartMission` | `public bool CanStartMission { get; set; }` |
| `BeginMissionText` | `public string BeginMissionText { get; set; }` |
| `HasSelectedHeroes` | `public bool HasSelectedHeroes { get; set; }` |
| `FormationsFirstHalf` | `public MBBindingList<OrderOfBattleFormationItemVM> FormationsFirstHalf { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `AreCameraControlsEnabled` | `public bool AreCameraControlsEnabled { get; set; }` |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral { get; set; }` |
| `IsPoolAcceptingCaptain` | `public bool IsPoolAcceptingCaptain { get; set; }` |
| `IsPoolAcceptingAny` | `public bool IsPoolAcceptingAny { get; set; }` |
| `SelectedHeroCount` | `public int SelectedHeroCount { get; set; }` |
| `AreHotkeysEnabled` | `public bool AreHotkeysEnabled { get; set; }` |
| `ClearSelectionHint` | `public HintViewModel ClearSelectionHint { get; set; }` |
| `AutoDeployText` | `public string AutoDeployText { get; set; }` |
| `SelectAllHint` | `public HintViewModel SelectAllHint { get; set; }` |
| `MissingFormationsHint` | `public HintViewModel MissingFormationsHint { get; set; }` |
| `LastSelectedHeroItem` | `public OrderOfBattleHeroItemVM LastSelectedHeroItem { get; set; }` |
| `CanToggleHeroSelection` | `public bool CanToggleHeroSelection { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |
| `FormationsSecondHalf` | `public MBBindingList<OrderOfBattleFormationItemVM> FormationsSecondHalf { get; set; }` |
| `UnassignedHeroes` | `public MBBindingList<OrderOfBattleHeroItemVM> UnassignedHeroes { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Tick
`public void Tick()`

**Purpose:** Handles logic related to `tick`.

### Initialize
`public void Initialize(Mission mission, Camera missionCamera, Action<int> selectFormationAtIndex, Action<int> deselectFormationAtIndex, Action clearFormationSelection, Action onAutoDeploy, Action onBeginMission, Dictionary<int, Agent> formationIndicesAndSergeants)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### OnAllFormationsAssignedSergeants
`public void OnAllFormationsAssignedSergeants(Dictionary<int, Agent> preAssignedCaptains)`

**Purpose:** Called when the `all formations assigned sergeants` event is raised.

### IsAnyClassSelectionEnabled
`public bool IsAnyClassSelectionEnabled()`

**Purpose:** Handles logic related to `is any class selection enabled`.

### ExecuteDisableAllClassSelections
`public void ExecuteDisableAllClassSelections()`

**Purpose:** Executes the `disable all class selections` operation or workflow.

### ExecuteAcceptHeroes
`public void ExecuteAcceptHeroes()`

**Purpose:** Executes the `accept heroes` operation or workflow.

### ExecuteSelectAllHeroes
`public void ExecuteSelectAllHeroes()`

**Purpose:** Executes the `select all heroes` operation or workflow.

### ExecuteClearHeroSelection
`public void ExecuteClearHeroSelection()`

**Purpose:** Executes the `clear hero selection` operation or workflow.

### OnDeploymentFinalized
`public void OnDeploymentFinalized(bool playerDeployed)`

**Purpose:** Called when the `deployment finalized` event is raised.

### SelectFormationItemAtIndex
`public void SelectFormationItemAtIndex(int index)`

**Purpose:** Handles logic related to `select formation item at index`.

### FocusFormationItemAtIndex
`public void FocusFormationItemAtIndex(int index)`

**Purpose:** Handles logic related to `focus formation item at index`.

### DeselectAllFormations
`public void DeselectAllFormations()`

**Purpose:** Handles logic related to `deselect all formations`.

### OnUnitDeployed
`public void OnUnitDeployed()`

**Purpose:** Called when the `unit deployed` event is raised.

### OnEscape
`public bool OnEscape()`

**Purpose:** Called when the `escape` event is raised.

### ExecuteAutoDeploy
`public void ExecuteAutoDeploy()`

**Purpose:** Executes the `auto deploy` operation or workflow.

### ExecuteBeginMission
`public void ExecuteBeginMission()`

**Purpose:** Executes the `begin mission` operation or workflow.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `done input key`.

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `reset input key`.

## Usage Example

```csharp
var value = new OrderOfBattleVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)