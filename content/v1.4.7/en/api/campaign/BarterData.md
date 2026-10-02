---
title: "BarterData"
description: "BarterData — class in TaleWorlds.CampaignSystem.BarterSystem. 14 public members (0 static)."
---

<!-- v147-skeleton -->
# BarterData

**Namespace:** `TaleWorlds.CampaignSystem.BarterSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class BarterData`  
**Source:** `TaleWorlds.CampaignSystem/BarterSystem/BarterData.cs`

## Overview

`BarterData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BarterData`.
- **Instance members** (7): `OffererMapFaction`, `OtherMapFaction`, `IsAiBarter`, `AddBarterGroup`, `GetBarterGroups`, `GetBarterables`, ….
- **Data and constants** (6): `OffererHero`, `OtherHero`, `OffererParty`, `OtherParty`, `ContextInitializer`, `PersuasionCostReduction`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddBarterGroup` | method | Instance entry point. Takes 1 argument: `BarterGroup barterGroup`. Adds to the collection or relation this type owns. |
| `GetBarterables` | method | Instance entry point. Takes no arguments. Returns `List<Barterable>`. Read path: prefer it over reaching for the backing store. |
| `GetBarterGroups` | method | Instance entry point. Takes no arguments. Returns `List<BarterGroup>`. Read path: prefer it over reaching for the backing store. |
| `GetOfferedBarterables` | method | Instance entry point. Takes no arguments. Returns `List<Barterable>`. Read path: prefer it over reaching for the backing store. |
| `IsAiBarter` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OffererMapFaction` | property | Instance entry point `IFaction` property. Read it for current state; a declared setter writes that state in place. |
| `OtherMapFaction` | property | Instance entry point `IFaction` property. Read it for current state; a declared setter writes that state in place. |
| `BarterData` | ctor | Instance entry point. Takes 7 arguments: `Hero offerer`, `Hero other`, `PartyBase offererParty`, `PartyBase otherParty`, …. Returns ``. |
| `ContextInitializer` | field | Instance entry point `BarterManager.BarterContextInitializer` field — direct storage with no validation or notification. |
| `OffererHero` | field | Instance entry point `Hero` field — direct storage with no validation or notification. |
| `OffererParty` | field | Instance entry point `PartyBase` field — direct storage with no validation or notification. |
| `OtherHero` | field | Instance entry point `Hero` field — direct storage with no validation or notification. |
| `OtherParty` | field | Instance entry point `PartyBase` field — direct storage with no validation or notification. |
| `PersuasionCostReduction` | field | Instance entry point `int` field — direct storage with no validation or notification. |

- Constructed as `public BarterData(Hero offerer, Hero other, PartyBase offererParty, PartyBase otherParty, BarterManager.BarterContextInitializer contextInitializer = null, int persuasionCostReduction = 0, bool isAiBarter = false)`.

## Usage Example

```csharp
var data = new BarterData
{
    OffererMapFaction = default,
    OtherMapFaction = default,
    IsAiBarter = false,
    OffererHero = default,
    OtherHero = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.CampaignSystem/BarterSystem/BarterData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BarterManager](../BarterManager/) — `TaleWorlds.CampaignSystem.BarterSystem`.
- [Barterable](../Barterable/) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables`.
- [BarterGroup](../BarterGroup/) — `TaleWorlds.CampaignSystem.BarterSystem`.

Section: [api/campaign/](../) — the other types in this bucket.
