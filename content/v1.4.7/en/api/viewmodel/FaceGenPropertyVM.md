---
title: "FaceGenPropertyVM"
description: "FaceGenPropertyVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# FaceGenPropertyVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class FaceGenPropertyVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenPropertyVM.cs`

## Overview

`FaceGenPropertyVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `FaceGenPropertyVM`.
- **Instance members** (6): `KeyTimePoint`, `Reset`, `Randomize`, `RefreshValues`, `AddCommand`, `PrevValue`.
- **Extension points** (1): `RefreshValues`.
- **Data and constants** (1): `KeyNo`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `AddCommand` | method | Instance entry point. Takes no arguments. Adds to the collection or relation this type owns. |
| `KeyTimePoint` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `PrevValue` | property | Instance entry point `double` property. Read it for current state; a declared setter writes that state in place. |
| `Randomize` | method | Instance entry point. Takes no arguments. |
| `Reset` | method | Instance entry point. Takes no arguments. |
| `FaceGenPropertyVM` | ctor | Instance entry point. Takes 17 arguments: `int keyNo`, `double min`, `double max`, `TextObject name`, …. Returns ``. |
| `KeyNo` | field | Instance entry point `int` field — direct storage with no validation or notification. |

- Constructed as `public FaceGenPropertyVM(int keyNo, double min, double max, TextObject name, int keyTimePoint, int tabId, double value, float initialValue, Action<int, float, bool, bool> updateFace, Action addCommand, Action resetSliderPrevValuesCommand, bool isEnabled = true, bool isDiscrete = false, bool addCommandOnValueChange = true)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new FaceGenPropertyVM(keyNo, min, max, name, keyTimePoint, tabId, value, initialValue, theTarget, 0, true, updateFace, addCommand, resetSliderPrevValuesCommand, isEnabled, isDiscrete, addCommandOnValueChange);
// viewModel.KeyTimePoint = ...;   // int
// viewModel.PrevValue = ...;   // double

// Command the widget invokes on confirm:
viewModel.Reset();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenPropertyVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.

Section: [api/viewmodel/](../) — the other types in this bucket.
