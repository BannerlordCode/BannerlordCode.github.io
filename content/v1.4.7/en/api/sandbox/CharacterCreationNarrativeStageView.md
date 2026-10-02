---
title: "CharacterCreationNarrativeStageView"
description: "CharacterCreationNarrativeStageView — class in SandBox.GauntletUI.CharacterCreation. 13 public members (0 static)."
---

<!-- v147-skeleton -->
# CharacterCreationNarrativeStageView

**Namespace:** `SandBox.GauntletUI.CharacterCreation`  
**Module:** `SandBox.GauntletUI`  
**Type:** `public class CharacterCreationNarrativeStageView : CharacterCreationStageViewBase`  
**Base:** `CharacterCreationStageViewBase`  
**Source:** `SandBox.GauntletUI/CharacterCreation/CharacterCreationNarrativeStageView.cs`

## Overview

`CharacterCreationNarrativeStageView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends CharacterCreationStageViewBase, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CharacterCreationNarrativeStageView`.
- **Instance members** (10): `CharacterLayer`, `SetGenericScene`, `Tick`, `NextStage`, `PreviousStage`, `OnFinalize`, ….
- **Extension points** (9): `SetGenericScene`, `Tick`, `NextStage`, `PreviousStage`, `OnFinalize`, `GetVirtualStageCount`, ….
- **Data and constants** (2): `_affirmativeActionText`, `_negativeActionText`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetLayers` | method (override) | Overrides the base member. Takes no arguments. Returns `IEnumerable<ScreenLayer>`. Read path: prefer it over reaching for the backing store. |
| `GetVirtualStageCount` | method (override) | Overrides the base member. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `LoadEscapeMenuMovie` | method (override) | Overrides the base member. Takes no arguments. |
| `NextStage` | method (override) | Overrides the base member. Takes no arguments. |
| `PreviousStage` | method (override) | Overrides the base member. Takes no arguments. |
| `ReleaseEscapeMenuMovie` | method (override) | Overrides the base member. Takes no arguments. |
| `SetGenericScene` | method (override) | Overrides the base member. Takes 1 argument: `Scene scene`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Tick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Called from the owner’s update loop — do not assume a frame boundary. |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CharacterLayer` | property | Instance entry point `SceneLayer` property. Read it for current state; a declared setter writes that state in place. |
| `CharacterCreationNarrativeStageView` | ctor | Instance entry point. Takes 10 arguments: `CharacterCreationManager characterCreationManager`, `ControlCharacterCreationStage affirmativeAction`, `TextObject affirmativeActionText`, `ControlCharacterCreationStage negativeAction`, …. Returns ``. |
| `_affirmativeActionText` | field | Protected — for subclasses only `TextObject` field — direct storage with no validation or notification. |
| `_negativeActionText` | field | Protected — for subclasses only `TextObject` field — direct storage with no validation or notification. |

- Constructed as `public CharacterCreationNarrativeStageView(CharacterCreationManager characterCreationManager, ControlCharacterCreationStage affirmativeAction, TextObject affirmativeActionText, ControlCharacterCreationStage negativeAction, TextObject negativeActionText, ControlCharacterCreationStage onRefresh, ControlCharacterCreationStageReturnInt getCurrentStageIndexAction, ControlCharacterCreationStageReturnInt getTotalStageCountAction, ControlCharacterCreationStageReturnInt getFurthestIndexAction, ControlCharacterCreationStageWithInt goToIndexAction)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: CharacterCreationStageViewBase.
var characterCreationNarrativeStageView = new CharacterCreationNarrativeStageView(characterCreationManager, affirmativeAction, affirmativeActionText, negativeAction, negativeActionText, onRefresh, getCurrentStageIndexAction, getTotalStageCountAction, getFurthestIndexAction, goToIndexAction);

// Lifecycle hooks this type declares:
//   public override void SetGenericScene(Scene scene)
//   public override void Tick(float dt)
//   public override void NextStage()
//   public override void PreviousStage()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 9 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.GauntletUI/CharacterCreation/CharacterCreationNarrativeStageView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CharacterCreationStageViewBase](../CharacterCreationStageViewBase/) — `SandBox.View.CharacterCreation`.
- [CharacterCreationContent](../../campaign/CharacterCreationContent/) — `TaleWorlds.CampaignSystem.CharacterCreationContent`.
- [SceneLayer](../../engine/SceneLayer/) — `TaleWorlds.Engine.Screens`.
- [CharacterCreationManager](../../campaign/CharacterCreationManager/) — `TaleWorlds.CampaignSystem.CharacterCreationContent`.
- [ControlCharacterCreationStage](../../viewmodel/ControlCharacterCreationStage/) — `TaleWorlds.Core.ViewModelCollection`.
- [ControlCharacterCreationStageReturnInt](../../viewmodel/ControlCharacterCreationStageReturnInt/) — `TaleWorlds.Core.ViewModelCollection`.
- [AgentVisuals](../../mission-ext/AgentVisuals/) — `TaleWorlds.MountAndBlade.View`.
- [InputRestrictions](../../gui/InputRestrictions/) — `TaleWorlds.ScreenSystem`.
- [BodyGeneratorView](../../mission-ext/BodyGeneratorView/) — `TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.

Section: [api/sandbox/](../) — the other types in this bucket.
