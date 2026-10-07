---
title: "CustomBattleMissionSpawnHandler"
description: "Auto-generated class reference for CustomBattleMissionSpawnHandler."
---
# CustomBattleMissionSpawnHandler

**Namespace:** TaleWorlds.MountAndBlade.MissionSpawnHandlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleMissionSpawnHandler : CustomMissionSpawnHandler`
**Base:** `CustomMissionSpawnHandler`
**File:** `TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomBattleMissionSpawnHandler.cs`

## Overview

`CustomBattleMissionSpawnHandler` decides how many agents a field battle starts with. It is a `CustomMissionSpawnHandler` subclass (`CustomBattleMissionSpawnHandler.cs:7`) whose base already holds the `MissionAgentSpawnLogic` it will drive, fetched once in the base constructor (`CustomMissionSpawnHandler.cs:12`).

The constructor takes the two sides as concrete `CustomBattleCombatant` objects (`CustomBattleMissionSpawnHandler.cs:10`) and stores them in two fields (`CustomBattleMissionSpawnHandler.cs:30`). All the work is in the single `AfterStart` override (`CustomBattleMissionSpawnHandler.cs:17`): it reads `NumberOfHealthyMembers` from each combatant, uses those same numbers as both the total and the initial spawn count, turns horse spawning on for both sides, and hands everything to `MissionAgentSpawnLogic.InitWithSinglePhase(...)` with `spawnDefenders: true, spawnAttackers: true` (`CustomBattleMissionSpawnHandler.cs:26`).

That last pair of `true`s is the whole difference from its siege sibling. `InitWithSinglePhase`'s signature is `(defenderTotalSpawn, attackerTotalSpawn, defenderInitialSpawn, attackerInitialSpawn, spawnDefenders, spawnAttackers, spawnSettings)` (`MissionAgentSpawnLogic.cs:240`), and a field battle asks for both sides to spawn immediately.

## Mental Model

The spawn counts are read at `AfterStart`, not continuously. Both `defenderInitialSpawn` and `attackerInitialSpawn` are assigned from the same `NumberOfHealthyMembers` values used for the totals (`CustomBattleMissionSpawnHandler.cs:21`), so initial and total spawn are always equal — there is no staging here. If a combatant's healthy count changes after the mission starts, this handler does not notice; the values were captured once.

Horse spawning is unconditional. Both `SetSpawnHorses` calls pass `true` (`CustomBattleMissionSpawnHandler.cs:23`), unlike the siege handler, which takes the flag as a constructor argument. There is no way to start a field battle without mounts through this class.

`CreateCustomBattleWaveSpawnSettings()` (`CustomBattleMissionSpawnHandler.cs:25`) comes from the base as a `protected static` (`CustomMissionSpawnHandler.cs:16`) — one shared settings object for every custom battle, not per-handler state.

The `_missionAgentSpawnLogic` field comes from `GetMissionBehavior<MissionAgentSpawnLogic>()` (`CustomMissionSpawnHandler.cs:12`), which returns `null` for a mission without that behaviour and is never null-checked here. Constructing this handler into a mission that lacks the spawn logic therefore fails at `AfterStart`, not at construction.

Note also that `AfterStart` is the override point, so the base's own `AfterStart` is not called by this method body — if you subclass and add setup, call `base.AfterStart()` explicitly or the spawn initialisation never runs.

## How to use

**Getting one.** Construct it with the two combatants and add it to a custom battle mission's behaviour list before the mission starts. The mission must already contain a `MissionAgentSpawnLogic`.

**Typical use** — a field battle that starts half the enemy force:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.MissionSpawnHandlers;

public class MyBattleSpawnHandler : CustomBattleMissionSpawnHandler
{
    private readonly int _defenderMultiplier;
    private readonly int _attackerMultiplier;

    public MyBattleSpawnHandler(CustomBattleCombatant defender, CustomBattleCombatant attacker,
        int defenderMultiplier, int attackerMultiplier)
        : base(defender, attacker)
    {
        _defenderMultiplier = defenderMultiplier;
        _attackerMultiplier = attackerMultiplier;
    }

    public override void AfterStart()
    {
        // Runs the spawn initialisation: reads healthy counts and calls
        // InitWithSinglePhase with spawnDefenders/spawnAttackers = true.
        base.AfterStart();

        // Adjust afterwards if you need to; InitWithSinglePhase already ran.
        Mission.GetMissionBehavior<MissionAgentSpawnLogic>()
            .SetSpawnHorses(BattleSideEnum.Attacker, false);
    }
}
```

`BattleSideEnum.Defender`/`Attacker`, `SetSpawnHorses(BattleSideEnum, bool)` and `InitWithSinglePhase` are the real members — the last two are what this class calls at `CustomBattleMissionSpawnHandler.cs:23` and `CustomBattleMissionSpawnHandler.cs:26`.

**Most common mistake:** overriding `AfterStart` without calling the base.

```csharp
public override void AfterStart()
{
    Mission.GetMissionBehavior<MissionAgentSpawnLogic>()
        .SetSpawnHorses(BattleSideEnum.Defender, false);
    // base.AfterStart() missing
}
```

The spawn initialisation lives entirely in the base override, so skipping it leaves `InitWithSinglePhase` uncalled: no spawn phases are registered for either side, and the battle opens with an empty battlefield — no error, no warning, just nobody present. Worse, the handler looks like it did something, because your own `SetSpawnHorses` call did succeed. Call `base.AfterStart()` first, then adjust.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of CustomBattleMissionSpawnHandler from the subsystem API first
CustomBattleMissionSpawnHandler customBattleMissionSpawnHandler = ...;
customBattleMissionSpawnHandler.AfterStart();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<CustomBattleMissionSpawnHandler>();
```

## See Also

- [Area Index](../)
- [CustomMissionSpawnHandler — the base that owns `_missionAgentSpawnLogic`](../CustomMissionSpawnHandler)
- [CustomSiegeMissionSpawnHandler — the siege variant, which passes `false, false`](../CustomSiegeMissionSpawnHandler)
- [MissionAgentSpawnLogic — the behaviour whose spawn phases this initialises](../MissionAgentSpawnLogic)
- [CustomBattleCombatant — the concrete combatant type both sides must be](../CustomBattleCombatant)
- [中文页面](../../../../zh/api/mission-ext/CustomBattleMissionSpawnHandler)