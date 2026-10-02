---
title: "ClanFinanceWorkshopItemVM"
description: "ClanFinanceWorkshopItemVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance. 22 public members (0 static)."
---

<!-- v147-skeleton -->
# ClanFinanceWorkshopItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class ClanFinanceWorkshopItemVM : ClanFinanceIncomeItemBaseVM`  
**Base:** `ClanFinanceIncomeItemBaseVM`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceWorkshopItemVM.cs`

## Overview

`ClanFinanceWorkshopItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ClanFinanceIncomeItemBaseVM, so the members it does not redeclare are inherited from there. 14 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ClanFinanceWorkshopItemVM`.
- **Instance members** (21): `Workshop`, `RefreshValues`, `ExecuteToggleWarehouseUsage`, `PopulateStatsList`, `ExecuteBeginWorkshopHint`, `ExecuteEndHint`, ….
- **Extension points** (2): `RefreshValues`, `PopulateStatsList`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `PopulateStatsList` | method (override) | Overrides the base member. Takes no arguments. |
| `ExecuteBeginWorkshopHint` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteEndHint` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteManageWorkshop` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteToggleWarehouseUsage` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `InputProducts` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `InputsText` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `OnStoreOutputInWarehousePercentageUpdated` | method | Instance entry point. Takes 1 argument: `SelectorVM<WorkshopPercentageSelectorItemVM> selector`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OutputProducts` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `OutputsText` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `ReceiveInputFromWarehouse` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `StoreOutputPercentageText` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `UseWarehouseAsInputText` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `WarehouseCapacityText` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `WarehouseCapacityValue` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `WarehouseInputAmount` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `WarehouseOutputAmount` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `WarehousePercentageSelector` | property | Instance entry point `SelectorVM<WorkshopPercentageSelectorItemVM>` property. Read it for current state; a declared setter writes that state in place. |
| `Workshop` | property | Instance entry point `Workshop` property. Read it for current state; a declared setter writes that state in place. |
| `WorkshopTypeId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `ClanFinanceWorkshopItemVM` | ctor | Instance entry point. Takes 4 arguments: `Workshop workshop`, `Action<ClanFinanceWorkshopItemVM> onSelection`, `Action onRefresh`, `Action<ClanCardSelectionInfo> openCardSelectionPopup`. Returns ``. |

- Constructed as `public ClanFinanceWorkshopItemVM(Workshop workshop, Action<ClanFinanceWorkshopItemVM> onSelection, Action onRefresh, Action<ClanCardSelectionInfo> openCardSelectionPopup)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new ClanFinanceWorkshopItemVM(workshop, onSelection, onRefresh, openCardSelectionPopup);
// viewModel.Workshop = ...;   // Workshop
// viewModel.WorkshopTypeId = ...;   // string
// viewModel.InputsText = ...;   // string

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceWorkshopItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Workshop](../../campaign/Workshop/) — `TaleWorlds.CampaignSystem.Settlements.Workshops`.
- [ClanCardSelectionInfo](../ClanCardSelectionInfo/) — `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [BasicTooltipViewModel](../BasicTooltipViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [SelectorVM](../SelectorVM/) — `TaleWorlds.Core.ViewModelCollection.Selector`.
- [WorkshopPercentageSelectorItemVM](../WorkshopPercentageSelectorItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance`.
- [WorkshopType](../../campaign/WorkshopType/) — `TaleWorlds.CampaignSystem.Settlements.Workshops`.
- [Location](../../campaign/Location/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [ExplainedNumber](../../campaign/ExplainedNumber/) — `TaleWorlds.CampaignSystem`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.

Section: [api/viewmodel/](../) — the other types in this bucket.
