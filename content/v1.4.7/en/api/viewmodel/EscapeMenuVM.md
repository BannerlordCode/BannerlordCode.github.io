---
title: "EscapeMenuVM"
description: "EscapeMenuVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# EscapeMenuVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class EscapeMenuVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/EscapeMenuVM.cs`

## Overview

`EscapeMenuVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `EscapeMenuVM`.
- **Instance members** (3): `RefreshValues`, `Tick`, `RefreshItems`.
- **Extension points** (2): `RefreshValues`, `Tick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `Tick` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `float dt`. Called from the owner’s update loop — do not assume a frame boundary. |
| `RefreshItems` | method | Instance entry point. Takes 1 argument: `IEnumerable<EscapeMenuItemVM> items`. Called from the owner’s update loop — do not assume a frame boundary. |
| `EscapeMenuVM` | ctor | Instance entry point. Takes 2 arguments: `IEnumerable<EscapeMenuItemVM> items`, `TextObject title`. Returns ``. |

- Constructed as `public EscapeMenuVM(IEnumerable<EscapeMenuItemVM> items, TextObject title = null)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new EscapeMenuVM(items, title);

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/EscapeMenuVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EscapeMenuItemVM](../EscapeMenuItemVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu`.
- [GameTipsVM](../GameTipsVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu`.

Section: [api/viewmodel/](../) — the other types in this bucket.
