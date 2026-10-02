---
title: "PartyVM"
description: "PartyVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.Party. 40 public members (0 static)."
---

<!-- v147-skeleton -->
# PartyVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class PartyVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyVM.cs`

## Overview

`PartyVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PartyVM`.
- **Instance members** (36): `PartyScreenLogic`, `CanRightPartyTakeMoreTroops`, `CanRightPartyTakeMorePrisoners`, `RefreshValues`, `SetSelectedCharacter`, `ExecuteSelectCharacterTuple`, ….
- **Extension points** (2): `RefreshValues`, `OnFinalize`.
- **Data and constants** (3): `IsFiveStackModifierActive`, `IsEntireStackModifierActive`, `IsInConversation`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `CanRightPartyTakeMorePrisoners` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanRightPartyTakeMoreTroops` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `ExecuteCancel` | method | Instance entry point. Takes 1 argument: `bool showCancelInquiry`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteCancelWithoutInquiry` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteClearSelectedCharacterTuple` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteDone` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteExecution` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteOpenRecruitPopUp` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteOpenUpgradePopUp` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteRecruit` | method | Instance entry point. Takes 2 arguments: `PartyCharacterVM character`, `bool recruitAll`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteRemoveZeroCounts` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteReset` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteSelectCharacterTuple` | method | Instance entry point. Takes 1 argument: `PartyCharacterVM troop`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteTalk` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteTransferAllMainPrisoners` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteTransferAllMainTroops` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteTransferAllOtherPrisoners` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteTransferAllOtherTroops` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteTransferWithParameters` | method | Instance entry point. Takes 3 arguments: `PartyCharacterVM party`, `int index`, `string targetTag`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteUpgrade` | method | Instance entry point. Takes 3 arguments: `PartyCharacterVM troop`, `int upgradeTargetType`, `int maxUpgradeCount`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRecruitPopUpClosed` | method | Instance entry point. Takes 1 argument: `bool isCancelled`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnUpgradePopUpClosed` | method | Instance entry point. Takes 1 argument: `bool isCancelled`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

- Constructed as `public PartyVM(PartyScreenLogic partyScreenLogic)`.

16 further public members follow the same patterns.
## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new PartyVM(partyScreenLogic);
// viewModel.PartyScreenLogic = ...;   // PartyScreenLogic
// viewModel.CanRightPartyTakeMoreTroops = ...;   // bool
// viewModel.CanRightPartyTakeMorePrisoners = ...;   // bool

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [PartyScreenLogic](../../campaign/PartyScreenLogic/) — `TaleWorlds.CampaignSystem.Party`.
- [PartyCharacterVM](../PartyCharacterVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Party`.
- [PartyUpgradeTroopVM](../PartyUpgradeTroopVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`.
- [PartyRecruitTroopVM](../PartyRecruitTroopVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`.
- [CharacterViewModel](../CharacterViewModel/) — `TaleWorlds.Core.ViewModelCollection`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [BasicTooltipViewModel](../BasicTooltipViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [PartyCompositionVM](../PartyCompositionVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Party`.
- [PartyTradeVM](../PartyTradeVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Party`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.

Section: [api/viewmodel/](../) — the other types in this bucket.
