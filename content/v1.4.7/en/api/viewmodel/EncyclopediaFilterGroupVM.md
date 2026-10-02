---
title: "EncyclopediaFilterGroupVM"
description: "EncyclopediaFilterGroupVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# EncyclopediaFilterGroupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class EncyclopediaFilterGroupVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaFilterGroupVM.cs`

## Overview

`EncyclopediaFilterGroupVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `EncyclopediaFilterGroupVM`.
- **Instance members** (2): `RefreshValues`, `CopyFiltersFrom`.
- **Extension points** (1): `RefreshValues`.
- **Data and constants** (1): `FilterGroup`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `CopyFiltersFrom` | method | Instance entry point. Takes 2 arguments: `Dictionary<EncyclopediaFilterItem`, `bool> filters`. |
| `EncyclopediaFilterGroupVM` | ctor | Instance entry point. Takes 2 arguments: `EncyclopediaFilterGroup filterGroup`, `Action<EncyclopediaListFilterVM> UpdateFilters`. Returns ``. |
| `FilterGroup` | field | Instance entry point `EncyclopediaFilterGroup` field — direct storage with no validation or notification. |

- Constructed as `public EncyclopediaFilterGroupVM(EncyclopediaFilterGroup filterGroup, Action<EncyclopediaListFilterVM> UpdateFilters)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new EncyclopediaFilterGroupVM(filterGroup, UpdateFilters);

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaFilterGroupVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EncyclopediaFilterGroup](../../campaign/EncyclopediaFilterGroup/) — `TaleWorlds.CampaignSystem.Encyclopedia`.
- [EncyclopediaListFilterVM](../EncyclopediaListFilterVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`.
- [EncyclopediaFilterItem](../../campaign/EncyclopediaFilterItem/) — `TaleWorlds.CampaignSystem.Encyclopedia`.

Section: [api/viewmodel/](../) — the other types in this bucket.
