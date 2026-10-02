---
title: "HintVM"
description: "HintVM — class in TaleWorlds.Core.ViewModelCollection.Information. 3 public members (1 static)."
---

<!-- v147-skeleton -->
# HintVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information`  
**Module:** `TaleWorlds.Core.ViewModelCollection`  
**Type:** `public class HintVM : TooltipBaseVM`  
**Base:** `TooltipBaseVM`  
**Source:** `TaleWorlds.Core.ViewModelCollection/Information/HintVM.cs`

## Overview

`HintVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends TooltipBaseVM, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `HintVM`.
- **Static entry points** (1): `RefreshGenericHintTooltip`.
- **Instance members** (1): `OnFinalizeInternal`.
- **Extension points** (1): `OnFinalizeInternal`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshGenericHintTooltip` | method (static) | Static entry point. Takes 2 arguments: `HintVM hint`, `object[] args`. Called from the owner’s update loop — do not assume a frame boundary. |
| `OnFinalizeInternal` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `HintVM` | ctor | Instance entry point. Takes 2 arguments: `Type type`, `object[] args`. Returns ``. |

- Constructed as `public HintVM(Type type, object[] args)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new HintVM(type, args);

// Command the widget invokes on confirm:
viewModel.OnFinalizeInternal();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.Core.ViewModelCollection/Information/HintVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/viewmodel/](../) — the other types in this bucket.
