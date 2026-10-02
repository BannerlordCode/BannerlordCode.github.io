---
title: "GauntletBarberScreen"
description: "GauntletBarberScreen — class in SandBox.GauntletUI. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# GauntletBarberScreen

**Namespace:** `SandBox.GauntletUI`  
**Module:** `SandBox.GauntletUI`  
**Type:** `public class GauntletBarberScreen : ScreenBase, IGameStateListener, IFaceGeneratorScreen`  
**Base:** `ScreenBase, IGameStateListener, IFaceGeneratorScreen`  
**Source:** `SandBox.GauntletUI/GauntletBarberScreen.cs`

## Overview

`GauntletBarberScreen` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ScreenBase, IGameStateListener, IFaceGeneratorScreen, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GauntletBarberScreen`.
- **Instance members** (7): `Handler`, `OnFrameTick`, `OnExit`, `OnInitialize`, `OnFinalize`, `OnActivate`, ….
- **Extension points** (5): `OnFrameTick`, `OnInitialize`, `OnFinalize`, `OnActivate`, `OnDeactivate`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnActivate` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDeactivate` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFrameTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Handler` | property | Instance entry point `IFaceGeneratorHandler` property. Read it for current state; a declared setter writes that state in place. |
| `OnExit` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GauntletBarberScreen` | ctor | Instance entry point. Takes 1 argument: `BarberState state`. Returns ``. |

- Constructed as `public GauntletBarberScreen(BarberState state)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ScreenBase, IGameStateListener, IFaceGeneratorScreen.
var gauntletBarberScreen = new GauntletBarberScreen(state);

// Lifecycle hooks this type declares:
//   protected override void OnFrameTick(float dt)
//   public void OnExit()
//   protected override void OnInitialize()
//   protected override void OnFinalize()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.GauntletUI/GauntletBarberScreen.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BarberState](../../campaign/BarberState/) — `TaleWorlds.CampaignSystem.GameState`.
- [BodyGeneratorView](../../mission-ext/BodyGeneratorView/) — `TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator`.
- [ControlCharacterCreationStage](../../viewmodel/ControlCharacterCreationStage/) — `TaleWorlds.Core.ViewModelCollection`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [SceneLayer](../../engine/SceneLayer/) — `TaleWorlds.Engine.Screens`.

Section: [api/sandbox/](../) — the other types in this bucket.
