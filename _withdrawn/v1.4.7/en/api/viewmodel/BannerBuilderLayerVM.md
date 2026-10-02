---
title: "BannerBuilderLayerVM"
description: "BannerBuilderLayerVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder. 14 public members (2 static)."
---

<!-- v147-skeleton -->
# BannerBuilderLayerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class BannerBuilderLayerVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderLayerVM.cs`

## Overview

`BannerBuilderLayerVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BannerBuilderLayerVM`.
- **Static entry points** (2): `SetLayerActions`, `ResetLayerActions`.
- **Instance members** (11): `Data`, `Refresh`, `ExecuteDelete`, `ExecuteSelection`, `SetLayerIndex`, `ExecuteSelectColor1`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ResetLayerActions` | method (static) | Static entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `SetLayerActions` | method (static) | Static entry point. Takes 5 arguments: `Action refresh`, `Action<BannerBuilderLayerVM> onSelection`, `Action<BannerBuilderLayerVM> onDeletion`, `Action<int`, …. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Data` | property | Instance entry point `BannerData` property. Read it for current state; a declared setter writes that state in place. |
| `ExecuteCenterSigil` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteDelete` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteResetSize` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteSelectColor1` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteSelectColor2` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteSelection` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteSwapColors` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteUpdateBanner` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Refresh` | method | Instance entry point. Takes no arguments. |
| `SetLayerIndex` | method | Instance entry point. Takes 1 argument: `int newIndex`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `BannerBuilderLayerVM` | ctor | Instance entry point. Takes 2 arguments: `BannerData data`, `int layerIndex`. Returns ``. |

- Constructed as `public BannerBuilderLayerVM(BannerData data, int layerIndex)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new BannerBuilderLayerVM(data, layerIndex);
// viewModel.Data = ...;   // BannerData

// Command the widget invokes on confirm:
viewModel.Refresh();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderLayerVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BannerBuilderColorItemVM](../BannerBuilderColorItemVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`.

Section: [api/viewmodel/](../) — the other types in this bucket.
