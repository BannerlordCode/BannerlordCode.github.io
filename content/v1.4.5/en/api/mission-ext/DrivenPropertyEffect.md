---
title: "DrivenPropertyEffect"
description: "Auto-generated class reference for DrivenPropertyEffect."
---
# DrivenPropertyEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DrivenPropertyEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/DrivenPropertyEffect.cs`

## Overview

`DrivenPropertyEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnUpdate
`public override void OnUpdate(Agent agent, bool newState)`

**Purpose:** Invoked when the update event is raised.

```csharp
// Obtain an instance of DrivenPropertyEffect from the subsystem API first
DrivenPropertyEffect drivenPropertyEffect = ...;
drivenPropertyEffect.OnUpdate(agent, false);
```

### GetDrivenPropertyBonus
`public override float GetDrivenPropertyBonus(DrivenProperty drivenProperty, float baseValue)`

**Purpose:** Reads and returns the driven property bonus value held by the this instance.

```csharp
// Obtain an instance of DrivenPropertyEffect from the subsystem API first
DrivenPropertyEffect drivenPropertyEffect = ...;
var result = drivenPropertyEffect.GetDrivenPropertyBonus(drivenProperty, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DrivenPropertyEffect drivenPropertyEffect = ...;
drivenPropertyEffect.OnUpdate(agent, false);
```

## See Also

- [Area Index](../)