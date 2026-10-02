---
title: "GauntletBodyGeneratorScreen"
description: "GauntletBodyGeneratorScreen — class in TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# GauntletBodyGeneratorScreen

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`  
**Type:** `public class GauntletBodyGeneratorScreen : ScreenBase, IFaceGeneratorScreen`  
**Base:** `ScreenBase, IFaceGeneratorScreen`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/GauntletBodyGeneratorScreen.cs`

## Overview

`GauntletBodyGeneratorScreen` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ScreenBase, IFaceGeneratorScreen, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GauntletBodyGeneratorScreen`.
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
| `GauntletBodyGeneratorScreen` | ctor | Instance entry point. Takes 3 arguments: `BasicCharacterObject character`, `bool openedFromMultiplayer`, `IFaceGeneratorCustomFilter filter`. Returns ``. |

- Constructed as `public GauntletBodyGeneratorScreen(BasicCharacterObject character, bool openedFromMultiplayer, IFaceGeneratorCustomFilter filter)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ScreenBase, IFaceGeneratorScreen.
var gauntletBodyGeneratorScreen = new GauntletBodyGeneratorScreen(character, openedFromMultiplayer, filter);

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
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/GauntletBodyGeneratorScreen.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [FaceGeneratorScreen](../FaceGeneratorScreen/) — `TaleWorlds.MountAndBlade.View.Screens`.
- [BodyGeneratorView](../BodyGeneratorView/) — `TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator`.
- [ControlCharacterCreationStage](../../viewmodel/ControlCharacterCreationStage/) — `TaleWorlds.Core.ViewModelCollection`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [SceneLayer](../../engine/SceneLayer/) — `TaleWorlds.Engine.Screens`.

Section: [api/mission-ext/](../) — the other types in this bucket.
