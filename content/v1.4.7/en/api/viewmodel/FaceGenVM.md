---
title: "FaceGenVM"
description: "FaceGenVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator. 30 public members (0 static)."
---

<!-- v147-skeleton -->
# FaceGenVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class FaceGenVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenVM.cs`

## Overview

`FaceGenVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `FaceGenVM`.
- **Instance members** (29): `SetFaceGenerationParams`, `RefreshValues`, `InitializeHistory`, `OnTabClicked`, `SelectPreviousTab`, `SelectNextTab`, ….
- **Extension points** (2): `RefreshValues`, `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `AddCameraControlInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Adds to the collection or relation this type owns. |
| `AddCommand` | method | Instance entry point. Takes no arguments. Adds to the collection or relation this type owns. |
| `ExecuteCancel` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteChangeClothing` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteDone` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteHearCurrentVoiceSample` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteRandomize` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteRandomizeAll` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteRedo` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteReset` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteResetAll` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteUndo` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `FaceGenTabs` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `GenderBasedSelectedValue` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `InitializeHistory` | method | Instance entry point. Takes 1 argument: `FaceGenHistory faceGenHistory`. |
| `OnTabClicked` | method | Instance entry point. Takes 1 argument: `int index`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Presets` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `Refresh` | method | Instance entry point. Takes 1 argument: `bool clearProperties`. |
| `SelectNextTab` | method | Instance entry point. Takes no arguments. |
| `SelectPreviousTab` | method | Instance entry point. Takes no arguments. |
| `SetBodyProperties` | method | Instance entry point. Takes 5 arguments: `BodyProperties bodyProperties`, `bool ignoreDebugValues`, `int race`, `int gender`, …. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetCancelInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |

- Constructed as `public FaceGenVM(BodyGenerator bodyGenerator, IFaceGeneratorHandler faceGeneratorScreen, Action<float> onHeightChanged, Action onAgeChanged, TextObject affirmitiveText, TextObject negativeText, int currentStageIndex, int totalStagesCount, int furthestIndex, Action<int> goToIndex, bool canChangeGender, bool openedFromMultiplayer, IFaceGeneratorCustomFilter filter)`.

6 further public members follow the same patterns.
## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new FaceGenVM(bodyGenerator, faceGeneratorScreen, onHeightChanged, onAgeChanged, affirmitiveText, negativeText, currentStageIndex, totalStagesCount, furthestIndex, goToIndex, canChangeGender, openedFromMultiplayer, filter);
// viewModel.FaceGenTabs = ...;   // enum
// viewModel.Presets = ...;   // enum
// viewModel.GenderBasedSelectedValue = ...;   // struct

// Command the widget invokes on confirm:
viewModel.SetFaceGenerationParams(faceGenerationParams);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [InputKeyItemVM](../../sandbox/InputKeyItemVM/) — `SandBox.ViewModelCollection.Input`.
- [FaceGenPropertyVM](../FaceGenPropertyVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator`.
- [FacegenListItemVM](../FacegenListItemVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [SelectorVM](../SelectorVM/) — `TaleWorlds.Core.ViewModelCollection.Selector`.
- [SelectorItemVM](../SelectorItemVM/) — `TaleWorlds.Core.ViewModelCollection.Selector`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [HotKey](../../system/HotKey/) — `TaleWorlds.InputSystem`.
- [GameKey](../../system/GameKey/) — `TaleWorlds.InputSystem`.
- [GameAxisKey](../../system/GameAxisKey/) — `TaleWorlds.InputSystem`.

Section: [api/viewmodel/](../) — the other types in this bucket.
