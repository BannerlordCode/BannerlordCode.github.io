---
title: "CampaignObjectManager"
description: "CampaignObjectManager — class in TaleWorlds.CampaignSystem. 16 public members (0 static)."
---

<!-- v147-skeleton -->
# CampaignObjectManager

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class CampaignObjectManager`  
**Source:** `TaleWorlds.CampaignSystem/CampaignObjectManager.cs`

## Overview

`CampaignObjectManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CampaignObjectManager`.
- **Instance members** (15): `MobileParties`, `CaravanParties`, `PatrolParties`, `MilitiaParties`, `GarrisonParties`, `BanditParties`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AliveHeroes` | property | Instance entry point `MBReadOnlyList<Hero>` property. Read it for current state; a declared setter writes that state in place. |
| `BanditParties` | property | Instance entry point `MBReadOnlyList<MobileParty>` property. Read it for current state; a declared setter writes that state in place. |
| `CaravanParties` | property | Instance entry point `MBReadOnlyList<MobileParty>` property. Read it for current state; a declared setter writes that state in place. |
| `Clans` | property | Instance entry point `MBReadOnlyList<Clan>` property. Read it for current state; a declared setter writes that state in place. |
| `CustomParties` | property | Instance entry point `MBReadOnlyList<MobileParty>` property. Read it for current state; a declared setter writes that state in place. |
| `DeadOrDisabledHeroes` | property | Instance entry point `MBReadOnlyList<Hero>` property. Read it for current state; a declared setter writes that state in place. |
| `Factions` | property | Instance entry point `MBReadOnlyList<IFaction>` property. Read it for current state; a declared setter writes that state in place. |
| `GarrisonParties` | property | Instance entry point `MBReadOnlyList<MobileParty>` property. Read it for current state; a declared setter writes that state in place. |
| `Kingdoms` | property | Instance entry point `MBReadOnlyList<Kingdom>` property. Read it for current state; a declared setter writes that state in place. |
| `LordParties` | property | Instance entry point `MBReadOnlyList<MobileParty>` property. Read it for current state; a declared setter writes that state in place. |
| `MilitiaParties` | property | Instance entry point `MBReadOnlyList<MobileParty>` property. Read it for current state; a declared setter writes that state in place. |
| `MobileParties` | property | Instance entry point `MBReadOnlyList<MobileParty>` property. Read it for current state; a declared setter writes that state in place. |
| `PartiesWithoutPartyComponent` | property | Instance entry point `MBReadOnlyList<MobileParty>` property. Read it for current state; a declared setter writes that state in place. |
| `PatrolParties` | property | Instance entry point `MBReadOnlyList<MobileParty>` property. Read it for current state; a declared setter writes that state in place. |
| `VillagerParties` | property | Instance entry point `MBReadOnlyList<MobileParty>` property. Read it for current state; a declared setter writes that state in place. |
| `CampaignObjectManager` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public CampaignObjectManager()`.

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var campaignObjectManager = new CampaignObjectManager();
// Read the live state through campaignObjectManager.MobileParties.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.CampaignSystem/CampaignObjectManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [MBGUID](../../campaign-ext/MBGUID/) — `TaleWorlds.ObjectSystem`.

Section: [api/campaign/](../) — the other types in this bucket.
