---
title: "OrderTroopItemVM"
description: "Auto-generated class reference for OrderTroopItemVM."
---
# OrderTroopItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderTroopItemVM : OrderSubjectVM`
**Base:** `OrderSubjectVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderTroopItemVM.cs`

## Overview

`OrderTroopItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ContainsDeadTroop` | `public bool ContainsDeadTroop { get; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `FormationIndex` | `public int FormationIndex { get; set; }` |
| `CurrentMemberCount` | `public int CurrentMemberCount { get; set; }` |
| `Morale` | `public int Morale { get; set; }` |
| `AmmoPercentage` | `public float AmmoPercentage { get; set; }` |
| `IsAmmoAvailable` | `public bool IsAmmoAvailable { get; set; }` |
| `HaveTroops` | `public bool HaveTroops { get; set; }` |
| `HasTarget` | `public bool HasTarget { get; set; }` |
| `IsTargetRelevant` | `public bool IsTargetRelevant { get; set; }` |
| `HasCaptain` | `public bool HasCaptain { get; set; }` |
| `CurrentOrderIconId` | `public string CurrentOrderIconId { get; set; }` |
| `CurrentTargetFormationType` | `public string CurrentTargetFormationType { get; set; }` |
| `FormationName` | `public string FormationName { get; set; }` |
| `CaptainImageIdentifier` | `public CharacterImageIdentifierVM CaptainImageIdentifier { get; set; }` |
| `ActiveFormationClasses` | `public MBBindingList<OrderTroopItemFormationClassVM> ActiveFormationClasses { get; set; }` |
| `ActiveFilters` | `public MBBindingList<OrderTroopItemFilterVM> ActiveFilters { get; set; }` |

## Key Methods

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of OrderTroopItemVM from the subsystem API first
OrderTroopItemVM orderTroopItemVM = ...;
orderTroopItemVM.OnFinalize();
```

### OnFormationAgentRemoved
`public void OnFormationAgentRemoved(Agent agent)`

**Purpose:** Invoked when the formation agent removed event is raised.

```csharp
// Obtain an instance of OrderTroopItemVM from the subsystem API first
OrderTroopItemVM orderTroopItemVM = ...;
orderTroopItemVM.OnFormationAgentRemoved(agent);
```

### UpdateVisuals
`public virtual void UpdateVisuals()`

**Purpose:** Recalculates and stores the latest representation of visuals.

```csharp
// Obtain an instance of OrderTroopItemVM from the subsystem API first
OrderTroopItemVM orderTroopItemVM = ...;
orderTroopItemVM.UpdateVisuals();
```

### Update
`public virtual void Update()`

**Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of OrderTroopItemVM from the subsystem API first
OrderTroopItemVM orderTroopItemVM = ...;
orderTroopItemVM.Update();
```

### UpdateSelectionKeyInfo
`public void UpdateSelectionKeyInfo()`

**Purpose:** Recalculates and stores the latest representation of selection key info.

```csharp
// Obtain an instance of OrderTroopItemVM from the subsystem API first
OrderTroopItemVM orderTroopItemVM = ...;
orderTroopItemVM.UpdateSelectionKeyInfo();
```

### SetFormationClassFromFormation
`public bool SetFormationClassFromFormation(Formation formation)`

**Purpose:** Assigns a new value to formation class from formation and updates the object's internal state.

```csharp
// Obtain an instance of OrderTroopItemVM from the subsystem API first
OrderTroopItemVM orderTroopItemVM = ...;
var result = orderTroopItemVM.SetFormationClassFromFormation(formation);
```

### UpdateFilterData
`public void UpdateFilterData(List<FormationFilterType> usedFilters)`

**Purpose:** Recalculates and stores the latest representation of filter data.

```csharp
// Obtain an instance of OrderTroopItemVM from the subsystem API first
OrderTroopItemVM orderTroopItemVM = ...;
orderTroopItemVM.UpdateFilterData(usedFilters);
```

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** Runs the operation or workflow associated with action.

```csharp
// Obtain an instance of OrderTroopItemVM from the subsystem API first
OrderTroopItemVM orderTroopItemVM = ...;
orderTroopItemVM.ExecuteAction();
```

### RefreshTargetedOrderVisual
`public virtual void RefreshTargetedOrderVisual()`

**Purpose:** Keeps the display or cache of targeted order visual in sync with the underlying state.

```csharp
// Obtain an instance of OrderTroopItemVM from the subsystem API first
OrderTroopItemVM orderTroopItemVM = ...;
orderTroopItemVM.RefreshTargetedOrderVisual();
```

### GetVisibleNameOfFormationForMessage
`public virtual TextObject GetVisibleNameOfFormationForMessage()`

**Purpose:** Reads and returns the visible name of formation for message value held by the this instance.

```csharp
// Obtain an instance of OrderTroopItemVM from the subsystem API first
OrderTroopItemVM orderTroopItemVM = ...;
var result = orderTroopItemVM.GetVisibleNameOfFormationForMessage();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
OrderTroopItemVM orderTroopItemVM = ...;
orderTroopItemVM.OnFinalize();
```

## See Also

- [Area Index](../)