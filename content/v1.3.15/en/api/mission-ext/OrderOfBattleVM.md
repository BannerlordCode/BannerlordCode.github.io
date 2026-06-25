---
title: "OrderOfBattleVM"
description: "Auto-generated class reference for OrderOfBattleVM."
---
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

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of OrderOfBattleVM from the subsystem API first
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of OrderOfBattleVM from the subsystem API first
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.OnFinalize();
```

### Tick
`public void Tick()`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of OrderOfBattleVM from the subsystem API first
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.Tick();
```

### Initialize
`public void Initialize(Mission mission, Camera missionCamera, Action<int> selectFormationAtIndex, Action<int> deselectFormationAtIndex, Action clearFormationSelection, Action onAutoDeploy, Action onBeginMission, Dictionary<int, Agent> formationIndicesAndSergeants)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of OrderOfBattleVM from the subsystem API first
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.Initialize(mission, missionCamera, selectFormationAtIndex, deselectFormationAtIndex, clearFormationSelection, onAutoDeploy, onBeginMission, dictionary<int, formationIndicesAndSergeants);
```

### OnAllFormationsAssignedSergeants
`public void OnAllFormationsAssignedSergeants(Dictionary<int, Agent> preAssignedCaptains)`

**Purpose:** Invoked when the `all formations assigned sergeants` event is raised.

```csharp
// Obtain an instance of OrderOfBattleVM from the subsystem API first
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.OnAllFormationsAssignedSergeants(dictionary<int, preAssignedCaptains);
```

### IsAnyClassSelectionEnabled
`public bool IsAnyClassSelectionEnabled()`

**Purpose:** Determines whether the current object is in the `any class selection enabled` state or condition.

```csharp
// Obtain an instance of OrderOfBattleVM from the subsystem API first
OrderOfBattleVM orderOfBattleVM = ...;
var result = orderOfBattleVM.IsAnyClassSelectionEnabled();
```

### ExecuteDisableAllClassSelections
`public void ExecuteDisableAllClassSelections()`

**Purpose:** Runs the operation or workflow associated with `disable all class selections`.

```csharp
// Obtain an instance of OrderOfBattleVM from the subsystem API first
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.ExecuteDisableAllClassSelections();
```

### ExecuteAcceptHeroes
`public void ExecuteAcceptHeroes()`

**Purpose:** Runs the operation or workflow associated with `accept heroes`.

```csharp
// Obtain an instance of OrderOfBattleVM from the subsystem API first
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.ExecuteAcceptHeroes();
```

### ExecuteSelectAllHeroes
`public void ExecuteSelectAllHeroes()`

**Purpose:** Runs the operation or workflow associated with `select all heroes`.

```csharp
// Obtain an instance of OrderOfBattleVM from the subsystem API first
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.ExecuteSelectAllHeroes();
```

### ExecuteClearHeroSelection
`public void ExecuteClearHeroSelection()`

**Purpose:** Runs the operation or workflow associated with `clear hero selection`.

```csharp
// Obtain an instance of OrderOfBattleVM from the subsystem API first
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.ExecuteClearHeroSelection();
```

### OnDeploymentFinalized
`public void OnDeploymentFinalized(bool playerDeployed)`

**Purpose:** Invoked when the `deployment finalized` event is raised.

```csharp
// Obtain an instance of OrderOfBattleVM from the subsystem API first
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.OnDeploymentFinalized(false);
```

### SelectFormationItemAtIndex
`public void SelectFormationItemAtIndex(int index)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of OrderOfBattleVM from the subsystem API first
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.SelectFormationItemAtIndex(0);
```

### FocusFormationItemAtIndex
`public void FocusFormationItemAtIndex(int index)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of OrderOfBattleVM from the subsystem API first
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.FocusFormationItemAtIndex(0);
```

### DeselectAllFormations
`public void DeselectAllFormations()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of OrderOfBattleVM from the subsystem API first
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.DeselectAllFormations();
```

### OnUnitDeployed
`public void OnUnitDeployed()`

**Purpose:** Invoked when the `unit deployed` event is raised.

```csharp
// Obtain an instance of OrderOfBattleVM from the subsystem API first
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.OnUnitDeployed();
```

### OnEscape
`public bool OnEscape()`

**Purpose:** Invoked when the `escape` event is raised.

```csharp
// Obtain an instance of OrderOfBattleVM from the subsystem API first
OrderOfBattleVM orderOfBattleVM = ...;
var result = orderOfBattleVM.OnEscape();
```

### ExecuteAutoDeploy
`public void ExecuteAutoDeploy()`

**Purpose:** Runs the operation or workflow associated with `auto deploy`.

```csharp
// Obtain an instance of OrderOfBattleVM from the subsystem API first
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.ExecuteAutoDeploy();
```

### ExecuteBeginMission
`public void ExecuteBeginMission()`

**Purpose:** Runs the operation or workflow associated with `begin mission`.

```csharp
// Obtain an instance of OrderOfBattleVM from the subsystem API first
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.ExecuteBeginMission();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `done input key` and updates the object's internal state.

```csharp
// Obtain an instance of OrderOfBattleVM from the subsystem API first
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.SetDoneInputKey(hotkey);
```

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `reset input key` and updates the object's internal state.

```csharp
// Obtain an instance of OrderOfBattleVM from the subsystem API first
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.SetResetInputKey(hotkey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.RefreshValues();
```

## See Also

- [Area Index](../)