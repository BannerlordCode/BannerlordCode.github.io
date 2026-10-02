---
title: "DecisionItemBaseVM"
description: "DecisionItemBaseVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes. 13 public members (0 static)."
---

<!-- v147-skeleton -->
# DecisionItemBaseVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class DecisionItemBaseVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/DecisionItemBaseVM.cs`

## Overview

`DecisionItemBaseVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DecisionItemBaseVM`.
- **Instance members** (11): `KingdomDecisionMaker`, `RefreshValues`, `InitValues`, `ExecuteLink`, `ExecuteShowStageTooltip`, `ExecuteHideStageTooltip`, ….
- **Extension points** (3): `RefreshValues`, `InitValues`, `OnFinalize`.
- **Data and constants** (1): `_decision`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ExecuteFinalSelection` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `InitValues` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. |
| `KingdomDecisionMaker` | property | Instance entry point `KingdomElection` property. Read it for current state; a declared setter writes that state in place. |
| `SetDoneInputKey` | method | Instance entry point. Takes 1 argument: `InputKeyItemVM inputKeyItemVM`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `DecisionItemBaseVM` | ctor | Instance entry point. Takes 2 arguments: `KingdomDecision decision`, `Action onDecisionOver`. Returns ``. |
| `DecisionTypes` | property | Protected — for subclasses only `enum` property. Read it for current state; a declared setter writes that state in place. |
| `ExecuteDone` | method | Protected — for subclasses only. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteHideStageTooltip` | method | Protected — for subclasses only. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteLink` | method | Protected — for subclasses only. Takes 1 argument: `string link`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteShowStageTooltip` | method | Protected — for subclasses only. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `_decision` | field | Protected — for subclasses only `KingdomDecision` field — direct storage with no validation or notification. |

- Constructed as `public DecisionItemBaseVM(KingdomDecision decision, Action onDecisionOver)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new DecisionItemBaseVM(decision, onDecisionOver);
// viewModel.KingdomDecisionMaker = ...;   // KingdomElection
// viewModel.DecisionTypes = ...;   // enum

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/DecisionItemBaseVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [DecisionOptionVM](../DecisionOptionVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [TutorialNotificationElementChangeEvent](../TutorialNotificationElementChangeEvent/) — `TaleWorlds.Core.ViewModelCollection.Tutorial`.
- [EncyclopediaManager](../../campaign/EncyclopediaManager/) — `TaleWorlds.CampaignSystem.Encyclopedia`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [InputKeyItemVM](../../sandbox/InputKeyItemVM/) — `SandBox.ViewModelCollection.Input`.

Section: [api/viewmodel/](../) — the other types in this bucket.
