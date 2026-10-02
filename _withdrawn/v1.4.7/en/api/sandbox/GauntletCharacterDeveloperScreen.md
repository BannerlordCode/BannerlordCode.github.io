---
title: "GauntletCharacterDeveloperScreen"
description: "GauntletCharacterDeveloperScreen — class in SandBox.GauntletUI. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# GauntletCharacterDeveloperScreen

**Namespace:** `SandBox.GauntletUI`  
**Module:** `SandBox.GauntletUI`  
**Type:** `public class GauntletCharacterDeveloperScreen : ScreenBase, IGameStateListener, IChangeableScreen, ICharacterDeveloperStateHandler`  
**Base:** `ScreenBase, IGameStateListener, IChangeableScreen, ICharacterDeveloperStateHandler`  
**Source:** `SandBox.GauntletUI/GauntletCharacterDeveloperScreen.cs`

## Overview

`GauntletCharacterDeveloperScreen` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ScreenBase, IGameStateListener, IChangeableScreen, ICharacterDeveloperStateHandler, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GauntletCharacterDeveloperScreen`.
- **Instance members** (2): `OnInitialize`, `OnFrameTick`.
- **Extension points** (2): `OnInitialize`, `OnFrameTick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFrameTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GauntletCharacterDeveloperScreen` | ctor | Instance entry point. Takes 1 argument: `CharacterDeveloperState clanState`. Returns ``. |

- Constructed as `public GauntletCharacterDeveloperScreen(CharacterDeveloperState clanState)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ScreenBase, IGameStateListener, IChangeableScreen, ICharacterDeveloperStateHandler.
var gauntletCharacterDeveloperScreen = new GauntletCharacterDeveloperScreen(clanState);

// Lifecycle hooks this type declares:
//   protected override void OnInitialize()
//   protected override void OnFrameTick(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.GauntletUI/GauntletCharacterDeveloperScreen.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CharacterDeveloperState](../../campaign/CharacterDeveloperState/) — `TaleWorlds.CampaignSystem.GameState`.
- [IChangeableScreen](../IChangeableScreen/) — `SandBox.View`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [UISoundsHelper](../../mission-ext/UISoundsHelper/) — `TaleWorlds.MountAndBlade.View`.
- [CharacterDeveloperVM](../../viewmodel/CharacterDeveloperVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`.
- [GameTextManager](../../core-extra/GameTextManager/) — `TaleWorlds.Core`.
- [InputRestrictions](../../gui/InputRestrictions/) — `TaleWorlds.ScreenSystem`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.
- [SelectorItemVM](../../viewmodel/SelectorItemVM/) — `TaleWorlds.Core.ViewModelCollection.Selector`.

Section: [api/sandbox/](../) — the other types in this bucket.
