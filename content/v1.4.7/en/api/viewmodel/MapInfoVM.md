---
title: "MapInfoVM"
description: "MapInfoVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# MapInfoVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class MapInfoVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapInfoVM.cs`

## Overview

`MapInfoVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MapInfoVM`.
- **Instance members** (5): `CreateItems`, `RefreshValues`, `Tick`, `Refresh`, `UpdatePlayerInfo`.
- **Extension points** (3): `CreateItems`, `RefreshValues`, `UpdatePlayerInfo`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `CreateItems` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `Refresh` | method | Instance entry point. Takes no arguments. |
| `Tick` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `UpdatePlayerInfo` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `bool updateForced`. Called from the owner’s update loop — do not assume a frame boundary. |
| `MapInfoVM` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public MapInfoVM()`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new MapInfoVM();

// Command the widget invokes on confirm:
viewModel.CreateItems();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapInfoVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [MapInfoItemVM](../MapInfoItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`.
- [CampaignUIHelper](../CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [ExplainedNumber](../../campaign/ExplainedNumber/) — `TaleWorlds.CampaignSystem`.

Section: [api/viewmodel/](../) — the other types in this bucket.
