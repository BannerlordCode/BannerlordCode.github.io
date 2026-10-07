---
title: "DeploymentHandler"
description: "Auto-generated class reference for DeploymentHandler."
---
# DeploymentHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class DeploymentHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/DeploymentHandler.cs`

## Overview

`DeploymentHandler` is the abstract `MissionLogic` base for the pre-battle deployment phase — the window where the player places troops before the battle starts (`DeploymentHandler.cs:11`). Its constructor takes a single bool, `isPlayerAttacker`, stored as a `protected readonly` field (`DeploymentHandler.cs:34`), so the side question is answered once at construction and never re-derived.

Its central job is a mission-mode swap. `AfterStart` records `Mission.Mode` into `PreviousMissionMode` and switches the mission to `MissionMode.Deployment` (`DeploymentHandler.cs:53`, `DeploymentHandler.cs:54`); `OnRemoveBehavior` restores the saved mode (`DeploymentHandler.cs:61`). That pairing is why every concrete handler must be added and removed correctly — a handler left in the mission leaves the mission stuck in deployment mode.

It raises two events, `OnPlayerSideDeploymentReady` and `OnEnemySideDeploymentReady`, dispatched from `OnBattleSideDeployed` purely on whether the deployed side matches the player's (`DeploymentHandler.cs:65`). Both are plain `Action` with no payload, so the side is not passed — you infer it from which event fired.

Two members are abstract and therefore mandatory in every subclass: `AutoDeployTeamUsingDeploymentPlan(Team)` and `ForceUpdateAllUnits()`. The rest is optional. The class also caches `DeploymentMissionController` during `OnBehaviorInitialize` (`DeploymentHandler.cs:42`).

## Mental Model

`InitializeDeploymentPoints` is named backwards from what it does. It does not create or show anything — it finds every `DeploymentPoint` mission object and **hides** each one (`DeploymentHandler.cs:104`, `DeploymentHandler.cs:110`). And it is guarded by `_areDeploymentPointsInitialized`, so it runs at most once per handler instance. Read it as "clear the slate": a concrete handler calls it when it is ready to decide which points the player may use, then shows the specific points it wants.

The reason this base class must do it is `OrderController_OnOrderIssued_Aux`, an `internal static` method intended to be attached to `OrderController.OnOrderIssued` (`DeploymentHandler.cs:117`). During deployment, an order has to be pushed into formation state *immediately*, because the player is dragging units and the normal deferred update would apply the order against positions that are already changing. So the method forces updates per order type, and the mapping is not uniform:

- Movement-ish orders (Move, Charge, StandYourGround, Retreat, FollowMe, Advance, FallBack, LookAt*) force **both** positioning and cached-value updates.
- Formation-shape orders (ArrangementLine, FormDeep, CohesionHigh…) and Mount/Dismount force cached-value updates only.
- `CohesionHigh/Medium/Low`, `HoldFire` and `FireAtWill` force **nothing** at all — the switch returns immediately (`DeploymentHandler.cs:187`).
- `OrderType.None` and `OrderType.PointDefence` hit `Debug.FailedAssert` — the latter with the message `"will be removed"`, so PointDefence is a deprecated order that this path refuses (`DeploymentHandler.cs:208`).

Two guards sit in front of all of that. If *no* applied formation has `CountOfUnits > 0`, the method returns without touching anything. And the cached-value update itself re-checks `orderController.FormationUpdateEnabledAfterSetOrder`, so an order controller that has opted out of post-order formation updates is respected even here (`DeploymentHandler.cs:220`).

`FinishDeployment` has an odd-looking null-coalesce: `Mission mission = base.Mission ?? Mission.Current` (`DeploymentHandler.cs:98`). It calls `_deploymentMissionController.FinishDeployment()` and then clears `IsTeleportingAgents` on the mission it resolved. Since `_deploymentMissionController` is cached at initialisation and never re-fetched, a handler whose controller was absent at that moment dereferences null here.

## How to use

**Getting it.** Subclass it and register the subclass in the mission behaviour array for a battle that has a deployment phase:

```csharp
public class MyDeploymentHandler : DeploymentHandler
{
    public MyDeploymentHandler(bool isPlayerAttacker) : base(isPlayerAttacker) { }

    // Hide every point, then reveal only the ones this mission allows.
    public override void EarlyStart()
    {
        base.EarlyStart();
        InitializeDeploymentPoints();
    }

    public override void AutoDeployTeamUsingDeploymentPlan(Team playerTeam)
    {
        foreach (Formation f in playerTeam.FormationsIncludingSpecialAndEmpty)
            if (f.CountOfUnits > 0) f.SetMovementOrder(MovementOrder.MovementOrderAdvance);
    }

    public override void ForceUpdateAllUnits()
    {
        foreach (Formation f in Mission.Current.Teams.SelectMany(t => t.Formations))
            f.SetHasPendingUnitPositions(false);
    }
}
```

**Typical use** — knowing when each side is done, which is what most mods actually need:

```csharp
public override void AfterStart()
{
    var handler = Mission.Current.GetMissionBehavior<MyDeploymentHandler>();
    handler.OnPlayerSideDeploymentReady += () => MBDebug.Print("player deployed");
    handler.OnEnemySideDeploymentReady  += () => MBDebug.Print("enemy deployed");
}
```

**Typical use** — leaving deployment early:

```csharp
DeploymentHandler handler = Mission.Current.GetMissionBehavior<DeploymentHandler>();
handler.FinishDeployment();   // also clears Mission.IsTeleportingAgents
```

**Most common mistake, and what it costs.** Adding a handler that sets `MissionMode.Deployment` but is never removed, or removing it without `base.OnRemoveBehavior()`. The mode is restored *only* in `OnRemoveBehavior` (`DeploymentHandler.cs:61`), which you can accidentally suppress by overriding it and forgetting the base call. The cost is a battle that begins in `MissionMode.Deployment` and behaves accordingly — agent AI treats deployment-state orders differently, camera and control mode can be wrong, and nothing throws; the battle simply plays as though it were still being set up. If you override `OnRemoveBehavior`, always call `base.OnRemoveBehavior()`; there is no other path that restores `PreviousMissionMode`.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerTeam` | `public Team PlayerTeam { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of DeploymentHandler from the subsystem API first
DeploymentHandler deploymentHandler = ...;
deploymentHandler.OnBehaviorInitialize();
```

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of DeploymentHandler from the subsystem API first
DeploymentHandler deploymentHandler = ...;
deploymentHandler.EarlyStart();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of DeploymentHandler from the subsystem API first
DeploymentHandler deploymentHandler = ...;
deploymentHandler.AfterStart();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of DeploymentHandler from the subsystem API first
DeploymentHandler deploymentHandler = ...;
deploymentHandler.OnRemoveBehavior();
```

### OnBattleSideDeployed
`public override void OnBattleSideDeployed(BattleSideEnum side)`

**Purpose:** Invoked when the battle side deployed event is raised.

```csharp
// Obtain an instance of DeploymentHandler from the subsystem API first
DeploymentHandler deploymentHandler = ...;
deploymentHandler.OnBattleSideDeployed(side);
```

### AutoDeployTeamUsingDeploymentPlan
`public abstract void AutoDeployTeamUsingDeploymentPlan(Team playerTeam)`

**Purpose:** Executes the AutoDeployTeamUsingDeploymentPlan logic.

```csharp
// Obtain an instance of DeploymentHandler from the subsystem API first
DeploymentHandler deploymentHandler = ...;
deploymentHandler.AutoDeployTeamUsingDeploymentPlan(playerTeam);
```

### ForceUpdateAllUnits
`public abstract void ForceUpdateAllUnits()`

**Purpose:** Executes the ForceUpdateAllUnits logic.

```csharp
// Obtain an instance of DeploymentHandler from the subsystem API first
DeploymentHandler deploymentHandler = ...;
deploymentHandler.ForceUpdateAllUnits();
```

### FinishDeployment
`public virtual void FinishDeployment()`

**Purpose:** Concludes the deployment flow and performs any cleanup.

```csharp
// Obtain an instance of DeploymentHandler from the subsystem API first
DeploymentHandler deploymentHandler = ...;
deploymentHandler.FinishDeployment();
```

### InitializeDeploymentPoints
`public void InitializeDeploymentPoints()`

**Purpose:** Prepares the resources, state, or bindings required by deployment points.

```csharp
// Obtain an instance of DeploymentHandler from the subsystem API first
DeploymentHandler deploymentHandler = ...;
deploymentHandler.InitializeDeploymentPoints();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
DeploymentHandler instance = ...;
```

## See Also

- [Area Index](../)
- [MissionLogic](../MissionLogic)
- [DeploymentMissionController](../DeploymentMissionController)
- [DeploymentPoint](../DeploymentPoint)
- [AssignPlayerRoleInTeamMissionController](../AssignPlayerRoleInTeamMissionController)
- [DeploymentHandler (中文页面)](../../../../zh/api/mission-ext/DeploymentHandler)