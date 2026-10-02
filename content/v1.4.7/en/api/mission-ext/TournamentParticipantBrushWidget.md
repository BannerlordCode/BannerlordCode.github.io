---
title: "TournamentParticipantBrushWidget"
description: "TournamentParticipantBrushWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament. 12 public members (0 static)."
---

<!-- v147-skeleton -->
# TournamentParticipantBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class TournamentParticipantBrushWidget : BrushWidget`  
**Base:** `BrushWidget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentParticipantBrushWidget.cs`

## Overview

`TournamentParticipantBrushWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends BrushWidget, so the members it does not redeclare are inherited from there. 7 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `TournamentParticipantBrushWidget`.
- **Instance members** (11): `OnMousePressed`, `OnChildAdded`, `OnConnectedToRoot`, `OnLateUpdate`, `NameTextWidget`, `MatchState`, ….
- **Extension points** (4): `OnMousePressed`, `OnChildAdded`, `OnConnectedToRoot`, `OnLateUpdate`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnChildAdded` | method (override) | Overrides the base member. Takes 1 argument: `Widget child`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnConnectedToRoot` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnLateUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMousePressed` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `IsDead` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsMainHero` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `MainHeroTextBrush` | property | Instance entry point `Brush` property. Read it for current state; a declared setter writes that state in place. |
| `MatchState` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `NameTextWidget` | property | Instance entry point `TextWidget` property. Read it for current state; a declared setter writes that state in place. |
| `NormalTextBrush` | property | Instance entry point `Brush` property. Read it for current state; a declared setter writes that state in place. |
| `OnMission` | property | Instance entry point `bool` property. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `TournamentParticipantBrushWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public TournamentParticipantBrushWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: BrushWidget.
var tournamentParticipantBrushWidget = new TournamentParticipantBrushWidget(context);

// Lifecycle hooks this type declares:
//   protected override void OnMousePressed()
//   protected override void OnChildAdded(Widget child)
//   protected override void OnConnectedToRoot()
//   protected override void OnLateUpdate(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentParticipantBrushWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BrushWidget](../../gui/BrushWidget/) — `TaleWorlds.GauntletUI.BaseTypes`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.

Section: [api/mission-ext/](../) — the other types in this bucket.
