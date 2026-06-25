---
title: "EncyclopediaListClanComparer"
description: "Auto-generated class reference for EncyclopediaListClanComparer."
---
# EncyclopediaListClanComparer

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncyclopediaListClanComparer : EncyclopediaListItemComparerBase`
**Base:** `EncyclopediaListItemComparerBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encyclopedia.Pages/DefaultEncyclopediaClanPage.cs`

## Overview

`EncyclopediaListClanComparer` lives in `TaleWorlds.CampaignSystem.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CompareClans
`public int CompareClans(EncyclopediaListItem x, EncyclopediaListItem y, Func<Clan, Clan, int> comparison)`

**Purpose:** Compares two clans objects and returns an ordering result.

```csharp
// Obtain an instance of EncyclopediaListClanComparer from the subsystem API first
EncyclopediaListClanComparer encyclopediaListClanComparer = ...;
var result = encyclopediaListClanComparer.CompareClans(x, y, func<Clan, clan, 0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
EncyclopediaListClanComparer instance = ...;
```

## See Also

- [Area Index](../)