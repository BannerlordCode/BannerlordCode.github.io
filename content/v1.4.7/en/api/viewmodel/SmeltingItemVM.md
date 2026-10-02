---
title: "SmeltingItemVM"
description: "SmeltingItemVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# SmeltingItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class SmeltingItemVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingItemVM.cs`

## Overview

`SmeltingItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `SmeltingItemVM`.
- **Instance members** (5): `EquipmentElement`, `RefreshValues`, `ExecuteSelection`, `ExecuteShowItemTooltip`, `ExecuteHideItemTooltip`.
- **Extension points** (1): `RefreshValues`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `EquipmentElement` | property | Instance entry point `EquipmentElement` property. Read it for current state; a declared setter writes that state in place. |
| `ExecuteHideItemTooltip` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteSelection` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteShowItemTooltip` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SmeltingItemVM` | ctor | Instance entry point. Takes 6 arguments: `EquipmentElement equipmentElement`, `Action<SmeltingItemVM> onSelection`, `Action<SmeltingItemVM`, `bool> onItemLockedStateChange`, …. Returns ``. |

- Constructed as `public SmeltingItemVM(EquipmentElement equipmentElement, Action<SmeltingItemVM> onSelection, Action<SmeltingItemVM, bool> onItemLockedStateChange, bool isLocked, int numOfItems)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new SmeltingItemVM(equipmentElement, onSelection, theTarget, onItemLockedStateChange, isLocked, numOfItems);
// viewModel.EquipmentElement = ...;   // EquipmentElement

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CraftingResourceItemVM](../CraftingResourceItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [ItemImageIdentifierVM](../ItemImageIdentifierVM/) — `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.

Section: [api/viewmodel/](../) — the other types in this bucket.
