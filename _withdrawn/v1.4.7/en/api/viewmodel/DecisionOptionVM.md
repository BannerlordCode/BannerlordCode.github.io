---
title: "DecisionOptionVM"
description: "DecisionOptionVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# DecisionOptionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class DecisionOptionVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/DecisionOptionVM.cs`

## Overview

`DecisionOptionVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DecisionOptionVM`.
- **Instance members** (4): `Option`, `Decision`, `RefreshValues`, `AfterKingChooseOutcome`.
- **Extension points** (1): `RefreshValues`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `AfterKingChooseOutcome` | method | Instance entry point. Takes no arguments. |
| `Decision` | property | Instance entry point `KingdomDecision` property. Read it for current state; a declared setter writes that state in place. |
| `Option` | property | Instance entry point `DecisionOutcome` property. Read it for current state; a declared setter writes that state in place. |
| `DecisionOptionVM` | ctor | Instance entry point. Takes 5 arguments: `DecisionOutcome option`, `KingdomDecision decision`, `KingdomElection kingdomDecisionMaker`, `Action<DecisionOptionVM> onSelect`, …. Returns ``. |

- Constructed as `public DecisionOptionVM(DecisionOutcome option, KingdomDecision decision, KingdomElection kingdomDecisionMaker, Action<DecisionOptionVM> onSelect, Action<DecisionOptionVM> onSupportStrengthChange)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new DecisionOptionVM(option, decision, kingdomDecisionMaker, onSelect, onSupportStrengthChange);
// viewModel.Option = ...;   // DecisionOutcome
// viewModel.Decision = ...;   // KingdomDecision

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/DecisionOptionVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [DecisionSupporterVM](../DecisionSupporterVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [PlayerSelectedAKingdomDecisionOptionEvent](../PlayerSelectedAKingdomDecisionOptionEvent/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions`.

Section: [api/viewmodel/](../) — the other types in this bucket.
