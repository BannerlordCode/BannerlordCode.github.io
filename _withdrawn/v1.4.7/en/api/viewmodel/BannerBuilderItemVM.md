---
title: "BannerBuilderItemVM"
description: "BannerBuilderItemVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# BannerBuilderItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class BannerBuilderItemVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderItemVM.cs`

## Overview

`BannerBuilderItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BannerBuilderItemVM`.
- **Instance members** (3): `IconData`, `BackgroundTextureID`, `ExecuteSelection`.
- **Data and constants** (3): `_meshID`, `_meshIDAsString`, `_isSelected`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `BackgroundTextureID` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `ExecuteSelection` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `IconData` | property | Instance entry point `BannerIconData` property. Read it for current state; a declared setter writes that state in place. |
| `BannerBuilderItemVM` | ctor | Instance entry point. Takes 3 arguments: `int key`, `BannerIconData iconData`, `Action<BannerBuilderItemVM> onItemSelection`. Returns ``. |
| `_isSelected` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `_meshID` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `_meshIDAsString` | field | Instance entry point `string` field — direct storage with no validation or notification. |

- Constructed as `public BannerBuilderItemVM(int key, BannerIconData iconData, Action<BannerBuilderItemVM> onItemSelection)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new BannerBuilderItemVM(key, iconData, onItemSelection);
// viewModel.IconData = ...;   // BannerIconData
// viewModel.BackgroundTextureID = ...;   // string

// Command the widget invokes on confirm:
viewModel.ExecuteSelection();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/viewmodel/](../) — the other types in this bucket.
