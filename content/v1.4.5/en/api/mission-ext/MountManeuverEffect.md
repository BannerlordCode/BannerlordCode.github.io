---
title: "MountManeuverEffect"
description: "Auto-generated class reference for MountManeuverEffect."
---
# MountManeuverEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MountManeuverEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/MountManeuverEffect.cs`

## Overview

`MountManeuverEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnUpdate
`public override void OnUpdate(Agent agent, bool newState)`

**Purpose:** Invoked when the update event is raised.

```csharp
// Obtain an instance of MountManeuverEffect from the subsystem API first
MountManeuverEffect mountManeuverEffect = ...;
mountManeuverEffect.OnUpdate(agent, false);
```

### GetMountManeuver
`public override float GetMountManeuver()`

**Purpose:** Reads and returns the mount maneuver value held by the this instance.

```csharp
// Obtain an instance of MountManeuverEffect from the subsystem API first
MountManeuverEffect mountManeuverEffect = ...;
var result = mountManeuverEffect.GetMountManeuver();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MountManeuverEffect mountManeuverEffect = ...;
mountManeuverEffect.OnUpdate(agent, false);
```

## See Also

- [Area Index](../)