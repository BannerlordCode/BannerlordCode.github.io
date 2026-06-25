---
title: "EncyclopediaListUnitComparer"
description: "Auto-generated class reference for EncyclopediaListUnitComparer."
---
# EncyclopediaListUnitComparer

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncyclopediaListUnitComparer : EncyclopediaListItemComparerBase`
**Base:** `EncyclopediaListItemComparerBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encyclopedia.Pages/DefaultEncyclopediaUnitPage.cs`

## Overview

`EncyclopediaListUnitComparer` lives in `TaleWorlds.CampaignSystem.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CompareUnits
`public int CompareUnits(EncyclopediaListItem x, EncyclopediaListItem y, Func<CharacterObject, CharacterObject, int> comparison)`

**Purpose:** **Purpose:** Compares two units objects and returns an ordering result.

```csharp
// Obtain an instance of EncyclopediaListUnitComparer from the subsystem API first
EncyclopediaListUnitComparer encyclopediaListUnitComparer = ...;
var result = encyclopediaListUnitComparer.CompareUnits(x, y, func<CharacterObject, characterObject, 0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
EncyclopediaListUnitComparer instance = ...;
```

## See Also

- [Area Index](../)