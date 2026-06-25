---
title: "EncyclopediaListItemNameComparer"
description: "Auto-generated class reference for EncyclopediaListItemNameComparer."
---
# EncyclopediaListItemNameComparer

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `internal class EncyclopediaListItemNameComparer : EncyclopediaListItemComparerBase`
**Base:** `EncyclopediaListItemComparerBase`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaListItemNameComparer.cs`

## Overview

`EncyclopediaListItemNameComparer` lives in `TaleWorlds.CampaignSystem.Encyclopedia` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Encyclopedia` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of EncyclopediaListItemNameComparer from the subsystem API first
EncyclopediaListItemNameComparer encyclopediaListItemNameComparer = ...;
var result = encyclopediaListItemNameComparer.Compare(x, y);
```

### GetComparedValueText
`public override string GetComparedValueText(EncyclopediaListItem item)`

**Purpose:** Reads and returns the compared value text value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaListItemNameComparer from the subsystem API first
EncyclopediaListItemNameComparer encyclopediaListItemNameComparer = ...;
var result = encyclopediaListItemNameComparer.GetComparedValueText(item);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaListItemNameComparer encyclopediaListItemNameComparer = ...;
encyclopediaListItemNameComparer.Compare(x, y);
```

## See Also

- [Area Index](../)