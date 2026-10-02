---
title: "KingdomArmyItemVM"
description: "KingdomArmyItemVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# KingdomArmyItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class KingdomArmyItemVM : KingdomItemVM`  
**Base:** `KingdomItemVM`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyItemVM.cs`

## Overview

`KingdomArmyItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends KingdomItemVM, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `KingdomArmyItemVM`.
- **Instance members** (4): `DistanceToMainParty`, `RefreshValues`, `OnSelect`, `ExecuteLink`.
- **Extension points** (2): `RefreshValues`, `OnSelect`.
- **Data and constants** (1): `Army`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `OnSelect` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `DistanceToMainParty` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `ExecuteLink` | method | Protected — for subclasses only. Takes 1 argument: `string link`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `KingdomArmyItemVM` | ctor | Instance entry point. Takes 2 arguments: `Army army`, `Action<KingdomArmyItemVM> onSelect`. Returns ``. |
| `Army` | field | Instance entry point `Army` field — direct storage with no validation or notification. |

- Constructed as `public KingdomArmyItemVM(Army army, Action<KingdomArmyItemVM> onSelect)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new KingdomArmyItemVM(army, onSelect);
// viewModel.DistanceToMainParty = ...;   // float

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [KingdomItemVM](../KingdomItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement`.
- [CampaignUIHelper](../CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [Location](../../campaign/Location/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [KingdomArmyPartyItemVM](../KingdomArmyPartyItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`.
- [Ship](../../campaign/Ship/) — `TaleWorlds.CampaignSystem.Naval`.
- [EncyclopediaManager](../../campaign/EncyclopediaManager/) — `TaleWorlds.CampaignSystem.Encyclopedia`.

Section: [api/viewmodel/](../) — the other types in this bucket.
