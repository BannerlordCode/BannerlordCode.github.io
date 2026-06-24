<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaListFilterVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaListFilterVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaListFilterVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListFilterVM.cs`

## Overview

`EncyclopediaListFilterVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Name` | `public string Name { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### CopyFilterFrom
`public void CopyFilterFrom(Dictionary<EncyclopediaFilterItem, bool> filters)`

**Purpose:** Handles logic related to `copy filter from`.

### ExecuteOnFilterActivated
`public void ExecuteOnFilterActivated()`

**Purpose:** Executes the `on filter activated` operation or workflow.

## Usage Example

```csharp
var value = new EncyclopediaListFilterVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)