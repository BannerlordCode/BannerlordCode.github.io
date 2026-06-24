<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomWarSortControllerVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomWarSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomWarSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarSortControllerVM.cs`

## Overview

`KingdomWarSortControllerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ScoreState` | `public int ScoreState { get; set; }` |
| `IsScoreSelected` | `public bool IsScoreSelected { get; set; }` |

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Sets the value or state of `sort mode`.

### Compare
`public abstract int Compare(KingdomWarItemVM x, KingdomWarItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomWarItemVM x, KingdomWarItemVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new KingdomWarSortControllerVM();
value.SetSortMode(false);
```

## See Also

- [Complete Class Catalog](../catalog)