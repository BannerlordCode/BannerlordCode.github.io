---
title: "AmmoSupplyLogic"
description: "Auto-generated class reference for AmmoSupplyLogic."
---
# AmmoSupplyLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AmmoSupplyLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/Logic/AmmoSupplyLogic.cs`

## Overview

The vanilla ammo-resupply handler: a `MissionLogic` that tops up ranged ammunition for AI agents on selected battle sides, every three seconds. It is constructed with the list of `BattleSideEnum` values it supplies (`AmmoSupplyLogic.cs:11`), and exposes one predicate (`AmmoSupplyLogic.cs:18`) plus the mission tick (`AmmoSupplyLogic.cs:34`). The whole job is scanning equipment slots between `EquipmentIndex.WeaponItemBeginSlot` and `EquipmentIndex.NumAllWeaponSlots` (`AmmoSupplyLogic.cs:22`, `AmmoSupplyLogic.cs:45`) and writing a new round count where the current one is short.

## Mental Model

Read the refill arithmetic carefully, because it is not "fill to full". It reads `ModifiedMaxAmount` (`MissionWeapon.cs:169`) and then sets the target to `modifiedMaxAmount - 1`, with a guard that only applies the minus one when the maximum is above 1 (`AmmoSupplyLogic.cs:51`-`AmmoSupplyLogic.cs:55`). So a magazine of 30 is topped to 29 and a single-shot weapon is topped to 1. The eligibility test is about the *item*, not the remaining rounds: `IsAnyAmmo()` walks the weapon's component list and returns true if any component is flagged as ammo (`MissionWeapon.cs:500`), called at `AmmoSupplyLogic.cs:47`, so an empty quiver on an ammo weapon is still refilled. The timer is a `BasicMissionTimer` created in the constructor (`AmmoSupplyLogic.cs:14`) and reset only when the branch is taken (`AmmoSupplyLogic.cs:38`).

## How to use

**Getting one.** Construct it with the sides you want supplied and add it to the mission's logic list; the engine's battle missions do this. To ask whether a given agent would be supplied, call the predicate — it is the same two conditions the tick applies.

**Typical use.**

```csharp
// Constructor takes the sides to supply (AmmoSupplyLogic.cs:11).
AmmoSupplyLogic supply = new AmmoSupplyLogic(new List<BattleSideEnum> { BattleSideEnum.Defender });

// The eligibility predicate (AmmoSupplyLogic.cs:18) checks AI control + side membership.
if (supply.IsAgentEligibleForAmmoSupply(agent))
{
    // The tick tops the slot to ModifiedMaxAmount - 1 (AmmoSupplyLogic.cs:51-55),
    // not to ModifiedMaxAmount.
    agent.SetWeaponAmountInSlot(EquipmentIndex.WeaponItemBeginSlot, target, false); // Agent.cs:2306
}
```

**Watch out.** `private const float CheckTimePeriod = 3f;` (`AmmoSupplyLogic.cs:69`) is dead code — the actual cadence is the literal `3f` compared against `ElapsedTime` at `AmmoSupplyLogic.cs:36`. Editing the constant changes nothing and the compiler will not say so, so a mod that "slows down resupply" by changing `CheckTimePeriod` ships a behaviour that never fires. The second trap is scope: the constructor takes *battle sides* (`AmmoSupplyLogic.cs:11`) and the tick selects teams by side (`AmmoSupplyLogic.cs:41`), but then re-tests `agent.IsAIControlled` per agent (`AmmoSupplyLogic.cs:47`). Supply is configured per side and delivered per AI agent, so a player on a supplied side is never topped up.

## Key Methods

### IsAgentEligibleForAmmoSupply
`public bool IsAgentEligibleForAmmoSupply(Agent agent)`

**Purpose:** Determines whether the this instance is in the agent eligible for ammo supply state or condition.

```csharp
// Obtain an instance of AmmoSupplyLogic from the subsystem API first
AmmoSupplyLogic ammoSupplyLogic = ...;
var result = ammoSupplyLogic.IsAgentEligibleForAmmoSupply(agent);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of AmmoSupplyLogic from the subsystem API first
AmmoSupplyLogic ammoSupplyLogic = ...;
ammoSupplyLogic.OnMissionTick(0);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<AmmoSupplyLogic>();
```

## See Also

- [Area Index](../)
- [MissionLogic](../MissionLogic)
- [Agent](../../mission/Agent)