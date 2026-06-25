---
title: "ArmyManagementVM"
description: "Auto-generated class reference for ArmyManagementVM."
---
# ArmyManagementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyManagementVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement/ArmyManagementVM.cs`

## Overview

`ArmyManagementVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification { get; set; }` |
| `SortControllerVM` | `public ArmyManagementSortControllerVM SortControllerVM { get; set; }` |
| `BoostTitleText` | `public string BoostTitleText { get; set; }` |
| `DisbandArmyText` | `public string DisbandArmyText { get; set; }` |
| `CohesionBoostAmountText` | `public string CohesionBoostAmountText { get; set; }` |
| `DistanceText` | `public string DistanceText { get; set; }` |
| `CostText` | `public string CostText { get; set; }` |
| `OwnerText` | `public string OwnerText { get; set; }` |
| `StrengthText` | `public string StrengthText { get; set; }` |
| `ShipCountText` | `public string ShipCountText { get; set; }` |
| `LordsText` | `public string LordsText { get; set; }` |
| `TotalInfluence` | `public string TotalInfluence { get; set; }` |
| `TotalStrength` | `public int TotalStrength { get; set; }` |
| `TotalCost` | `public int TotalCost { get; set; }` |
| `TotalLords` | `public string TotalLords { get; set; }` |
| `CanCreateArmy` | `public bool CanCreateArmy { get; set; }` |
| `CanBoostCohesion` | `public bool CanBoostCohesion { get; set; }` |
| `CanDisbandArmy` | `public bool CanDisbandArmy { get; set; }` |
| `CanConfirm` | `public bool CanConfirm { get; set; }` |
| `CanAffordInfluenceCost` | `public bool CanAffordInfluenceCost { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ClanText` | `public string ClanText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `FocusedItem` | `public ArmyManagementItemVM FocusedItem { get; set; }` |
| `PartyList` | `public MBBindingList<ArmyManagementItemVM> PartyList { get; set; }` |
| `PartiesInCart` | `public MBBindingList<ArmyManagementItemVM> PartiesInCart { get; set; }` |
| `TotalStrengthText` | `public string TotalStrengthText { get; set; }` |
| `TotalCostText` | `public string TotalCostText { get; set; }` |
| `TotalCostNumbersText` | `public string TotalCostNumbersText { get; set; }` |
| `CohesionText` | `public string CohesionText { get; set; }` |
| `Cohesion` | `public int Cohesion { get; set; }` |
| `CohesionBoostCost` | `public int CohesionBoostCost { get; set; }` |
| `PlayerHasArmy` | `public bool PlayerHasArmy { get; set; }` |
| `MoraleText` | `public string MoraleText { get; set; }` |
| `FoodText` | `public string FoodText { get; set; }` |
| `NewCohesion` | `public int NewCohesion { get; set; }` |
| `CohesionHint` | `public BasicTooltipViewModel CohesionHint { get; set; }` |
| `MoraleHint` | `public HintViewModel MoraleHint { get; set; }` |
| `BoostCohesionHint` | `public HintViewModel BoostCohesionHint { get; set; }` |
| `DisbandArmyHint` | `public HintViewModel DisbandArmyHint { get; set; }` |
| `DoneHint` | `public HintViewModel DoneHint { get; set; }` |
| `FoodHint` | `public HintViewModel FoodHint { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey { get; set; }` |

## Key Methods

### Compare
`public int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ArmyManagementVM from the subsystem API first
ArmyManagementVM armyManagementVM = ...;
var result = armyManagementVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of ArmyManagementVM from the subsystem API first
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.RefreshValues();
```

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with done.

```csharp
// Obtain an instance of ArmyManagementVM from the subsystem API first
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.ExecuteDone();
```

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with cancel.

```csharp
// Obtain an instance of ArmyManagementVM from the subsystem API first
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.ExecuteCancel();
```

### ExecuteReset
`public void ExecuteReset()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with reset.

```csharp
// Obtain an instance of ArmyManagementVM from the subsystem API first
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.ExecuteReset();
```

### ExecuteDisbandArmy
`public void ExecuteDisbandArmy()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with disband army.

```csharp
// Obtain an instance of ArmyManagementVM from the subsystem API first
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.ExecuteDisbandArmy();
```

### ExecuteBoostCohesionManual
`public void ExecuteBoostCohesionManual()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with boost cohesion manual.

```csharp
// Obtain an instance of ArmyManagementVM from the subsystem API first
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.ExecuteBoostCohesionManual();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of ArmyManagementVM from the subsystem API first
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.OnFinalize();
```

### SetResetInputKey
`public void SetResetInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to reset input key and updates the object's internal state.

```csharp
// Obtain an instance of ArmyManagementVM from the subsystem API first
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.SetResetInputKey(hotKey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of ArmyManagementVM from the subsystem API first
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of ArmyManagementVM from the subsystem API first
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.SetDoneInputKey(hotKey);
```

### SetRemoveInputKey
`public void SetRemoveInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to remove input key and updates the object's internal state.

```csharp
// Obtain an instance of ArmyManagementVM from the subsystem API first
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.SetRemoveInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.Compare(x, y);
```

## See Also

- [Area Index](../)