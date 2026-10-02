---
title: "SavedGameVM"
description: "SavedGameVM — class in SandBox.ViewModelCollection.SaveLoad. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# SavedGameVM

**Namespace:** `SandBox.ViewModelCollection.SaveLoad`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class SavedGameVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `SandBox.ViewModelCollection/SaveLoad/SavedGameVM.cs`

## Overview

`SavedGameVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `SavedGameVM`.
- **Instance members** (8): `Save`, `RequiresInquiryOnLoad`, `IsModuleDiscrepancyDetected`, `RefreshValues`, `ExecuteSaveLoad`, `ExecuteUpdate`, ….
- **Extension points** (1): `RefreshValues`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ExecuteDelete` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteSaveLoad` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteSelection` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteUpdate` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `IsModuleDiscrepancyDetected` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `RequiresInquiryOnLoad` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `Save` | property | Instance entry point `SaveGameFileInfo` property. Read it for current state; a declared setter writes that state in place. |
| `SavedGameVM` | ctor | Instance entry point. Takes 8 arguments: `SaveGameFileInfo save`, `bool isSaving`, `Action<SavedGameVM> onDelete`, `Action<SavedGameVM> onSelection`, …. Returns ``. |

- Constructed as `public SavedGameVM(SaveGameFileInfo save, bool isSaving, Action<SavedGameVM> onDelete, Action<SavedGameVM> onSelection, Action onCancelLoadSave, Action onDone, bool isCorruptedSave = false, bool isIronman = false)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new SavedGameVM(save, isSaving, onDelete, onSelection, onCancelLoadSave, onDone, isCorruptedSave, isIronman);
// viewModel.Save = ...;   // SaveGameFileInfo
// viewModel.RequiresInquiryOnLoad = ...;   // bool
viewModel.IsModuleDiscrepancyDetected = true;

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.ViewModelCollection/SaveLoad/SavedGameVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [SavedGamePropertyVM](../SavedGamePropertyVM/) — `SandBox.ViewModelCollection.SaveLoad`.
- [SavedGameModuleInfoVM](../SavedGameModuleInfoVM/) — `SandBox.ViewModelCollection.SaveLoad`.
- [SandBoxSaveHelper](../SandBoxSaveHelper/) — `SandBox`.
- [ModuleHelper](../../modulemanager/ModuleHelper/) — `TaleWorlds.ModuleManager`.
- [HintViewModel](../../viewmodel/HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [BannerImageIdentifierVM](../../viewmodel/BannerImageIdentifierVM/) — `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`.
- [LocalizedTextManager](../../localization/LocalizedTextManager/) — `TaleWorlds.Localization`.
- [Fief](../../campaign/Fief/) — `TaleWorlds.CampaignSystem.Settlements`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.

Section: [api/sandbox/](../) — the other types in this bucket.
