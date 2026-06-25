---
title: "EncyclopediaListItemComparer"
description: "Auto-generated class reference for EncyclopediaListItemComparer."
---
# EncyclopediaListItemComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaListItemComparer : IComparer<EncyclopediaListItemVM>`
**Base:** `IComparer<EncyclopediaListItemVM>`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List/EncyclopediaListItemComparer.cs`

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

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of EncyclopediaListItemComparer from the subsystem API first
EncyclopediaListItemComparer encyclopediaListItemComparer = ...;
var result = encyclopediaListItemComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaListItemComparer encyclopediaListItemComparer = ...;
encyclopediaListItemComparer.Compare(x, y);
```

## See Also

- [Area Index](../)