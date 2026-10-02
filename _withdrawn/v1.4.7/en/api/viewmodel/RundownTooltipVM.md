---
title: "RundownTooltipVM"
description: "RundownTooltipVM — class in TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip. 8 public members (1 static)."
---

<!-- v147-skeleton -->
# RundownTooltipVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip`  
**Module:** `TaleWorlds.Core.ViewModelCollection`  
**Type:** `public class RundownTooltipVM : TooltipBaseVM`  
**Base:** `TooltipBaseVM`  
**Source:** `TaleWorlds.Core.ViewModelCollection/Information/RundownTooltip/RundownTooltipVM.cs`

## Overview

`RundownTooltipVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends TooltipBaseVM, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `RundownTooltipVM`.
- **Static entry points** (1): `RefreshGenericRundownTooltip`.
- **Instance members** (5): `IsInitializedProperly`, `RefreshValues`, `OnPeriodicRefresh`, `OnIsExtendedChanged`, `ValueCategorization`.
- **Extension points** (3): `RefreshValues`, `OnPeriodicRefresh`, `OnIsExtendedChanged`.
- **Data and constants** (1): `CurrentExpectedChange`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshGenericRundownTooltip` | method (static) | Static entry point. Takes 2 arguments: `RundownTooltipVM rundownTooltip`, `object[] args`. Called from the owner’s update loop — do not assume a frame boundary. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `OnIsExtendedChanged` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPeriodicRefresh` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `IsInitializedProperly` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `ValueCategorization` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `RundownTooltipVM` | ctor | Instance entry point. Takes 2 arguments: `Type invokedType`, `object[] invokedArgs`. Returns ``. |
| `CurrentExpectedChange` | field | Instance entry point `float` field — direct storage with no validation or notification. |

- Constructed as `public RundownTooltipVM(Type invokedType, object[] invokedArgs)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new RundownTooltipVM(invokedType, invokedArgs);
viewModel.IsInitializedProperly = true;
// viewModel.ValueCategorization = ...;   // enum

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.Core.ViewModelCollection/Information/RundownTooltip/RundownTooltipVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [RundownLineVM](../RundownLineVM/) — `TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip`.

Section: [api/viewmodel/](../) — the other types in this bucket.
