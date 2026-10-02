---
title: "ClanPartyRoleSelectionToggleWidget"
description: "ClanPartyRoleSelectionToggleWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# ClanPartyRoleSelectionToggleWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class ClanPartyRoleSelectionToggleWidget : ButtonWidget`  
**Base:** `ButtonWidget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanPartyRoleSelectionToggleWidget.cs`

## Overview

`ClanPartyRoleSelectionToggleWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ButtonWidget, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ClanPartyRoleSelectionToggleWidget`.
- **Instance members** (2): `OnLateUpdate`, `OnClick`.
- **Extension points** (2): `OnLateUpdate`, `OnClick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnLateUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnClick` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `Widget widget`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ClanPartyRoleSelectionToggleWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public ClanPartyRoleSelectionToggleWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ButtonWidget.
var clanPartyRoleSelectionToggleWidget = new ClanPartyRoleSelectionToggleWidget(context);

// Lifecycle hooks this type declares:
//   protected override void OnLateUpdate(float dt)
//   protected virtual void OnClick(Widget widget)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanPartyRoleSelectionToggleWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ButtonWidget](../../gui/ButtonWidget/) — `TaleWorlds.GauntletUI.BaseTypes`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [ClanPartyRoleSelectionPopupWidget](../ClanPartyRoleSelectionPopupWidget/) — `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan`.

Section: [api/mission-ext/](../) — the other types in this bucket.
