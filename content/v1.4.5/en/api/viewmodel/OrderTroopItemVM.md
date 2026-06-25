---
title: "OrderTroopItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderTroopItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OrderTroopItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderTroopItemVM : OrderSubjectVM`
**Base:** `OrderSubjectVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/OrderTroopItemVM.cs`

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

**Purpose:** Called when the `finalize` event is raised.

### OnFormationAgentRemoved
`public void OnFormationAgentRemoved(Agent agent)`

**Purpose:** Called when the `formation agent removed` event is raised.

### UpdateVisuals
`public virtual void UpdateVisuals()`

**Purpose:** Updates the state or data of `visuals`.

### Update
`public virtual void Update()`

**Purpose:** Updates the state or data of `update`.

### UpdateSelectionKeyInfo
`public void UpdateSelectionKeyInfo()`

**Purpose:** Updates the state or data of `selection key info`.

### SetFormationClassFromFormation
`public bool SetFormationClassFromFormation(Formation formation)`

**Purpose:** Sets the value or state of `formation class from formation`.

### UpdateFilterData
`public void UpdateFilterData(List<FormationFilterType> usedFilters)`

**Purpose:** Updates the state or data of `filter data`.

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** Executes the `action` operation or workflow.

### RefreshTargetedOrderVisual
`public virtual void RefreshTargetedOrderVisual()`

**Purpose:** Refreshes the display or cache of `targeted order visual`.

### GetVisibleNameOfFormationForMessage
`public virtual TextObject GetVisibleNameOfFormationForMessage()`

**Purpose:** Gets the current value of `visible name of formation for message`.

## Usage Example

```csharp
var value = new OrderTroopItemVM();
value.OnFinalize();
```

## See Also

- [Complete Class Catalog](../catalog)