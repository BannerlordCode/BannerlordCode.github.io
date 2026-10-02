---
title: "BannerBuilderVM"
description: "BannerBuilderVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder. 20 public members (0 static)."
---

<!-- v147-skeleton -->
# BannerBuilderVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class BannerBuilderVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderVM.cs`

## Overview

`BannerBuilderVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BannerBuilderVM`.
- **Instance members** (17): `CurrentBanner`, `RefreshValues`, `ExecuteCancel`, `ExecuteDone`, `ExecuteAddDefaultLayer`, `ExecuteDuplicateCurrentLayer`, ….
- **Extension points** (2): `RefreshValues`, `OnFinalize`.
- **Data and constants** (2): `CurrentShieldIndex`, `ShieldRosterElement`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `CurrentBanner` | property | Instance entry point `Banner` property. Read it for current state; a declared setter writes that state in place. |
| `DeleteCurrentLayer` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `ExecuteAddDefaultLayer` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteCancel` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteCopyBannerCode` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteDone` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteDuplicateCurrentLayer` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteReorderToEndWithParameters` | method | Instance entry point. Takes 3 arguments: `BannerBuilderLayerVM layer`, `int index`, `string targetTag`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteReorderWithParameters` | method | Instance entry point. Takes 3 arguments: `BannerBuilderLayerVM layer`, `int index`, `string targetTag`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetBannerCode` | method | Instance entry point. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `SetBannerCode` | method | Instance entry point. Takes 1 argument: `string v`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetCancelInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetDoneInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ShieldSlotIndex` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `TranslateCurrentLayerWith` | method | Instance entry point. Takes 1 argument: `Vec2 moveDirection`. |
| `BannerBuilderVM` | ctor | Instance entry point. Takes 5 arguments: `BasicCharacterObject character`, `string initialKey`, `Action<bool> onExit`, `Action refresh`, …. Returns ``. |
| `CurrentShieldIndex` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `ShieldRosterElement` | field | Instance entry point `ItemRosterElement` field — direct storage with no validation or notification. |

- Constructed as `public BannerBuilderVM(BasicCharacterObject character, string initialKey, Action<bool> onExit, Action refresh, Action copyBannerCode)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new BannerBuilderVM(character, initialKey, onExit, refresh, copyBannerCode);
// viewModel.CurrentBanner = ...;   // Banner
// viewModel.ShieldSlotIndex = ...;   // int

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BannerBuilderCategoryVM](../BannerBuilderCategoryVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`.
- [BannerBuilderLayerVM](../BannerBuilderLayerVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`.
- [BannerBuilderColorSelectionVM](../BannerBuilderColorSelectionVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`.
- [BannerBuilderColorItemVM](../BannerBuilderColorItemVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`.
- [BannerImageIdentifier](../../core-extra/BannerImageIdentifier/) — `TaleWorlds.Core.ImageIdentifiers`.
- [BannerImageIdentifierVM](../BannerImageIdentifierVM/) — `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [BannerBuilderItemVM](../BannerBuilderItemVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [BannerViewModel](../BannerViewModel/) — `TaleWorlds.Core.ViewModelCollection.BannerEditor`.

Section: [api/viewmodel/](../) — the other types in this bucket.
