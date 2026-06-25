---
title: "ItemNameComparer"
description: "Auto-generated class reference for ItemNameComparer."
---
# ItemNameComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemNameComparer : ItemComparerBase`
**Base:** `ItemComparerBase`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard/TournamentLeaderboardSortControllerVM.cs`

## Overview

`ItemNameComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(TournamentLeaderboardEntryItemVM x, TournamentLeaderboardEntryItemVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ItemNameComparer from the subsystem API first
ItemNameComparer itemNameComparer = ...;
var result = itemNameComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemNameComparer itemNameComparer = ...;
itemNameComparer.Compare(x, y);
```

## See Also

- [Area Index](../)