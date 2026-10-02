---
title: "FakeMarketData"
description: "FakeMarketData — class in TaleWorlds.CampaignSystem.Settlements. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# FakeMarketData

**Namespace:** `TaleWorlds.CampaignSystem.Settlements`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `internal class FakeMarketData : IMarketData`  
**Base:** `IMarketData`  
**Source:** `TaleWorlds.CampaignSystem/Settlements/FakeMarketData.cs`

## Overview

`FakeMarketData` is an internal class in TaleWorlds.CampaignSystem.Settlements. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`FakeMarketData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends IMarketData, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (1): `GetPrice`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetPrice` | method | Instance entry point. Takes 4 arguments: `ItemObject item`, `MobileParty tradingParty`, `bool isSelling`, `PartyBase merchantParty`. Returns `int`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
// FakeMarketData is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   GetPrice(`ItemObject item`, `MobileParty tradingParty`, `bool isSelling`, `PartyBase merchantParty`)
//     int
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.CampaignSystem/Settlements/FakeMarketData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.

Section: [api/campaign/](../) — the other types in this bucket.
