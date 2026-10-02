---
title: "CraftingOrderPopupVM"
description: "CraftingOrderPopupVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# CraftingOrderPopupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class CraftingOrderPopupVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderPopupVM.cs`

## Overview

`CraftingOrderPopupVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CraftingOrderPopupVM`.
- **Instance members** (6): `HasOrders`, `HasEnabledOrders`, `RefreshOrders`, `SelectOrder`, `ExecuteOpenPopup`, `ExecuteCloseWithoutSelection`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ExecuteCloseWithoutSelection` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteOpenPopup` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `HasEnabledOrders` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `HasOrders` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `RefreshOrders` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `SelectOrder` | method | Instance entry point. Takes 1 argument: `CraftingOrderItemVM order`. |
| `CraftingOrderPopupVM` | ctor | Instance entry point. Takes 4 arguments: `Action<CraftingOrderItemVM> onDoneAction`, `Func<CraftingAvailableHeroItemVM> getCurrentCraftingHero`, `Func<CraftingOrder`, `IEnumerable<CraftingStatData>> getOrderStatDatas`. Returns ``. |

- Constructed as `public CraftingOrderPopupVM(Action<CraftingOrderItemVM> onDoneAction, Func<CraftingAvailableHeroItemVM> getCurrentCraftingHero, Func<CraftingOrder, IEnumerable<CraftingStatData>> getOrderStatDatas)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new CraftingOrderPopupVM(onDoneAction, getCurrentCraftingHero, theTarget, getOrderStatDatas);
// viewModel.HasOrders = ...;   // bool
// viewModel.HasEnabledOrders = ...;   // bool

// Command the widget invokes on confirm:
viewModel.RefreshOrders();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderPopupVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CraftingOrderItemVM](../CraftingOrderItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order`.
- [CraftingAvailableHeroItemVM](../CraftingAvailableHeroItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`.
- [CraftingOrder](../../campaign/CraftingOrder/) — `TaleWorlds.CampaignSystem.CraftingSystem`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [CraftingCampaignBehavior](../../campaign-ext/CraftingCampaignBehavior/) — `TaleWorlds.CampaignSystem.CampaignBehaviors`.
- [CampaignUIHelper](../CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent/) — `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`.

Section: [api/viewmodel/](../) — the other types in this bucket.
