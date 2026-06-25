---
title: "TroopCountEffect"
description: "Auto-generated class reference for TroopCountEffect."
---
# TroopCountEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TroopCountEffect : MPOnSpawnPerkEffect`
**Base:** `MPOnSpawnPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/TroopCountEffect.cs`

## Overview

`TroopCountEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetExtraTroopCount
`public override int GetExtraTroopCount()`

**Purpose:** Reads and returns the `extra troop count` value held by the current object.

```csharp
// Obtain an instance of TroopCountEffect from the subsystem API first
TroopCountEffect troopCountEffect = ...;
var result = troopCountEffect.GetExtraTroopCount();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TroopCountEffect troopCountEffect = ...;
troopCountEffect.GetExtraTroopCount();
```

## See Also

- [Area Index](../)