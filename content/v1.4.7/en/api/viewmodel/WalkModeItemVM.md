---
title: "WalkModeItemVM"
description: "WalkModeItemVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# WalkModeItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class WalkModeItemVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/WalkMode/WalkModeItemVM.cs`

## Overview

`WalkModeItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `WalkModeItemVM`.
- **Instance members** (5): `RefreshValues`, `OnFinalize`, `OnEnabled`, `ToggleState`, `SetToggleInputKey`.
- **Extension points** (2): `RefreshValues`, `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `OnEnabled` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SetToggleInputKey` | method | Instance entry point. Takes 2 arguments: `HotKey hotKey`, `bool isHotKeyConsoleOnly`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ToggleState` | method | Instance entry point. Takes no arguments. |
| `WalkModeItemVM` | ctor | Instance entry point. Takes 6 arguments: `string typeId`, `TextObject description`, `MissionMainAgentWalkModeControllerVM.GetIsWalkModeActivatedDelegate getIsActive`, `MissionMainAgentWalkModeControllerVM.SetIsWalkModeActivatedDelegate setIsActive`, …. Returns ``. |

- Constructed as `public WalkModeItemVM(string typeId, TextObject description, MissionMainAgentWalkModeControllerVM.GetIsWalkModeActivatedDelegate getIsActive, MissionMainAgentWalkModeControllerVM.SetIsWalkModeActivatedDelegate setIsActive, MissionMainAgentWalkModeControllerVM.GetCanChangeWalkModeActivatedDelegate canChangeActive, Action<WalkModeItemVM> onToggle)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new WalkModeItemVM(typeId, description, getIsActive, setIsActive, canChangeActive, onToggle);

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/WalkMode/WalkModeItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionMainAgentWalkModeControllerVM](../MissionMainAgentWalkModeControllerVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode`.
- [InputKeyItemVM](../../sandbox/InputKeyItemVM/) — `SandBox.ViewModelCollection.Input`.
- [HotKey](../../system/HotKey/) — `TaleWorlds.InputSystem`.
- [GameKey](../../system/GameKey/) — `TaleWorlds.InputSystem`.

Section: [api/viewmodel/](../) — the other types in this bucket.
