---
title: "SaveLoadVM"
description: "SaveLoadVM — class in SandBox.ViewModelCollection.SaveLoad. 14 public members (0 static)."
---

<!-- v147-skeleton -->
# SaveLoadVM

**Namespace:** `SandBox.ViewModelCollection.SaveLoad`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class SaveLoadVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `SandBox.ViewModelCollection/SaveLoad/SaveLoadVM.cs`

## Overview

`SaveLoadVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `SaveLoadVM`.
- **Instance members** (13): `InitializeAsync`, `RefreshValues`, `ExecuteCreateNewSaveGame`, `ExecuteDone`, `ExecuteLoadSave`, `DeleteSelectedSave`, ….
- **Extension points** (2): `RefreshValues`, `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `CancelInputKey` | property | Instance entry point `InputKeyItemVM` property. Capability check used to gate an operation. |
| `DeleteInputKey` | property | Instance entry point `InputKeyItemVM` property. Removes from or clears the collection this type owns. |
| `DeleteSelectedSave` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `DoneInputKey` | property | Instance entry point `InputKeyItemVM` property. Read it for current state; a declared setter writes that state in place. |
| `ExecuteCreateNewSaveGame` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteDone` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteLoadSave` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `InitializeAsync` | method | Instance entry point. Takes no arguments. Returns `Task`. |
| `SetCancelInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotkey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetDeleteInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotkey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetDoneInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotkey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SaveLoadVM` | ctor | Instance entry point. Takes 2 arguments: `bool isSaving`, `bool isCampaignMapOnStack`. Returns ``. |

- Constructed as `public SaveLoadVM(bool isSaving, bool isCampaignMapOnStack)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new SaveLoadVM(isSaving, isCampaignMapOnStack);
// viewModel.DoneInputKey = ...;   // InputKeyItemVM
// viewModel.CancelInputKey = ...;   // InputKeyItemVM
// viewModel.DeleteInputKey = ...;   // InputKeyItemVM

// Command the widget invokes on confirm:
viewModel.InitializeAsync();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.ViewModelCollection/SaveLoad/SaveLoadVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [SavedGameGroupVM](../SavedGameGroupVM/) — `SandBox.ViewModelCollection.SaveLoad`.
- [SavedGameVM](../SavedGameVM/) — `SandBox.ViewModelCollection.SaveLoad`.
- [HintViewModel](../../viewmodel/HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [Error](../../core-extra/Error/) — `TaleWorlds.LinQuick`.
- [InputKeyItemVM](../InputKeyItemVM/) — `SandBox.ViewModelCollection.Input`.
- [HotKey](../../system/HotKey/) — `TaleWorlds.InputSystem`.

Section: [api/sandbox/](../) — the other types in this bucket.
