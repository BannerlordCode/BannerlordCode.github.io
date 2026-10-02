---
title: "BannerEditorVM"
description: "BannerEditorVM — class in TaleWorlds.CampaignSystem.ViewModelCollection. 17 public members (0 static)."
---

<!-- v147-skeleton -->
# BannerEditorVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class BannerEditorVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/BannerEditorVM.cs`

## Overview

`BannerEditorVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BannerEditorVM`.
- **Instance members** (14): `Character`, `RefreshValues`, `RefreshSelectedColorsAndSigils`, `SetClanRelatedRules`, `ExecuteSwitchColors`, `ExecuteDone`, ….
- **Extension points** (2): `RefreshValues`, `OnFinalize`.
- **Data and constants** (2): `CurrentShieldIndex`, `ShieldRosterElement`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `AddCameraControlInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Adds to the collection or relation this type owns. |
| `AddCameraControlInputKey` | method | Instance entry point. Takes 2 arguments: `GameAxisKey gameAxisKey`, `TextObject keyName`. Adds to the collection or relation this type owns. |
| `Character` | property | Instance entry point `BasicCharacterObject` property. Read it for current state; a declared setter writes that state in place. |
| `ExecuteCancel` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteDone` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteGoToIndex` | method | Instance entry point. Takes 1 argument: `int index`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteSwitchColors` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshSelectedColorsAndSigils` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `SetCancelInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetClanRelatedRules` | method | Instance entry point. Takes 1 argument: `bool canChangeBackgroundColor`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetDoneInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ShieldSlotIndex` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `BannerEditorVM` | ctor | Instance entry point. Takes 8 arguments: `BasicCharacterObject character`, `Banner banner`, `Action<bool> onExit`, `Action refresh`, …. Returns ``. |
| `CurrentShieldIndex` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `ShieldRosterElement` | field | Instance entry point `ItemRosterElement` field — direct storage with no validation or notification. |

- Constructed as `public BannerEditorVM(BasicCharacterObject character, Banner banner, Action<bool> onExit, Action refresh, int currentStageIndex, int totalStagesCount, int furthestIndex, Action<int> goToIndex)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new BannerEditorVM(character, banner, onExit, refresh, currentStageIndex, totalStagesCount, furthestIndex, goToIndex);
// viewModel.Character = ...;   // BasicCharacterObject
// viewModel.ShieldSlotIndex = ...;   // int

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/BannerEditorVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BannerIconVM](../BannerIconVM/) — `TaleWorlds.Core.ViewModelCollection.BannerEditor`.
- [BannerColorVM](../BannerColorVM/) — `TaleWorlds.Core.ViewModelCollection.BannerEditor`.
- [BannerViewModel](../BannerViewModel/) — `TaleWorlds.Core.ViewModelCollection.BannerEditor`.
- [InputKeyItemVM](../../sandbox/InputKeyItemVM/) — `SandBox.ViewModelCollection.Input`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [HotKey](../../system/HotKey/) — `TaleWorlds.InputSystem`.
- [GameKey](../../system/GameKey/) — `TaleWorlds.InputSystem`.
- [GameAxisKey](../../system/GameAxisKey/) — `TaleWorlds.InputSystem`.

Section: [api/viewmodel/](../) — the other types in this bucket.
