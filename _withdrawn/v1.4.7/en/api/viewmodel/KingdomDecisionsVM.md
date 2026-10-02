---
title: "KingdomDecisionsVM"
description: "KingdomDecisionsVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# KingdomDecisionsVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class KingdomDecisionsVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/KingdomDecisionsVM.cs`

## Overview

`KingdomDecisionsVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `KingdomDecisionsVM`.
- **Instance members** (8): `IsCurrentDecisionActive`, `RefreshValues`, `OnFrameTick`, `HandleNextDecision`, `HandleDecision`, `RefreshWith`, ….
- **Extension points** (2): `RefreshValues`, `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `HandleDecision` | method | Instance entry point. Takes 1 argument: `KingdomDecision curDecision`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `HandleNextDecision` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `IsCurrentDecisionActive` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnFrameTick` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshWith` | method | Instance entry point. Takes 1 argument: `KingdomDecision decision`. Called from the owner’s update loop — do not assume a frame boundary. |
| `SetDoneInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `KingdomDecisionsVM` | ctor | Instance entry point. Takes 1 argument: `Action refreshKingdomManagement`. Returns ``. |

- Constructed as `public KingdomDecisionsVM(Action refreshKingdomManagement)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new KingdomDecisionsVM(refreshKingdomManagement);
viewModel.IsCurrentDecisionActive = true;

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/KingdomDecisionsVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [DecisionItemBaseVM](../DecisionItemBaseVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`.
- [CampaignUIHelper](../CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [ExpelClanDecisionItemVM](../ExpelClanDecisionItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`.
- [DeclareWarDecision](../../campaign/DeclareWarDecision/) — `TaleWorlds.CampaignSystem.Election`.
- [DeclareWarDecisionItemVM](../DeclareWarDecisionItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`.
- [MakePeaceKingdomDecision](../../campaign/MakePeaceKingdomDecision/) — `TaleWorlds.CampaignSystem.Election`.
- [KingSelectionDecisionItemVM](../KingSelectionDecisionItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`.
- [StartAllianceDecision](../../campaign/StartAllianceDecision/) — `TaleWorlds.CampaignSystem.Election`.
- [ProposeCallToWarAgreementDecision](../../campaign/ProposeCallToWarAgreementDecision/) — `TaleWorlds.CampaignSystem.Election`.

Section: [api/viewmodel/](../) — the other types in this bucket.
