---
title: "BattleDeploymentHandler"
description: "Auto-generated class reference for BattleDeploymentHandler."
---
# BattleDeploymentHandler

**Namespace:** TaleWorlds.MountAndBlade.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleDeploymentHandler : DeploymentHandler`
**Base:** `DeploymentHandler`
**File:** `TaleWorlds.MountAndBlade/Missions/Handlers/BattleDeploymentHandler.cs`

## Overview

`BattleDeploymentHandler` is the handler that decides where a team stands at the start of a battle. It is a `DeploymentHandler` (`BattleDeploymentHandler.cs:11`), created with a single `bool isPlayerAttacker` that it forwards straight to the base constructor (`BattleDeploymentHandler.cs:14`) — the type offers no other configuration whatsoever, so its behaviour is fixed and only its role in the mission is yours to choose.

Its three moving parts are worth separating. `AfterStart` subscribes to the player team's order event (`BattleDeploymentHandler.cs:32`). `AutoDeployTeamUsingDeploymentPlan` is the actual work: it snapshots `Mission.IsTeleportingAgents`, forces it on, walks every formation, queries `Mission.DeploymentPlan` for that team's plan, and drives each formation through position, facing and spacing orders before restoring the flag (`BattleDeploymentHandler.cs:41`). `SetDefaultFormationOrders` is a public helper, not an override, that pushes a fixed sequence of orders onto any `OrderController` you hand it (`BattleDeploymentHandler.cs:107`).

## Mental Model

Read it as "apply the team's pre-battle deployment plan, atomically". The atomicity is real and is the part to understand: `IsTeleportingAgents` is captured into a local, set to `true` at the start, and written back at the very end (`BattleDeploymentHandler.cs:96`), so formation teleports do not animate as a horde sprinting into place. If anything between those two lines throws, the flag is left stuck on for the rest of the mission.

Two boundaries catch people.

The first is an early-out with wide consequences. The entire body is wrapped in `if (list.Count > 0)` (`BattleDeploymentHandler.cs:39`), where `list` is the team's formations *including empty* ones. A team with no formations makes this method a complete no-op — including skipping the general-agent placement at the end and skipping the restore of `IsTeleportingAgents`. Nothing warns you; the method returns void.

The second is the subscription asymmetry. `AfterStart` subscribes to `base.PlayerTeam.OnOrderIssued` without a null check (`BattleDeploymentHandler.cs:32`), while `OnRemoveBehavior` unsubscribes only `if (base.PlayerTeam != null)` (`BattleDeploymentHandler.cs:22`). The guard is on the teardown path only. If this handler ends up in a mission with no player team, the failure surfaces at start rather than at teardown.

## How to use

**Getting one.** Construct it with your side and give it to the mission's deployment-handler list when the mission is constructed — that is the position `SandBoxMissions` gives it in the shipped battle definitions. Inside a running mission you normally do not construct it yourself; the engine does.

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Missions.Handlers;

public class MyModDeployment : DeploymentHandler
{
    private readonly BattleDeploymentHandler _inner;

    public MyModDeployment(bool isPlayerAttacker) : base(isPlayerAttacker)
    {
        _inner = new BattleDeploymentHandler(isPlayerAttacker);
    }

    public override void AfterStart()
    {
        base.AfterStart();
        // Same subscription the inner handler makes for itself.
        _inner.AfterStart();
    }

    public override void OnRemoveBehavior()
    {
        _inner.OnRemoveBehavior();
        base.OnRemoveBehavior();
    }
}
```

Reading and applying the plan yourself:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Missions.Handlers;

BattleDeploymentHandler handler = new BattleDeploymentHandler(isPlayerAttacker: true);
Team team = Mission.Current.MainTeam;

IMissionDeploymentPlan plan = Mission.Current.DeploymentPlan;
if (plan.IsPlanMade(team))
{
    handler.AutoDeployTeamUsingDeploymentPlan(team);
}

// The public helper applies the fixed order sequence to any controller.
handler.SetDefaultFormationOrders(team.IsPlayerTeam
    ? team.PlayerOrderController
    : team.MasterOrderController);

// Nudge the mission to re-evaluate unit positions.
handler.ForceUpdateAllUnits();
```

**The most common mistake** is calling `AutoDeployTeamUsingDeploymentPlan` for a team that has no deployment plan and reading the resulting assert as a crash. `Mission.DeploymentPlan.IsPlanMade(team)` is checked inside the method, and when it is false the method falls through to `Debug.FailedAssert("Failed to deploy team. Initial deployment plan is not made yet.")` (`BattleDeploymentHandler.cs:76`) — it does not throw, and it does not deploy anything, so your formations silently stay wherever the AI put them. Check `IsPlanMade(team)` yourself first; the assert is a diagnostic breadcrumb, not an exception you should be catching.

## Key Methods

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of BattleDeploymentHandler from the subsystem API first
BattleDeploymentHandler battleDeploymentHandler = ...;
battleDeploymentHandler.OnRemoveBehavior();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of BattleDeploymentHandler from the subsystem API first
BattleDeploymentHandler battleDeploymentHandler = ...;
battleDeploymentHandler.AfterStart();
```

### AutoDeployTeamUsingDeploymentPlan
`public override void AutoDeployTeamUsingDeploymentPlan(Team team)`

**Purpose:** Executes the AutoDeployTeamUsingDeploymentPlan logic.

```csharp
// Obtain an instance of BattleDeploymentHandler from the subsystem API first
BattleDeploymentHandler battleDeploymentHandler = ...;
battleDeploymentHandler.AutoDeployTeamUsingDeploymentPlan(team);
```

### ForceUpdateAllUnits
`public override void ForceUpdateAllUnits()`

**Purpose:** Executes the ForceUpdateAllUnits logic.

```csharp
// Obtain an instance of BattleDeploymentHandler from the subsystem API first
BattleDeploymentHandler battleDeploymentHandler = ...;
battleDeploymentHandler.ForceUpdateAllUnits();
```

### SetDefaultFormationOrders
`public void SetDefaultFormationOrders(OrderController orderController)`

**Purpose:** Assigns a new value to default formation orders and updates the object's internal state.

```csharp
// Obtain an instance of BattleDeploymentHandler from the subsystem API first
BattleDeploymentHandler battleDeploymentHandler = ...;
battleDeploymentHandler.SetDefaultFormationOrders(orderController);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattleDeploymentHandler>();
```

## See Also

- [Area Index](../)
- [DeploymentHandler](../DeploymentHandler) — the abstract base holding `PlayerTeam` and `Mission`
- [IMissionDeploymentPlan](../IMissionDeploymentPlan) — the plan this handler reads positions from
- [OrderController](../OrderController) — receives the orders `SetDefaultFormationOrders` pushes
- [Team](../Team) — the argument passed to `AutoDeployTeamUsingDeploymentPlan`