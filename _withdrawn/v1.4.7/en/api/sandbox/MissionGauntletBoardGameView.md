---
title: "MissionGauntletBoardGameView"
description: "MissionGauntletBoardGameView — class in SandBox.GauntletUI.Missions. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionGauntletBoardGameView

**Namespace:** `SandBox.GauntletUI.Missions`  
**Module:** `SandBox.GauntletUI`  
**Type:** `public class MissionGauntletBoardGameView : MissionView, IBoardGameHandler`  
**Base:** `MissionView, IBoardGameHandler`  
**Source:** `SandBox.GauntletUI/Missions/MissionGauntletBoardGameView.cs`

## Overview

`MissionGauntletBoardGameView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MissionView, IBoardGameHandler, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionGauntletBoardGameView`.
- **Instance members** (9): `_missionBoardGameHandler`, `Camera`, `OnMissionScreenInitialize`, `OnMissionScreenActivate`, `OnEscape`, `OnMissionScreenTick`, ….
- **Extension points** (7): `OnMissionScreenInitialize`, `OnMissionScreenActivate`, `OnEscape`, `OnMissionScreenTick`, `OnMissionScreenFinalize`, `OnPhotoModeActivated`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnEscape` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenActivate` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPhotoModeActivated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPhotoModeDeactivated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `_missionBoardGameHandler` | property | Instance entry point `MissionBoardGameLogic` property. Read it for current state; a declared setter writes that state in place. |
| `Camera` | property | Instance entry point `Camera` property. Read it for current state; a declared setter writes that state in place. |
| `MissionGauntletBoardGameView` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public MissionGauntletBoardGameView()`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MissionView, IBoardGameHandler.
var missionGauntletBoardGameView = new MissionGauntletBoardGameView();

// Lifecycle hooks this type declares:
//   public override void OnMissionScreenInitialize()
//   public override void OnMissionScreenActivate()
//   public override bool OnEscape()
//   public override void OnMissionScreenTick(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 7 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.GauntletUI/Missions/MissionGauntletBoardGameView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BoardGameView](../../mission-ext/BoardGameView/) — `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer`.
- [IBoardGameHandler](../../mission-ext/IBoardGameHandler/) — `TaleWorlds.MountAndBlade.Source.Missions.Handlers`.
- [MissionBoardGameLogic](../MissionBoardGameLogic/) — `SandBox.BoardGames.MissionLogics`.
- [SceneLayer](../../engine/SceneLayer/) — `TaleWorlds.Engine.Screens`.
- [BoardGameVM](../BoardGameVM/) — `SandBox.ViewModelCollection.BoardGame`.
- [InputRestrictions](../../gui/InputRestrictions/) — `TaleWorlds.ScreenSystem`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [GauntletMovieIdentifier](../../engine/GauntletMovieIdentifier/) — `TaleWorlds.Engine.GauntletUI`.
- [SpriteCategory](../../gui/SpriteCategory/) — `TaleWorlds.TwoDimension`.

Section: [api/sandbox/](../) — the other types in this bucket.
