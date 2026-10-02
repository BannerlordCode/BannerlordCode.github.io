---
title: "VisualOrder"
description: "VisualOrder — class in TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual. 13 public members (0 static)."
---

<!-- v147-skeleton -->
# VisualOrder

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public abstract class VisualOrder`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrder.cs`

## Overview

`VisualOrder` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `VisualOrder`.
- **Instance members** (11): `StringId`, `IconId`, `GetIconId`, `GetName`, `IsTargeted`, `ExecuteOrder`, ….
- **Extension points** (7): `GetIconId`, `GetName`, `IsTargeted`, `ExecuteOrder`, `BeforeExecuteOrder`, `AfterExecuteOrder`, ….
- **Data and constants** (1): `_lastActiveState`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterExecuteOrder` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 2 arguments: `OrderController orderController`, `VisualOrderExecutionParameters executionParameters`. |
| `BeforeExecuteOrder` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 2 arguments: `OrderController orderController`, `VisualOrderExecutionParameters executionParameters`. |
| `ExecuteOrder` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `OrderController orderController`, `VisualOrderExecutionParameters executionParameters`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetName` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `OrderController orderController`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `IsTargeted` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `GetActiveState` | method | Instance entry point. Takes 1 argument: `OrderController orderController`. Returns `OrderState`. Read path: prefer it over reaching for the backing store. |
| `GetFormationHasOrder` | method | Instance entry point. Takes 1 argument: `Formation formation`. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetIconId` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `IconId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `OnGetFormationHasOrder` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `Formation formation`. Returns `bool?`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `StringId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `VisualOrder` | ctor | Instance entry point. Takes 1 argument: `string stringId`. Returns ``. |
| `_lastActiveState` | field | Protected — for subclasses only `OrderState` field — direct storage with no validation or notification. |

- Constructed as `public VisualOrder(string stringId)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new VisualOrder(stringId);
// viewModel.StringId = ...;   // string
// viewModel.IconId = ...;   // string

// Command the widget invokes on confirm:
viewModel.GetIconId();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 7 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrder.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [VisualOrderExecutionParameters](../VisualOrderExecutionParameters/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`.
- [OrderState](../OrderState/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`.

Section: [api/viewmodel/](../) — the other types in this bucket.
