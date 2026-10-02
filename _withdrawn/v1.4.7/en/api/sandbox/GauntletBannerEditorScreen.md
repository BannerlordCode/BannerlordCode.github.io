---
title: "GauntletBannerEditorScreen"
description: "GauntletBannerEditorScreen — class in SandBox.GauntletUI.BannerEditor. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# GauntletBannerEditorScreen

**Namespace:** `SandBox.GauntletUI.BannerEditor`  
**Module:** `SandBox.GauntletUI`  
**Type:** `public class GauntletBannerEditorScreen : ScreenBase, IGameStateListener`  
**Base:** `ScreenBase, IGameStateListener`  
**Source:** `SandBox.GauntletUI/BannerEditor/GauntletBannerEditorScreen.cs`

## Overview

`GauntletBannerEditorScreen` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ScreenBase, IGameStateListener, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GauntletBannerEditorScreen`.
- **Instance members** (7): `OnFrameTick`, `OnDone`, `OnCancel`, `OnInitialize`, `OnFinalize`, `OnActivate`, ….
- **Extension points** (5): `OnFrameTick`, `OnInitialize`, `OnFinalize`, `OnActivate`, `OnDeactivate`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnActivate` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDeactivate` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFrameTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCancel` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDone` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GauntletBannerEditorScreen` | ctor | Instance entry point. Takes 1 argument: `BannerEditorState bannerEditorState`. Returns ``. |

- Constructed as `public GauntletBannerEditorScreen(BannerEditorState bannerEditorState)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ScreenBase, IGameStateListener.
var gauntletBannerEditorScreen = new GauntletBannerEditorScreen(bannerEditorState);

// Lifecycle hooks this type declares:
//   protected override void OnFrameTick(float dt)
//   public void OnDone()
//   public void OnCancel()
//   protected override void OnInitialize()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.GauntletUI/BannerEditor/GauntletBannerEditorScreen.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BannerEditorState](../../campaign/BannerEditorState/) — `TaleWorlds.CampaignSystem.GameState`.
- [BannerEditorView](../BannerEditorView/) — `SandBox.GauntletUI.BannerEditor`.
- [ControlCharacterCreationStage](../../viewmodel/ControlCharacterCreationStage/) — `TaleWorlds.Core.ViewModelCollection`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [SceneLayer](../../engine/SceneLayer/) — `TaleWorlds.Engine.Screens`.

Section: [api/sandbox/](../) — the other types in this bucket.
