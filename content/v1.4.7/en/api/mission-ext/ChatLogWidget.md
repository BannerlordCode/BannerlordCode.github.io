---
title: "ChatLogWidget"
description: "ChatLogWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# ChatLogWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class ChatLogWidget : Widget`  
**Base:** `Widget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogWidget.cs`

## Overview

`ChatLogWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Widget, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ChatLogWidget`.
- **Instance members** (3): `OnUpdate`, `RegisterMultiLineElement`, `RemoveMultiLineElement`.
- **Extension points** (1): `OnUpdate`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RegisterMultiLineElement` | method | Instance entry point. Takes 1 argument: `ChatCollapsableListPanel element`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `RemoveMultiLineElement` | method | Instance entry point. Takes 1 argument: `ChatCollapsableListPanel element`. Removes from or clears the collection this type owns. |
| `ChatLogWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public ChatLogWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Widget.
var chatLogWidget = new ChatLogWidget(context);

// Lifecycle hooks this type declares:
//   protected override void OnUpdate(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [ScrollablePanel](../../gui/ScrollablePanel/) — `TaleWorlds.GauntletUI.BaseTypes`.
- [ChatCollapsableListPanel](../ChatCollapsableListPanel/) — `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat`.

Section: [api/mission-ext/](../) — the other types in this bucket.
