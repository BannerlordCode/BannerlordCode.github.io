---
title: "BoardGameView"
description: "Auto-generated class reference for BoardGameView."
---
# BoardGameView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoardGameView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/BoardGameView.cs`

## Overview

`BoardGameView` in 1.3.0 is an empty type: `public class BoardGameView : MissionView` (`BoardGameView.cs:6`) with a body containing nothing but braces (`BoardGameView.cs:7`). It declares no fields, no overrides, no constructor. Every behaviour it has comes from `MissionView`.

That emptiness is the fact to design around. This is not a stub awaiting implementation — its sibling `TrebuchetView` is empty the same way (`TrebuchetView.cs:6`) — it is a *marker type*. It exists so that something can say "this mission view is the board-game view" without inheriting any behaviour of its own. If you were expecting the campaign board game to render through members declared here, they are not: `MissionView` is where the real surface lives.

The surface you do inherit is large and comes from two places. `MissionView : MissionBehavior` (`MissionView.cs:8`), so the behaviour lifecycle is available — `OnBehaviorInitialize`, `EarlyStart`, `AfterStart`, `OnAgentCreated`, `OnAgentRemoved` and the rest of the `MissionBehavior` hook set (`MissionBehavior.cs:38`) — plus view-specific virtuals such as `OnMissionScreenTick(float)` (`MissionView.cs:46`) and `OnSceneRenderingStarted()` (`MissionView.cs:68`), and two members you will want: `MissionScreen` (`MissionView.cs:13`) and `Input` (`MissionView.cs:17`).

There is exactly one instance per mission that uses it, created by the mission view machinery when the mission builds its behaviour list, and it lives as long as the mission. It has no state of its own to reset and nothing to dispose.

## Mental Model

Because there is nothing to call, the only decisions this type forces are about *identity and which hooks you take*. Deriving from it gives you the base class's lifecycle and nothing more, so a subclass that overrides nothing behaves exactly like the base.

Note that `MissionScreen` has an `internal` setter (`MissionView.cs:13`). A view cannot be pointed at a different screen from outside the assembly — you get the one the mission gave it. If your design needs to reach a screen from a view, read `MissionScreen`, do not try to assign it.

The boundary is the inheritance chain, not the type: any member you expect to find declared here is either on `MissionView` (shared with every other view) or genuinely missing in 1.3.0. There is no `OnAdded(Scene)` on `MissionView` — that hook belongs to `MissionComponent`, the *other* base (`UsableMissionObjectComponent.cs:10`), used by the siege-weapon views. Looking for it here and copying a siege view's override shape into a `BoardGameView` subclass will not compile.

Do not treat it as an abstract base: it is `public class`, not `abstract`, so you can instantiate it directly, and nothing in this file enforces uniqueness — that is the mission behaviour list's business, not this type's.

## How to use

**Getting one.** Construct it directly — there is no factory, no registry entry, and no abstract member to implement — and add it as a mission behaviour through the mission's behaviour list, alongside the other `MissionView` instances the mission creates.

**Typical use** — deriving from it to add per-tick mission-view behaviour:

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer;

public class MyBoardGameView : BoardGameView
{
    private int _tickCount;

    public override void OnBehaviorInitialize()
    {
        base.OnBehaviorInitialize();
        _tickCount = 0;
    }

    // Real MissionView hook: called once per mission-screen tick.
    public override void OnMissionScreenTick(float dt)
    {
        base.OnMissionScreenTick(dt);
        _tickCount++;
    }

    public override void OnAgentCreated(Agent agent)
    {
        base.OnAgentCreated(agent);
        _tickCount = 0;
    }

    public int TickCount => _tickCount;
}
```

`MissionBehavior.OnBehaviorInitialize` (`MissionBehavior.cs:38`) and `OnAgentCreated(Agent)` (`MissionBehavior.cs:78`) are the reset points, and `OnMissionScreenTick(float)` (`MissionView.cs:46`) is the view-specific tick.

**Most common mistake:** carrying an override shape over from a siege-weapon view.

```csharp
public class MyBoardGameView : BoardGameView
{
    protected override void OnAdded(Scene scene)   // does not compile
    {
        base.OnAdded(scene);
    }
}
```

`OnAdded(Scene)` is declared on `UsableMissionObjectComponent` (`UsableMissionObjectComponent.cs:10`), which is the base of `RangedSiegeWeaponView` and friends — not of `MissionView`. This is the concrete cost of this type declaring nothing: nothing in the file tells you which base you actually have, and the two mission-view hierarchies look identical from the outside. Derive from `BoardGameView` for behaviour-list lifecycle hooks, from `MissionComponent` if you truly need the scene-attachment hook, and never from both.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
BoardGameView view = ...;
```

## See Also

- [Area Index](../)
- [MissionView — the base class that carries every member this type lacks](../MissionView)
- [TrebuchetView — the other empty marker sibling in 1.3.0](../TrebuchetView)
- [中文页面](../../../../zh/api/mission-ext/BoardGameView)