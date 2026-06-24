<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderOfBattleHeroItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OrderOfBattleHeroItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleHeroItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle/OrderOfBattleHeroItemVM.cs`

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

**Purpose:** Sets the value or state of `initial formation`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnAssignmentRemoved
`public void OnAssignmentRemoved()`

**Purpose:** Called when the `assignment removed` event is raised.

### RefreshInformation
`public void RefreshInformation()`

**Purpose:** Refreshes the display or cache of `information`.

### RefreshAssignmentInfo
`public void RefreshAssignmentInfo()`

**Purpose:** Refreshes the display or cache of `assignment info`.

### SetIsPreAssigned
`public void SetIsPreAssigned(bool isPreAssigned)`

**Purpose:** Sets the value or state of `is pre assigned`.

## Usage Example

```csharp
var value = new OrderOfBattleHeroItemVM();
value.SetInitialFormation(formation);
```

## See Also

- [Complete Class Catalog](../catalog)