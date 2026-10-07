---
title: "CustomSiegeMissionSpawnHandler"
description: "Auto-generated class reference for CustomSiegeMissionSpawnHandler."
---
# CustomSiegeMissionSpawnHandler

**Namespace:** TaleWorlds.MountAndBlade.MissionSpawnHandlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomSiegeMissionSpawnHandler : CustomMissionSpawnHandler`
**Base:** `CustomMissionSpawnHandler`
**File:** `TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomSiegeMissionSpawnHandler.cs`

## Overview

`CustomSiegeMissionSpawnHandler` is the `MissionLogic` that primes agent spawning when a *siege* mission
starts. It extends `CustomMissionSpawnHandler` and does all of its work in `AfterStart`
(`CustomSiegeMissionSpawnHandler.cs:21`) — it has no per-tick logic at all.

The constructor takes the defender and attacker as `IBattleCombatant` and immediately **casts both to
`CustomBattleCombatant`** (`CustomSiegeMissionSpawnHandler.cs:14`). It stores them in a two-element array in
the fixed order `[defender, attacker]` and keeps the `spawnWithHorses` flag.

`AfterStart` then reads `NumberOfHealthyMembers` from each combatant **once**
(`CustomSiegeMissionSpawnHandler.cs:23`), sets the horses flag for both sides
(`CustomSiegeMissionSpawnHandler.cs:27`), builds the shared battle-wave spawn settings via the base class's
`CreateCustomBattleWaveSpawnSettings()`, and calls `InitWithSinglePhase`.

The instance the game creates is in `BannerlordMissions`, which builds it with the player party and the
enemy party in whichever order matches the player's side (`BannerlordMissions.cs:191`).

## Mental Model

Read it as a one-shot initialiser whose real business is the pair of `false` flags it passes. The boundaries:

- **Both combatants are down-cast without a check.** The constructor's parameters are declared
  `IBattleCombatant` but assigned straight into a `CustomBattleCombatant[]`
  (`CustomSiegeMissionSpawnHandler.cs:12`). An `IBattleCombatant` implementation that is not a
  `CustomBattleCombatant` throws `InvalidCastException` at construction, not at `AfterStart`.
- **Total spawn equals initial spawn for both sides.** `InitWithSinglePhase`'s signature is
  `(defenderTotalSpawn, attackerTotalSpawn, defenderInitialSpawn, attackerInitialSpawn, …)`
  (`MissionAgentSpawnLogic.cs:240`), and this handler passes the same two `NumberOfHealthyMembers` values
  for both pairs (`CustomSiegeMissionSpawnHandler.cs:30`). The separate `num`/`num2` locals
  (`CustomSiegeMissionSpawnHandler.cs:25`) are just copies. The effect is that the siege reserves no
  reinforcements: the whole roster sits in the initial phase.
- **Both spawn flags are `false`** (`CustomSiegeMissionSpawnHandler.cs:30`), which reach
  `Init(spawnDefenders, spawnAttackers, …)` inside `InitWithSinglePhase`
  (`MissionAgentSpawnLogic.cs:244`). In a siege the deployment phase is driven by the siege deployment
  controller, so this handler only *registers* the counts; it does not start men walking onto the field.
- **Counts are sampled once.** `NumberOfHealthyMembers` is read in `AfterStart` and never again, so a
  combatant that changes size after the handler runs is not picked up.
- The horses flag is applied to both sides from one value; there is no per-side override.

## How to use

**Getting one.** Do not construct it — `BannerlordMissions` adds it during siege mission initialization
(`BannerlordMissions.cs:191`). To change siege spawn behaviour, either construct your own
`CustomMissionSpawnHandler` subclass in a mission initializer, or override `AfterStart` in a subclass and
register that instead.

**Typical use** — a siege variant that holds men back for a second phase:

```csharp
public class ReservingSiegeSpawnHandler : CustomMissionSpawnHandler
{
    public override void AfterStart()
    {
        // InitWithSinglePhase(defenderTotal, attackerTotal, defenderInitial, attackerInitial,
        // spawnDefenders, spawnAttackers, settings) - MissionAgentSpawnLogic.cs:240.
        // The stock siege handler passes total == initial and false/false
        // (CustomSiegeMissionSpawnHandler.cs:30); holding back a reserve means
        // passing a smaller initial count while keeping the total.
        _missionAgentSpawnLogic.SetSpawnHorses(BattleSideEnum.Defender, false);
        _missionAgentSpawnLogic.SetSpawnHorses(BattleSideEnum.Attacker, false);

        MissionSpawnSettings settings = CreateCustomBattleWaveSpawnSettings();
        _missionAgentSpawnLogic.InitWithSinglePhase(400, 400, 200, 200, false, false, in settings);
    }
}
```

**The mistake that bites.** Assuming that because the handler ran, men are now spawning. The final two
arguments are `false` in the stock siege handler
(`CustomSiegeMissionSpawnHandler.cs:30`), so the spawn logic is initialised with the counts but
*automatic spawning is switched off for both sides*. A mod that swaps in a handler like this and expects
reinforcements to walk in on their own waits forever; in a siege the deployment controller has to release
each phase explicitly.



## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of CustomSiegeMissionSpawnHandler from the subsystem API first
CustomSiegeMissionSpawnHandler customSiegeMissionSpawnHandler = ...;
customSiegeMissionSpawnHandler.AfterStart();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<CustomSiegeMissionSpawnHandler>();
```

## See Also

- [Area Index](../)
- [ClearHandInverseKinematicsOnStopUsageComponent](../ClearHandInverseKinematicsOnStopUsageComponent)
- [BattleSpawnModel](../BattleSpawnModel)
- [BattleEndLogic](../BattleEndLogic)
- [中文页面](../../../../zh/api/mission-ext/CustomSiegeMissionSpawnHandler)