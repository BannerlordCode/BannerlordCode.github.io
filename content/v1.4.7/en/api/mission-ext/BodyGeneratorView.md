---
title: "BodyGeneratorView"
description: "BodyGeneratorView — class in TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator. 12 public members (1 static)."
---

<!-- v147-skeleton -->
# BodyGeneratorView

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`  
**Type:** `public class BodyGeneratorView : IFaceGeneratorHandler`  
**Base:** `IFaceGeneratorHandler`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/BodyGeneratorView.cs`

## Overview

`BodyGeneratorView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends IFaceGeneratorHandler, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BodyGeneratorView`.
- **Static entry points** (1): `InitCamera`.
- **Instance members** (8): `DataSource`, `GauntletLayer`, `SceneLayer`, `BodyGen`, `ResetFaceToDefault`, `ReadyToRender`, ….
- **Data and constants** (2): `IsDressed`, `SkeletonType`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `InitCamera` | method (static) | Static entry point. Takes 2 arguments: `Camera camera`, `Vec3 cameraPosition`. Returns `MatrixFrame`. |
| `BodyGen` | property | Instance entry point `BodyGenerator` property. Read it for current state; a declared setter writes that state in place. |
| `DataSource` | property | Instance entry point `FaceGenVM` property. Read it for current state; a declared setter writes that state in place. |
| `GauntletLayer` | property | Instance entry point `GauntletLayer` property. Read it for current state; a declared setter writes that state in place. |
| `OnFinalize` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method | Instance entry point. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ReadyToRender` | method | Instance entry point. Takes no arguments. Returns `bool`. |
| `ResetFaceToDefault` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `SceneLayer` | property | Instance entry point `SceneLayer` property. Read it for current state; a declared setter writes that state in place. |
| `BodyGeneratorView` | ctor | Instance entry point. Takes 13 arguments: `ControlCharacterCreationStage affirmativeAction`, `TextObject affirmativeActionText`, `ControlCharacterCreationStage negativeAction`, `TextObject negativeActionText`, …. Returns ``. |
| `IsDressed` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `SkeletonType` | field | Instance entry point `SkeletonType` field — direct storage with no validation or notification. |

- Constructed as `public BodyGeneratorView(ControlCharacterCreationStage affirmativeAction, TextObject affirmativeActionText, ControlCharacterCreationStage negativeAction, TextObject negativeActionText, BasicCharacterObject character, bool openedFromMultiplayer, IFaceGeneratorCustomFilter filter, Equipment dressedEquipment = null, ControlCharacterCreationStageReturnInt getCurrentStageIndexAction = null, ControlCharacterCreationStageReturnInt getTotalStageCountAction = null, ControlCharacterCreationStageReturnInt getFurthestIndexAction = null, ControlCharacterCreationStageWithInt goToIndexAction = null, FaceGenHistory faceGenHistory = null)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: IFaceGeneratorHandler.
var bodyGeneratorView = new BodyGeneratorView(affirmativeAction, affirmativeActionText, negativeAction, negativeActionText, character, openedFromMultiplayer, filter, dressedEquipment, getCurrentStageIndexAction, getTotalStageCountAction, getFurthestIndexAction, goToIndexAction, faceGenHistory);
BodyGeneratorView.InitCamera(camera, cameraPosition);

// Lifecycle hooks this type declares:
//   public void OnTick(float dt)
//   public void OnFinalize()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/BodyGeneratorView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [FaceGenVM](../../viewmodel/FaceGenVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator`.
- [SceneLayer](../../engine/SceneLayer/) — `TaleWorlds.Engine.Screens`.
- [ControlCharacterCreationStage](../../viewmodel/ControlCharacterCreationStage/) — `TaleWorlds.Core.ViewModelCollection`.
- [ControlCharacterCreationStageReturnInt](../../viewmodel/ControlCharacterCreationStageReturnInt/) — `TaleWorlds.Core.ViewModelCollection`.
- [GameAxisKey](../../system/GameAxisKey/) — `TaleWorlds.InputSystem`.
- [InputRestrictions](../../gui/InputRestrictions/) — `TaleWorlds.ScreenSystem`.
- [AgentVisuals](../AgentVisuals/) — `TaleWorlds.MountAndBlade.View`.
- [CommandLineFunctionality](../../core-extra/CommandLineFunctionality/) — `TaleWorlds.Library`.
- [Utilities](../../engine/Utilities/) — `TaleWorlds.Engine`.
- [UISoundsHelper](../UISoundsHelper/) — `TaleWorlds.MountAndBlade.View`.

Section: [api/mission-ext/](../) — the other types in this bucket.
