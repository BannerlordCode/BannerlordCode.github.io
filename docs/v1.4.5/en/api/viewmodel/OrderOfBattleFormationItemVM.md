<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderOfBattleFormationItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OrderOfBattleFormationItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle/OrderOfBattleFormationItemVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### Tick
`public void Tick()`

**Purpose:** Handles logic related to `tick`.

### RefreshFormation
`public void RefreshFormation(Formation formation, DeploymentFormationClass overriddenClass = DeploymentFormationClass.Unset, bool mustExist = false)`

**Purpose:** Refreshes the display or cache of `formation`.

### MakeMarkerWorldPositionDirty
`public void MakeMarkerWorldPositionDirty()`

**Purpose:** Handles logic related to `make marker world position dirty`.

### OnSizeChanged
`public void OnSizeChanged()`

**Purpose:** Called when the `size changed` event is raised.

### GetOrderOfBattleClass
`public DeploymentFormationClass GetOrderOfBattleClass()`

**Purpose:** Gets the current value of `order of battle class`.

### UpdateAdjustable
`public void UpdateAdjustable()`

**Purpose:** Updates the state or data of `adjustable`.

### HasFilter
`public bool HasFilter(FormationFilterType filter)`

**Purpose:** Checks whether the current object has/contains `filter`.

### HasOnlyOneClass
`public bool HasOnlyOneClass()`

**Purpose:** Checks whether the current object has/contains `only one class`.

### HasClass
`public bool HasClass(FormationClass formationClass)`

**Purpose:** Checks whether the current object has/contains `class`.

### HasClasses
`public bool HasClasses(FormationClass formationClasses)`

**Purpose:** Checks whether the current object has/contains `classes`.

### UnassignCaptain
`public void UnassignCaptain()`

**Purpose:** Handles logic related to `unassign captain`.

### ExecuteAcceptCaptain
`public void ExecuteAcceptCaptain()`

**Purpose:** Executes the `accept captain` operation or workflow.

### ExecuteAcceptHeroTroops
`public void ExecuteAcceptHeroTroops()`

**Purpose:** Executes the `accept hero troops` operation or workflow.

### OnHeroSelectionUpdated
`public void OnHeroSelectionUpdated(int selectedHeroCount, bool hasOwnHeroTroopInSelection)`

**Purpose:** Called when the `hero selection updated` event is raised.

### AddHeroTroop
`public void AddHeroTroop(OrderOfBattleHeroItemVM heroItem)`

**Purpose:** Adds `hero troop` to the current collection or state.

### RemoveHeroTroop
`public void RemoveHeroTroop(OrderOfBattleHeroItemVM heroItem)`

**Purpose:** Removes `hero troop` from the current collection or state.

## Usage Example

```csharp
var value = new OrderOfBattleFormationItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)