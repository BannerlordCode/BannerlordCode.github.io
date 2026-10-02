---
title: "CharacterCreationScreen"
description: "CharacterCreationScreen — class in SandBox.View.CharacterCreation. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# CharacterCreationScreen

**Namespace:** `SandBox.View.CharacterCreation`  
**Module:** `SandBox.View`  
**Type:** `public class CharacterCreationScreen : ScreenBase, ICharacterCreationStateHandler, IGameStateListener`  
**Base:** `ScreenBase, ICharacterCreationStateHandler, IGameStateListener`  
**Source:** `SandBox.View/CharacterCreation/CharacterCreationScreen.cs`

## Overview

`CharacterCreationScreen` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ScreenBase, ICharacterCreationStateHandler, IGameStateListener, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CharacterCreationScreen`.
- **Instance members** (1): `OnFrameTick`.
- **Extension points** (1): `OnFrameTick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFrameTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CharacterCreationScreen` | ctor | Instance entry point. Takes 1 argument: `CharacterCreationState characterCreationState`. Returns ``. |

- Constructed as `public CharacterCreationScreen(CharacterCreationState characterCreationState)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ScreenBase, ICharacterCreationStateHandler, IGameStateListener.
var characterCreationScreen = new CharacterCreationScreen(characterCreationState);

// Lifecycle hooks this type declares:
//   protected override void OnFrameTick(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/CharacterCreation/CharacterCreationScreen.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CharacterCreationContent](../../campaign/CharacterCreationContent/) — `TaleWorlds.CampaignSystem.CharacterCreationContent`.
- [CharacterCreationManager](../../campaign/CharacterCreationManager/) — `TaleWorlds.CampaignSystem.CharacterCreationContent`.
- [ControlCharacterCreationStage](../../viewmodel/ControlCharacterCreationStage/) — `TaleWorlds.Core.ViewModelCollection`.
- [ControlCharacterCreationStageReturnInt](../../viewmodel/ControlCharacterCreationStageReturnInt/) — `TaleWorlds.Core.ViewModelCollection`.
- [CharacterCreationStageViewBase](../CharacterCreationStageViewBase/) — `SandBox.View.CharacterCreation`.
- [CharacterCreationStageViewAttribute](../CharacterCreationStageViewAttribute/) — `SandBox.View.CharacterCreation`.

Section: [api/sandbox/](../) — the other types in this bucket.
