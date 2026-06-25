---
title: "MatchmakingQueueGameTypeStats"
description: "Auto-generated class reference for MatchmakingQueueGameTypeStats."
---
# MatchmakingQueueGameTypeStats

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MatchmakingQueueGameTypeStats`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/MatchmakingQueueGameTypeStats.cs`

## Overview

`MatchmakingQueueGameTypeStats` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameTypes` | `public string GameTypes { get; set; }` |
| `Count` | `public int Count { get; set; }` |
| `TotalWaitTime` | `public int TotalWaitTime { get; set; }` |

## Key Methods

### HasGameType
`public bool HasGameType(string gameType)`

**Purpose:** Determines whether the current object already holds `game type`.

```csharp
// Obtain an instance of MatchmakingQueueGameTypeStats from the subsystem API first
MatchmakingQueueGameTypeStats matchmakingQueueGameTypeStats = ...;
var result = matchmakingQueueGameTypeStats.HasGameType("example");
```

### EqualWith
`public bool EqualWith(string gameTypes)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MatchmakingQueueGameTypeStats from the subsystem API first
MatchmakingQueueGameTypeStats matchmakingQueueGameTypeStats = ...;
var result = matchmakingQueueGameTypeStats.EqualWith("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MatchmakingQueueGameTypeStats matchmakingQueueGameTypeStats = ...;
matchmakingQueueGameTypeStats.HasGameType("example");
```

## See Also

- [Area Index](../)