---
title: "BasicContainer"
description: "BasicContainer — class in TaleWorlds.GauntletUI.BaseTypes. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# BasicContainer

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`  
**Module:** `TaleWorlds.GauntletUI`  
**Type:** `public class BasicContainer : Container`  
**Base:** `Container`  
**Source:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/BasicContainer.cs`

## Overview

`BasicContainer` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Container, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BasicContainer`.
- **Instance members** (5): `AcceptDropPredicate`, `GetDropGizmoPosition`, `GetIndexForDrop`, `IsDragHovering`, `OnChildSelected`.
- **Extension points** (5): `AcceptDropPredicate`, `GetDropGizmoPosition`, `GetIndexForDrop`, `IsDragHovering`, `OnChildSelected`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AcceptDropPredicate` | property (override) | Overrides the base member `Predicate<Widget>` property. Read it for current state; a declared setter writes that state in place. |
| `GetDropGizmoPosition` | method (override) | Overrides the base member. Takes 1 argument: `Vector2 draggedWidgetPosition`. Returns `Vector2`. Read path: prefer it over reaching for the backing store. |
| `GetIndexForDrop` | method (override) | Overrides the base member. Takes 1 argument: `Vector2 draggedWidgetPosition`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `IsDragHovering` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnChildSelected` | method (override) | Overrides the base member. Takes 1 argument: `Widget widget`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `BasicContainer` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public BasicContainer(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Container.
var basicContainer = new BasicContainer(context);

// Lifecycle hooks this type declares:
//   public override Predicate<Widget> AcceptDropPredicate
//   public override Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)
//   public override int GetIndexForDrop(Vector2 draggedWidgetPosition)
//   public override bool IsDragHovering
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/BasicContainer.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Container](../Container/) — `TaleWorlds.GauntletUI.BaseTypes`.
- [UIContext](../UIContext/) — `TaleWorlds.GauntletUI`.

Section: [api/gui/](../) — the other types in this bucket.
