---
title: "PersuasionOptionVM"
description: "PersuasionOptionVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.Conversation. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# PersuasionOptionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class PersuasionOptionVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionOptionVM.cs`

## Overview

`PersuasionOptionVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PersuasionOptionVM`.
- **Instance members** (3): `RefreshValues`, `GetPersuasionAdditionalText`, `ExecuteReadyToContinue`.
- **Extension points** (1): `RefreshValues`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ExecuteReadyToContinue` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetPersuasionAdditionalText` | method | Instance entry point. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `PersuasionOptionVM` | ctor | Instance entry point. Takes 3 arguments: `ConversationManager manager`, `int index`, `Action onReadyToContinue`. Returns ``. |

- Constructed as `public PersuasionOptionVM(ConversationManager manager, int index, Action onReadyToContinue)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new PersuasionOptionVM(manager, index, onReadyToContinue);

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionOptionVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Persuasion](../../campaign-ext/Persuasion/) — `TaleWorlds.CampaignSystem.Conversation.Persuasion`.
- [ConversationManager](../../campaign-ext/ConversationManager/) — `TaleWorlds.CampaignSystem.Conversation`.
- [BasicTooltipViewModel](../BasicTooltipViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [PersuasionOptionArgs](../../campaign-ext/PersuasionOptionArgs/) — `TaleWorlds.CampaignSystem.Conversation.Persuasion`.
- [PersuasionOptionResult](../../campaign-ext/PersuasionOptionResult/) — `TaleWorlds.CampaignSystem.Conversation.Persuasion`.

Section: [api/viewmodel/](../) — the other types in this bucket.
