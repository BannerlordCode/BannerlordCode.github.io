<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RewardGoldOnAssistEffect`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RewardGoldOnAssistEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RewardGoldOnAssistEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/RewardGoldOnAssistEffect.cs`

## Overview

`RewardGoldOnAssistEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetRewardedGoldOnAssist
`public override int GetRewardedGoldOnAssist()`

**Purpose:** Gets the current value of `rewarded gold on assist`.

## Usage Example

```csharp
var value = new RewardGoldOnAssistEffect();
value.GetRewardedGoldOnAssist();
```

## See Also

- [Complete Class Catalog](../catalog)