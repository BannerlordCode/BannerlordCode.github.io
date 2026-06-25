---
title: "EncyclopediaListItemComparerBase"
description: "Auto-generated class reference for EncyclopediaListItemComparerBase."
---
# EncyclopediaListItemComparerBase

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncyclopediaListItemComparerBase : IComparer<EncyclopediaListItem>`
**Base:** `IComparer<EncyclopediaListItem>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encyclopedia/EncyclopediaListItemComparerBase.cs`

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

**Purpose:** **Purpose:** Assigns a new value to sort order and updates the object's internal state.

```csharp
// Obtain an instance of EncyclopediaListItemComparerBase from the subsystem API first
EncyclopediaListItemComparerBase encyclopediaListItemComparerBase = ...;
encyclopediaListItemComparerBase.SetSortOrder(false);
```

### SwitchSortOrder
`public void SwitchSortOrder()`

**Purpose:** **Purpose:** Executes the SwitchSortOrder logic.

```csharp
// Obtain an instance of EncyclopediaListItemComparerBase from the subsystem API first
EncyclopediaListItemComparerBase encyclopediaListItemComparerBase = ...;
encyclopediaListItemComparerBase.SwitchSortOrder();
```

### SetDefaultSortOrder
`public void SetDefaultSortOrder()`

**Purpose:** **Purpose:** Assigns a new value to default sort order and updates the object's internal state.

```csharp
// Obtain an instance of EncyclopediaListItemComparerBase from the subsystem API first
EncyclopediaListItemComparerBase encyclopediaListItemComparerBase = ...;
encyclopediaListItemComparerBase.SetDefaultSortOrder();
```

### Compare
`public abstract int Compare(EncyclopediaListItem x, EncyclopediaListItem y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of EncyclopediaListItemComparerBase from the subsystem API first
EncyclopediaListItemComparerBase encyclopediaListItemComparerBase = ...;
var result = encyclopediaListItemComparerBase.Compare(x, y);
```

### GetComparedValueText
`public abstract string GetComparedValueText(EncyclopediaListItem item)`

**Purpose:** **Purpose:** Reads and returns the compared value text value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaListItemComparerBase from the subsystem API first
EncyclopediaListItemComparerBase encyclopediaListItemComparerBase = ...;
var result = encyclopediaListItemComparerBase.GetComparedValueText(item);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
EncyclopediaListItemComparerBase instance = ...;
```

## See Also

- [Area Index](../)