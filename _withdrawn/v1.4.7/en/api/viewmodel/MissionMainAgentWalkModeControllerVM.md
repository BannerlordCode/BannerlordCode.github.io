---
title: "MissionMainAgentWalkModeControllerVM"
description: "MissionMainAgentWalkModeControllerVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionMainAgentWalkModeControllerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class MissionMainAgentWalkModeControllerVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/WalkMode/MissionMainAgentWalkModeControllerVM.cs`

## Overview

`MissionMainAgentWalkModeControllerVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionMainAgentWalkModeControllerVM`.
- **Instance members** (6): `OnFinalize`, `AddWalkMode`, `SetEnabled`, `GetIsWalkModeActivatedDelegate`, `SetIsWalkModeActivatedDelegate`, `GetCanChangeWalkModeActivatedDelegate`.
- **Extension points** (1): `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `AddWalkMode` | method | Instance entry point. Takes 7 arguments: `string typeId`, `TextObject name`, `MissionMainAgentWalkModeControllerVM.GetIsWalkModeActivatedDelegate getIsActive`, `MissionMainAgentWalkModeControllerVM.SetIsWalkModeActivatedDelegate setIsActive`, …. Adds to the collection or relation this type owns. |
| `GetCanChangeWalkModeActivatedDelegate` | method | Instance entry point. Takes no arguments. Returns `delegate bool`. Read path: prefer it over reaching for the backing store. |
| `GetIsWalkModeActivatedDelegate` | method | Instance entry point. Takes no arguments. Returns `delegate bool`. Read path: prefer it over reaching for the backing store. |
| `SetEnabled` | method | Instance entry point. Takes 1 argument: `bool isEnabled`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetIsWalkModeActivatedDelegate` | method | Instance entry point. Takes 1 argument: `bool value`. Returns `delegate void`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `MissionMainAgentWalkModeControllerVM` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public MissionMainAgentWalkModeControllerVM()`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new MissionMainAgentWalkModeControllerVM();

// Command the widget invokes on confirm:
viewModel.OnFinalize();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/WalkMode/MissionMainAgentWalkModeControllerVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [WalkModeItemVM](../WalkModeItemVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode`.
- [HotKey](../../system/HotKey/) — `TaleWorlds.InputSystem`.
- [GameKey](../../system/GameKey/) — `TaleWorlds.InputSystem`.

Section: [api/viewmodel/](../) — the other types in this bucket.
