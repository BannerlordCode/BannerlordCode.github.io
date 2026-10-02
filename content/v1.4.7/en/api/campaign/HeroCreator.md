---
title: "HeroCreator"
description: "HeroCreator — class in TaleWorlds.CampaignSystem. 6 public members (6 static)."
---

<!-- v147-skeleton -->
# HeroCreator

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class HeroCreator`  
**Source:** `TaleWorlds.CampaignSystem/HeroCreator.cs`

## Overview

`HeroCreator` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Static entry points** (6): `CreateNotable`, `CreateSpecialHero`, `CreateChild`, `CreateRelativeNotableHero`, `CreateBasicHero`, `DeliverOffSpring`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateBasicHero` | method (static) | Static entry point. Takes 4 arguments: `string stringId`, `CharacterObject character`, `out Hero hero`, `bool isAlive`. Returns `bool`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateChild` | method (static) | Static entry point. Takes 4 arguments: `CharacterObject template`, `Settlement bornSettlement`, `Clan clan`, `int age`. Returns `Hero`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateNotable` | method (static) | Static entry point. Takes 2 arguments: `Occupation occupation`, `Settlement settlement`. Returns `Hero`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateRelativeNotableHero` | method (static) | Static entry point. Takes 1 argument: `Hero relative`. Returns `Hero`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateSpecialHero` | method (static) | Static entry point. Takes 5 arguments: `CharacterObject template`, `Settlement bornSettlement`, `Clan faction`, `Clan supporterOfClan`, …. Returns `Hero`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `DeliverOffSpring` | method (static) | Static entry point. Takes 3 arguments: `Hero mother`, `Hero father`, `bool isOffspringFemale`. Returns `Hero`. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
// HeroCreator exposes no accessor; the engine passes the instance to its callbacks.
HeroCreator.CreateNotable(occupation, settlement);
HeroCreator.CreateSpecialHero(template, bornSettlement, faction, supporterOfClan, age);
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.CampaignSystem/HeroCreator.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CampaignObjectManager](../CampaignObjectManager/) — `TaleWorlds.CampaignSystem`.
- [HeroDeveloper](../HeroDeveloper/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.
- [AgeModel](../../campaign-ext/AgeModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.

Section: [api/campaign/](../) — the other types in this bucket.
