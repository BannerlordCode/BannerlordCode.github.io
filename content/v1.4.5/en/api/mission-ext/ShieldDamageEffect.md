---
title: "ShieldDamageEffect"
description: "Auto-generated class reference for ShieldDamageEffect."
---
# ShieldDamageEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ShieldDamageEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/ShieldDamageEffect.cs`

## Overview

`ShieldDamageEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetShieldDamage
`public override float GetShieldDamage(bool isCorrectSideBlock)`

**Purpose:** **Purpose:** Reads and returns the shield damage value held by the this instance.

```csharp
// Obtain an instance of ShieldDamageEffect from the subsystem API first
ShieldDamageEffect shieldDamageEffect = ...;
var result = shieldDamageEffect.GetShieldDamage(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ShieldDamageEffect shieldDamageEffect = ...;
shieldDamageEffect.GetShieldDamage(false);
```

## See Also

- [Area Index](../)