---
title: "BattleDeploymentMissionController"
description: "Auto-generated class reference for BattleDeploymentMissionController."
---
# BattleDeploymentMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleDeploymentMissionController : DeploymentMissionController`
**Base:** `DeploymentMissionController`
**File:** `TaleWorlds.MountAndBlade/BattleDeploymentMissionController.cs`

## Overview

`BattleDeploymentMissionController` is the concrete implementation of the deployment phase for a field battle: it fills in the five abstract hooks that `DeploymentMissionController` declares (`DeploymentMissionController.cs:143` and the four siblings) and exists to turn troop spawning on and off at the right moments. It is a `DeploymentMissionController` subclass whose only data is two cached behaviour references, `MissionAgentSpawnLogic` (`BattleDeploymentMissionController.cs:67`) and `_battleDeploymentHandler` (`BattleDeploymentMissionController.cs:70`), both fetched in `OnBehaviorInitialize` (`BattleDeploymentMissionController.cs:16`).

The phase it drives is short and ordered. `OnAfterStart` disables troop spawning for both sides by looping `for (int i = 0; i < 2; i++)` over `BattleSideEnum` values and calling `SetSpawnTroops(side, false, false)` (`BattleDeploymentMissionController.cs:32`), then disables reinforcement spawning (`BattleDeploymentMissionController.cs:36`). `OnSetupTeamsOfSide` runs once per side and re-enables that side, applies `SetupAgentAIStatesForSide`, and tells the spawn logic the side's deployment is over (`BattleDeploymentMissionController.cs:40`). `OnSetupTeamsFinished` raises `Mission.IsTeleportingAgents` (`BattleDeploymentMissionController.cs:50`) and `BeforeDeploymentFinished` lowers it again (`BattleDeploymentMissionController.cs:56`) — the flag is up exactly across the teleport that moves deployed troops into their formations. `AfterDeploymentFinished` re-enables reinforcements and removes the `BattleDeploymentHandler` from the mission (`BattleDeploymentMissionController.cs:63`), which is this controller's last act.

## Mental Model

The cached references are hard dependencies, not conveniences. `OnBehaviorInitialize` uses `GetMissionBehavior<T>()` (`BattleDeploymentMissionController.cs:19`) which returns `null` for a mission that lacks either behaviour, and nothing null-checks afterwards — `OnAfterStart` dereferences `MissionAgentSpawnLogic` immediately. Adding this controller to a hand-built mission that lacks `MissionAgentSpawnLogic` therefore fails at mission start, not at registration.

`SetSpawnTroops`'s third argument is `enforceSpawning`, and this class uses it asymmetrically on purpose: `false, false` while disabling both sides at `OnAfterStart`, and `true, true` when re-enabling per side (`BattleDeploymentMissionController.cs:42`). The `true` matters — it makes the spawn logic run its `CheckDeployment()` immediately, so turning a side on is what actually deploys it, rather than waiting for the next tick.

`OnRemoveBehavior` calls `base` and nothing else (`BattleDeploymentMissionController.cs:24`): the two cached references survive removal, and `_battleDeploymentHandler` is only ever detached in `AfterDeploymentFinished` (`BattleDeploymentMissionController.cs:63`). If the behaviour is removed before deployment finishes, the `BattleDeploymentHandler` stays in the mission and the deployment-phase UI it drives stays alive.

The `(BattleSideEnum)i` loop is an index-to-enum pun, not a lookup table. `BattleSideEnum` is `Defender = 0, Attacker = 1` for the loop's purposes, and casting `0`/`1` covers both sides in the game. Do not copy the cast into your own code for a three-valued side; the loop only works because battle has exactly two sides.

## How to use

**Getting one.** Construct it with the same `bool isPlayerAttacker` its base takes (`BattleDeploymentMissionController.cs:11`) and add it as a mission behaviour *before* the mission starts, next to the rest of the deployment-phase behaviours — the `DeploymentMissionController` constructor signature is the same. It needs `MissionAgentSpawnLogic` and `BattleDeploymentHandler` to already be present.

**Typical use** — a deployment controller that also raises the mission banner at the right moment:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyBattleDeploymentController : BattleDeploymentMissionController
{
    public MyBattleDeploymentController(bool isPlayerAttacker)
        : base(isPlayerAttacker)
    {
    }

    protected override void OnSetupTeamsOfSide(BattleSideEnum battleSide)
    {
        // Turns this side on with enforceSpawning, applies AI states,
        // and marks the side's deployment as over.
        base.OnSetupTeamsOfSide(battleSide);

        if (battleSide == Mission.PlayerTeam.Side)
        {
            Mission.IsBannerWindowAccessAllowed = true;
        }
    }

    protected override void AfterDeploymentFinished()
    {
        // Re-enables reinforcements and removes the BattleDeploymentHandler.
        base.AfterDeploymentFinished();

        Mission.IsBannerWindowAccessAllowed = false;
    }
}
```

`OnSetupTeamsOfSide` and `AfterDeploymentFinished` are `protected override` because the base declares them abstract (`DeploymentMissionController.cs:146`, `DeploymentMissionController.cs:155`); always call the base, since it is the only code that touches the spawn logic.

**Most common mistake:** adding the controller to a mission that does not have a `MissionAgentSpawnLogic`.

```csharp
mission.AddMissionBehavior(new BattleDeploymentMissionController(true));
// no MissionAgentSpawnLogic anywhere
```

`OnBehaviorInitialize` stores `null` without complaint (`BattleDeploymentMissionController.cs:20`), so nothing fails at add time; the failure comes later as a `NullReferenceException` inside `OnAfterStart` when the two-side loop dereferences the field (`BattleDeploymentMissionController.cs:34`). The same applies to `BattleDeploymentHandler`: without it, the controller still runs and then silently fails to clean up at `AfterDeploymentFinished`. Add the spawn logic first, then the controller.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of BattleDeploymentMissionController from the subsystem API first
BattleDeploymentMissionController battleDeploymentMissionController = ...;
battleDeploymentMissionController.OnBehaviorInitialize();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of BattleDeploymentMissionController from the subsystem API first
BattleDeploymentMissionController battleDeploymentMissionController = ...;
battleDeploymentMissionController.OnRemoveBehavior();
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<BattleDeploymentMissionController>();
```

## See Also

- [Area Index](../)
- [DeploymentMissionController — the base that declares the five abstract hooks](../DeploymentMissionController)
- [MissionAgentSpawnLogic — the behaviour whose spawn flags this drives](../MissionAgentSpawnLogic)
- [BattleDeploymentHandler — the behaviour it removes when deployment ends](../BattleDeploymentHandler)
- [中文页面](../../../../zh/api/mission-ext/BattleDeploymentMissionController)