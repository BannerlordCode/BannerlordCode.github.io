---
title: "EncyclopediaHeroPageVM"
description: "EncyclopediaHeroPageVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# EncyclopediaHeroPageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class EncyclopediaHeroPageVM : EncyclopediaContentPageVM`  
**Base:** `EncyclopediaContentPageVM`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaHeroPageVM.cs`

## Overview

`EncyclopediaHeroPageVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends EncyclopediaContentPageVM, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `EncyclopediaHeroPageVM`.
- **Instance members** (7): `RefreshValues`, `Refresh`, `GetName`, `GetNavigationBarURL`, `ExecuteLink`, `ExecuteSwitchBookmarkedState`, ….
- **Extension points** (6): `RefreshValues`, `Refresh`, `GetName`, `GetNavigationBarURL`, `ExecuteSwitchBookmarkedState`, `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ExecuteSwitchBookmarkedState` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetName` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetNavigationBarURL` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Refresh` | method (override) | Overrides the base member. Takes no arguments. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ExecuteLink` | method | Instance entry point. Takes 1 argument: `string link`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `EncyclopediaHeroPageVM` | ctor | Instance entry point. Takes 1 argument: `EncyclopediaPageArgs args`. Returns ``. |

- Constructed as `public EncyclopediaHeroPageVM(EncyclopediaPageArgs args)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new EncyclopediaHeroPageVM(args);

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 6 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaHeroPageVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EncyclopediaContentPageVM](../EncyclopediaContentPageVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`.
- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [Items](../../campaign/Items/) — `TaleWorlds.CampaignSystem.Extensions`.
- [EncyclopediaPageArgs](../EncyclopediaPageArgs/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`.
- [CampaignUIHelper](../CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [EncyclopediaSettlementVM](../EncyclopediaSettlementVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`.
- [EncyclopediaDwellingVM](../EncyclopediaDwellingVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`.
- [EncyclopediaFamilyMemberVM](../EncyclopediaFamilyMemberVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`.
- [EncyclopediaHistoryEventVM](../EncyclopediaHistoryEventVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`.
- [CharacterViewModel](../CharacterViewModel/) — `TaleWorlds.Core.ViewModelCollection`.

Section: [api/viewmodel/](../) — the other types in this bucket.
