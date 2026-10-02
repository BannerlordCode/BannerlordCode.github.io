---
title: "GameMenuItemVM"
description: "GameMenuItemVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu. 12 public members (0 static)."
---

<!-- v147-skeleton -->
# GameMenuItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class GameMenuItemVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemVM.cs`

## Overview

`GameMenuItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GameMenuItemVM`.
- **Instance members** (10): `OptionID`, `GameMenuOption`, `InitializeWith`, `RefreshValues`, `ExecuteAction`, `OnFinalize`, ….
- **Extension points** (2): `RefreshValues`, `OnFinalize`.
- **Data and constants** (1): `Index`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ExecuteAction` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GameMenuItemCreationData` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `GameMenuOption` | property | Instance entry point `GameMenuOption` property. Read it for current state; a declared setter writes that state in place. |
| `InitializeWith` | method | Instance entry point. Takes 1 argument: `in GameMenuItemVM.GameMenuItemCreationData data`. |
| `OptionID` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Refresh` | method | Instance entry point. Takes no arguments. |
| `ShortcutKey` | property | Instance entry point `InputKeyItemVM` property. Read it for current state; a declared setter writes that state in place. |
| `UpdateWith` | method | Instance entry point. Takes 1 argument: `GameMenuItemVM newItem`. Called from the owner’s update loop — do not assume a frame boundary. |
| `GameMenuItemVM` | ctor | Instance entry point. Takes no arguments. Returns ``. |
| `Index` | field | Instance entry point `int` field — direct storage with no validation or notification. |

- Constructed as `public GameMenuItemVM()`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new GameMenuItemVM();
// viewModel.OptionID = ...;   // string
// viewModel.GameMenuOption = ...;   // GameMenuOption
// viewModel.ShortcutKey = ...;   // InputKeyItemVM

// Command the widget invokes on confirm:
viewModel.InitializeWith(theTarget);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameMenu](../../campaign/GameMenu/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [QuestMarkerVM](../QuestMarkerVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`.
- [CampaignUIHelper](../CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [InputKeyItemVM](../../sandbox/InputKeyItemVM/) — `SandBox.ViewModelCollection.Input`.
- [PlayerEncounter](../../campaign/PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [GameKey](../../system/GameKey/) — `TaleWorlds.InputSystem`.

Section: [api/viewmodel/](../) — the other types in this bucket.
