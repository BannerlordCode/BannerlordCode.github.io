---
title: "EncounterMenuOverlayVM"
description: "EncounterMenuOverlayVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# EncounterMenuOverlayVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class EncounterMenuOverlayVM : GameMenuOverlay`  
**Base:** `GameMenuOverlay`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/EncounterMenuOverlayVM.cs`

## Overview

`EncounterMenuOverlayVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends GameMenuOverlay, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `EncounterMenuOverlayVM`.
- **Instance members** (4): `RefreshValues`, `OnFrameTick`, `Refresh`, `DefenderWallHitPoints`.
- **Extension points** (3): `RefreshValues`, `OnFrameTick`, `Refresh`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFrameTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Refresh` | method (override) | Overrides the base member. Takes no arguments. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `DefenderWallHitPoints` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `EncounterMenuOverlayVM` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public EncounterMenuOverlayVM()`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new EncounterMenuOverlayVM();
// viewModel.DefenderWallHitPoints = ...;   // string

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/EncounterMenuOverlayVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameMenuOverlay](../GameMenuOverlay/) — `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`.
- [LinQuick](../../core-extra/LinQuick/) — `TaleWorlds.LinQuick`.
- [GameMenu](../../campaign/GameMenu/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [GameMenuPartyItemVM](../GameMenuPartyItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`.
- [BasicTooltipViewModel](../BasicTooltipViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [PlayerSiege](../../campaign/PlayerSiege/) — `TaleWorlds.CampaignSystem.Siege`.
- [SiegeEvent](../../campaign/SiegeEvent/) — `TaleWorlds.CampaignSystem.Siege`.
- [BesiegerCamp](../../campaign/BesiegerCamp/) — `TaleWorlds.CampaignSystem.Siege`.
- [CampaignUIHelper](../CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.

Section: [api/viewmodel/](../) — the other types in this bucket.
