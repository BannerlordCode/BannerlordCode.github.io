<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TauntSlotDataContainer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TauntSlotDataContainer

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TauntSlotDataContainer : MultiplayerLocalDataContainer<TauntSlotData>`
**Base:** `MultiplayerLocalDataContainer<TauntSlotData>`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData/TauntSlotDataContainer.cs`

## Overview

`TauntSlotDataContainer` lives in `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTauntIndicesForPlayer
`public MBReadOnlyList<TauntIndexData> GetTauntIndicesForPlayer(string playerId)`

**Purpose:** Gets the current value of `taunt indices for player`.

### SetTauntIndicesForPlayer
`public void SetTauntIndicesForPlayer(string playerId, List<TauntIndexData> tauntIndices)`

**Purpose:** Sets the value or state of `taunt indices for player`.

## Usage Example

```csharp
var value = new TauntSlotDataContainer();
value.GetTauntIndicesForPlayer("example");
```

## See Also

- [Complete Class Catalog](../catalog)