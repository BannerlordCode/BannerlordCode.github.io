---
title: "KingdomDiplomacyItemVM"
description: "KingdomDiplomacyItemVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy. 11 public members (0 static)."
---

<!-- v147-skeleton -->
# KingdomDiplomacyItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public abstract class KingdomDiplomacyItemVM : KingdomItemVM`  
**Base:** `KingdomItemVM`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyItemVM.cs`

## Overview

`KingdomDiplomacyItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends KingdomItemVM, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `KingdomDiplomacyItemVM`.
- **Instance members** (1): `UpdateDiplomacyProperties`.
- **Extension points** (1): `UpdateDiplomacyProperties`.
- **Data and constants** (9): `Faction1`, `Faction2`, `_faction1Color`, `_faction2Color`, `_playerKingdom`, `_faction1Towns`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `UpdateDiplomacyProperties` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `Faction1` | field | Instance entry point `IFaction` field — direct storage with no validation or notification. |
| `Faction2` | field | Instance entry point `IFaction` field — direct storage with no validation or notification. |
| `KingdomDiplomacyItemVM` | ctor | Protected — for subclasses only. Takes 2 arguments: `IFaction faction1`, `IFaction faction2`. Returns ``. |
| `_faction1Castles` | field | Protected — for subclasses only `List<Settlement>` field — direct storage with no validation or notification. |
| `_faction1Color` | field | Protected — for subclasses only `string` field — direct storage with no validation or notification. |
| `_faction1Towns` | field | Protected — for subclasses only `List<Settlement>` field — direct storage with no validation or notification. |
| `_faction2Castles` | field | Protected — for subclasses only `List<Settlement>` field — direct storage with no validation or notification. |
| `_faction2Color` | field | Protected — for subclasses only `string` field — direct storage with no validation or notification. |
| `_faction2Towns` | field | Protected — for subclasses only `List<Settlement>` field — direct storage with no validation or notification. |
| `_playerKingdom` | field | Protected — for subclasses only `IFaction` field — direct storage with no validation or notification. |

- Constructed as `protected KingdomDiplomacyItemVM(IFaction faction1, IFaction faction2)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new KingdomDiplomacyItemVM(faction1, faction2);

// Command the widget invokes on confirm:
viewModel.UpdateDiplomacyProperties();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [KingdomItemVM](../KingdomItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement`.
- [BannerImageIdentifierVM](../BannerImageIdentifierVM/) — `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [KingdomDiplomacyFactionItemVM](../KingdomDiplomacyFactionItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`.

Section: [api/viewmodel/](../) — the other types in this bucket.
