---
title: "MissionAgentContourControllerView"
description: "Auto-generated class reference for MissionAgentContourControllerView."
---
# MissionAgentContourControllerView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentContourControllerView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentContourControllerView.cs`

## Overview

`MissionAgentContourControllerView` is the `MissionView` that paints the selection contour around agents. It is a `MissionView` (a mission behaviour) with an **explicit public constructor**, and it is added by hand: `SandBoxMissionViews` news it into eleven different mission behaviour lists (`SandBoxMissionViews.cs:42`, `SandBoxMissionViews.cs:99`, `SandBoxMissionViews.cs:357` and others). That is unusual — most views in this namespace are either `[DefaultView]`-scanned or created by a `ViewCreator` factory — and it means the view is present in singleplayer campaign missions only, by whatever subset those lists cover.

Its constructor does two things and no more: allocate the contour-agent list and **snapshot** whether a network session is active into `_isMultiplayer` (`MissionAgentContourControllerView.cs:24`, `MissionAgentContourControllerView.cs:25`). The snapshot matters — the multiplayer branch in the colouring logic reads that field, not `GameNetwork.IsSessionActive` (`MissionAgentContourControllerView.cs:132`), so the palette is decided once, at construction, and never re-evaluated.

The colours are three `uint` fields built in their initialisers from `Color` values (`MissionAgentContourControllerView.cs:167` through `MissionAgentContourControllerView.cs:173`): a near-white for non-focused units, a yellow-gold for the focused unit, and a green used **only** in multiplayer.

## Mental Model

This class is written as if it were finished, and it is not. `IsEnabled` is a `private const bool = false` (`MissionAgentContourControllerView.cs:164`) that is referenced nowhere, and the per-tick body does nothing with it:

`OnMissionScreenTick` checks `_isAllowedByOption`, reads `NativeConfig.GetUIDebugMode` into a local, and discards it (`MissionAgentContourControllerView.cs:32`, `MissionAgentContourControllerView.cs:34`). Same shape in `OnFocusGained`: it reads `_isAllowedByOption` into a local and discards it (`MissionAgentContourControllerView.cs:72`). Those two reads are the residue of code that used to act on them.

The methods that would draw anything are all `private` and **have no callers**: `PopulateContourListWithAgents` (`MissionAgentContourControllerView.cs:39`), `AddContourToFocusedAgent` (`MissionAgentContourControllerView.cs:87`) and `ApplyContourToAllAgents` (`MissionAgentContourControllerView.cs:126`). Only `RemoveContourFromFocusedAgent` is reached, from `OnFocusLost` (`MissionAgentContourControllerView.cs:81`). The net effect in a shipped game: focus loss clears a contour that was never applied, and nothing ever writes one. `MBAgentVisuals.SetContourColor` is called from four places in this file, three of which are only reachable through the dead methods.

`_isAllowedByOption` is `!BannerlordConfig.HideBattleUI || GameNetwork.IsMultiplayer` (`MissionAgentContourControllerView.cs:17`) — read **live**, unlike `_isMultiplayer`. So the option toggle takes effect immediately while the palette decision does not.

`PopulateContourListWithAgents` has an oddity worth copying carefully if you revive it: it null-checks `mission` and then, in the null branch, evaluates `(null != null)` — a constant `false` — into the same `flag` the non-null branch computes from `PlayerTeam.PlayerOrderController` (`MissionAgentContourControllerView.cs:43` through `MissionAgentContourControllerView.cs:51`). So the null-mission case is handled by a tautology. It then iterates `Mission.Current.PlayerTeam.PlayerOrderController.SelectedFormations` and excludes `IsMainAgent` (`MissionAgentContourControllerView.cs:55`, `MissionAgentContourControllerView.cs:59`) — the contour is only for player-*selected* units, not for everyone.

The contour state is tracked by two independent "already applied" flags (`_isContourAppliedToFocusedAgent`, `_isContourAppliedToAllAgents`) rather than by inspecting the visuals, so the flags and the actual `SetContourColor` state can disagree if anything else changes a contour. `RemoveContourFromFocusedAgent` handles that by downgrading to `_nonFocusedContourColor` when the agent is in the contour list and passing `null` when it is not (`MissionAgentContourControllerView.cs:105` through `MissionAgentContourControllerView.cs:118`) — `SetContourColor(null, true)` is how a contour is cleared.

## How to use

**Getting it.** Add your own instance to a mission's behaviour list, or look up the shipped one. Since the useful methods are private, subclassing is the only way to reuse the colouring logic:

```csharp
using TaleWorlds.MountAndBlade.View.MissionViews;

public class MyContourView : MissionAgentContourControllerView
{
    public override void OnFocusGained(Agent agent, IFocusable focusable, bool isInteractable)
    {
        base.OnFocusGained(agent, focusable, isInteractable);
        // The base only reads _isAllowedByOption into a discarded local
        // (MissionAgentContourControllerView.cs:72); do the work yourself.
        if (agent != null && agent.AgentVisuals != null)
        {
            agent.AgentVisuals.SetContourColor(0xFF00FFFFu, true);
        }
    }

    public override void OnFocusLost(Agent agent, IFocusable focusable)
    {
        base.OnFocusLost(agent, focusable);   // clears the contour we set
        if (agent != null && agent.AgentVisuals != null)
        {
            agent.AgentVisuals.SetContourColor(null, true);
        }
    }
}

Mission.Current.AddMissionBehavior(new MyContourView());
```

Colour an arbitrary list of agents yourself, matching the shipped palette semantics:

```csharp
uint focused   = new Color(1f, 0.84f, 0.35f, 1f).ToUnsignedInteger();
uint nonFocused = new Color(0.85f, 0.85f, 0.85f, 1f).ToUnsignedInteger();

foreach (Agent unit in selectedUnits)
{
    MBAgentVisuals visuals = unit.AgentVisuals;
    if (visuals != null)
    {
        visuals.SetContourColor(unit == focusedAgent ? focused : nonFocused, true);
    }
}
// ... and always clear with null when the selection goes away:
foreach (Agent unit in selectedUnits)
{
    if (unit.AgentVisuals != null)
    {
        unit.AgentVisuals.SetContourColor(null, true);
    }
}
```

**The mistake that paints contours onto agents nobody selected.** Collecting your own agent list from the whole team rather than from `PlayerOrderController.SelectedFormations` and skipping the `IsMainAgent` test, which is what `PopulateContourListWithAgents` does (`MissionAgentContourControllerView.cs:55`, `MissionAgentContourControllerView.cs:59`). The result is a contour on the player's own character and on units the player never clicked, and because `ApplyContourToAllAgents` only writes once behind `_isContourAppliedToAllAgents` (`MissionAgentContourControllerView.cs:128`), re-selecting does not repaint them — the stale outlines stay until something explicitly calls `SetContourColor(null, true)`.

## Key Methods

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionAgentContourControllerView from the subsystem API first
MissionAgentContourControllerView missionAgentContourControllerView = ...;
missionAgentContourControllerView.OnMissionScreenTick(0);
```

### OnFocusGained
`public override void OnFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)`

**Purpose:** Invoked when the focus gained event is raised.

```csharp
// Obtain an instance of MissionAgentContourControllerView from the subsystem API first
MissionAgentContourControllerView missionAgentContourControllerView = ...;
missionAgentContourControllerView.OnFocusGained(agent, focusableObject, false);
```

### OnFocusLost
`public override void OnFocusLost(Agent agent, IFocusable focusableObject)`

**Purpose:** Invoked when the focus lost event is raised.

```csharp
// Obtain an instance of MissionAgentContourControllerView from the subsystem API first
MissionAgentContourControllerView missionAgentContourControllerView = ...;
missionAgentContourControllerView.OnFocusLost(agent, focusableObject);
```

## Usage Example

```csharp
The `MissionAgentContourControllerView view = ...;` placeholder previously on this page was not a runnable line. The view is constructed by hand in mission behaviour arrays, so the real forms are:

```csharp
Mission.Current.AddMissionBehavior(new MissionAgentContourControllerView());
// or, to read the shipped one:
var view = Mission.Current.GetMissionBehavior<MissionAgentContourControllerView>();
```
```

## See Also

- [MissionGauntletKillNotificationSingleplayerUIHandler — another battle-UI view in this bucket](../MissionGauntletKillNotificationSingleplayerUIHandler)
- [MissionMainAgentInteractionComponent — the other hand-registered view-adjacent component](../MissionMainAgentInteractionComponent)
- [MissionGamepadEffectsView — another mission view added by mission assembly](../MissionGamepadEffectsView)
- [Area Index](../)