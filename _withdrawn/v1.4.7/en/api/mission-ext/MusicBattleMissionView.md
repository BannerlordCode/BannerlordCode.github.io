---
title: "MusicBattleMissionView"
description: "MusicBattleMissionView — class in TaleWorlds.MountAndBlade.View.MissionViews.Sound. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# MusicBattleMissionView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.Sound`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class MusicBattleMissionView : MissionView, IMusicHandler`  
**Base:** `MissionView, IMusicHandler`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicBattleMissionView.cs`

## Overview

`MusicBattleMissionView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MissionView, IMusicHandler, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MusicBattleMissionView`.
- **Instance members** (4): `OnBehaviorInitialize`, `OnMissionScreenFinalize`, `AfterStart`, `OnAgentRemoved`.
- **Extension points** (4): `OnBehaviorInitialize`, `OnMissionScreenFinalize`, `AfterStart`, `OnAgentRemoved`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `OnAgentRemoved` | method (override) | Overrides the base member. Takes 4 arguments: `Agent affectedAgent`, `Agent affectorAgent`, `AgentState agentState`, `KillingBlow blow`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBehaviorInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `MusicBattleMissionView` | ctor | Instance entry point. Takes 1 argument: `bool isSiegeBattle`. Returns ``. |

- Constructed as `public MusicBattleMissionView(bool isSiegeBattle)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MissionView, IMusicHandler.
var musicBattleMissionView = new MusicBattleMissionView(isSiegeBattle);

// Lifecycle hooks this type declares:
//   public override void OnBehaviorInitialize()
//   public override void OnMissionScreenFinalize()
//   public override void AfterStart()
//   public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicBattleMissionView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
