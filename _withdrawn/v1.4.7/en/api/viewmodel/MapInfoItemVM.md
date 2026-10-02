---
title: "MapInfoItemVM"
description: "MapInfoItemVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# MapInfoItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class MapInfoItemVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapInfoItemVM.cs`

## Overview

`MapInfoItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MapInfoItemVM`.
- **Instance members** (3): `ExecuteBeginHint`, `ExecuteEndHint`, `SetOverriddenVisualId`.
- **Data and constants** (1): `ItemId`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ExecuteBeginHint` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteEndHint` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SetOverriddenVisualId` | method | Instance entry point. Takes 1 argument: `string visualId`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `MapInfoItemVM` | ctor | Instance entry point. Takes 2 arguments: `string itemId`, `Func<List<TooltipProperty>> getTooltip`. Returns ``. |
| `ItemId` | field | Instance entry point `string` field — direct storage with no validation or notification. |

- Constructed as `public MapInfoItemVM(string itemId, Func<List<TooltipProperty>> getTooltip)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new MapInfoItemVM(itemId, getTooltip);

// Command the widget invokes on confirm:
viewModel.ExecuteBeginHint();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapInfoItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BasicTooltipViewModel](../BasicTooltipViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [TooltipTriggerVM](../../core-extra/TooltipTriggerVM/) — `TaleWorlds.Library.Information`.

Section: [api/viewmodel/](../) — the other types in this bucket.
