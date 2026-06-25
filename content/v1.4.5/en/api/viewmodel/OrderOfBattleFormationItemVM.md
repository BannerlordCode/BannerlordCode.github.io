---
title: "OrderOfBattleFormationItemVM"
description: "Auto-generated class reference for OrderOfBattleFormationItemVM."
---
# OrderOfBattleFormationItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle/OrderOfBattleFormationItemVM.cs`

## Overview

`OrderOfBattleFormationItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Formation` | `public Formation Formation { get; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasFormation` | `public bool HasFormation { get; set; }` |
| `HasCaptain` | `public bool HasCaptain { get; set; }` |
| `HasHeroTroops` | `public bool HasHeroTroops { get; set; }` |
| `IsControlledByPlayer` | `public bool IsControlledByPlayer { get; set; }` |
| `IsSelectable` | `public bool IsSelectable { get; set; }` |
| `IsAdjustable` | `public bool IsAdjustable { get; set; }` |
| `IsMarkerShown` | `public bool IsMarkerShown { get; set; }` |
| `IsBeingFocused` | `public bool IsBeingFocused { get; set; }` |
| `IsAcceptingCaptain` | `public bool IsAcceptingCaptain { get; set; }` |
| `IsAcceptingHeroTroops` | `public bool IsAcceptingHeroTroops { get; set; }` |
| `IsHeroTroopsOverflowing` | `public bool IsHeroTroopsOverflowing { get; set; }` |
| `IsClassSelectionActive` | `public bool IsClassSelectionActive { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `FormationIsEmptyText` | `public string FormationIsEmptyText { get; set; }` |
| `OverflowHeroTroopCountText` | `public string OverflowHeroTroopCountText { get; set; }` |
| `TroopCount` | `public int TroopCount { get; set; }` |
| `BannerBearerCount` | `public int BannerBearerCount { get; set; }` |
| `OrderOfBattleFormationClassInt` | `public int OrderOfBattleFormationClassInt { get; set; }` |
| `WSign` | `public int WSign { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `Captain` | `public OrderOfBattleHeroItemVM Captain { get; set; }` |
| `HeroTroops` | `public MBBindingList<OrderOfBattleHeroItemVM> HeroTroops { get; set; }` |
| `Classes` | `public MBBindingList<OrderOfBattleFormationClassVM> Classes { get; set; }` |
| `FormationClassSelector` | `public SelectorVM<OrderOfBattleFormationClassSelectorItemVM> FormationClassSelector { get; set; }` |
| `FilterItems` | `public MBBindingList<OrderOfBattleFormationFilterSelectorItemVM> FilterItems { get; set; }` |
| `Tooltip` | `public BasicTooltipViewModel Tooltip { get; set; }` |
| `BannerBearerTooltip` | `public BasicTooltipViewModel BannerBearerTooltip { get; set; }` |
| `CantAdjustHint` | `public HintViewModel CantAdjustHint { get; set; }` |
| `CaptainSlotHint` | `public HintViewModel CaptainSlotHint { get; set; }` |
| `HeroTroopSlotHint` | `public HintViewModel HeroTroopSlotHint { get; set; }` |
| `AssignCaptainHint` | `public HintViewModel AssignCaptainHint { get; set; }` |
| `AssignHeroTroopHint` | `public HintViewModel AssignHeroTroopHint { get; set; }` |
| `IsCaptainSlotHighlightActive` | `public bool IsCaptainSlotHighlightActive { get; set; }` |
| `IsTypeSelectionHighlightActive` | `public bool IsTypeSelectionHighlightActive { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of OrderOfBattleFormationItemVM from the subsystem API first
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.RefreshValues();
```

### Tick
`public void Tick()`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of OrderOfBattleFormationItemVM from the subsystem API first
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.Tick();
```

### RefreshFormation
`public void RefreshFormation(Formation formation, DeploymentFormationClass overriddenClass = DeploymentFormationClass.Unset, bool mustExist = false)`

**Purpose:** Keeps the display or cache of formation in sync with the underlying state.

```csharp
// Obtain an instance of OrderOfBattleFormationItemVM from the subsystem API first
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.RefreshFormation(formation, deploymentFormationClass.Unset, false);
```

### MakeMarkerWorldPositionDirty
`public void MakeMarkerWorldPositionDirty()`

**Purpose:** Executes the MakeMarkerWorldPositionDirty logic.

```csharp
// Obtain an instance of OrderOfBattleFormationItemVM from the subsystem API first
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.MakeMarkerWorldPositionDirty();
```

### OnSizeChanged
`public void OnSizeChanged()`

**Purpose:** Invoked when the size changed event is raised.

```csharp
// Obtain an instance of OrderOfBattleFormationItemVM from the subsystem API first
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.OnSizeChanged();
```

### GetOrderOfBattleClass
`public DeploymentFormationClass GetOrderOfBattleClass()`

**Purpose:** Reads and returns the order of battle class value held by the this instance.

```csharp
// Obtain an instance of OrderOfBattleFormationItemVM from the subsystem API first
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
var result = orderOfBattleFormationItemVM.GetOrderOfBattleClass();
```

### UpdateAdjustable
`public void UpdateAdjustable()`

**Purpose:** Recalculates and stores the latest representation of adjustable.

```csharp
// Obtain an instance of OrderOfBattleFormationItemVM from the subsystem API first
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.UpdateAdjustable();
```

### HasFilter
`public bool HasFilter(FormationFilterType filter)`

**Purpose:** Determines whether the this instance already holds filter.

```csharp
// Obtain an instance of OrderOfBattleFormationItemVM from the subsystem API first
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
var result = orderOfBattleFormationItemVM.HasFilter(filter);
```

### HasOnlyOneClass
`public bool HasOnlyOneClass()`

**Purpose:** Determines whether the this instance already holds only one class.

```csharp
// Obtain an instance of OrderOfBattleFormationItemVM from the subsystem API first
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
var result = orderOfBattleFormationItemVM.HasOnlyOneClass();
```

### HasClass
`public bool HasClass(FormationClass formationClass)`

**Purpose:** Determines whether the this instance already holds class.

```csharp
// Obtain an instance of OrderOfBattleFormationItemVM from the subsystem API first
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
var result = orderOfBattleFormationItemVM.HasClass(formationClass);
```

### HasClasses
`public bool HasClasses(FormationClass formationClasses)`

**Purpose:** Determines whether the this instance already holds classes.

```csharp
// Obtain an instance of OrderOfBattleFormationItemVM from the subsystem API first
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
var result = orderOfBattleFormationItemVM.HasClasses(formationClasses);
```

### UnassignCaptain
`public void UnassignCaptain()`

**Purpose:** Executes the UnassignCaptain logic.

```csharp
// Obtain an instance of OrderOfBattleFormationItemVM from the subsystem API first
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.UnassignCaptain();
```

### ExecuteAcceptCaptain
`public void ExecuteAcceptCaptain()`

**Purpose:** Runs the operation or workflow associated with accept captain.

```csharp
// Obtain an instance of OrderOfBattleFormationItemVM from the subsystem API first
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.ExecuteAcceptCaptain();
```

### ExecuteAcceptHeroTroops
`public void ExecuteAcceptHeroTroops()`

**Purpose:** Runs the operation or workflow associated with accept hero troops.

```csharp
// Obtain an instance of OrderOfBattleFormationItemVM from the subsystem API first
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.ExecuteAcceptHeroTroops();
```

### OnHeroSelectionUpdated
`public void OnHeroSelectionUpdated(int selectedHeroCount, bool hasOwnHeroTroopInSelection)`

**Purpose:** Invoked when the hero selection updated event is raised.

```csharp
// Obtain an instance of OrderOfBattleFormationItemVM from the subsystem API first
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.OnHeroSelectionUpdated(0, false);
```

### AddHeroTroop
`public void AddHeroTroop(OrderOfBattleHeroItemVM heroItem)`

**Purpose:** Adds hero troop to the current collection or state.

```csharp
// Obtain an instance of OrderOfBattleFormationItemVM from the subsystem API first
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.AddHeroTroop(heroItem);
```

### RemoveHeroTroop
`public void RemoveHeroTroop(OrderOfBattleHeroItemVM heroItem)`

**Purpose:** Removes hero troop from the current collection or state.

```csharp
// Obtain an instance of OrderOfBattleFormationItemVM from the subsystem API first
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.RemoveHeroTroop(heroItem);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.RefreshValues();
```

## See Also

- [Area Index](../)