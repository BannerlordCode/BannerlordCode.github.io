<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomClanSortControllerVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomClanSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomClanSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans/KingdomClanSortControllerVM.cs`

## Overview

`KingdomClanSortControllerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `InfluenceState` | `public int InfluenceState { get; set; }` |
| `FiefsState` | `public int FiefsState { get; set; }` |
| `MembersState` | `public int MembersState { get; set; }` |
| `NameState` | `public int NameState { get; set; }` |
| `TypeState` | `public int TypeState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsTypeSelected` | `public bool IsTypeSelected { get; set; }` |
| `IsFiefsSelected` | `public bool IsFiefsSelected { get; set; }` |
| `IsMembersSelected` | `public bool IsMembersSelected { get; set; }` |
| `IsInfluenceSelected` | `public bool IsInfluenceSelected { get; set; }` |

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Sets the value or state of `sort mode`.

### Compare
`public abstract int Compare(KingdomClanItemVM x, KingdomClanItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomClanItemVM x, KingdomClanItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomClanItemVM x, KingdomClanItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomClanItemVM x, KingdomClanItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomClanItemVM x, KingdomClanItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomClanItemVM x, KingdomClanItemVM y)`

**Purpose:** Handles logic related to `compare`.

### SortByCurrentState
`public void SortByCurrentState()`

**Purpose:** Handles logic related to `sort by current state`.

## Usage Example

```csharp
var value = new KingdomClanSortControllerVM();
value.SetSortMode(false);
```

## See Also

- [Complete Class Catalog](../catalog)