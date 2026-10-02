---
title: "GauntletClanScreen"
description: "GauntletClanScreen — class in SandBox.GauntletUI. 15 public members (0 static)."
---

<!-- v147-skeleton -->
# GauntletClanScreen

**Namespace:** `SandBox.GauntletUI`  
**Module:** `SandBox.GauntletUI`  
**Type:** `public class GauntletClanScreen : ScreenBase, IGameStateListener`  
**Base:** `ScreenBase, IGameStateListener`  
**Source:** `SandBox.GauntletUI/GauntletClanScreen.cs`

## Overview

`GauntletClanScreen` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ScreenBase, IGameStateListener, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GauntletClanScreen`.
- **Instance members** (10): `_dataSource`, `CreateDataSource`, `OnInitialize`, `OnFrameTick`, `IsRoleSelectionPopupActive`, `OpenPartyScreenForNewClanParty`, ….
- **Extension points** (4): `CreateDataSource`, `OnInitialize`, `OnFrameTick`, `OnActivate`.
- **Data and constants** (4): `_gauntletLayer`, `_clanCategory`, `_clanState`, `_isCreatingPartyWithMembers`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnActivate` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFrameTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `_dataSource` | property | Instance entry point `ClanManagementVM` property. Read it for current state; a declared setter writes that state in place. |
| `CreateDataSource` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `ClanManagementVM`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CloseClanScreen` | method | Protected — for subclasses only. Takes no arguments. |
| `GauntletClanScreen` | ctor | Instance entry point. Takes 1 argument: `ClanState clanState`. Returns ``. |
| `IsRoleSelectionPopupActive` | method | Protected — for subclasses only. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OpenBannerEditorWithPlayerClan` | method | Protected — for subclasses only. Takes no arguments. |
| `OpenPartyScreenForNewClanParty` | method | Protected — for subclasses only. Takes 1 argument: `Hero hero`. |
| `ShowHeroOnMap` | method | Protected — for subclasses only. Takes 1 argument: `Hero hero`. |
| `_clanCategory` | field | Protected — for subclasses only `SpriteCategory` field — direct storage with no validation or notification. |
| `_clanState` | field | Protected — for subclasses only `ClanState` field — direct storage with no validation or notification. |
| `_gauntletLayer` | field | Protected — for subclasses only `GauntletLayer` field — direct storage with no validation or notification. |
| `_isCreatingPartyWithMembers` | field | Protected — for subclasses only `bool` field — direct storage with no validation or notification. |

- Constructed as `public GauntletClanScreen(ClanState clanState)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ScreenBase, IGameStateListener.
var gauntletClanScreen = new GauntletClanScreen(clanState);

// Lifecycle hooks this type declares:
//   protected override void OnInitialize()
//   protected override void OnFrameTick(float dt)
//   protected override void OnActivate()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.GauntletUI/GauntletClanScreen.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ClanState](../../campaign/ClanState/) — `TaleWorlds.CampaignSystem.GameState`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [UISoundsHelper](../../mission-ext/UISoundsHelper/) — `TaleWorlds.MountAndBlade.View`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.
- [BannerEditorState](../../campaign/BannerEditorState/) — `TaleWorlds.CampaignSystem.GameState`.
- [InputRestrictions](../../gui/InputRestrictions/) — `TaleWorlds.ScreenSystem`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [MapScreen](../MapScreen/) — `SandBox.View.Map`.
- [SpriteCategory](../../gui/SpriteCategory/) — `TaleWorlds.TwoDimension`.

Section: [api/sandbox/](../) — the other types in this bucket.
