---
title: "MatchHistoryDataContainer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MatchHistoryDataContainer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MatchHistoryDataContainer

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MatchHistoryDataContainer : MultiplayerLocalDataContainer<MatchHistoryData>`
**Base:** `MultiplayerLocalDataContainer<MatchHistoryData>`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/MatchHistoryDataContainer.cs`

## Overview

`MatchHistoryDataContainer` lives in `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### TryGetHistoryData
`public bool TryGetHistoryData(string matchId, out MatchHistoryData historyData)`

**Purpose:** Attempts to get `get history data`, usually returning the result in an out parameter.

## Usage Example

```csharp
var value = new MatchHistoryDataContainer();
value.TryGetHistoryData("example", historyData);
```

## See Also

- [Complete Class Catalog](../catalog)