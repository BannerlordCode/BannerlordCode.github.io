---
title: "DeploymentMissionView"
description: "Auto-generated class reference for DeploymentMissionView."
---
# DeploymentMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DeploymentMissionView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/DeploymentMissionView.cs`

## Overview

`DeploymentMissionView` is the view-side counterpart of the deployment phase, and its whole job is to wire up and tear down three other behaviours at the right moments. It is a `MissionView` (`DeploymentMissionView.cs:7`) with three `protected` fields — `_orderTroopPlacer`, `_deploymentBoundaryMarkerHandler` and `_entitySelectionHandler` (`DeploymentMissionView.cs:58`) — all resolved in `AfterStart` via `Mission.GetMissionBehavior<T>()` (`DeploymentMissionView.cs:12`).

Two lifecycle hooks do the work. `OnDeploymentPlanMade(Team, bool)` restricts orders to the deployment boundaries once the player has a plan that has them (`DeploymentMissionView.cs:18`) by calling `RestrictOrdersToDeploymentBoundaries(true)` (`DeploymentMissionView.cs:27`). `OnDeploymentFinished` (`DeploymentMissionView.cs:32`) reverses that restriction, removes both helper behaviours from the mission, and then adds a `MissionBoundaryWallView` through the screen — but only if one is not already present (`DeploymentMissionView.cs:50`).

So the phase this type brackets is: during deployment, orders are clamped to the player's deployment boundaries and two UI helpers are present; when deployment ends, the helpers are removed and a visible boundary wall replaces them.

## Mental Model

Only the player team is ever considered. `OnDeploymentPlanMade` guards on `team == base.Mission.PlayerTeam` *and* `Mission.DeploymentPlan.HasDeploymentBoundaries(base.Mission.PlayerTeam)` (`DeploymentMissionView.cs:20`), so enemy plans and boundary-less deployments fall straight through. The same player-team condition is re-tested at the end for the un-restriction (`DeploymentMissionView.cs:40`), which means the two checks are independent — a boundary wall appearing does not imply the restriction was ever applied.

The behaviours are removed, not disabled. `OnDeploymentFinished` calls `Mission.RemoveMissionBehavior` for the selection handler and the boundary marker handler (`DeploymentMissionView.cs:36`, `DeploymentMissionView.cs:48`) rather than hiding them. Each removal is null-guarded (`DeploymentMissionView.cs:34`, `DeploymentMissionView.cs:38`), so a mission that never had them is fine — but the null check also means a silently failed lookup is indistinguishable from a correctly removed behaviour.

The fields are never cleared. After `OnDeploymentFinished` the three `protected` fields still point at detached behaviours. A subclass reading `_entitySelectionHandler` after deployment gets a non-null object that is no longer in the mission, so calling into it does nothing to the mission but may still be valid to call.

The boundary wall is added idempotently: `if (!base.Mission.HasMissionBehavior<MissionBoundaryWallView>())` (`DeploymentMissionView.cs:50`) followed by `MissionScreen.AddMissionView(missionView)` (`DeploymentMissionView.cs:53`). Note it is added through the **screen**, not through the mission's behaviour list, even though the guard checks the mission. That is deliberate — mission views are screen-owned here — and it is why the existence check has to go through `Mission.HasMissionBehavior` at all.

## How to use

**Getting one.** The sandbox mission-view factories construct it — `list.Add(new DeploymentMissionView())` (`SandBoxMissionViews.cs:348`) — so you do not normally instantiate it yourself. To add deployment-phase behaviour, either add your own `MissionView` to that same list or derive from this class.

**Typical use** — a subclass that keeps orders inside the boundaries and reports when they lift:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer;

public class MyDeploymentMissionView : DeploymentMissionView
{
    public override void OnDeploymentPlanMade(Team team, bool isFirstPlan)
    {
        base.OnDeploymentPlanMade(team, isFirstPlan);

        if (team != Mission.PlayerTeam)
        {
            return;
        }

        // Only meaningful once the base has applied the restriction,
        // and only if this plan actually has boundaries.
        if (Mission.DeploymentPlan.HasDeploymentBoundaries(Mission.PlayerTeam))
        {
            MyHud.Hint("Orders are now limited to your deployment area.");
        }
    }

    public override void OnDeploymentFinished()
    {
        base.OnDeploymentFinished();

        // The restriction is lifted inside base; the wall view is already added.
        MyHud.Hint("Deployment finished.");
    }
}
```

`Mission.DeploymentPlan`, `HasDeploymentBoundaries(Team)` and `OrderTroopPlacer.RestrictOrdersToDeploymentBoundaries(bool)` are the real members — the last is called by this type at `DeploymentMissionView.cs:27` and released at `DeploymentMissionView.cs:45`.

**Most common mistake:** calling `RestrictOrdersToDeploymentBoundaries(true)` yourself from `OnDeploymentPlanMade` without the base call.

```csharp
public override void OnDeploymentPlanMade(Team team, bool isFirstPlan)
{
    _orderTroopPlacer.RestrictOrdersToDeploymentBoundaries(true);
    // base.OnDeploymentPlanMade(...) missing
}
```

The restriction is symmetric: `OnDeploymentFinished` only calls `RestrictOrdersToDeploymentBoundaries(false)` inside the block that requires the boundary marker handler to be non-null (`DeploymentMissionView.cs:42`). If the base hook never ran — because you replaced it, or because the plan had no boundaries — the release can be skipped and orders stay clamped for the rest of the battle, with no indication to the player why formations refuse to move. Call the base first, as in the example, so apply and release stay paired.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of DeploymentMissionView from the subsystem API first
DeploymentMissionView deploymentMissionView = ...;
deploymentMissionView.AfterStart();
```

### OnDeploymentPlanMade
`public override void OnDeploymentPlanMade(Team team, bool isFirstPlan)`

**Purpose:** Invoked when the deployment plan made event is raised.

```csharp
// Obtain an instance of DeploymentMissionView from the subsystem API first
DeploymentMissionView deploymentMissionView = ...;
deploymentMissionView.OnDeploymentPlanMade(team, false);
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of DeploymentMissionView from the subsystem API first
DeploymentMissionView deploymentMissionView = ...;
deploymentMissionView.OnDeploymentFinished();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
DeploymentMissionView view = ...;
```

## See Also

- [Area Index](../)
- [DeploymentMissionController — the logic-side counterpart of this phase](../DeploymentMissionController)
- [OrderTroopPlacer — the behaviour whose order restriction this toggles](../OrderTroopPlacer)
- [MissionBoundaryWallView — the wall added when deployment finishes](../MissionBoundaryWallView)
- [中文页面](../../../../zh/api/mission-ext/DeploymentMissionView)