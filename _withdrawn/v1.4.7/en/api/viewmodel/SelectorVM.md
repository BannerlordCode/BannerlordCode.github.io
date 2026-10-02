---
title: "SelectorVM"
description: "SelectorVM — class in TaleWorlds.Core.ViewModelCollection.Selector. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# SelectorVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Selector`  
**Module:** `TaleWorlds.Core.ViewModelCollection`  
**Type:** `public class SelectorVM<T> : ViewModel where T : SelectorItemVM`  
**Source:** `TaleWorlds.Core.ViewModelCollection/Selector/SelectorVM.cs`

## Overview

`SelectorVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `SelectorVM`, `SelectorVM`.
- **Instance members** (8): `Refresh`, `SetOnChangeAction`, `AddItem`, `ExecuteRandomize`, `ExecuteSelectNextItem`, `ExecuteSelectPreviousItem`, ….
- **Extension points** (1): `RefreshValues`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `AddItem` | method | Instance entry point. Takes 1 argument: `T item`. Adds to the collection or relation this type owns. |
| `ExecuteRandomize` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteSelectNextItem` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteSelectPreviousItem` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetCurrentItem` | method | Instance entry point. Takes no arguments. Returns `T`. Read path: prefer it over reaching for the backing store. |
| `Refresh` | method | Instance entry point. Takes 3 arguments: `IEnumerable<string> list`, `int selectedIndex`, `Action<SelectorVM<T>> onChange`. |
| `SetOnChangeAction` | method | Instance entry point. Takes 1 argument: `Action<SelectorVM<T>> onChange`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SelectorVM` | ctor | Instance entry point. Takes 2 arguments: `int selectedIndex`, `Action<SelectorVM<T>> onChange`. Returns ``. |
| `SelectorVM` | ctor | Instance entry point. Takes 3 arguments: `IEnumerable<string> list`, `int selectedIndex`, `Action<SelectorVM<T>> onChange`. Returns ``. |

- Constructed as `public SelectorVM(int selectedIndex, Action<SelectorVM<T>> onChange)`.
- Constructed as `public SelectorVM(IEnumerable<string> list, int selectedIndex, Action<SelectorVM<T>> onChange)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new SelectorVM(selectedIndex, onChange);

// Command the widget invokes on confirm:
viewModel.Refresh(list, selectedIndex, onChange);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.Core.ViewModelCollection/Selector/SelectorVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [SelectorItemVM](../SelectorItemVM/) — `TaleWorlds.Core.ViewModelCollection.Selector`.

Section: [api/viewmodel/](../) — the other types in this bucket.
