---
title: "PartyCharacterVM"
description: "PartyCharacterVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.Party. 37 public members (4 static)."
---

<!-- v147-skeleton -->
# PartyCharacterVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class PartyCharacterVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyCharacterVM.cs`

## Overview

`PartyCharacterVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PartyCharacterVM`.
- **Instance members** (27): `Troops`, `StringId`, `Troop`, `Character`, `UpdateTalkable`, `RefreshValues`, ….
- **Extension points** (3): `RefreshValues`, `Equals`, `GetHashCode`.
- **Data and constants** (9): `IsShiftingDisabled`, `SetSelected`, `OnShift`, `OnFocus`, `Side`, `Type`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Equals` | method (override) | Overrides the base member. Takes 1 argument: `object obj`. Returns `bool`. |
| `GetHashCode` | method (override) | Overrides the base member. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `Character` | property | Instance entry point `CharacterObject` property. Read it for current state; a declared setter writes that state in place. |
| `ExecuteExecuteTroop` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteOpenTroopEncyclopedia` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteRecruitTroop` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteResetTrade` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteSetFocused` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteSetSelected` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteSetUnfocused` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteTalk` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteTransferSingle` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `FocusUpgrade` | method | Instance entry point. Takes 1 argument: `UpgradeTargetVM upgrade`. |
| `GetNumOfCategoryItemPartyHas` | method | Instance entry point. Takes 2 arguments: `ItemRoster items`, `ItemCategory itemCategory`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `InitializeUpgrades` | method | Instance entry point. Takes no arguments. |
| `IsShiftingDisabled` | field (static) | Static entry point `bool` field — direct storage with no validation or notification. |
| `OnFocus` | field (static) | Static entry point `Action<PartyCharacterVM>` field — direct storage with no validation or notification. |
| `OnShift` | field (static) | Static entry point `Action<PartyCharacterVM>` field — direct storage with no validation or notification. |
| `OnTransferred` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RecruitAll` | method | Instance entry point. Takes no arguments. |
| `SetIsUpgradeButtonHighlighted` | method | Instance entry point. Takes 1 argument: `bool isHighlighted`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetSelected` | field (static) | Static entry point `Action<PartyCharacterVM>` field — direct storage with no validation or notification. |
| `StringId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |

- Constructed as `public PartyCharacterVM(PartyScreenLogic partyScreenLogic, PartyVM partyVm, TroopRoster troops, int index, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, bool isTroopTransferrable)`.

13 further public members follow the same patterns.
## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new PartyCharacterVM(partyScreenLogic, partyVm, troops, index, type, side, isTroopTransferrable);
// viewModel.Troops = ...;   // TroopRoster
// viewModel.StringId = ...;   // string
// viewModel.Troop = ...;   // TroopRosterElement

// Command the widget invokes on confirm:
viewModel.UpdateTalkable();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyCharacterVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameMenu](../../campaign/GameMenu/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [TroopRoster](../../campaign/TroopRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [BasicTooltipViewModel](../BasicTooltipViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [CampaignUIHelper](../CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [CharacterImageIdentifierVM](../CharacterImageIdentifierVM/) — `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`.
- [PartyScreenLogic](../../campaign/PartyScreenLogic/) — `TaleWorlds.CampaignSystem.Party`.
- [PartyVM](../PartyVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Party`.
- [PartyTradeVM](../PartyTradeVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Party`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.

Section: [api/viewmodel/](../) — the other types in this bucket.
