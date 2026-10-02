---
title: "PopUpBaseVM"
description: "PopUpBaseVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries. 12 public members (0 static)."
---

<!-- v147-skeleton -->
# PopUpBaseVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public abstract class PopUpBaseVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/PopUpBaseVM.cs`

## Overview

`PopUpBaseVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PopUpBaseVM`.
- **Instance members** (9): `ExecuteAffirmativeAction`, `ExecuteNegativeAction`, `OnTick`, `OnClearData`, `ForceRefreshKeyVisuals`, `CloseQuery`, ….
- **Extension points** (5): `ExecuteAffirmativeAction`, `ExecuteNegativeAction`, `OnTick`, `OnClearData`, `OnFinalize`.
- **Data and constants** (2): `_affirmativeAction`, `_negativeAction`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteAffirmativeAction` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteNegativeAction` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnClearData` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CloseQuery` | method | Instance entry point. Takes no arguments. |
| `ForceRefreshKeyVisuals` | method | Instance entry point. Takes no arguments. |
| `SetCancelInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetDoneInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `PopUpBaseVM` | ctor | Instance entry point. Takes 1 argument: `Action closeQuery`. Returns ``. Removes from or clears the collection this type owns. |
| `_affirmativeAction` | field | Protected — for subclasses only `Action` field — direct storage with no validation or notification. |
| `_negativeAction` | field | Protected — for subclasses only `Action` field — direct storage with no validation or notification. |

- Constructed as `public PopUpBaseVM(Action closeQuery)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new PopUpBaseVM(closeQuery);

// Command the widget invokes on confirm:
viewModel.ExecuteAffirmativeAction();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/PopUpBaseVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [InputKeyItemVM](../../sandbox/InputKeyItemVM/) — `SandBox.ViewModelCollection.Input`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [HotKey](../../system/HotKey/) — `TaleWorlds.InputSystem`.

Section: [api/viewmodel/](../) — the other types in this bucket.
