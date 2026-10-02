---
title: "GameMenuTroopSelectionVM"
description: "GameMenuTroopSelectionVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection. 20 public members (0 static)."
---

<!-- v147-skeleton -->
# GameMenuTroopSelectionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class GameMenuTroopSelectionVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/GameMenuTroopSelectionVM.cs`

## Overview

`GameMenuTroopSelectionVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GameMenuTroopSelectionVM`.
- **Instance members** (17): `RefreshValues`, `RefreshDoneHint`, `InitList`, `OnCurrentSelectedAmountChange`, `BuildSelectedTroopRoster`, `OnDone`, ….
- **Extension points** (7): `RefreshValues`, `RefreshDoneHint`, `InitList`, `OnCurrentSelectedAmountChange`, `OnDone`, `GetWarningMessageOnDone`, ….
- **Data and constants** (2): `IsFiveStackModifierActive`, `IsEntireStackModifierActive`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ExecuteCancel` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteClearSelection` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteDone` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteReset` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetWarningMessageOnDone` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `InitList` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. |
| `OnCurrentSelectedAmountChange` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDone` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshDoneHint` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `SetCancelInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotkey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetDoneInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotkey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetResetInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotkey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `BuildSelectedTroopRoster` | method | Protected — for subclasses only. Takes no arguments. Returns `TroopRoster`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `GameMenuTroopSelectionVM` | ctor | Instance entry point. Takes 7 arguments: `TroopRoster fullRoster`, `TroopRoster initialSelections`, `Func<CharacterObject`, `bool> canChangeChangeStatusOfTroop`, …. Returns ``. |
| `GetAvailableSelectableTroopCount` | method | Protected — for subclasses only. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `UpdateMaxSelectableTroopCount` | method | Protected — for subclasses only. Takes 1 argument: `int maxValue`. Called from the owner’s update loop — do not assume a frame boundary. |
| `IsEntireStackModifierActive` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `IsFiveStackModifierActive` | field | Instance entry point `bool` field — direct storage with no validation or notification. |

- Constructed as `public GameMenuTroopSelectionVM(TroopRoster fullRoster, TroopRoster initialSelections, Func<CharacterObject, bool> canChangeChangeStatusOfTroop, Action<TroopRoster> onDone, int maxSelectableTroopCount, int minSelectableTroopCount)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new GameMenuTroopSelectionVM(fullRoster, initialSelections, theTarget, canChangeChangeStatusOfTroop, onDone, maxSelectableTroopCount, minSelectableTroopCount);

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 7 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/GameMenuTroopSelectionVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameMenu](../../campaign/GameMenu/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [TroopRoster](../../campaign/TroopRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [TroopSelectionItemVM](../TroopSelectionItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection`.
- [TroopItemComparer](../TroopItemComparer/) — `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [InputKeyItemVM](../../sandbox/InputKeyItemVM/) — `SandBox.ViewModelCollection.Input`.
- [HotKey](../../system/HotKey/) — `TaleWorlds.InputSystem`.

Section: [api/viewmodel/](../) — the other types in this bucket.
