---
title: "KingdomArmyVM"
description: "KingdomArmyVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# KingdomArmyVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class KingdomArmyVM : KingdomCategoryVM`  
**Base:** `KingdomCategoryVM`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyVM.cs`

## Overview

`KingdomArmyVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends KingdomCategoryVM, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `KingdomArmyVM`.
- **Instance members** (3): `RefreshValues`, `RefreshArmyList`, `SelectArmy`.
- **Extension points** (1): `RefreshValues`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `RefreshArmyList` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `SelectArmy` | method | Instance entry point. Takes 1 argument: `Army army`. |
| `KingdomArmyVM` | ctor | Instance entry point. Takes 3 arguments: `Action onManageArmy`, `Action refreshDecision`, `Action<Army> showArmyOnMap`. Returns ``. |

- Constructed as `public KingdomArmyVM(Action onManageArmy, Action refreshDecision, Action<Army> showArmyOnMap)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new KingdomArmyVM(onManageArmy, refreshDecision, showArmyOnMap);

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [KingdomCategoryVM](../KingdomCategoryVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement`.
- [KingdomArmyItemVM](../KingdomArmyItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [KingdomArmySortControllerVM](../KingdomArmySortControllerVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`.
- [CampaignUIHelper](../CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [ArmyManagementCalculationModel](../../campaign-ext/ArmyManagementCalculationModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.

Section: [api/viewmodel/](../) — the other types in this bucket.
