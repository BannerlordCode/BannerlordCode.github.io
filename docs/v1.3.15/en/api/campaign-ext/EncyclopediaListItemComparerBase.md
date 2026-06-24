<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaListItemComparerBase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaListItemComparerBase

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncyclopediaListItemComparerBase : IComparer<EncyclopediaListItem>`
**Base:** `IComparer<EncyclopediaListItem>`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaListItemComparerBase.cs`

## Overview

`EncyclopediaListItemComparerBase` lives in `TaleWorlds.CampaignSystem.Encyclopedia` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Encyclopedia` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsAscending` | `public bool IsAscending { get; }` |

## Key Methods

### SetSortOrder
`public void SetSortOrder(bool isAscending)`

**Purpose:** Sets the value or state of `sort order`.

### SwitchSortOrder
`public void SwitchSortOrder()`

**Purpose:** Handles logic related to `switch sort order`.

### SetDefaultSortOrder
`public void SetDefaultSortOrder()`

**Purpose:** Sets the value or state of `default sort order`.

### Compare
`public abstract int Compare(EncyclopediaListItem x, EncyclopediaListItem y)`

**Purpose:** Handles logic related to `compare`.

### GetComparedValueText
`public abstract string GetComparedValueText(EncyclopediaListItem item)`

**Purpose:** Gets the current value of `compared value text`.

## Usage Example

```csharp
var implementation = new CustomEncyclopediaListItemComparerBase();
```

## See Also

- [Complete Class Catalog](../catalog)