---
title: "EncumbranceEffect"
description: "Auto-generated class reference for EncumbranceEffect."
---
# EncumbranceEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncumbranceEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/EncumbranceEffect.cs`

## Overview

`EncumbranceEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnUpdate
`public override void OnUpdate(Agent agent, bool newState)`

**Purpose:** **Purpose:** Invoked when the update event is raised.

```csharp
// Obtain an instance of EncumbranceEffect from the subsystem API first
EncumbranceEffect encumbranceEffect = ...;
encumbranceEffect.OnUpdate(agent, false);
```

### GetEncumbrance
`public override float GetEncumbrance(bool isOnBody)`

**Purpose:** **Purpose:** Reads and returns the encumbrance value held by the this instance.

```csharp
// Obtain an instance of EncumbranceEffect from the subsystem API first
EncumbranceEffect encumbranceEffect = ...;
var result = encumbranceEffect.GetEncumbrance(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncumbranceEffect encumbranceEffect = ...;
encumbranceEffect.OnUpdate(agent, false);
```

## See Also

- [Area Index](../)