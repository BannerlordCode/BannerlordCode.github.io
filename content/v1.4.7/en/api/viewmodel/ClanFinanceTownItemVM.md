---
title: "ClanFinanceTownItemVM"
description: "ClanFinanceTownItemVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# ClanFinanceTownItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class ClanFinanceTownItemVM : ClanFinanceIncomeItemBaseVM`  
**Base:** `ClanFinanceIncomeItemBaseVM`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceTownItemVM.cs`

## Overview

`ClanFinanceTownItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ClanFinanceIncomeItemBaseVM, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ClanFinanceTownItemVM`.
- **Instance members** (3): `Settlement`, `PopulateActionList`, `PopulateStatsList`.
- **Extension points** (2): `PopulateActionList`, `PopulateStatsList`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `PopulateActionList` | method (override) | Overrides the base member. Takes no arguments. |
| `PopulateStatsList` | method (override) | Overrides the base member. Takes no arguments. |
| `Settlement` | property | Instance entry point `Settlement` property. Read it for current state; a declared setter writes that state in place. |
| `ClanFinanceTownItemVM` | ctor | Instance entry point. Takes 4 arguments: `Settlement settlement`, `TaxType taxType`, `Action<ClanFinanceIncomeItemBaseVM> onSelection`, `Action onRefresh`. Returns ``. |

- Constructed as `public ClanFinanceTownItemVM(Settlement settlement, TaxType taxType, Action<ClanFinanceIncomeItemBaseVM> onSelection, Action onRefresh)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new ClanFinanceTownItemVM(settlement, taxType, onSelection, onRefresh);
// viewModel.Settlement = ...;   // Settlement

// Command the widget invokes on confirm:
viewModel.PopulateActionList();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceTownItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.

Section: [api/viewmodel/](../) — the other types in this bucket.
