---
title: "MountSpeedEffect"
description: "Auto-generated class reference for MountSpeedEffect."
---
# MountSpeedEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MountSpeedEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/MountSpeedEffect.cs`

## Overview

`MountSpeedEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnUpdate
`public override void OnUpdate(Agent agent, bool newState)`

**Purpose:** **Purpose:** Invoked when the update event is raised.

```csharp
// Obtain an instance of MountSpeedEffect from the subsystem API first
MountSpeedEffect mountSpeedEffect = ...;
mountSpeedEffect.OnUpdate(agent, false);
```

### GetMountSpeed
`public override float GetMountSpeed()`

**Purpose:** **Purpose:** Reads and returns the mount speed value held by the this instance.

```csharp
// Obtain an instance of MountSpeedEffect from the subsystem API first
MountSpeedEffect mountSpeedEffect = ...;
var result = mountSpeedEffect.GetMountSpeed();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MountSpeedEffect mountSpeedEffect = ...;
mountSpeedEffect.OnUpdate(agent, false);
```

## See Also

- [Area Index](../)