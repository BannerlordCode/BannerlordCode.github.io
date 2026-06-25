---
title: "DuelArenaProperties"
description: "Auto-generated class reference for DuelArenaProperties."
---
# DuelArenaProperties

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct DuelArenaProperties`
**Base:** none
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerDuelVM.cs`

## Overview

`DuelArenaProperties` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### DuelArenaProperties
`public struct DuelArenaProperties(GameEntity flagEntity, int index, TroopType arenaTroopType)`

**Purpose:** **Purpose:** Executes the DuelArenaProperties logic.

```csharp
// Obtain an instance of DuelArenaProperties from the subsystem API first
DuelArenaProperties duelArenaProperties = ...;
var result = duelArenaProperties.DuelArenaProperties(flagEntity, 0, arenaTroopType);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DuelArenaProperties duelArenaProperties = ...;
duelArenaProperties.DuelArenaProperties(flagEntity, 0, arenaTroopType);
```

## See Also

- [Area Index](../)