---
title: "ArmyManagementItemVM"
description: "ArmyManagementItemVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement. 16 public members (0 static)."
---

<!-- v147-skeleton -->
# ArmyManagementItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class ArmyManagementItemVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementItemVM.cs`

## Overview

`ArmyManagementItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ArmyManagementItemVM`.
- **Instance members** (13): `DistInTime`, `_distance`, `Clan`, `RefreshValues`, `ExecuteAction`, `ExecuteSetFocused`, ….
- **Extension points** (1): `RefreshValues`.
- **Data and constants** (2): `Party`, `CanJoinBackWithoutCost`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `_distance` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `Clan` | property | Instance entry point `Clan` property. Read it for current state; a declared setter writes that state in place. |
| `DistInTime` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `ExecuteAction` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteBeginClanHint` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteBeginHint` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteEndHint` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteOpenClanEncyclopedia` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteOpenEncyclopedia` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteSetFocused` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteSetUnfocused` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `UpdateEligibility` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ArmyManagementItemVM` | ctor | Instance entry point. Takes 4 arguments: `Action<ArmyManagementItemVM> onAddToCart`, `Action<ArmyManagementItemVM> onRemove`, `Action<ArmyManagementItemVM> onFocus`, `MobileParty mobileParty`. Returns ``. |
| `CanJoinBackWithoutCost` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `Party` | field | Instance entry point `MobileParty` field — direct storage with no validation or notification. |

- Constructed as `public ArmyManagementItemVM(Action<ArmyManagementItemVM> onAddToCart, Action<ArmyManagementItemVM> onRemove, Action<ArmyManagementItemVM> onFocus, MobileParty mobileParty)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new ArmyManagementItemVM(onAddToCart, onRemove, onFocus, mobileParty);
// viewModel.DistInTime = ...;   // float
// viewModel._distance = ...;   // float
// viewModel.Clan = ...;   // Clan

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [ArmyManagementCalculationModel](../../campaign-ext/ArmyManagementCalculationModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.
- [BannerImageIdentifierVM](../BannerImageIdentifierVM/) — `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`.
- [CampaignUIHelper](../CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [CharacterImageIdentifierVM](../CharacterImageIdentifierVM/) — `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`.
- [PlayerSiege](../../campaign/PlayerSiege/) — `TaleWorlds.CampaignSystem.Siege`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [EncyclopediaManager](../../campaign/EncyclopediaManager/) — `TaleWorlds.CampaignSystem.Encyclopedia`.
- [InputKeyItemVM](../../sandbox/InputKeyItemVM/) — `SandBox.ViewModelCollection.Input`.

Section: [api/viewmodel/](../) — the other types in this bucket.
