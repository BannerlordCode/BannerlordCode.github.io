---
title: "CraftingHistoryVM"
description: "CraftingHistoryVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign. 11 public members (0 static)."
---

<!-- v147-skeleton -->
# CraftingHistoryVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class CraftingHistoryVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingHistoryVM.cs`

## Overview

`CraftingHistoryVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CraftingHistoryVM`.
- **Instance members** (10): `RefreshValues`, `OnFinalize`, `RefreshAvailability`, `ExecuteOpen`, `ExecuteCancel`, `ExecuteDone`, ….
- **Extension points** (2): `RefreshValues`, `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `CancelKey` | property | Instance entry point `InputKeyItemVM` property. Capability check used to gate an operation. |
| `DoneKey` | property | Instance entry point `InputKeyItemVM` property. Read it for current state; a declared setter writes that state in place. |
| `ExecuteCancel` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteDone` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteOpen` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshAvailability` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `SetCancelKey` | method | Instance entry point. Takes 1 argument: `HotKey hotkey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetDoneKey` | method | Instance entry point. Takes 1 argument: `HotKey hotkey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `CraftingHistoryVM` | ctor | Instance entry point. Takes 4 arguments: `Crafting crafting`, `ICraftingCampaignBehavior craftingBehavior`, `Func<CraftingOrder> getActiveOrder`, `Action<WeaponDesignSelectorVM> onDone`. Returns ``. |

- Constructed as `public CraftingHistoryVM(Crafting crafting, ICraftingCampaignBehavior craftingBehavior, Func<CraftingOrder> getActiveOrder, Action<WeaponDesignSelectorVM> onDone)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new CraftingHistoryVM(crafting, craftingBehavior, getActiveOrder, onDone);
// viewModel.CancelKey = ...;   // InputKeyItemVM
// viewModel.DoneKey = ...;   // InputKeyItemVM

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingHistoryVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Crafting](../../core-extra/Crafting/) — `TaleWorlds.Core`.
- [CraftingOrder](../../campaign/CraftingOrder/) — `TaleWorlds.CampaignSystem.CraftingSystem`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [HotKey](../../system/HotKey/) — `TaleWorlds.InputSystem`.
- [InputKeyItemVM](../../sandbox/InputKeyItemVM/) — `SandBox.ViewModelCollection.Input`.

Section: [api/viewmodel/](../) — the other types in this bucket.
