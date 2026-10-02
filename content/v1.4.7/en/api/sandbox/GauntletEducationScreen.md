---
title: "GauntletEducationScreen"
description: "GauntletEducationScreen — class in SandBox.GauntletUI. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# GauntletEducationScreen

**Namespace:** `SandBox.GauntletUI`  
**Module:** `SandBox.GauntletUI`  
**Type:** `public class GauntletEducationScreen : ScreenBase, IGameStateListener`  
**Base:** `ScreenBase, IGameStateListener`  
**Source:** `SandBox.GauntletUI/GauntletEducationScreen.cs`

## Overview

`GauntletEducationScreen` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ScreenBase, IGameStateListener, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GauntletEducationScreen`.
- **Instance members** (2): `CharacterLayer`, `OnFrameTick`.
- **Extension points** (1): `OnFrameTick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFrameTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CharacterLayer` | property | Instance entry point `SceneLayer` property. Read it for current state; a declared setter writes that state in place. |
| `GauntletEducationScreen` | ctor | Instance entry point. Takes 1 argument: `EducationState educationState`. Returns ``. |

- Constructed as `public GauntletEducationScreen(EducationState educationState)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ScreenBase, IGameStateListener.
var gauntletEducationScreen = new GauntletEducationScreen(educationState);

// Lifecycle hooks this type declares:
//   protected override void OnFrameTick(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.GauntletUI/GauntletEducationScreen.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EducationState](../../campaign/EducationState/) — `TaleWorlds.CampaignSystem.GameState`.
- [SceneLayer](../../engine/SceneLayer/) — `TaleWorlds.Engine.Screens`.
- [AgentVisuals](../../mission-ext/AgentVisuals/) — `TaleWorlds.MountAndBlade.View`.
- [EducationCampaignBehavior](../../campaign-ext/EducationCampaignBehavior/) — `TaleWorlds.CampaignSystem.CampaignBehaviors`.
- [UISoundsHelper](../../mission-ext/UISoundsHelper/) — `TaleWorlds.MountAndBlade.View`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.
- [InputRestrictions](../../gui/InputRestrictions/) — `TaleWorlds.ScreenSystem`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [AgeModel](../../campaign-ext/AgeModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.
- [EscapeMenuVM](../../viewmodel/EscapeMenuVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu`.

Section: [api/sandbox/](../) — the other types in this bucket.
