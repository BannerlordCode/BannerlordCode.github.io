---
title: "SandBoxGauntletUISubModule"
description: "SandBoxGauntletUISubModule — class in SandBox.GauntletUI. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# SandBoxGauntletUISubModule

**Namespace:** `SandBox.GauntletUI`  
**Module:** `SandBox.GauntletUI`  
**Type:** `public class SandBoxGauntletUISubModule : MBSubModuleBase`  
**Base:** `MBSubModuleBase`  
**Source:** `SandBox.GauntletUI/SandBoxGauntletUISubModule.cs`

## Overview

`SandBoxGauntletUISubModule` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MBSubModuleBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `SandBoxGauntletUISubModule`.
- **Instance members** (5): `OnCampaignStart`, `OnGameStart`, `OnGameEnd`, `BeginGameStart`, `OnApplicationTick`.
- **Extension points** (5): `OnCampaignStart`, `OnGameStart`, `OnGameEnd`, `BeginGameStart`, `OnApplicationTick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `BeginGameStart` | method (override) | Overrides the base member. Takes 1 argument: `Game game`. |
| `OnCampaignStart` | method (override) | Overrides the base member. Takes 2 arguments: `Game game`, `object starterObject`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnGameEnd` | method (override) | Overrides the base member. Takes 1 argument: `Game game`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnApplicationTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnGameStart` | method (override) | Overrides the base member. Takes 2 arguments: `Game game`, `IGameStarter gameStarterObject`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SandBoxGauntletUISubModule` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public SandBoxGauntletUISubModule()`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MBSubModuleBase.
var sandBoxGauntletUISubModule = new SandBoxGauntletUISubModule();

// Lifecycle hooks this type declares:
//   public override void OnCampaignStart(Game game, object starterObject)
//   protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
//   public override void OnGameEnd(Game game)
//   public override void BeginGameStart(Game game)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.GauntletUI/SandBoxGauntletUISubModule.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameType](../../mission-ext/GameType/) — `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`.
- [IGameStarter](../../core-extra/IGameStarter/) — `TaleWorlds.Core`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.
- [GauntletSceneNotification](../../mission-ext/GauntletSceneNotification/) — `TaleWorlds.MountAndBlade.GauntletUI.SceneNotification`.
- [Utilities](../../engine/Utilities/) — `TaleWorlds.Engine`.

Section: [api/sandbox/](../) — the other types in this bucket.
