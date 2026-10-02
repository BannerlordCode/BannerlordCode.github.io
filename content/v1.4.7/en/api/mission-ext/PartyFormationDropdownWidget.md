---
title: "PartyFormationDropdownWidget"
description: "PartyFormationDropdownWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# PartyFormationDropdownWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class PartyFormationDropdownWidget : DropdownWidget`  
**Base:** `DropdownWidget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyFormationDropdownWidget.cs`

## Overview

`PartyFormationDropdownWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends DropdownWidget, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PartyFormationDropdownWidget`.
- **Instance members** (2): `OpenPanel`, `ClosePanel`.
- **Extension points** (2): `OpenPanel`, `ClosePanel`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ClosePanel` | method (override) | Overrides the base member. Takes no arguments. |
| `OpenPanel` | method (override) | Overrides the base member. Takes no arguments. |
| `PartyFormationDropdownWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public PartyFormationDropdownWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: DropdownWidget.
var partyFormationDropdownWidget = new PartyFormationDropdownWidget(context);

// Lifecycle hooks this type declares:
//   protected override void OpenPanel()
//   protected override void ClosePanel()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyFormationDropdownWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [DelayedStateChanger](../../gui/DelayedStateChanger/) — `TaleWorlds.GauntletUI.ExtraWidgets`.

Section: [api/mission-ext/](../) — the other types in this bucket.
