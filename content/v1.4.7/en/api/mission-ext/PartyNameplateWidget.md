---
title: "PartyNameplateWidget"
description: "PartyNameplateWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate. 38 public members (0 static)."
---

<!-- v147-skeleton -->
# PartyNameplateWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class PartyNameplateWidget : Widget`  
**Base:** `Widget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyNameplateWidget.cs`

## Overview

`PartyNameplateWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Widget, so the members it does not redeclare are inherited from there. 29 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PartyNameplateWidget`.
- **Instance members** (33): `_animSpeedModifier`, `_armyFontSizeOffset`, `HeadGroupWidget`, `OnLateUpdate`, `UpdateNameplatesVisibility`, `UpdateNameplatesScreenPosition`, ….
- **Extension points** (3): `OnLateUpdate`, `UpdateNameplatesVisibility`, `UpdateNameplatesScreenPosition`.
- **Data and constants** (4): `_screenWidth`, `_screenHeight`, `_defaultNameplateFontSize`, `_tutorialAnimState`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnLateUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CanParley` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `DisorganizedWidget` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `HeadGroupWidget` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `HeadPosition` | property | Instance entry point `Vec2` property. Read it for current state; a declared setter writes that state in place. |
| `IsArmy` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsBehind` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsDisorganized` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsHigh` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsInArmy` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsInSettlement` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsInside` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsTargetedByTutorial` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsVisibleOnMap` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `NameplateExtraInfoTextWidget` | property | Instance entry point `TextWidget` property. Read it for current state; a declared setter writes that state in place. |
| `NameplateFullNameTextWidget` | property | Instance entry point `TextWidget` property. Read it for current state; a declared setter writes that state in place. |
| `NameplateLayoutListPanel` | property | Instance entry point `ListPanel` property. Read it for current state; a declared setter writes that state in place. |
| `NameplateTextWidget` | property | Instance entry point `TextWidget` property. Read it for current state; a declared setter writes that state in place. |
| `ParleyIconWidget` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `PartyBannerWidget` | property | Instance entry point `MaskedTextureWidget` property. Read it for current state; a declared setter writes that state in place. |
| `Position` | property | Instance entry point `Vec2` property. Read it for current state; a declared setter writes that state in place. |
| `ShouldShowFullName` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `SpeedIconWidget` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `SpeedTextWidget` | property | Instance entry point `TextWidget` property. Read it for current state; a declared setter writes that state in place. |

- Constructed as `public PartyNameplateWidget(UIContext context)`.

14 further public members follow the same patterns.
## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Widget.
var partyNameplateWidget = new PartyNameplateWidget(context);

// Lifecycle hooks this type declares:
//   protected override void OnLateUpdate(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyNameplateWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.

Section: [api/mission-ext/](../) — the other types in this bucket.
