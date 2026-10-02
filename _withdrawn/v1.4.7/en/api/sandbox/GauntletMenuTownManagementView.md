---
title: "GauntletMenuTownManagementView"
description: "GauntletMenuTownManagementView — class in SandBox.GauntletUI.Menu. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# GauntletMenuTownManagementView

**Namespace:** `SandBox.GauntletUI.Menu`  
**Module:** `SandBox.GauntletUI`  
**Type:** `public class GauntletMenuTownManagementView : MenuView`  
**Base:** `MenuView`  
**Source:** `SandBox.GauntletUI/Menu/GauntletMenuTownManagementView.cs`

## Overview

`GauntletMenuTownManagementView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MenuView, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Instance members** (5): `OnInitialize`, `OnFinalize`, `OnFrameTick`, `OnMapConversationActivated`, `OnMapConversationDeactivated`.
- **Extension points** (5): `OnInitialize`, `OnFinalize`, `OnFrameTick`, `OnMapConversationActivated`, `OnMapConversationDeactivated`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFrameTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMapConversationActivated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMapConversationDeactivated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MenuView.

// Lifecycle hooks this type declares:
//   protected override void OnInitialize()
//   protected override void OnFinalize()
//   protected override void OnFrameTick(float dt)
//   protected override void OnMapConversationActivated()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.GauntletUI/Menu/GauntletMenuTownManagementView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameMenu](../../campaign/GameMenu/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [MenuTownManagementView](../MenuTownManagementView/) — `SandBox.View.Menu`.
- [InputRestrictions](../../gui/InputRestrictions/) — `TaleWorlds.ScreenSystem`.
- [MapScreen](../MapScreen/) — `SandBox.View.Map`.
- [UISoundsHelper](../../mission-ext/UISoundsHelper/) — `TaleWorlds.MountAndBlade.View`.
- [SettlementBuildingProjectVM](../../viewmodel/SettlementBuildingProjectVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`.
- [SpriteCategory](../../gui/SpriteCategory/) — `TaleWorlds.TwoDimension`.

Section: [api/sandbox/](../) — the other types in this bucket.
