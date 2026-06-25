---
title: "RewardGoldOnAssistEffect"
description: "Auto-generated class reference for RewardGoldOnAssistEffect."
---
# RewardGoldOnAssistEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RewardGoldOnAssistEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/RewardGoldOnAssistEffect.cs`

## Overview

`RewardGoldOnAssistEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetRewardedGoldOnAssist
`public override int GetRewardedGoldOnAssist()`

**Purpose:** Reads and returns the `rewarded gold on assist` value held by the current object.

```csharp
// Obtain an instance of RewardGoldOnAssistEffect from the subsystem API first
RewardGoldOnAssistEffect rewardGoldOnAssistEffect = ...;
var result = rewardGoldOnAssistEffect.GetRewardedGoldOnAssist();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RewardGoldOnAssistEffect rewardGoldOnAssistEffect = ...;
rewardGoldOnAssistEffect.GetRewardedGoldOnAssist();
```

## See Also

- [Area Index](../)