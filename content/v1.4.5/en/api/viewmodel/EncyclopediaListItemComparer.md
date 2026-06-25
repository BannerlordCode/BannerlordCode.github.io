---
title: "EncyclopediaListItemComparer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaListItemComparer`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaListItemComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaListItemComparer : IComparer<EncyclopediaListItemVM>`
**Base:** `IComparer<EncyclopediaListItemVM>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List/EncyclopediaListItemComparer.cs`

## Overview

`EncyclopediaListItemComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SortController` | `public EncyclopediaSortController SortController { get; }` |

## Key Methods

### Compare
`public int Compare(EncyclopediaListItemVM x, EncyclopediaListItemVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new EncyclopediaListItemComparer();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)