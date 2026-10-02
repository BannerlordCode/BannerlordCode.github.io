---
title: "SingleplayerPersonalKillFeedItemWidget"
description: "SingleplayerPersonalKillFeedItemWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.Personal. 19 public members (0 static)."
---

<!-- v147-skeleton -->
# SingleplayerPersonalKillFeedItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.Personal`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class SingleplayerPersonalKillFeedItemWidget : Widget`  
**Base:** `Widget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/Personal/SingleplayerPersonalKillFeedItemWidget.cs`

## Overview

`SingleplayerPersonalKillFeedItemWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Widget, so the members it does not redeclare are inherited from there. 16 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `SingleplayerPersonalKillFeedItemWidget`.
- **Instance members** (18): `NotificationTypeIconWidget`, `NotificationBackgroundWidget`, `AmountTextWidget`, `MessageTextWidget`, `FadeInTime`, `StayTime`, ….
- **Extension points** (1): `OnUpdate`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Amount` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `AmountTextWidget` | property | Instance entry point `TextWidget` property. Read it for current state; a declared setter writes that state in place. |
| `FadeInTime` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `FadeOutTime` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `IsDamage` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsPaused` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `ItemType` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Message` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `MessageTextWidget` | property | Instance entry point `RichTextWidget` property. Read it for current state; a declared setter writes that state in place. |
| `NotificationBackgroundWidget` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `NotificationTypeIconWidget` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `SetSpeedModifier` | method | Instance entry point. Takes 1 argument: `float newSpeed`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `StayTime` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `TimeSinceCreation` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `TroopTypeIconBrush` | property | Instance entry point `Brush` property. Read it for current state; a declared setter writes that state in place. |
| `TroopTypeWidget` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `TypeID` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `SingleplayerPersonalKillFeedItemWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public SingleplayerPersonalKillFeedItemWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Widget.
var singleplayerPersonalKillFeedItemWidget = new SingleplayerPersonalKillFeedItemWidget(context);

// Lifecycle hooks this type declares:
//   protected override void OnUpdate(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/Personal/SingleplayerPersonalKillFeedItemWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.

Section: [api/mission-ext/](../) — the other types in this bucket.
