---
title: "OrderOfBattleHeroItemVM"
description: "Auto-generated class reference for OrderOfBattleHeroItemVM."
---
# OrderOfBattleHeroItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleHeroItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle/OrderOfBattleHeroItemVM.cs`

## Overview

`OrderOfBattleHeroItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BannerOfHero` | `public ItemObject BannerOfHero { get; }` |
| `IsAssignedBeforePlayer` | `public bool IsAssignedBeforePlayer { get; }` |
| `InitialFormation` | `public Formation InitialFormation { get; }` |
| `InitialFormationItem` | `public OrderOfBattleFormationItemVM InitialFormationItem { get; }` |
| `CurrentAssignedFormationItem` | `public OrderOfBattleFormationItemVM CurrentAssignedFormationItem { get; set; }` |
| `MismatchedAssignmentDescriptionText` | `public string MismatchedAssignmentDescriptionText { get; set; }` |
| `IsAssignedToAFormation` | `public bool IsAssignedToAFormation { get; set; }` |
| `IsLeadingAFormation` | `public bool IsLeadingAFormation { get; set; }` |
| `HasMismatchedAssignment` | `public bool HasMismatchedAssignment { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsShown` | `public bool IsShown { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier { get; set; }` |
| `Tooltip` | `public BasicTooltipViewModel Tooltip { get; set; }` |
| `IsHighlightActive` | `public bool IsHighlightActive { get; set; }` |

## Key Methods

### SetInitialFormation
`public void SetInitialFormation(OrderOfBattleFormationItemVM formation)`

**Purpose:** **Purpose:** Assigns a new value to initial formation and updates the object's internal state.

```csharp
// Obtain an instance of OrderOfBattleHeroItemVM from the subsystem API first
OrderOfBattleHeroItemVM orderOfBattleHeroItemVM = ...;
orderOfBattleHeroItemVM.SetInitialFormation(formation);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of OrderOfBattleHeroItemVM from the subsystem API first
OrderOfBattleHeroItemVM orderOfBattleHeroItemVM = ...;
orderOfBattleHeroItemVM.RefreshValues();
```

### OnAssignmentRemoved
`public void OnAssignmentRemoved()`

**Purpose:** **Purpose:** Invoked when the assignment removed event is raised.

```csharp
// Obtain an instance of OrderOfBattleHeroItemVM from the subsystem API first
OrderOfBattleHeroItemVM orderOfBattleHeroItemVM = ...;
orderOfBattleHeroItemVM.OnAssignmentRemoved();
```

### RefreshInformation
`public void RefreshInformation()`

**Purpose:** **Purpose:** Keeps the display or cache of information in sync with the underlying state.

```csharp
// Obtain an instance of OrderOfBattleHeroItemVM from the subsystem API first
OrderOfBattleHeroItemVM orderOfBattleHeroItemVM = ...;
orderOfBattleHeroItemVM.RefreshInformation();
```

### RefreshAssignmentInfo
`public void RefreshAssignmentInfo()`

**Purpose:** **Purpose:** Keeps the display or cache of assignment info in sync with the underlying state.

```csharp
// Obtain an instance of OrderOfBattleHeroItemVM from the subsystem API first
OrderOfBattleHeroItemVM orderOfBattleHeroItemVM = ...;
orderOfBattleHeroItemVM.RefreshAssignmentInfo();
```

### SetIsPreAssigned
`public void SetIsPreAssigned(bool isPreAssigned)`

**Purpose:** **Purpose:** Assigns a new value to is pre assigned and updates the object's internal state.

```csharp
// Obtain an instance of OrderOfBattleHeroItemVM from the subsystem API first
OrderOfBattleHeroItemVM orderOfBattleHeroItemVM = ...;
orderOfBattleHeroItemVM.SetIsPreAssigned(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
OrderOfBattleHeroItemVM orderOfBattleHeroItemVM = ...;
orderOfBattleHeroItemVM.SetInitialFormation(formation);
```

## See Also

- [Area Index](../)