---
title: "MissionScoreboardSide"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionScoreboardSide`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionScoreboardSide

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardSide`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MissionScoreboardComponent.cs`

## Overview

`MissionScoreboardSide` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentPlayerCount` | `public int CurrentPlayerCount { get; }` |
| `Players` | `public IEnumerable<MissionPeer> Players { get; }` |

## Key Methods

### AddPlayer
`public void AddPlayer(MissionPeer peer)`

**Purpose:** Adds `player` to the current collection or state.

### RemovePlayer
`public void RemovePlayer(MissionPeer peer)`

**Purpose:** Removes `player` from the current collection or state.

### GetValuesOf
`public string GetValuesOf(MissionPeer peer)`

**Purpose:** Gets the current value of `values of`.

### GetHeaderNames
`public string GetHeaderNames()`

**Purpose:** Gets the current value of `header names`.

### GetHeaderIds
`public string GetHeaderIds()`

**Purpose:** Gets the current value of `header ids`.

### GetScore
`public int GetScore(MissionPeer peer)`

**Purpose:** Gets the current value of `score`.

### UpdateHeader
`public void UpdateHeader(MissionScoreboardComponent.ScoreboardHeader headers)`

**Purpose:** Updates the state or data of `header`.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### CalculateAndGetMVPScoreWithPeer
`public KeyValuePair<MissionPeer, int> CalculateAndGetMVPScoreWithPeer()`

**Purpose:** Handles logic related to `calculate and get m v p score with peer`.

## Usage Example

```csharp
var value = new MissionScoreboardSide();
value.AddPlayer(peer);
```

## See Also

- [Complete Class Catalog](../catalog)