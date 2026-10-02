---
title: "CharacterCreationOptionsStageVM"
description: "CharacterCreationOptionsStageVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation.OptionsStage. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# CharacterCreationOptionsStageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation.OptionsStage`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class CharacterCreationOptionsStageVM : CharacterCreationStageBaseVM`  
**Base:** `CharacterCreationStageBaseVM`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/OptionsStage/CharacterCreationOptionsStageVM.cs`

## Overview

`CharacterCreationOptionsStageVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends CharacterCreationStageBaseVM, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CharacterCreationOptionsStageVM`.
- **Instance members** (9): `RefreshValues`, `CanAdvanceToNextStage`, `OnNextStage`, `OnPreviousStage`, `OnFinalize`, `SetCancelInputKey`, ….
- **Extension points** (5): `RefreshValues`, `CanAdvanceToNextStage`, `OnNextStage`, `OnPreviousStage`, `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CanAdvanceToNextStage` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnNextStage` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPreviousStage` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `AddCameraControlInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Adds to the collection or relation this type owns. |
| `AddCameraControlInputKey` | method | Instance entry point. Takes 2 arguments: `GameAxisKey gameAxisKey`, `TextObject keyName`. Adds to the collection or relation this type owns. |
| `SetCancelInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetDoneInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `CharacterCreationOptionsStageVM` | ctor | Instance entry point. Takes 5 arguments: `CharacterCreationManager characterCreationManager`, `Action affirmativeAction`, `TextObject affirmativeActionText`, `Action negativeAction`, …. Returns ``. |

- Constructed as `public CharacterCreationOptionsStageVM(CharacterCreationManager characterCreationManager, Action affirmativeAction, TextObject affirmativeActionText, Action negativeAction, TextObject negativeActionText)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new CharacterCreationOptionsStageVM(characterCreationManager, affirmativeAction, affirmativeActionText, negativeAction, negativeActionText);

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/OptionsStage/CharacterCreationOptionsStageVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CharacterCreationContent](../../campaign/CharacterCreationContent/) — `TaleWorlds.CampaignSystem.CharacterCreationContent`.
- [CharacterCreationManager](../../campaign/CharacterCreationManager/) — `TaleWorlds.CampaignSystem.CharacterCreationContent`.
- [CampaignOptionsControllerVM](../CampaignOptionsControllerVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [InputKeyItemVM](../../sandbox/InputKeyItemVM/) — `SandBox.ViewModelCollection.Input`.
- [HotKey](../../system/HotKey/) — `TaleWorlds.InputSystem`.
- [GameKey](../../system/GameKey/) — `TaleWorlds.InputSystem`.
- [GameAxisKey](../../system/GameAxisKey/) — `TaleWorlds.InputSystem`.

Section: [api/viewmodel/](../) — the other types in this bucket.
