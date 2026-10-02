---
title: "MissionOrderCallbacks"
description: "MissionOrderCallbacks — struct in TaleWorlds.MountAndBlade.ViewModelCollection.Order. 14 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionOrderCallbacks

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public struct MissionOrderCallbacks`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderCallbacks.cs`

## Overview

`MissionOrderCallbacks` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Instance members** (6): `OnRefreshVisualsDelegate`, `OnToggleActivateOrderStateDelegate`, `OnTransferTroopsFinishedDelegate`, `OnBeforeOrderDelegate`, `ToggleOrderPositionVisibilityDelegate`, `GetOrderExecutionParametersDelegate`.
- **Data and constants** (8): `RefreshVisuals`, `OnActivateToggleOrder`, `OnDeactivateToggleOrder`, `OnTransferTroopsFinished`, `OnBeforeOrder`, `ToggleMissionInputs`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetOrderExecutionParametersDelegate` | method | Instance entry point. Takes no arguments. Returns `delegate VisualOrderExecutionParameters`. Read path: prefer it over reaching for the backing store. |
| `OnBeforeOrderDelegate` | method | Instance entry point. Takes no arguments. Returns `delegate void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRefreshVisualsDelegate` | method | Instance entry point. Takes no arguments. Returns `delegate void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnToggleActivateOrderStateDelegate` | method | Instance entry point. Takes no arguments. Returns `delegate void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTransferTroopsFinishedDelegate` | method | Instance entry point. Takes no arguments. Returns `delegate void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ToggleOrderPositionVisibilityDelegate` | method | Instance entry point. Takes 1 argument: `bool value`. Returns `delegate void`. |
| `GetVisualOrderExecutionParameters` | field | Instance entry point `MissionOrderCallbacks.GetOrderExecutionParametersDelegate` field — direct storage with no validation or notification. |
| `OnActivateToggleOrder` | field | Instance entry point `MissionOrderCallbacks.OnToggleActivateOrderStateDelegate` field — direct storage with no validation or notification. |
| `OnBeforeOrder` | field | Instance entry point `MissionOrderCallbacks.OnBeforeOrderDelegate` field — direct storage with no validation or notification. |
| `OnDeactivateToggleOrder` | field | Instance entry point `MissionOrderCallbacks.OnToggleActivateOrderStateDelegate` field — direct storage with no validation or notification. |
| `OnTransferTroopsFinished` | field | Instance entry point `MissionOrderCallbacks.OnTransferTroopsFinishedDelegate` field — direct storage with no validation or notification. |
| `RefreshVisuals` | field | Instance entry point `MissionOrderCallbacks.OnRefreshVisualsDelegate` field — direct storage with no validation or notification. |
| `SetSuspendTroopPlacer` | field | Instance entry point `MissionOrderCallbacks.ToggleOrderPositionVisibilityDelegate` field — direct storage with no validation or notification. |
| `ToggleMissionInputs` | field | Instance entry point `Action<bool>` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
// The engine or the owning screen constructs the view model; bind it from the layer.

// Command the widget invokes on confirm:
viewModel.OnRefreshVisualsDelegate();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderCallbacks.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [VisualOrderExecutionParameters](../VisualOrderExecutionParameters/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`.

Section: [api/viewmodel/](../) — the other types in this bucket.
