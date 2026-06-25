---
title: "MissionScoreboardSide"
description: "Auto-generated class reference for MissionScoreboardSide."
---
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

**Purpose:** **Purpose:** Adds player to the current collection or state.

```csharp
// Obtain an instance of MissionScoreboardSide from the subsystem API first
MissionScoreboardSide missionScoreboardSide = ...;
missionScoreboardSide.AddPlayer(peer);
```

### RemovePlayer
`public void RemovePlayer(MissionPeer peer)`

**Purpose:** **Purpose:** Removes player from the current collection or state.

```csharp
// Obtain an instance of MissionScoreboardSide from the subsystem API first
MissionScoreboardSide missionScoreboardSide = ...;
missionScoreboardSide.RemovePlayer(peer);
```

### GetValuesOf
`public string GetValuesOf(MissionPeer peer)`

**Purpose:** **Purpose:** Reads and returns the values of value held by the this instance.

```csharp
// Obtain an instance of MissionScoreboardSide from the subsystem API first
MissionScoreboardSide missionScoreboardSide = ...;
var result = missionScoreboardSide.GetValuesOf(peer);
```

### GetHeaderNames
`public string GetHeaderNames()`

**Purpose:** **Purpose:** Reads and returns the header names value held by the this instance.

```csharp
// Obtain an instance of MissionScoreboardSide from the subsystem API first
MissionScoreboardSide missionScoreboardSide = ...;
var result = missionScoreboardSide.GetHeaderNames();
```

### GetHeaderIds
`public string GetHeaderIds()`

**Purpose:** **Purpose:** Reads and returns the header ids value held by the this instance.

```csharp
// Obtain an instance of MissionScoreboardSide from the subsystem API first
MissionScoreboardSide missionScoreboardSide = ...;
var result = missionScoreboardSide.GetHeaderIds();
```

### GetScore
`public int GetScore(MissionPeer peer)`

**Purpose:** **Purpose:** Reads and returns the score value held by the this instance.

```csharp
// Obtain an instance of MissionScoreboardSide from the subsystem API first
MissionScoreboardSide missionScoreboardSide = ...;
var result = missionScoreboardSide.GetScore(peer);
```

### UpdateHeader
`public void UpdateHeader(MissionScoreboardComponent.ScoreboardHeader headers)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of header.

```csharp
// Obtain an instance of MissionScoreboardSide from the subsystem API first
MissionScoreboardSide missionScoreboardSide = ...;
missionScoreboardSide.UpdateHeader(headers);
```

### Clear
`public void Clear()`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of MissionScoreboardSide from the subsystem API first
MissionScoreboardSide missionScoreboardSide = ...;
missionScoreboardSide.Clear();
```

### CalculateAndGetMVPScoreWithPeer
`public KeyValuePair<MissionPeer, int> CalculateAndGetMVPScoreWithPeer()`

**Purpose:** **Purpose:** Calculates the current value or result of and get m v p score with peer.

```csharp
// Obtain an instance of MissionScoreboardSide from the subsystem API first
MissionScoreboardSide missionScoreboardSide = ...;
var result = missionScoreboardSide.CalculateAndGetMVPScoreWithPeer();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionScoreboardSide missionScoreboardSide = ...;
missionScoreboardSide.AddPlayer(peer);
```

## See Also

- [Area Index](../)