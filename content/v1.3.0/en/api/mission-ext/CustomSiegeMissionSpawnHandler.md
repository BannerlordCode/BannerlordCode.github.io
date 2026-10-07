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

`CustomSiegeMissionSpawnHandler` is the siege counterpart of `CustomBattleMissionSpawnHandler`, and the interesting part is what its constructor accepts versus what it stores. The parameters are typed as the interface — `IBattleCombatant defenderBattleCombatant, IBattleCombatant attackerBattleCombatant, bool spawnWithHorses` (`CustomSiegeMissionSpawnHandler.cs:10`) — but the body immediately casts both to the concrete `CustomBattleCombatant` while building a two-element array (`CustomSiegeMissionSpawnHandler.cs:14`).

Like its sibling it derives from `CustomMissionSpawnHandler` (`CustomSiegeMissionSpawnHandler.cs:7`), so `_missionAgentSpawnLogic` is already resolved by the base constructor (`CustomMissionSpawnHandler.cs:12`). Its single override, `AfterStart` (`CustomSiegeMissionSpawnHandler.cs:21`), reads `NumberOfHealthyMembers` from each stored combatant, sets horse spawning from the constructor flag, and calls `InitWithSinglePhase` with `spawnDefenders: false, spawnAttackers: false` (`CustomSiegeMissionSpawnHandler.cs:30`).

Those two `false`s are the substantive difference from the field-battle handler, which passes `true, true` (`CustomBattleMissionSpawnHandler.cs:26`). A siege registers the spawn phases but spawns nobody immediately — the sides appear through the siege deployment flow instead.

## Mental Model

The interface parameter is narrower than it looks. Because the constructor casts to `CustomBattleCombatant` (`CustomSiegeMissionSpawnHandler.cs:14`), any other implementation of `IBattleCombatant` throws `InvalidCastException` **inside the constructor** — before the mission starts, before `AfterStart`, with a stack trace pointing at this type. The declared parameter type promises flexibility the body does not deliver. If you have written a custom `IBattleCombatant`, pass a `CustomBattleCombatant`.

`spawnWithHorses` is per-mission, not per-side. It is captured once and applied identically to both sides (`CustomSiegeMissionSpawnHandler.cs:27`), so you cannot have mounted defenders and foot attackers through this handler.

The counts are captured at `AfterStart`, and initial spawn equals total spawn for both sides (`CustomSiegeMissionSpawnHandler.cs:25`) — the same pattern as the field-battle handler. What differs is that with `spawnDefenders`/`spawnAttackers` both `false`, `InitWithSinglePhase` (`MissionAgentSpawnLogic.cs:240`) only registers the phases; something else must enable spawning afterwards, which in a siege is the deployment handler.

`_battleCombatants` is indexed, not named: `AfterStart` reads `_battleCombatants[0]` for the defender and `[1]` for the attacker (`CustomSiegeMissionSpawnHandler.cs:23`). The array is built in that order by the constructor, so index 0 is always the first parameter. If you build your own array and pass it in the wrong order, the sides are silently swapped — there is no `BattleSideEnum` left to catch it.

## How to use

**Getting one.** Construct it with two `CustomBattleCombatant` instances (not merely `IBattleCombatant`) and the horse flag, and add it to a siege mission's behaviour list before start. The mission needs a `MissionAgentSpawnLogic` for the base constructor's lookup to succeed.

**Typical use** — a siege that spawns dismounted:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.MissionSpawnHandlers;

public class MySiegeSpawnHandler : CustomSiegeMissionSpawnHandler
{
    public MySiegeSpawnHandler(CustomBattleCombatant defender, CustomBattleCombatant attacker)
        // spawnWithHorses: false -> no mounts for either side.
        : base(defender, attacker, spawnWithHorses: false)
    {
    }

    public override void AfterStart()
    {
        // Registers the spawn phases with spawnDefenders/spawnAttackers = false.
        base.AfterStart();

        // A siege spawns nobody yet; enable the sides yourself if your flow
        // does not go through the deployment handler.
        MissionAgentSpawnLogic spawn = Mission.GetMissionBehavior<MissionAgentSpawnLogic>();
        spawn.SetSpawnTroops(BattleSideEnum.Defender, true, true);
        spawn.SetSpawnTroops(BattleSideEnum.Attacker, true, true);
    }
}
```

`SetSpawnTroops(BattleSideEnum, bool, bool)` and `SetSpawnHorses(BattleSideEnum, bool)` are the real members; the first is what `BattleDeploymentMissionController` uses to bring a side online during deployment.

**Most common mistake:** passing an `IBattleCombatant` that is not a `CustomBattleCombatant`.

```csharp
MyCombatant mine = new MyCombatant();          // implements IBattleCombatant
new CustomSiegeMissionSpawnHandler(mine, theirs, true);   // InvalidCastException
```

The signature accepts it, so the mistake compiles cleanly and fails at mission setup with a cast exception pointing at `CustomSiegeMissionSpawnHandler.cs:14` rather than at your combatant. Declare and pass the concrete type — as the field-battle handler does, taking `CustomBattleCombatant` parameters outright (`CustomBattleMissionSpawnHandler.cs:10`) — and the compiler will tell you at the call site instead.

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
- [CustomMissionSpawnHandler — the base that owns `_missionAgentSpawnLogic`](../CustomMissionSpawnHandler)
- [CustomBattleMissionSpawnHandler — the field-battle variant, which spawns immediately](../CustomBattleMissionSpawnHandler)
- [IBattleCombatant — the interface it declares but then casts away](../../core-extra/IBattleCombatant)
- [CustomBattleCombatant — the concrete type the constructor actually requires](../CustomBattleCombatant)
- [中文页面](../../../../zh/api/mission-ext/CustomSiegeMissionSpawnHandler)