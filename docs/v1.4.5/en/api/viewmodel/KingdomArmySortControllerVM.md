<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomArmySortControllerVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomArmySortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomArmySortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies/KingdomArmySortControllerVM.cs`

## Overview

`KingdomArmySortControllerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OwnerState` | `public int OwnerState { get; set; }` |
| `PartiesState` | `public int PartiesState { get; set; }` |
| `StrengthState` | `public int StrengthState { get; set; }` |
| `NameState` | `public int NameState { get; set; }` |
| `DistanceState` | `public int DistanceState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsPartiesSelected` | `public bool IsPartiesSelected { get; set; }` |
| `IsStrengthSelected` | `public bool IsStrengthSelected { get; set; }` |
| `IsOwnerSelected` | `public bool IsOwnerSelected { get; set; }` |
| `IsDistanceSelected` | `public bool IsDistanceSelected { get; set; }` |

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Sets the value or state of `sort mode`.

### Compare
`public abstract int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new KingdomArmySortControllerVM();
value.SetSortMode(false);
```

## See Also

- [Complete Class Catalog](../catalog)