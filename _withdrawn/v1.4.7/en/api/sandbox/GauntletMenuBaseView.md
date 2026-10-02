---
title: "GauntletMenuBaseView"
description: "GauntletMenuBaseView — class in SandBox.GauntletUI.Menu. 12 public members (0 static)."
---

<!-- v147-skeleton -->
# GauntletMenuBaseView

**Namespace:** `SandBox.GauntletUI.Menu`  
**Module:** `SandBox.GauntletUI`  
**Type:** `public class GauntletMenuBaseView : MenuView`  
**Base:** `MenuView`  
**Source:** `SandBox.GauntletUI/Menu/GauntletMenuBaseView.cs`

## Overview

`GauntletMenuBaseView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MenuView, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Instance members** (12): `GameMenuDataSource`, `OnInitialize`, `OnActivate`, `OnDeactivate`, `OnResume`, `OnMenuContextRefreshed`, ….
- **Extension points** (11): `OnInitialize`, `OnActivate`, `OnDeactivate`, `OnResume`, `OnMenuContextRefreshed`, `OnFinalize`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnActivate` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBackgroundMeshNameSet` | method (override) | Overrides the base member. Takes 1 argument: `string name`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDeactivate` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFrameTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMapConversationActivated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMapConversationDeactivated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMenuContextRefreshed` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMenuContextUpdated` | method (override) | Overrides the base member. Takes 1 argument: `MenuContext newMenuContext`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnResume` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GameMenuDataSource` | property | Instance entry point `GameMenuVM` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MenuView.

// Lifecycle hooks this type declares:
//   protected override void OnInitialize()
//   protected override void OnActivate()
//   protected override void OnDeactivate()
//   protected override void OnResume()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 11 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.GauntletUI/Menu/GauntletMenuBaseView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameMenu](../../campaign/GameMenu/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [MenuBaseView](../MenuBaseView/) — `SandBox.View.Menu`.
- [GameMenuVM](../../viewmodel/GameMenuVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu`.
- [GameKey](../../system/GameKey/) — `TaleWorlds.InputSystem`.
- [InputRestrictions](../../gui/InputRestrictions/) — `TaleWorlds.ScreenSystem`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [GauntletMovieIdentifier](../../engine/GauntletMovieIdentifier/) — `TaleWorlds.Engine.GauntletUI`.

Section: [api/sandbox/](../) — the other types in this bucket.
