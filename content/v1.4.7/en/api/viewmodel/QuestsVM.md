---
title: "QuestsVM"
description: "QuestsVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.Quests. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# QuestsVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class QuestsVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestsVM.cs`

## Overview

`QuestsVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `QuestsVM`.
- **Instance members** (9): `RefreshValues`, `ExecuteOpenQuestGiverEncyclopedia`, `ExecuteClose`, `SetSelectedIssue`, `SetSelectedQuest`, `SetSelectedLog`, ….
- **Extension points** (2): `RefreshValues`, `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ExecuteClose` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteOpenQuestGiverEncyclopedia` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `QuestCompletionType` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `SetDoneInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetSelectedIssue` | method | Instance entry point. Takes 1 argument: `IssueBase issue`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetSelectedLog` | method | Instance entry point. Takes 1 argument: `JournalLogEntry log`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetSelectedQuest` | method | Instance entry point. Takes 1 argument: `QuestBase quest`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `QuestsVM` | ctor | Instance entry point. Takes 1 argument: `Action closeQuestsScreen`. Returns ``. |

- Constructed as `public QuestsVM(Action closeQuestsScreen)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new QuestsVM(closeQuestsScreen);
// viewModel.QuestCompletionType = ...;   // enum

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestsVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [QuestItemVM](../QuestItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`.
- [QuestStageVM](../QuestStageVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`.
- [QuestItemSortControllerVM](../QuestItemSortControllerVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`.
- [SelectorVM](../SelectorVM/) — `TaleWorlds.Core.ViewModelCollection.Selector`.
- [SelectorItemVM](../SelectorItemVM/) — `TaleWorlds.Core.ViewModelCollection.Selector`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [InputKeyItemVM](../../sandbox/InputKeyItemVM/) — `SandBox.ViewModelCollection.Input`.
- [HotKey](../../system/HotKey/) — `TaleWorlds.InputSystem`.

Section: [api/viewmodel/](../) — the other types in this bucket.
