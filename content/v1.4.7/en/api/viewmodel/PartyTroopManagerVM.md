---
title: "PartyTroopManagerVM"
description: "PartyTroopManagerVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp. 25 public members (0 static)."
---

<!-- v147-skeleton -->
# PartyTroopManagerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public abstract class PartyTroopManagerVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerVM.cs`

## Overview

`PartyTroopManagerVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PartyTroopManagerVM`.
- **Instance members** (22): `ExecuteItemPrimaryAction`, `ExecuteItemSecondaryAction`, `ExecuteItemTertiaryAction`, `RefreshValues`, `OnFinalize`, `OpenPopUp`, ….
- **Extension points** (9): `ExecuteItemPrimaryAction`, `ExecuteItemSecondaryAction`, `ExecuteItemTertiaryAction`, `RefreshValues`, `OnFinalize`, `OpenPopUp`, ….
- **Data and constants** (2): `_partyVM`, `_hasMadeChanges`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ExecuteCancel` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteDone` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteItemPrimaryAction` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteItemSecondaryAction` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteItemTertiaryAction` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OpenPopUp` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. |
| `ConfirmCancel` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. |
| `SetCancelInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetDoneInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetPrimaryActionInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetSecondaryActionInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetTertiaryActionInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `UpdateOpenButtonHint` | method | Instance entry point. Takes 3 arguments: `bool isDisabled`, `bool isIrrelevant`, `bool isUpgradesDisabled`. Called from the owner’s update loop — do not assume a frame boundary. |
| `_openButtonEnabledHint` | property | Protected — for subclasses only `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `_openButtonIrrelevantScreenHint` | property | Protected — for subclasses only `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `_openButtonNoTroopsHint` | property | Protected — for subclasses only `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `_openButtonUpgradesDisabledHint` | property | Protected — for subclasses only `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `PartyTroopManagerVM` | ctor | Instance entry point. Takes 1 argument: `PartyVM partyVM`. Returns ``. |
| `SetFocusedCharacter` | method | Protected — for subclasses only. Takes 1 argument: `PartyTroopManagerItemVM troop`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ShowCancelInquiry` | method | Protected — for subclasses only. Takes 1 argument: `Action confirmCancel`. |
| `UpdateLabels` | method | Protected — for subclasses only. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `_hasMadeChanges` | field | Protected — for subclasses only `bool` field — direct storage with no validation or notification. |

- Constructed as `public PartyTroopManagerVM(PartyVM partyVM)`.

1 further public members follow the same patterns.
## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new PartyTroopManagerVM(partyVM);
// viewModel._openButtonEnabledHint = ...;   // TextObject
// viewModel._openButtonNoTroopsHint = ...;   // TextObject
// viewModel._openButtonIrrelevantScreenHint = ...;   // TextObject

// Command the widget invokes on confirm:
viewModel.ExecuteItemPrimaryAction();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 9 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [PartyVM](../PartyVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Party`.
- [PartyTroopManagerItemVM](../PartyTroopManagerItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [BasicTooltipViewModel](../BasicTooltipViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [InputKeyItemVM](../../sandbox/InputKeyItemVM/) — `SandBox.ViewModelCollection.Input`.
- [PartyScreenLogic](../../campaign/PartyScreenLogic/) — `TaleWorlds.CampaignSystem.Party`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [HotKey](../../system/HotKey/) — `TaleWorlds.InputSystem`.

Section: [api/viewmodel/](../) — the other types in this bucket.
