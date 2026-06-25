---
title: "TauntSlotDataContainer"
description: "Auto-generated class reference for TauntSlotDataContainer."
---
# TauntSlotDataContainer

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TauntSlotDataContainer : MultiplayerLocalDataContainer<TauntSlotData>`
**Base:** `MultiplayerLocalDataContainer<TauntSlotData>`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/TauntSlotDataContainer.cs`

## Overview

`TauntSlotDataContainer` lives in `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTauntIndicesForPlayer
`public MBReadOnlyList<TauntIndexData> GetTauntIndicesForPlayer(string playerId)`

**Purpose:** Reads and returns the `taunt indices for player` value held by the current object.

```csharp
// Obtain an instance of TauntSlotDataContainer from the subsystem API first
TauntSlotDataContainer tauntSlotDataContainer = ...;
var result = tauntSlotDataContainer.GetTauntIndicesForPlayer("example");
```

### SetTauntIndicesForPlayer
`public void SetTauntIndicesForPlayer(string playerId, List<TauntIndexData> tauntIndices)`

**Purpose:** Assigns a new value to `taunt indices for player` and updates the object's internal state.

```csharp
// Obtain an instance of TauntSlotDataContainer from the subsystem API first
TauntSlotDataContainer tauntSlotDataContainer = ...;
tauntSlotDataContainer.SetTauntIndicesForPlayer("example", tauntIndices);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TauntSlotDataContainer tauntSlotDataContainer = ...;
tauntSlotDataContainer.GetTauntIndicesForPlayer("example");
```

## See Also

- [Area Index](../)