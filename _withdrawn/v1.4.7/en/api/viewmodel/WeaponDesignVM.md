---
title: "WeaponDesignVM"
description: "WeaponDesignVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign. 28 public members (0 static)."
---

<!-- v147-skeleton -->
# WeaponDesignVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class WeaponDesignVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignVM.cs`

## Overview

`WeaponDesignVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `WeaponDesignVM`.
- **Instance members** (24): `RefreshValues`, `OnFinalize`, `SetPieceNewlyUnlocked`, `SelectPrimaryWeaponClass`, `ExecuteOpenOrderPopup`, `ExecuteCloseOrderPopup`, ….
- **Extension points** (2): `RefreshValues`, `OnFinalize`.
- **Data and constants** (3): `MAX_SKILL_LEVEL`, `CraftedItemObject`, `_secondaryUsageSelector`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `CanCompleteOrder` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `ChangeModeIfHeroIsUnavailable` | method | Instance entry point. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `CreateCraftingResultPopup` | method | Instance entry point. Takes no arguments. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `ExecuteBeginHeroHint` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteChangeScabbardVisibility` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteCloseOrderPopup` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteEndHeroHint` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteFinalizeCrafting` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteOpenFreeBuildTab` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteOpenOrderPopup` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteOpenOrdersTab` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteOpenWeaponClassSelectionPopup` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteRandomize` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteRedo` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteToggleShowOnlyUnlockedPieces` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteUndo` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `HaveUnlockedAllSelectedPieces` | method | Instance entry point. Takes no arguments. Returns `bool`. |
| `RefreshItem` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `SelectPrimaryWeaponClass` | method | Instance entry point. Takes 1 argument: `CraftingTemplate template`. |
| `SelectWeapon` | method | Instance entry point. Takes 1 argument: `ItemObject itemObject`. |
| `SetPieceNewlyUnlocked` | method | Instance entry point. Takes 1 argument: `CraftingPiece piece`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SwitchToPiece` | method | Instance entry point. Takes 1 argument: `WeaponDesignElement usedPiece`. |

- Constructed as `public WeaponDesignVM(Crafting crafting, ICraftingCampaignBehavior craftingBehavior, Action onRefresh, Action onWeaponCrafted, Func<CraftingAvailableHeroItemVM> getCurrentCraftingHero, Action<CraftingOrder> refreshHeroAvailabilities, Func<WeaponComponentData, ItemObject.ItemUsageSetFlags> getItemUsageSetFlags)`.

4 further public members follow the same patterns.
## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new WeaponDesignVM(crafting, craftingBehavior, onRefresh, onWeaponCrafted, getCurrentCraftingHero, refreshHeroAvailabilities, theTarget, getItemUsageSetFlags);

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Crafting](../../core-extra/Crafting/) — `TaleWorlds.Core`.
- [CraftingAvailableHeroItemVM](../CraftingAvailableHeroItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`.
- [CraftingOrder](../../campaign/CraftingOrder/) — `TaleWorlds.CampaignSystem.CraftingSystem`.
- [CraftingListPropertyItem](../CraftingListPropertyItem/) — `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`.
- [CraftingPieceListVM](../CraftingPieceListVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`.
- [SelectorVM](../SelectorVM/) — `TaleWorlds.Core.ViewModelCollection.Selector`.
- [CraftingSecondaryUsageItemVM](../CraftingSecondaryUsageItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`.
- [CraftingOrderPopupVM](../CraftingOrderPopupVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order`.
- [CraftingOrderItemVM](../CraftingOrderItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order`.
- [CraftingHistoryVM](../CraftingHistoryVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`.

Section: [api/viewmodel/](../) — the other types in this bucket.
