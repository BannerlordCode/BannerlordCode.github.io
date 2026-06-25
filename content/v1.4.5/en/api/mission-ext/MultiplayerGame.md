---
title: "MultiplayerGame"
description: "Auto-generated class reference for MultiplayerGame."
---
# MultiplayerGame

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGame : GameType`
**Base:** `GameType`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerGame.cs`

## Overview

`MultiplayerGame` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ReadDefaultEquipments
`public static Dictionary<string, Equipment> ReadDefaultEquipments(string defaultEquipmentsPath)`

**Purpose:** Reads the data or state of `default equipments`.

```csharp
// Static call; no instance required
MultiplayerGame.ReadDefaultEquipments("example");
```

### OnDestroy
`public override void OnDestroy()`

**Purpose:** Invoked when the `destroy` event is raised.

```csharp
// Obtain an instance of MultiplayerGame from the subsystem API first
MultiplayerGame multiplayerGame = ...;
multiplayerGame.OnDestroy();
```

### OnStateChanged
`public override void OnStateChanged(GameState oldState)`

**Purpose:** Invoked when the `state changed` event is raised.

```csharp
// Obtain an instance of MultiplayerGame from the subsystem API first
MultiplayerGame multiplayerGame = ...;
multiplayerGame.OnStateChanged(oldState);
```

## Usage Example

```csharp
MultiplayerGame.ReadDefaultEquipments("example");
```

## See Also

- [Area Index](../)