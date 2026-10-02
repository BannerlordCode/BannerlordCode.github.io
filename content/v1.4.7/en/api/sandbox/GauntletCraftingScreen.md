---
title: "GauntletCraftingScreen"
description: "GauntletCraftingScreen — class in SandBox.GauntletUI. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# GauntletCraftingScreen

**Namespace:** `SandBox.GauntletUI`  
**Module:** `SandBox.GauntletUI`  
**Type:** `public class GauntletCraftingScreen : ScreenBase, ICraftingStateHandler, IGameStateListener`  
**Base:** `ScreenBase, ICraftingStateHandler, IGameStateListener`  
**Source:** `SandBox.GauntletUI/GauntletCraftingScreen.cs`

## Overview

`GauntletCraftingScreen` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ScreenBase, ICraftingStateHandler, IGameStateListener, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GauntletCraftingScreen`.
- **Instance members** (6): `Initialize`, `OnInitialize`, `OnFinalize`, `OnFrameTick`, `OnCraftingLogicInitialized`, `OnCraftingLogicRefreshed`.
- **Extension points** (3): `OnInitialize`, `OnFinalize`, `OnFrameTick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFrameTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Initialize` | method | Instance entry point. Takes no arguments. |
| `OnCraftingLogicInitialized` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCraftingLogicRefreshed` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GauntletCraftingScreen` | ctor | Instance entry point. Takes 1 argument: `CraftingState craftingState`. Returns ``. |

- Constructed as `public GauntletCraftingScreen(CraftingState craftingState)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ScreenBase, ICraftingStateHandler, IGameStateListener.
var gauntletCraftingScreen = new GauntletCraftingScreen(craftingState);

// Lifecycle hooks this type declares:
//   protected override void OnInitialize()
//   protected override void OnFinalize()
//   protected override void OnFrameTick(float dt)
//   public void OnCraftingLogicInitialized()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.GauntletUI/GauntletCraftingScreen.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CraftingState](../../campaign/CraftingState/) — `TaleWorlds.CampaignSystem.GameState`.
- [ModuleHelper](../../modulemanager/ModuleHelper/) — `TaleWorlds.ModuleManager`.
- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.
- [Crafting](../../core-extra/Crafting/) — `TaleWorlds.Core`.
- [InputRestrictions](../../gui/InputRestrictions/) — `TaleWorlds.ScreenSystem`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [UISoundsHelper](../../mission-ext/UISoundsHelper/) — `TaleWorlds.MountAndBlade.View`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.
- [GameAxisKey](../../system/GameAxisKey/) — `TaleWorlds.InputSystem`.

Section: [api/sandbox/](../) — the other types in this bucket.
