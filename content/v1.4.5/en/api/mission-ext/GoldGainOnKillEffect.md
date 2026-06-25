---
title: "GoldGainOnKillEffect"
description: "Auto-generated class reference for GoldGainOnKillEffect."
---
# GoldGainOnKillEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GoldGainOnKillEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/GoldGainOnKillEffect.cs`

## Overview

`GoldGainOnKillEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetGoldOnKill
`public override int GetGoldOnKill(float attackerValue, float victimValue)`

**Purpose:** Reads and returns the gold on kill value held by the this instance.

```csharp
// Obtain an instance of GoldGainOnKillEffect from the subsystem API first
GoldGainOnKillEffect goldGainOnKillEffect = ...;
var result = goldGainOnKillEffect.GetGoldOnKill(0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GoldGainOnKillEffect goldGainOnKillEffect = ...;
goldGainOnKillEffect.GetGoldOnKill(0, 0);
```

## See Also

- [Area Index](../)