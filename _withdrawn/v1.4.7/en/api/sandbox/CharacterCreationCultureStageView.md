---
title: "CharacterCreationCultureStageView"
description: "CharacterCreationCultureStageView — class in SandBox.GauntletUI.CharacterCreation. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# CharacterCreationCultureStageView

**Namespace:** `SandBox.GauntletUI.CharacterCreation`  
**Module:** `SandBox.GauntletUI`  
**Type:** `public class CharacterCreationCultureStageView : CharacterCreationStageViewBase`  
**Base:** `CharacterCreationStageViewBase`  
**Source:** `SandBox.GauntletUI/CharacterCreation/CharacterCreationCultureStageView.cs`

## Overview

`CharacterCreationCultureStageView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends CharacterCreationStageViewBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CharacterCreationCultureStageView`.
- **Instance members** (8): `OnFinalize`, `Tick`, `NextStage`, `PreviousStage`, `GetVirtualStageCount`, `GetLayers`, ….
- **Extension points** (8): `OnFinalize`, `Tick`, `NextStage`, `PreviousStage`, `GetVirtualStageCount`, `GetLayers`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetLayers` | method (override) | Overrides the base member. Takes no arguments. Returns `IEnumerable<ScreenLayer>`. Read path: prefer it over reaching for the backing store. |
| `GetVirtualStageCount` | method (override) | Overrides the base member. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `LoadEscapeMenuMovie` | method (override) | Overrides the base member. Takes no arguments. |
| `NextStage` | method (override) | Overrides the base member. Takes no arguments. |
| `PreviousStage` | method (override) | Overrides the base member. Takes no arguments. |
| `ReleaseEscapeMenuMovie` | method (override) | Overrides the base member. Takes no arguments. |
| `Tick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Called from the owner’s update loop — do not assume a frame boundary. |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CharacterCreationCultureStageView` | ctor | Instance entry point. Takes 10 arguments: `CharacterCreationManager characterCreationManager`, `ControlCharacterCreationStage affirmativeAction`, `TextObject affirmativeActionText`, `ControlCharacterCreationStage negativeAction`, …. Returns ``. |

- Constructed as `public CharacterCreationCultureStageView(CharacterCreationManager characterCreationManager, ControlCharacterCreationStage affirmativeAction, TextObject affirmativeActionText, ControlCharacterCreationStage negativeAction, TextObject negativeActionText, ControlCharacterCreationStage onRefresh, ControlCharacterCreationStageReturnInt getCurrentStageIndexAction, ControlCharacterCreationStageReturnInt getTotalStageCountAction, ControlCharacterCreationStageReturnInt getFurthestIndexAction, ControlCharacterCreationStageWithInt goToIndexAction)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: CharacterCreationStageViewBase.
var characterCreationCultureStageView = new CharacterCreationCultureStageView(characterCreationManager, affirmativeAction, affirmativeActionText, negativeAction, negativeActionText, onRefresh, getCurrentStageIndexAction, getTotalStageCountAction, getFurthestIndexAction, goToIndexAction);

// Lifecycle hooks this type declares:
//   protected override void OnFinalize()
//   public override void Tick(float dt)
//   public override void NextStage()
//   public override void PreviousStage()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 8 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.GauntletUI/CharacterCreation/CharacterCreationCultureStageView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CharacterCreationStageViewBase](../CharacterCreationStageViewBase/) — `SandBox.View.CharacterCreation`.
- [CharacterCreationContent](../../campaign/CharacterCreationContent/) — `TaleWorlds.CampaignSystem.CharacterCreationContent`.
- [CharacterCreationCultureStage](../../campaign/CharacterCreationCultureStage/) — `TaleWorlds.CampaignSystem.CharacterCreationContent`.
- [CharacterCreationManager](../../campaign/CharacterCreationManager/) — `TaleWorlds.CampaignSystem.CharacterCreationContent`.
- [ControlCharacterCreationStage](../../viewmodel/ControlCharacterCreationStage/) — `TaleWorlds.Core.ViewModelCollection`.
- [ControlCharacterCreationStageReturnInt](../../viewmodel/ControlCharacterCreationStageReturnInt/) — `TaleWorlds.Core.ViewModelCollection`.
- [InputRestrictions](../../gui/InputRestrictions/) — `TaleWorlds.ScreenSystem`.
- [CharacterCreationCultureStageVM](../../viewmodel/CharacterCreationCultureStageVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`.
- [CharacterCreationBannerEditorStage](../../campaign/CharacterCreationBannerEditorStage/) — `TaleWorlds.CampaignSystem.CharacterCreationContent`.
- [UISoundsHelper](../../mission-ext/UISoundsHelper/) — `TaleWorlds.MountAndBlade.View`.

Section: [api/sandbox/](../) — the other types in this bucket.
