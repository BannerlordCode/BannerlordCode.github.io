---
title: "ArmorEffect"
description: "Auto-generated class reference for ArmorEffect."
---
# ArmorEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArmorEffect : MPOnSpawnPerkEffect`
**Base:** `MPOnSpawnPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/ArmorEffect.cs`

## Overview

`ArmorEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetDrivenPropertyBonusOnSpawn
`public override float GetDrivenPropertyBonusOnSpawn(bool isPlayer, DrivenProperty drivenProperty, float baseValue)`

**Purpose:** Reads and returns the `driven property bonus on spawn` value held by the current object.

```csharp
// Obtain an instance of ArmorEffect from the subsystem API first
ArmorEffect armorEffect = ...;
var result = armorEffect.GetDrivenPropertyBonusOnSpawn(false, drivenProperty, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ArmorEffect armorEffect = ...;
armorEffect.GetDrivenPropertyBonusOnSpawn(false, drivenProperty, 0);
```

## See Also

- [Area Index](../)