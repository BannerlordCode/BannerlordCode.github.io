---
title: "DeploymentView"
description: "Auto-generated class reference for DeploymentView."
---
# DeploymentView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DeploymentView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/DeploymentView.cs`

## Overview

`DeploymentView` is a `MissionView` subclass whose whole body is a **lifecycle template with empty hooks**. It declares four members: `AfterStart`, which fetches a `DeploymentHandler` and calls `CreateWidgets` (`DeploymentView.cs:9`, `DeploymentView.cs:12`, `DeploymentView.cs:13`); `OnRemoveBehavior`, which calls `RemoveWidgets` and then the base (`DeploymentView.cs:17`, `DeploymentView.cs:19`); and the two `protected virtual` hooks `CreateWidgets` (`DeploymentView.cs:24`) and `RemoveWidgets` (`DeploymentView.cs:29`), **both of which have empty bodies**. The `DeploymentHandler` it caches is `private` and never read.

It is also unreferenced: a tree-wide search for `DeploymentView` in the managed assemblies returns no reference to this type. The strings that match are `ISiegeDeploymentView` — a different interface, implemented by `MissionGauntletSingleplayerOrderUIHandler` — and unrelated debug hotkey names. So in 1.3.0 this class is neither instantiated by a view creator, nor marked `[DefaultView]`, nor referenced. It is a leftover seam: a class that exists so a subclass *could* do deployment widget work, with nothing in the game doing it.

## Mental Model

Because `CreateWidgets` and `RemoveWidgets` are `protected virtual` and empty, the class is designed for subclassing — and the pairing is the design. `AfterStart` is the only place `CreateWidgets` is called and `OnRemoveBehavior` the only place `RemoveWidgets` is (`DeploymentView.cs:13`, `DeploymentView.cs:19`), so a subclass that adds one without the other leaks Gauntlet layers into the next mission. There is no `OnMissionScreenFinalize` override, so the teardown hook is the behaviour-removal path, not the screen-finalise path.

The `DeploymentHandler` lookup at `DeploymentView.cs:12` is the part that will bite you if you subclass. `Mission.GetMissionBehavior<DeploymentHandler>()` returns null on any mission that does not add that behaviour, and the result is stored without a check and never null-tested, because nothing in the empty base body reads it. A subclass that starts reading `_deploymentHandler` cannot, either — the field is `private` (`DeploymentView.cs:34`), not `protected`. To use the handler you must look it up yourself.

Also note the ordering inside `AfterStart`: the handler is fetched *before* `CreateWidgets` runs (`DeploymentView.cs:12`, `DeploymentView.cs:13`). A subclass whose `CreateWidgets` needs the deployment handler cannot assume it is reachable through the base class, but it can rely on the mission already having whatever behaviours it had by the time `AfterStart` runs.

## How to use

**Getting it.** There is no shipped path that creates it. If you want the template, subclass it and add the instance to the mission yourself — the empty hooks are the contract:

```csharp
using TaleWorlds.MountAndBlade.View.MissionViews;
using TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer;

public class MyDeploymentOverlay : DeploymentView
{
    protected override void CreateWidgets()
    {
        // Called from AfterStart after the base has cached its handler
        // (DeploymentView.cs:12, DeploymentView.cs:13). Add your Gauntlet layer here.
        Debug.Print("deployment overlay up", false);
    }

    protected override void RemoveWidgets()
    {
        // Called from OnRemoveBehavior BEFORE base.OnRemoveBehavior()
        // (DeploymentView.cs:19). Mirror everything CreateWidgets added.
        Debug.Print("deployment overlay down", false);
    }
}

// Add it yourself -- nothing in 1.3.0 instantiates DeploymentView.
Mission.Current.AddMissionBehavior(new MyDeploymentOverlay());
```

Read the deployment state you need from the mission directly, because the base class's cached handler is private and unused:

```csharp
DeploymentHandler handler = Mission.GetMissionBehavior<DeploymentHandler>();
if (handler != null)
{
    Debug.Print("deployment active", false);
}
```

**The mistake that leaves a Gauntlet layer alive across missions.** Overriding `CreateWidgets` and forgetting `RemoveWidgets`. The teardown call is the only thing that removes what the create call added, and it lives on the behaviour-removal path (`DeploymentView.cs:19`) rather than on screen finalise, so nothing else will clean up for you. The symptom is a layer from the previous battle still in the layer stack after the next one starts — usually showing stale troop counts that nobody can click.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of DeploymentView from the subsystem API first
DeploymentView deploymentView = ...;
deploymentView.AfterStart();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of DeploymentView from the subsystem API first
DeploymentView deploymentView = ...;
deploymentView.OnRemoveBehavior();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
DeploymentView view = ...;
```

## See Also

- [MissionObjectiveView — a view slot that is actually created by the view layer](../MissionObjectiveView)
- [MissionReinforcementsHelper — the deployment-side helper this view would project](../MissionReinforcementsHelper)
- [MissionSiegeEnginesLogic — the other siege-deployment logic](../MissionSiegeEnginesLogic)
- [Mission — behaviour list the added view goes into](../../mission/Mission)
- [Area Index](../)