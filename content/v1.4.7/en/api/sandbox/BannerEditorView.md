---
title: "BannerEditorView"
description: "BannerEditorView — class in SandBox.GauntletUI.BannerEditor. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# BannerEditorView

**Namespace:** `SandBox.GauntletUI.BannerEditor`  
**Module:** `SandBox.GauntletUI`  
**Type:** `public class BannerEditorView`  
**Source:** `SandBox.GauntletUI/BannerEditor/BannerEditorView.cs`

## Overview

`BannerEditorView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BannerEditorView`.
- **Instance members** (9): `GauntletLayer`, `DataSource`, `Banner`, `SceneLayer`, `OnTick`, `OnFinalize`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Banner` | property | Instance entry point `Banner` property. Read it for current state; a declared setter writes that state in place. |
| `DataSource` | property | Instance entry point `BannerEditorVM` property. Read it for current state; a declared setter writes that state in place. |
| `Exit` | method | Instance entry point. Takes 1 argument: `bool isCancel`. |
| `GauntletLayer` | property | Instance entry point `GauntletLayer` property. Read it for current state; a declared setter writes that state in place. |
| `GoToIndex` | method | Instance entry point. Takes 1 argument: `int index`. |
| `OnDeactivate` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFinalize` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method | Instance entry point. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SceneLayer` | property | Instance entry point `SceneLayer` property. Read it for current state; a declared setter writes that state in place. |
| `BannerEditorView` | ctor | Instance entry point. Takes 11 arguments: `BasicCharacterObject character`, `Banner banner`, `ControlCharacterCreationStage affirmativeAction`, `TextObject affirmativeActionText`, …. Returns ``. |

- Constructed as `public BannerEditorView(BasicCharacterObject character, Banner banner, ControlCharacterCreationStage affirmativeAction, TextObject affirmativeActionText, ControlCharacterCreationStage negativeAction, TextObject negativeActionText, ControlCharacterCreationStage onRefresh = null, ControlCharacterCreationStageReturnInt getCurrentStageIndexAction = null, ControlCharacterCreationStageReturnInt getTotalStageCountAction = null, ControlCharacterCreationStageReturnInt getFurthestIndexAction = null, ControlCharacterCreationStageWithInt goToIndexAction = null)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
var bannerEditorView = new BannerEditorView(character, banner, affirmativeAction, affirmativeActionText, negativeAction, negativeActionText, onRefresh, getCurrentStageIndexAction, getTotalStageCountAction, getFurthestIndexAction, goToIndexAction);

// Lifecycle hooks this type declares:
//   public void OnTick(float dt)
//   public void OnFinalize()
//   public void OnDeactivate()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `SandBox.GauntletUI/BannerEditor/BannerEditorView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BannerEditorVM](../../viewmodel/BannerEditorVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [SceneLayer](../../engine/SceneLayer/) — `TaleWorlds.Engine.Screens`.
- [ControlCharacterCreationStage](../../viewmodel/ControlCharacterCreationStage/) — `TaleWorlds.Core.ViewModelCollection`.
- [ControlCharacterCreationStageReturnInt](../../viewmodel/ControlCharacterCreationStageReturnInt/) — `TaleWorlds.Core.ViewModelCollection`.
- [BannerEditorTextureCache](../../mission-ext/BannerEditorTextureCache/) — `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`.
- [InputRestrictions](../../gui/InputRestrictions/) — `TaleWorlds.ScreenSystem`.
- [GameAxisKey](../../system/GameAxisKey/) — `TaleWorlds.InputSystem`.
- [AgentVisuals](../../mission-ext/AgentVisuals/) — `TaleWorlds.MountAndBlade.View`.
- [CursorType](../../gui/CursorType/) — `TaleWorlds.ScreenSystem`.
- [CaravanPartyComponent](../../campaign/CaravanPartyComponent/) — `TaleWorlds.CampaignSystem.Party.PartyComponents`.

Section: [api/sandbox/](../) — the other types in this bucket.
