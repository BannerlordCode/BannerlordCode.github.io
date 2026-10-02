---
title: "Container"
description: "Container — class in TaleWorlds.GauntletUI.BaseTypes. 19 public members (0 static)."
---

<!-- v147-skeleton -->
# Container

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`  
**Module:** `TaleWorlds.GauntletUI`  
**Type:** `public abstract class Container : Widget`  
**Base:** `Widget`  
**Source:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/Container.cs`

## Overview

`Container` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Widget, so the members it does not redeclare are inherited from there. 7 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `Container`.
- **Instance members** (17): `DefaultItemDescription`, `AcceptDropPredicate`, `GetDropGizmoPosition`, `GetIndexForDrop`, `IntValue`, `IsDragHovering`, ….
- **Extension points** (8): `AcceptDropPredicate`, `GetDropGizmoPosition`, `GetIndexForDrop`, `IsDragHovering`, `OnChildSelected`, `OnChildAdded`, ….
- **Data and constants** (1): `ShowSelection`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AcceptDropPredicate` | property (abstract) | Abstract — a subclass must supply it `Predicate<Widget>` property. Read it for current state; a declared setter writes that state in place. |
| `GetDropGizmoPosition` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `Vector2 draggedWidgetPosition`. Returns `Vector2`. Read path: prefer it over reaching for the backing store. |
| `GetIndexForDrop` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `Vector2 draggedWidgetPosition`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `IsDragHovering` | property (abstract) | Abstract — a subclass must supply it `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnChildSelected` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `Widget widget`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAfterChildRemoved` | method (override) | Overrides the base member. Takes 2 arguments: `Widget child`, `int previousIndexOfChild`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBeforeChildRemoved` | method (override) | Overrides the base member. Takes 1 argument: `Widget child`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnChildAdded` | method (override) | Overrides the base member. Takes 1 argument: `Widget child`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `AddItemDescription` | method | Instance entry point. Takes 1 argument: `ContainerItemDescription itemDescription`. Adds to the collection or relation this type owns. |
| `DefaultItemDescription` | property | Instance entry point `ContainerItemDescription` property. Read it for current state; a declared setter writes that state in place. |
| `DragHoverInsertionIndex` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `FindParentPanel` | method | Instance entry point. Takes no arguments. Returns `ScrollablePanel`. Read path: prefer it over reaching for the backing store. |
| `GetItemDescription` | method | Instance entry point. Takes 2 arguments: `string id`, `int index`. Returns `ContainerItemDescription`. Read path: prefer it over reaching for the backing store. |
| `IntValue` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `ItemAfterRemoveEventHandlers` | property | Instance entry point `List<Action<Widget>>` property. Read it for current state; a declared setter writes that state in place. |
| `SelectEventHandlers` | property | Instance entry point `List<Action<Widget>>` property. Read it for current state; a declared setter writes that state in place. |
| `OnDrop` | method | Protected — for subclasses only. Takes no arguments. Returns `internal override bool`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ShowSelection` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `Container` | ctor | Protected — for subclasses only. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `protected Container(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Widget.

// Lifecycle hooks this type declares:
//   protected internal override bool OnDrop()
//   public abstract void OnChildSelected(Widget widget)
//   protected override void OnChildAdded(Widget child)
//   protected override void OnBeforeChildRemoved(Widget child)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 8 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/Container.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [UIContext](../UIContext/) — `TaleWorlds.GauntletUI`.
- [ButtonWidget](../ButtonWidget/) — `TaleWorlds.GauntletUI.BaseTypes`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [ScrollablePanel](../ScrollablePanel/) — `TaleWorlds.GauntletUI.BaseTypes`.

Section: [api/gui/](../) — the other types in this bucket.
