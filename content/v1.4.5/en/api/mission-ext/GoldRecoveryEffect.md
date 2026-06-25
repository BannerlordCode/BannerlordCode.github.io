---
title: "GoldRecoveryEffect"
description: "Auto-generated class reference for GoldRecoveryEffect."
---
# GoldRecoveryEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GoldRecoveryEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/GoldRecoveryEffect.cs`

## Overview

`GoldRecoveryEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnTick
`public override void OnTick(Agent agent, int tickCount)`

**Purpose:** Invoked when the `tick` event is raised.

```csharp
// Obtain an instance of GoldRecoveryEffect from the subsystem API first
GoldRecoveryEffect goldRecoveryEffect = ...;
goldRecoveryEffect.OnTick(agent, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GoldRecoveryEffect goldRecoveryEffect = ...;
goldRecoveryEffect.OnTick(agent, 0);
```

## See Also

- [Area Index](../)