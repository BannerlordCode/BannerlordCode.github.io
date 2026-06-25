---
title: "EncyclopediaListKingdomComparer"
description: "Auto-generated class reference for EncyclopediaListKingdomComparer."
---
# EncyclopediaListKingdomComparer

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncyclopediaListKingdomComparer : EncyclopediaListItemComparerBase`
**Base:** `EncyclopediaListItemComparerBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encyclopedia.Pages/DefaultEncyclopediaFactionPage.cs`

## Overview

`EncyclopediaListKingdomComparer` lives in `TaleWorlds.CampaignSystem.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CompareKingdoms
`public int CompareKingdoms(EncyclopediaListItem x, EncyclopediaListItem y, Func<Kingdom, Kingdom, int> comparison)`

**Purpose:** Compares two `kingdoms` objects and returns an ordering result.

```csharp
// Obtain an instance of EncyclopediaListKingdomComparer from the subsystem API first
EncyclopediaListKingdomComparer encyclopediaListKingdomComparer = ...;
var result = encyclopediaListKingdomComparer.CompareKingdoms(x, y, func<Kingdom, kingdom, 0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
EncyclopediaListKingdomComparer instance = ...;
```

## See Also

- [Area Index](../)