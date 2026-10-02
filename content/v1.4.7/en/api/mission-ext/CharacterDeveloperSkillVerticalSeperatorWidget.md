---
title: "CharacterDeveloperSkillVerticalSeperatorWidget"
description: "CharacterDeveloperSkillVerticalSeperatorWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# CharacterDeveloperSkillVerticalSeperatorWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class CharacterDeveloperSkillVerticalSeperatorWidget : Widget`  
**Base:** `Widget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/CharacterDeveloperSkillVerticalSeperatorWidget.cs`

## Overview

`CharacterDeveloperSkillVerticalSeperatorWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Widget, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CharacterDeveloperSkillVerticalSeperatorWidget`.
- **Instance members** (1): `SkillValue`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `SkillValue` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `CharacterDeveloperSkillVerticalSeperatorWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public CharacterDeveloperSkillVerticalSeperatorWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Widget.
var characterDeveloperSkillVerticalSeperatorWidget = new CharacterDeveloperSkillVerticalSeperatorWidget(context);

// It declares no lifecycle hooks of its own; it only adds state and helpers.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/CharacterDeveloperSkillVerticalSeperatorWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.

Section: [api/mission-ext/](../) — the other types in this bucket.
