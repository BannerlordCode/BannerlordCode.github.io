---
title: "KingdomSettlementItemVM"
description: "KingdomSettlementItemVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# KingdomSettlementItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class KingdomSettlementItemVM : KingdomItemVM`  
**Base:** `KingdomItemVM`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementItemVM.cs`

## Overview

`KingdomSettlementItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends KingdomItemVM, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `KingdomSettlementItemVM`.
- **Instance members** (6): `Garrison`, `Militia`, `RefreshValues`, `UpdateProperties`, `OnSelect`, `ExecuteLink`.
- **Extension points** (3): `RefreshValues`, `UpdateProperties`, `OnSelect`.
- **Data and constants** (1): `Settlement`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `OnSelect` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteLink` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Garrison` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Militia` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `UpdateProperties` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `KingdomSettlementItemVM` | ctor | Instance entry point. Takes 2 arguments: `Settlement settlement`, `Action<KingdomSettlementItemVM> onSelect`. Returns ``. |
| `Settlement` | field | Instance entry point `Settlement` field — direct storage with no validation or notification. |

- Constructed as `public KingdomSettlementItemVM(Settlement settlement, Action<KingdomSettlementItemVM> onSelect)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new KingdomSettlementItemVM(settlement, onSelect);
// viewModel.Garrison = ...;   // int
// viewModel.Militia = ...;   // int

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [KingdomItemVM](../KingdomItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement`.
- [KingdomSettlementVillageItemVM](../KingdomSettlementVillageItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`.
- [BannerImageIdentifierVM](../BannerImageIdentifierVM/) — `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [BasicTooltipViewModel](../BasicTooltipViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [CampaignUIHelper](../CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [EncyclopediaManager](../../campaign/EncyclopediaManager/) — `TaleWorlds.CampaignSystem.Encyclopedia`.

Section: [api/viewmodel/](../) — the other types in this bucket.
