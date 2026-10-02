---
title: "GauntletBannerBuilderScreen"
description: "GauntletBannerBuilderScreen — class in TaleWorlds.MountAndBlade.GauntletUI. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# GauntletBannerBuilderScreen

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`  
**Type:** `public class GauntletBannerBuilderScreen : ScreenBase, IGameStateListener`  
**Base:** `ScreenBase, IGameStateListener`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletBannerBuilderScreen.cs`

## Overview

`GauntletBannerBuilderScreen` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ScreenBase, IGameStateListener, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GauntletBannerBuilderScreen`.
- **Instance members** (5): `SceneLayer`, `OnInitialize`, `OnFrameTick`, `OnFinalize`, `Exit`.
- **Extension points** (3): `OnInitialize`, `OnFrameTick`, `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFrameTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Exit` | method | Instance entry point. Takes 1 argument: `bool isCancel`. |
| `SceneLayer` | property | Instance entry point `SceneLayer` property. Read it for current state; a declared setter writes that state in place. |
| `GauntletBannerBuilderScreen` | ctor | Instance entry point. Takes 1 argument: `BannerBuilderState state`. Returns ``. |

- Constructed as `public GauntletBannerBuilderScreen(BannerBuilderState state)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ScreenBase, IGameStateListener.
var gauntletBannerBuilderScreen = new GauntletBannerBuilderScreen(state);

// Lifecycle hooks this type declares:
//   protected override void OnInitialize()
//   protected override void OnFrameTick(float dt)
//   protected override void OnFinalize()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI/GauntletBannerBuilderScreen.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [SceneLayer](../../engine/SceneLayer/) — `TaleWorlds.Engine.Screens`.
- [AgentVisuals](../AgentVisuals/) — `TaleWorlds.MountAndBlade.View`.
- [BannerBuilderVM](../../viewmodel/BannerBuilderVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`.
- [InputRestrictions](../../gui/InputRestrictions/) — `TaleWorlds.ScreenSystem`.
- [BannerBuilderScreen](../BannerBuilderScreen/) — `TaleWorlds.MountAndBlade.View.Screens`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [BannerDebugInfo](../BannerDebugInfo/) — `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.
- [CursorType](../../gui/CursorType/) — `TaleWorlds.ScreenSystem`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.

Section: [api/mission-ext/](../) — the other types in this bucket.
