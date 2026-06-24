<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RewardGoldOnDeathEffect`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RewardGoldOnDeathEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RewardGoldOnDeathEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/RewardGoldOnDeathEffect.cs`

## Overview

`RewardGoldOnDeathEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetIsTeamRewardedOnDeath
`public override bool GetIsTeamRewardedOnDeath()`

**Purpose:** Gets the current value of `is team rewarded on death`.

### CalculateRewardedGoldOnDeath
`public override void CalculateRewardedGoldOnDeath(Agent agent, List<(MissionPeer, int)> teamMembers)`

**Purpose:** Handles logic related to `calculate rewarded gold on death`.

## Usage Example

```csharp
var value = new RewardGoldOnDeathEffect();
value.GetIsTeamRewardedOnDeath();
```

## See Also

- [Complete Class Catalog](../catalog)