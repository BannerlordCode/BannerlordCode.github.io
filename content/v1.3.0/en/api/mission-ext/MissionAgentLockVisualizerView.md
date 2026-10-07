---
title: "MissionAgentLockVisualizerView"
description: "Auto-generated class reference for MissionAgentLockVisualizerView."
---
# MissionAgentLockVisualizerView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentLockVisualizerView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionAgentLockVisualizerView.cs`

## Overview

`MissionAgentLockVisualizerView` is an empty type: `public class MissionAgentLockVisualizerView : MissionView` (`MissionAgentLockVisualizerView.cs:6`) with a body that contains nothing but braces (`MissionAgentLockVisualizerView.cs:7`). No fields, no overrides, no constructor — like `BoardGameView` and `TrebuchetView` in this same assembly.

That emptiness is the fact. Every behaviour it has comes from `MissionView`, so there is no member on this class to call, override, or configure. The mission-view factories do construct one — `ViewCreator.CreateMissionAgentLockVisualizerView(mission)` appears in the battle view list (`SandBoxMissionViews.cs:39`) — so the type is instantiated per mission, but the instance does nothing on its own.

Whether the agent-lock visualisation you see in game comes from here is not something this file records; the file records only that this type contributes no code. The behaviour would have to be in a `MissionView` base hook or in something else entirely.

## Mental Model

Because there is nothing to call, the only thing the type contributes is *presence*: the mission's view list contains an instance, so any code that counts mission views or looks for this type will find one. If you iterate `Mission.Current` views expecting to find the lock-target visualiser and then cast it to this type to configure it, you get an object with no configuration surface.

The boundary is the base class, and it is the `MissionBehavior` hierarchy rather than the component one. `MissionView : MissionBehavior` (`MissionView.cs:8`), so the hooks available are `OnBehaviorInitialize`, `EarlyStart`, `AfterStart`, the agent-event family, and the view-specific `OnMissionScreenTick(float)` (`MissionView.cs:46`) and `OnSceneRenderingStarted()` (`MissionView.cs:68`). It is *not* a `MissionComponent`, so there is no `OnAdded(Scene)` — that hook belongs to `UsableMissionObjectComponent` (`UsableMissionObjectComponent.cs:10`) and is not inherited here.

It is `public class`, not `abstract`, so you can instantiate it directly, and nothing in this file enforces that only one exists per mission.

## How to use

**Getting one.** The mission-view factories build it for battle missions. If you want the behaviour rather than the type, derive from `MissionView` or from this class and override the hook you need.

**Typical use** — deriving from it to add lock-target feedback to a battle:

```csharp
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer;

public class MyLockVisualizerView : MissionAgentLockVisualizerView
{
    private Agent _locked;

    public override void OnBehaviorInitialize()
    {
        base.OnBehaviorInitialize();
        _locked = null;
    }

    // Real MissionView hook, called once per mission-screen tick.
    public override void OnMissionScreenTick(float dt)
    {
        base.OnMissionScreenTick(dt);

        Agent target = Mission.Current.GetClosestEnemyAgent(
            Mission.Current.PlayerTeam, Agent.Main.Position, 9999f);
        if (target != _locked)
        {
            Hide();
            _locked = target;
            Show(_locked);
        }
    }

    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent,
        AgentState agentState, KillingBlow killingBlow)
    {
        base.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);

        if (affectedAgent == _locked)
        {
            _locked = null;
        }
    }
}
```

`MissionBehavior.OnAgentRemoved` (`MissionBehavior.cs:113`) and `MissionView.OnMissionScreenTick(float)` (`MissionView.cs:46`) are the real hooks to build on.

**Most common mistake:** carrying an override shape over from a component-based view.

```csharp
public class MyLockVisualizerView : MissionAgentLockVisualizerView
{
    protected override void OnAdded(Scene scene)   // does not compile
    {
        base.OnAdded(scene);
    }
}
```

`OnAdded(Scene)` is declared on `UsableMissionObjectComponent` (`UsableMissionObjectComponent.cs:10`), the base of the siege-weapon views — not of `MissionView`, and so not of this type. This is the concrete cost of a class that declares nothing: nothing in the file tells you which hierarchy you are in, and the siege views and the mission views look interchangeable from the outside. Derive from `MissionView` for behaviour-list lifecycle, from `MissionComponent` if you truly need scene attachment, and never from both.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionAgentLockVisualizerView view = ...;
```

## See Also

- [Area Index](../)
- [MissionView — the base class that carries every member this type lacks](../MissionView)
- [BoardGameView — the other empty marker sibling in 1.3.0](../BoardGameView)
- [中文页面](../../../../zh/api/mission-ext/MissionAgentLockVisualizerView)