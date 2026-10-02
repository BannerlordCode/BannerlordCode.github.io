---
title: "MissionAgentContourControllerView"
description: "MissionAgentContourControllerView — class in TaleWorlds.MountAndBlade.View.MissionViews. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionAgentContourControllerView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class MissionAgentContourControllerView : MissionView`  
**Base:** `MissionView`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentContourControllerView.cs`

## Overview

`MissionAgentContourControllerView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MissionView, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionAgentContourControllerView`.
- **Instance members** (3): `OnMissionScreenTick`, `OnFocusGained`, `OnFocusLost`.
- **Extension points** (3): `OnMissionScreenTick`, `OnFocusGained`, `OnFocusLost`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFocusGained` | method (override) | Overrides the base member. Takes 3 arguments: `Agent agent`, `IFocusable focusableObject`, `bool isInteractable`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFocusLost` | method (override) | Overrides the base member. Takes 2 arguments: `Agent agent`, `IFocusable focusableObject`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `MissionAgentContourControllerView` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public MissionAgentContourControllerView()`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MissionView.
var missionAgentContourControllerView = new MissionAgentContourControllerView();

// Lifecycle hooks this type declares:
//   public override void OnMissionScreenTick(float dt)
//   public override void OnFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)
//   public override void OnFocusLost(Agent agent, IFocusable focusableObject)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentContourControllerView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameNetwork](../GameNetwork/) — `TaleWorlds.MountAndBlade`.
- [AgentVisuals](../AgentVisuals/) — `TaleWorlds.MountAndBlade.View`.

Section: [api/mission-ext/](../) — the other types in this bucket.
