---
title: "MultiplayerLobbyAfterBattleExperiencePanelWidget"
description: "MultiplayerLobbyAfterBattleExperiencePanelWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# MultiplayerLobbyAfterBattleExperiencePanelWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class MultiplayerLobbyAfterBattleExperiencePanelWidget : Widget`  
**Base:** `Widget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattleExperiencePanelWidget.cs`

## Overview

`MultiplayerLobbyAfterBattleExperiencePanelWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Widget, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MultiplayerLobbyAfterBattleExperiencePanelWidget`.
- **Instance members** (4): `StartAnimation`, `Reset`, `RefreshState`, `NextLevelTextWidget`.
- **Extension points** (1): `RefreshState`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshState` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `NextLevelTextWidget` | property | Instance entry point `TextWidget` property. Read it for current state; a declared setter writes that state in place. |
| `Reset` | method | Instance entry point. Takes no arguments. |
| `StartAnimation` | method | Instance entry point. Takes 1 argument: `float animationDelay`. |
| `MultiplayerLobbyAfterBattleExperiencePanelWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public MultiplayerLobbyAfterBattleExperiencePanelWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Widget.
var multiplayerLobbyAfterBattleExperiencePanelWidget = new MultiplayerLobbyAfterBattleExperiencePanelWidget(context);

// Lifecycle hooks this type declares:
//   protected override void RefreshState()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattleExperiencePanelWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [MultiplayerScoreboardAnimatedFillBarWidget](../MultiplayerScoreboardAnimatedFillBarWidget/) — `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard`.

Section: [api/mission-ext/](../) — the other types in this bucket.
