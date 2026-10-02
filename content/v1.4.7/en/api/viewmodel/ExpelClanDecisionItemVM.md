---
title: "ExpelClanDecisionItemVM"
description: "ExpelClanDecisionItemVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# ExpelClanDecisionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class ExpelClanDecisionItemVM : DecisionItemBaseVM`  
**Base:** `DecisionItemBaseVM`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/ExpelClanDecisionItemVM.cs`

## Overview

`ExpelClanDecisionItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends DecisionItemBaseVM, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ExpelClanDecisionItemVM`.
- **Instance members** (3): `ExpelDecision`, `Clan`, `InitValues`.
- **Extension points** (1): `InitValues`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `InitValues` | method (override) | Overrides the base member. Takes no arguments. |
| `Clan` | property | Instance entry point `Clan` property. Read it for current state; a declared setter writes that state in place. |
| `ExpelDecision` | property | Instance entry point `ExpelClanFromKingdomDecision` property. Read it for current state; a declared setter writes that state in place. |
| `ExpelClanDecisionItemVM` | ctor | Instance entry point. Takes 2 arguments: `ExpelClanFromKingdomDecision decision`, `Action onDecisionOver`. Returns ``. |

- Constructed as `public ExpelClanDecisionItemVM(ExpelClanFromKingdomDecision decision, Action onDecisionOver)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new ExpelClanDecisionItemVM(decision, onDecisionOver);
// viewModel.ExpelDecision = ...;   // ExpelClanFromKingdomDecision
// viewModel.Clan = ...;   // Clan

// Command the widget invokes on confirm:
viewModel.InitValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/ExpelClanDecisionItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [DecisionItemBaseVM](../DecisionItemBaseVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`.
- [Items](../../campaign/Items/) — `TaleWorlds.CampaignSystem.Extensions`.
- [EncyclopediaSettlementVM](../EncyclopediaSettlementVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`.
- [EncyclopediaManager](../../campaign/EncyclopediaManager/) — `TaleWorlds.CampaignSystem.Encyclopedia`.
- [AgeModel](../../campaign-ext/AgeModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [BasicTooltipViewModel](../BasicTooltipViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [CampaignUIHelper](../CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.

Section: [api/viewmodel/](../) — the other types in this bucket.
