---
title: "RewardGoldOnDeathEffect"
description: "Auto-generated class reference for RewardGoldOnDeathEffect."
---
# RewardGoldOnDeathEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RewardGoldOnDeathEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/RewardGoldOnDeathEffect.cs`

## Overview

`RewardGoldOnDeathEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetIsTeamRewardedOnDeath
`public override bool GetIsTeamRewardedOnDeath()`

**Purpose:** Reads and returns the is team rewarded on death value held by the this instance.

```csharp
// Obtain an instance of RewardGoldOnDeathEffect from the subsystem API first
RewardGoldOnDeathEffect rewardGoldOnDeathEffect = ...;
var result = rewardGoldOnDeathEffect.GetIsTeamRewardedOnDeath();
```

### CalculateRewardedGoldOnDeath
`public override void CalculateRewardedGoldOnDeath(Agent agent, List<(MissionPeer, int)> teamMembers)`

**Purpose:** Calculates the current value or result of rewarded gold on death.

```csharp
// Obtain an instance of RewardGoldOnDeathEffect from the subsystem API first
RewardGoldOnDeathEffect rewardGoldOnDeathEffect = ...;
rewardGoldOnDeathEffect.CalculateRewardedGoldOnDeath(agent, list<(MissionPeer, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RewardGoldOnDeathEffect rewardGoldOnDeathEffect = ...;
rewardGoldOnDeathEffect.GetIsTeamRewardedOnDeath();
```

## See Also

- [Area Index](../)