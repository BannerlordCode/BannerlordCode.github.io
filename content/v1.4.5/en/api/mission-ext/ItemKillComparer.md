---
title: "ItemKillComparer"
description: "Auto-generated class reference for ItemKillComparer."
---
# ItemKillComparer

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ItemKillComparer : ItemComparerBase`
**Base:** `ItemComparerBase`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard/MissionScoreboardPlayerSortControllerVM.cs`

## Overview

`ItemKillComparer` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(MissionScoreboardPlayerVM x, MissionScoreboardPlayerVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ItemKillComparer from the subsystem API first
ItemKillComparer itemKillComparer = ...;
var result = itemKillComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemKillComparer itemKillComparer = ...;
itemKillComparer.Compare(x, y);
```

## See Also

- [Area Index](../)