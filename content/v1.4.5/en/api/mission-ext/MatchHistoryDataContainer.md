---
title: "MatchHistoryDataContainer"
description: "Auto-generated class reference for MatchHistoryDataContainer."
---
# MatchHistoryDataContainer

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MatchHistoryDataContainer : MultiplayerLocalDataContainer<MatchHistoryData>`
**Base:** `MultiplayerLocalDataContainer<MatchHistoryData>`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData/MatchHistoryDataContainer.cs`

## Overview

`MatchHistoryDataContainer` lives in `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### TryGetHistoryData
`public bool TryGetHistoryData(string matchId, out MatchHistoryData historyData)`

**Purpose:** Attempts to retrieve `get history data`, usually returning success through an out parameter.

```csharp
// Obtain an instance of MatchHistoryDataContainer from the subsystem API first
MatchHistoryDataContainer matchHistoryDataContainer = ...;
var result = matchHistoryDataContainer.TryGetHistoryData("example", historyData);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MatchHistoryDataContainer matchHistoryDataContainer = ...;
matchHistoryDataContainer.TryGetHistoryData("example", historyData);
```

## See Also

- [Area Index](../)